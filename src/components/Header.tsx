"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS_INFO, NAVIGATION_ITEMS, NavigationItem } from "@/constants";

// =============================================================================
// ICON COMPONENTS
// =============================================================================

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 mr-2"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MenuIcon = () => (
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
    className="w-6 h-6"
    aria-hidden="true"
  >
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = () => (
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
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

// =============================================================================
// SUB-COMPONENTS
// =============================================================================

const Logo = () => (
  <div className="flex items-center">
    <h1 className="text-2xl font-bold text-restaurant-red">{BUSINESS_INFO.name}</h1>
  </div>
);

const Navigation = ({
  isMobile = false,
  onClose,
}: {
  isMobile?: boolean;
  onClose?: () => void;
}) => (
  <nav className={isMobile ? "md:hidden" : "hidden md:block"} aria-label="Main navigation">
    <ul
      className={isMobile ? "flex flex-col space-y-4 p-4" : "md:flex md:items-center md:space-x-8"}
    >
      {NAVIGATION_ITEMS.map((item: NavigationItem) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="text-gray-700 hover:text-restaurant-red transition-colors font-medium duration-200"
            onClick={onClose}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const MobileMenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    type="button"
    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-restaurant-red hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-restaurant-red transition-colors"
    aria-expanded={isOpen}
    aria-label="Toggle navigation menu"
    onClick={onClick}
  >
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </button>
);

const PhoneButton = () => (
  <a
    href={BUSINESS_INFO.phoneHref}
    className="inline-flex items-center bg-restaurant-red hover:bg-red-800 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
    aria-label={`Call us at ${BUSINESS_INFO.phone}`}
  >
    <PhoneIcon />
    <span>{BUSINESS_INFO.phone}</span>
  </a>
);
// =============================================================================
// COMPONENT
// =============================================================================

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <Logo />
        <Navigation />

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <PhoneButton />
          </div>
          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <Navigation isMobile onClose={closeMobileMenu} />
          <div className="p-4 border-t border-gray-200">
            <PhoneButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
