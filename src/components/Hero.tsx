"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

// =============================================================================
// TYPES
// =============================================================================

interface CallToActionButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline" | "phone";
  icon?: React.ReactNode;
  external?: boolean;
}

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  showCallToAction?: boolean;
  buttons?: CallToActionButton[];
  height?: string;
  className?: string;
}

// =============================================================================
// CONSTANTS
// =============================================================================

const DEFAULT_BUTTONS: CallToActionButton[] = [
  {
    label: "Explore Menu",
    href: "/menu",
    variant: "primary",
  },
];

const BUTTON_STYLES = {
  primary: "bg-restaurant-orange hover:bg-restaurant-orange/90 text-white",
  secondary: "bg-restaurant-red hover:bg-restaurant-red/90 text-white",
  outline: "border-2 border-white text-white hover:bg-white hover:text-restaurant-red",
  phone: "bg-white hover:bg-gray-100 text-restaurant-red",
};

// =============================================================================
// ANIMATION VARIANTS
// =============================================================================

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

// =============================================================================
// COMPONENT
// =============================================================================

function Hero({
  title = "Authentic Turkish Cuisine",
  subtitle = "Experience the rich flavors and traditional recipes passed down through generations",
  backgroundImage = "/images/hero-bg.jpg",
  showCallToAction = true,
  buttons = DEFAULT_BUTTONS,
  height = "h-screen",
  className = "",
}: HeroProps) {
  return (
    <motion.section
      className={cn("relative overflow-hidden", height, className)}
      style={{ height: "calc(100vh - 4rem)" }} // Subtract header height (4rem = 64px)
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      aria-label="Hero section"
      role="banner"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center z-10">
        {" "}
        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg"
          variants={fadeInUp}
        >
          {title}
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed font-light drop-shadow-md"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
        {/* Call to Action Button - Single Button */}
        {showCallToAction && buttons.length > 0 && (
          <motion.div
            className="flex justify-center"
            variants={fadeInUp}
            role="group"
            aria-label="Hero call to action button"
          >
            {buttons.slice(0, 1).map((button, index) => (
              <motion.div
                key={`cta-${button.href}-${index}`}
                variants={buttonVariants}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                {button.external ? (
                  <a
                    href={button.href}
                    className={cn(
                      "font-semibold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white/50",
                      BUTTON_STYLES[button.variant]
                    )}
                    aria-label={button.label}
                    rel="noopener noreferrer"
                  >
                    {button.icon}
                    {button.label}
                  </a>
                ) : (
                  <Link
                    href={button.href}
                    className={cn(
                      "font-semibold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white/50",
                      BUTTON_STYLES[button.variant]
                    )}
                    aria-label={button.label}
                  >
                    {button.icon}
                    {button.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default Hero;
export type { HeroProps, CallToActionButton };
