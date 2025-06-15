import React from "react";
import { Metadata } from "next";

// Icon components for better performance and reusability
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-restaurant-red"
    aria-hidden="true"
  >
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-restaurant-red"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-restaurant-red"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// Contact data for better maintainability
const contactInfo = {
  address: {
    street: "August-Bebel-Str. 16",
    city: "67227 Frankenthal",
    fullAddress: "August-Bebel-Str. 16, 67227 Frankenthal",
  },
  phone: {
    number: "062331709677",
    display: "06233 - 170 96 77",
  },
  hours: {
    daily: "8:00–22:00",
    closed: "Closed on Wednesdays",
  },
  features: [
    { label: "100% Halal", color: "bg-green-700" },
    { label: "Freshly prepared daily", color: "bg-restaurant-orange" },
  ],
};

export const metadata: Metadata = {
  title: "Contact Us - Turkish Restaurant Frankenthal",
  description:
    "Get in touch with our Turkish restaurant in Frankenthal. Find our location, opening hours, and contact information. Call us for orders and reservations.",
  keywords:
    "Turkish restaurant contact, Frankenthal restaurant, halal food contact, Turkish cuisine location",
};

const ContactPage = () => {
  return (
    <div className="flex-grow py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-restaurant-dark mb-2">Contact Us</h1>
          <p className="text-gray-600 text-lg">Get in touch with us for orders and inquiries</p>
        </header>

        <div className="max-w-6xl mx-auto">
          {/* Google Maps Section with improved loading */}
          <section className="mb-12" aria-labelledby="location-heading">
            <h2
              id="location-heading"
              className="text-2xl font-bold text-restaurant-dark mb-6 text-center"
            >
              Our Location
            </h2>
            <div className="h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.1498346888043!2d8.350863115850889!3d49.53546197936076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc701df3603f%3A0x58e01c77f3320523!2sAugust-Bebel-Str.%2016%2C%2067227%20Frankenthal%20(Pfalz)%2C%20Germany!5e0!3m2!1sen!2sus!4v1621506871644!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Turkish Restaurant Location in Frankenthal"
                className="border-0"
              />
            </div>
          </section>
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Details Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-restaurant-dark mb-8 text-center">
                  Contact Details
                </h2>

                {/* Address */}
                <div className="flex items-start mb-8 group">
                  <div className="mr-4 mt-1 p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                    <LocationIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <address className="text-gray-700 not-italic leading-relaxed">
                      {contactInfo.address.street}
                      <br />
                      {contactInfo.address.city}
                    </address>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        contactInfo.address.fullAddress
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-restaurant-red hover:text-red-700 text-sm font-medium mt-2 inline-block transition-colors"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="mr-4 mt-1 p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone.number}`}
                      className="text-restaurant-red hover:text-red-700 font-semibold text-lg transition-colors"
                    >
                      {contactInfo.phone.display}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Orders only by telephone</p>
                    <p className="text-gray-500 text-xs mt-1">Click to call directly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-restaurant-dark mb-8 text-center">
                  Opening Hours
                </h2>

                <div className="flex items-start group">
                  <div className="mr-4 mt-1 p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                    <ClockIcon />
                  </div>
                  <div className="w-full">
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Daily Hours</h3>
                      <p className="text-lg font-medium text-gray-800">{contactInfo.hours.daily}</p>
                    </div>

                    <div className="py-3 px-4 bg-red-50 rounded-lg text-center mb-6">
                      <p className="text-restaurant-red font-bold">{contactInfo.hours.closed}</p>
                    </div>

                    {/* Features */}
                    {/* <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Our Promise</h4>
                      {contactInfo.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div
                            className={`${feature.color} h-3 w-3 rounded-full mr-3 flex-shrink-0`}
                          />
                          <p className="text-gray-700 text-sm">{feature.label}</p>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Information */}
          <section className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-restaurant-dark mb-6 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">🥘</div>
                <h3 className="font-bold text-gray-900 mb-2">Authentic Turkish Cuisine</h3>
                <p className="text-gray-600">Traditional recipes passed down through generations</p>
              </div>
              <div>
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-bold text-gray-900 mb-2">100% Halal Certified</h3>
                <p className="text-gray-600">All our ingredients meet halal standards</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="font-bold text-gray-900 mb-2">Fresh Daily Preparation</h3>
                <p className="text-gray-600">Everything prepared fresh every day</p>
              </div>
            </div>
          </section>{" "}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
