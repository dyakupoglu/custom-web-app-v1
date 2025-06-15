import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu - Authentic Turkish Restaurant",
  description:
    "Discover our authentic Turkish menu featuring fresh pide, lahmacun, traditional soups, and stone oven pizzas. All dishes prepared daily with halal ingredients and traditional recipes.",
  keywords: [
    "Turkish menu",
    "Turkish restaurant",
    "pide",
    "lahmacun",
    "Turkish pizza",
    "halal food",
    "Turkish cuisine",
    "authentic Turkish food",
    "Turkish bread",
    "traditional recipes",
    "stone oven pizza",
    "Turkish soup",
    "fresh ingredients",
  ],
  authors: [{ name: "Turkish Restaurant" }],
  openGraph: {
    title: "Our Menu - Authentic Turkish Restaurant",
    description:
      "Discover our authentic Turkish menu featuring fresh pide, lahmacun, traditional soups, and stone oven pizzas. All dishes prepared daily with halal ingredients.",
    type: "website",
    locale: "en_US",
    siteName: "Turkish Restaurant",
    images: [
      {
        url: "/menu-images/turkish-menu-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Authentic Turkish Menu - Fresh Pide and Traditional Dishes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Menu - Authentic Turkish Restaurant",
    description:
      "Discover our authentic Turkish menu featuring fresh pide, lahmacun, traditional soups, and stone oven pizzas.",
    images: ["/menu-images/turkish-menu-hero.jpg"],
  },
  alternates: {
    canonical: "/menu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
