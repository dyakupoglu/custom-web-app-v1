"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Types for better type safety
interface NumberFormat {
  value: number;
  suffix: string;
  prefix: string;
}

interface AnimatedCounterProps {
  value: number;
  format: NumberFormat;
  className?: string;
  startAnimation?: boolean;
  speed?: "slow" | "normal" | "fast";
  stiffness?: number;
  damping?: number;
}

interface StatCounterProps {
  stat: {
    id: string;
    number: string;
    label: string;
    icon: string;
    description: string;
  };
  // Simple animation controls
  speed?: "slow" | "normal" | "fast";
  delay?: number;
  // Advanced controls (optional)
  stiffness?: number;
  damping?: number;
  cardDuration?: number;
}

// Utility functions for parsing and formatting display values
const parseDisplayValue = (displayString: string): NumberFormat => {
  const prefixMatch = displayString.match(/^([^\d]*)/);
  const prefix = prefixMatch ? prefixMatch[1] : "";

  const withoutPrefix = displayString.replace(prefix, "");
  const numericMatch = withoutPrefix.match(/^([\d.,]+)/);

  if (!numericMatch) {
    return { value: 0, suffix: displayString, prefix };
  }

  const numericPart = numericMatch[1];
  const remainingSuffix = withoutPrefix.replace(numericPart, "");

  const baseValue = parseFloat(numericPart.replace(/,/g, ""));
  let animationValue = baseValue;

  if (remainingSuffix.includes("K")) {
    animationValue *= 1000;
  } else if (remainingSuffix.includes("M")) {
    animationValue *= 1000000;
  } else if (remainingSuffix.includes("B")) {
    animationValue *= 1000000000;
  } else if (remainingSuffix.includes("T")) {
    animationValue *= 1000000000000;
  }

  return {
    value: Math.round(animationValue),
    suffix: remainingSuffix,
    prefix,
  };
};

const formatDisplayValue = (currentValue: number, originalFormat: NumberFormat): string => {
  const { suffix, prefix } = originalFormat;

  if (suffix.includes("%")) {
    return `${prefix}${Math.round(currentValue)}%`;
  }

  if (suffix.includes("K")) {
    const kValue = currentValue / 1000;
    const baseValue = Math.round(kValue);
    const otherSuffix = suffix.replace("K", "");
    return `${prefix}${baseValue}K${otherSuffix}`;
  }

  if (suffix.includes("M")) {
    const mValue = currentValue / 1000000;
    const baseValue = mValue % 1 === 0 ? Math.round(mValue) : parseFloat(mValue.toFixed(1));
    const otherSuffix = suffix.replace("M", "");
    return `${prefix}${baseValue}M${otherSuffix}`;
  }

  if (suffix.includes("B")) {
    const bValue = currentValue / 1000000000;
    const baseValue = bValue % 1 === 0 ? Math.round(bValue) : parseFloat(bValue.toFixed(1));
    const otherSuffix = suffix.replace("B", "");
    return `${prefix}${baseValue}B${otherSuffix}`;
  }

  if (suffix.includes("T")) {
    const tValue = currentValue / 1000000000000;
    const baseValue = tValue % 1 === 0 ? Math.round(tValue) : parseFloat(tValue.toFixed(1));
    const otherSuffix = suffix.replace("T", "");
    return `${prefix}${baseValue}T${otherSuffix}`;
  }

  return `${prefix}${Math.round(currentValue).toLocaleString()}${suffix}`;
};

// Enhanced AnimatedCounter component with simple speed controls
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  format,
  className = "",
  startAnimation = false,
  speed = "normal",
  stiffness,
  damping,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);

  // Speed presets
  const speedPresets = {
    slow: { stiffness: 30, damping: 25 },
    normal: { stiffness: 50, damping: 20 },
    fast: { stiffness: 100, damping: 15 },
  };

  const springConfig = {
    stiffness: stiffness ?? speedPresets[speed].stiffness,
    damping: damping ?? speedPresets[speed].damping,
    mass: 1,
  };

  const springValue = useSpring(motionValue, springConfig);

  useEffect(() => {
    if (!startAnimation) return;

    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });

    motionValue.set(value);

    return () => unsubscribe();
  }, [motionValue, springValue, value, startAnimation]);

  return (
    <span className={className} suppressHydrationWarning>
      {formatDisplayValue(displayValue, format)}
    </span>
  );
};

// Simplified StatCounter component
const StatCounter: React.FC<StatCounterProps> = ({
  stat,
  speed = "normal",
  delay = 0,
  stiffness,
  damping,
  cardDuration = 0.6,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const numberFormat = parseDisplayValue(stat.number);

  return (
    <div ref={ref} className="text-center group">
      <motion.div
        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: cardDuration,
          ease: "easeOut",
        }}
        role="article"
        aria-labelledby={`stat-${stat.id}-label`}
        aria-describedby={`stat-${stat.id}-desc`}
      >
        <motion.div
          className="text-3xl mb-2"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{
            duration: 0.5,
            delay: delay,
            type: "spring",
            stiffness: 200,
          }}
          aria-hidden="true"
        >
          {stat.icon}
        </motion.div>

        <div className="text-3xl font-bold text-restaurant-red mb-1">
          <AnimatedCounter
            value={numberFormat.value}
            format={numberFormat}
            startAnimation={isInView}
            className="tabular-nums"
            speed={speed}
            stiffness={stiffness}
            damping={damping}
          />
        </div>

        <motion.div
          id={`stat-${stat.id}-label`}
          className="font-semibold text-gray-900 mb-1"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + 0.3,
          }}
        >
          {stat.label}
        </motion.div>

        <motion.div
          id={`stat-${stat.id}-desc`}
          className="text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + 0.4,
          }}
        >
          {stat.description}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StatCounter;
export { AnimatedCounter, type StatCounterProps, type AnimatedCounterProps };
