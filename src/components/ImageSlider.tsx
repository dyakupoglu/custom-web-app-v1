"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideData {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface ImageSliderProps {
  slides: SlideData[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  spaceBetween?: number;
  slidesPerView?: number | "auto";
  breakpoints?: {
    [key: number]: {
      slidesPerView: number | "auto";
      spaceBetween?: number;
    };
  };
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  autoplay = true,
  autoplayDelay = 4000,
  showNavigation = true,
  showPagination = false,
  spaceBetween = 16,
  slidesPerView = 1,
  breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
  className = "",
}) => {
  const swiperModules = [A11y];

  if (showNavigation) swiperModules.push(Navigation);
  if (showPagination) swiperModules.push(Pagination);
  if (autoplay) swiperModules.push(Autoplay);

  return (
    <div className={`image-slider ${className}`}>
      <Swiper
        modules={swiperModules}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={showNavigation}
        pagination={showPagination ? { clickable: true } : false}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        breakpoints={breakpoints}
        loop={true}
        grabCursor={true}
        className="w-full"
        role="region"
        aria-roledescription="carousel"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            className="relative"
          >
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg cursor-pointer group">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
              />
              {slide.caption && (
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
                  {slide.caption}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for navigation buttons */}
      <style jsx global>{`
        .image-slider .swiper-button-next,
        .image-slider .swiper-button-prev {
          width: 32px;
          height: 32px;
          margin-top: -16px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #d1d5db;
          border-radius: 50%;
          color: #374151;
          font-size: 16px;
          font-weight: bold;
          transition: all 0.2s ease;
        }

        .image-slider .swiper-button-next:hover,
        .image-slider .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 1);
          color: #111827;
          transform: scale(1.1);
        }

        .image-slider .swiper-button-next::after,
        .image-slider .swiper-button-prev::after {
          font-size: 14px;
          font-weight: 600;
        }

        .image-slider .swiper-button-prev {
          left: 8px;
        }

        .image-slider .swiper-button-next {
          right: 8px;
        }

        @media (min-width: 1024px) {
          .image-slider .swiper-button-prev {
            left: 16px;
          }

          .image-slider .swiper-button-next {
            right: 16px;
          }
        }

        .image-slider .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }

        .image-slider .swiper-pagination-bullet-active {
          background: #ef4444;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
