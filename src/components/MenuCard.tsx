"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MenuCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  alt: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ id, name, price, image, category, alt }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden relative group cursor-pointer bg-gray-200">
        {!imageError ? (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-restaurant-red"></div>
              </div>
            )}
            <Image
              src={image}
              alt={alt}
              width={400}
              height={200}
              className="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 z-1"
              onError={handleImageError}
              onLoad={handleImageLoad}
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <div className="text-center text-gray-500">
              <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xs">Image not available</p>
            </div>
          </div>
        )}
        <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
          {category}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
          <span className="opacity-0 group-hover:opacity-100 bg-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-gallery-horizontal w-5 h-5 text-restaurant-red"
            >
              <path d="M2 3v18"></path>
              <rect width="12" height="18" x="6" y="3" rx="2"></rect>
              <path d="M22 3v18"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="p-6">
        {" "}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-restaurant-dark">{name}</h3>
          <span className="bg-restaurant-orange text-white px-2 py-1 rounded-md text-sm font-semibold">
            {price} €
          </span>
        </div>
        <div className="mt-4 text-xs text-gray-500">#{id}</div>
      </div>
    </div>
  );
};

export default MenuCard;
