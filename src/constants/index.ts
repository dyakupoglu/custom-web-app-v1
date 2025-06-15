// =============================================================================
// BUSINESS INFORMATION
// =============================================================================

export const BUSINESS_INFO = {
  name: "Tadım Taş Fırın",
  tagline: "Traditional Taste with Future",
  address: "August-Bebel-Str. 16, 67227 Frankenthal",
  phone: "06233 - 170 96 77",
  phoneHref: "tel:062331709677",
  hours: {
    regular: "Daily 08:00–22:00",
    closed: "Closed on Wednesdays",
  },
} as const;

// =============================================================================
// NAVIGATION
// =============================================================================

export interface NavigationItem {
  name: string;
  href: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
];
