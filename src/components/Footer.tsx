import Link from "next/link";
import { BUSINESS_INFO } from "@/constants";

// =============================================================================
// TYPES
// =============================================================================

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
  iconName: "facebook" | "instagram" | "twitter" | "youtube" | "linkedin";
}

interface ContactInfo {
  type: "address" | "phone" | "email" | "hours";
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
  href?: string;
}

interface QualityBadge {
  text: string;
  bgColor: string;
}

// =============================================================================
// ICON COMPONENTS
// =============================================================================

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.928a11.055 11.055 0 005.911 5.911l1.541-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      clipRule="evenodd"
    />
  </svg>
);

const iconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
  linkedin: LinkedInIcon,
};

// =============================================================================
// CONSTANTS
// =============================================================================

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Menu",
    links: [
      { name: "Our Specialties", href: "/menu" },
      { name: "Traditional Pide", href: "/menu#pide" },
      { name: "Stone Oven Pizzas", href: "/menu#pizzas" },
      { name: "Turkish Lahmacun", href: "/menu#lahmacun" },
      { name: "Soup & Appetizers", href: "/menu#soups" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/contact" },
      { name: "Our Story", href: "/contact" },
      { name: "Careers", href: "/contact" },
      { name: "Reviews", href: "/contact" },
      { name: "Gift Cards", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Dine In", href: "/menu" },
      { name: "Takeaway", href: "/menu" },
      { name: "Catering", href: "/menu" },
      { name: "Private Events", href: "/menu" },
      { name: "Group Bookings", href: "/menu" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/contact" },
      { name: "Order Status", href: "/contact" },
      { name: "Feedback", href: "/contact" },
      { name: "Accessibility", href: "/contact" },
    ],
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  { name: "Facebook", href: "https://facebook.com/tadimtasfirin", iconName: "facebook" },
  { name: "Instagram", href: "https://instagram.com/tadimtasfirin", iconName: "instagram" },
  { name: "Twitter", href: "https://twitter.com/tadimtasfirin", iconName: "twitter" },
  { name: "YouTube", href: "https://youtube.com/@tadimtasfirin", iconName: "youtube" },
];

const CONTACT_INFO: ContactInfo[] = [
  {
    type: "address",
    icon: <LocationIcon />,
    label: "Visit Us",
    value: BUSINESS_INFO.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`,
  },
  {
    type: "phone",
    icon: <PhoneIcon />,
    label: "Call Us",
    value: BUSINESS_INFO.phone,
    href: BUSINESS_INFO.phoneHref,
  },
  {
    type: "email",
    icon: <EmailIcon />,
    label: "Email Us",
    value: "info@tadimtasfirin.de",
    href: "mailto:info@tadimtasfirin.de",
  },
  {
    type: "hours",
    icon: <ClockIcon />,
    label: "Opening Hours",
    value: (
      <div>
        <div>{BUSINESS_INFO.hours.regular}</div>
        <div className="text-red-400 text-sm">{BUSINESS_INFO.hours.closed}</div>
      </div>
    ),
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Accessibility", href: "/accessibility" },
];

const QUALITY_BADGES: QualityBadge[] = [
  { text: "100% Halal Certified", bgColor: "bg-green-600" },
  { text: "Fresh Daily", bgColor: "bg-blue-600" },
  { text: "Traditional Recipes", bgColor: "bg-amber-600" },
];

// =============================================================================
// SUB-COMPONENTS
// =============================================================================

const QualityBadges = () => (
  <div className="flex flex-wrap gap-2 mb-6">
    {QUALITY_BADGES.map((badge) => (
      <div
        key={badge.text}
        className={`${badge.bgColor} text-white text-xs px-3 py-1 rounded-full font-medium`}
      >
        {badge.text}
      </div>
    ))}
  </div>
);

const FooterSection = ({ section }: { section: FooterSection }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
    <nav aria-label={`${section.title} navigation`}>
      <ul className="space-y-3">
        {section.links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const ContactSection = () => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
    <div className="space-y-4">
      {CONTACT_INFO.map((info, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="text-red-400 mt-1 flex-shrink-0">{info.icon}</div>
          <div>
            <div className="text-sm font-medium text-gray-300 mb-1">{info.label}</div>
            {info.href ? (
              <a
                href={info.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target={info.type === "email" || info.type === "address" ? "_blank" : undefined}
                rel={info.type === "address" ? "noopener noreferrer" : undefined}
              >
                {info.value}
              </a>
            ) : (
              <div className="text-gray-400">{info.value}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="mt-8">
    <h4 className="text-sm font-semibold mb-4 text-white">Follow Us</h4>
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map((social) => {
        const IconComponent = iconMap[social.iconName];
        return (
          <a
            key={social.name}
            href={social.href}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-700"
            aria-label={`Visit our ${social.name} page`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  </div>
);

const LegalLinks = () => (
  <nav className="mt-4" aria-label="Legal pages navigation">
    <div className="flex flex-wrap justify-center gap-4 text-sm">
      {LEGAL_LINKS.map((link, index) => (
        <span key={link.name} className="flex items-center">
          <Link
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            {link.name}
          </Link>
          {index < LEGAL_LINKS.length - 1 && (
            <span className="ml-4 text-gray-600" aria-hidden="true">
              •
            </span>
          )}
        </span>
      ))}
    </div>
  </nav>
);

// =============================================================================
// MAIN COMPONENT
// =============================================================================

function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{BUSINESS_INFO.name}</h2>
              <p className="text-gray-400 mb-4">{BUSINESS_INFO.tagline}</p>
              <QualityBadges />
            </div>
            <ContactSection />
            <SocialLinks />
          </div>

          {/* Footer Sections - Each takes 1 column */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <FooterSection section={section} />
            </div>
          ))}
        </div>{" "}
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center space-y-4">
            <div className="text-sm text-gray-400">
              <p>
                © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
              </p>
              <p className="mt-1">Authentic Turkish cuisine in the heart of Frankenthal</p>
            </div>
            <LegalLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
