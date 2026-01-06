import React, { useEffect, useState } from "react";

// Dummy data for subtypes
const dummySubtypesData = {
  subtypes: [
    {
      id: 1,
      product_name: "bulk-sms",
      title: "SEO Services",
      subtitle: "Search Engine Optimization",
      description:
        "Comprehensive SEO services to improve your website's visibility and ranking on search engines. We use white-hat techniques to drive organic traffic and increase conversions.",
      image: "/images/seo-services.jpg",
    },
    {
      id: 1,
      product_name: "bulk-sms",
      title: "SEO Services",
      subtitle: "Search Engine Optimization",
      description:
        "Comprehensive SEO services to improve your website's visibility and ranking on search engines. We use white-hat techniques to drive organic traffic and increase conversions.",
      image: "/images/seo-services.jpg",
    },
    {
      id: 1,
      product_name: "bulk-sms",
      title: "SEO Services",
      subtitle: "Search Engine Optimization",
      description:
        "Comprehensive SEO services to improve your website's visibility and ranking on search engines. We use white-hat techniques to drive organic traffic and increase conversions.",
      image: "/images/seo-services.jpg",
    },
    {
      id: 2,
      product_name: "digital-marketing",
      title: "Social Media Marketing",
      subtitle: "Engage Your Audience",
      description:
        "Strategic social media campaigns across all major platforms to build brand awareness, engage with your audience, and drive meaningful interactions.",
      image: "/images/social-media.jpg",
    },
    {
      id: 3,
      product_name: "digital-marketing",
      title: "PPC Advertising",
      subtitle: "Pay-Per-Click Management",
      description:
        "Expert management of Google Ads and social media advertising campaigns to generate immediate traffic and leads with measurable ROI.",
      image: "/images/ppc-advertising.jpg",
    },
    {
      id: 4,
      product_name: "digital-marketing",
      title: "Content Marketing",
      subtitle: "Strategic Content Creation",
      description:
        "Create valuable, relevant content that attracts and retains your target audience, establishing your brand as an industry authority.",
      image: "/images/content-marketing.jpg",
    },
    {
      id: 5,
      product_name: "digital-marketing",
      title: "Email Marketing",
      subtitle: "Direct Customer Engagement",
      description:
        "Personalized email campaigns that nurture leads, retain customers, and drive conversions through targeted messaging and automation.",
      image: "/images/email-marketing.jpg",
    },
    {
      id: 6,
      product_name: "digital-marketing",
      title: "Analytics & Reporting",
      subtitle: "Data-Driven Insights",
      description:
        "Comprehensive analytics and reporting to measure campaign performance, track ROI, and make informed marketing decisions.",
      image: "/images/analytics.jpg",
    },
    {
      id: 7,
      product_name: "graphic-design",
      title: "Logo Design",
      subtitle: "Brand Identity Creation",
      description:
        "Professional logo design services that capture your brand's essence and create a memorable visual identity for your business.",
      image: "/images/logo-design.jpg",
    },
    {
      id: 8,
      product_name: "graphic-design",
      title: "Branding Package",
      subtitle: "Complete Brand Identity",
      description:
        "Comprehensive branding packages including logo, color palette, typography, and brand guidelines for consistent visual identity.",
      image: "/images/branding-package.jpg",
    },
    {
      id: 9,
      product_name: "graphic-design",
      title: "Print Design",
      subtitle: "Physical Marketing Materials",
      description:
        "Design services for brochures, flyers, business cards, and other print materials that make a lasting impression.",
      image: "/images/print-design.jpg",
    },
    {
      id: 10,
      product_name: "design-develop",
      title: "Website Development",
      subtitle: "Custom Web Solutions",
      description:
        "Custom website development with responsive design, fast loading times, and optimal user experience across all devices.",
      image: "/images/website-development.jpg",
    },
    {
      id: 11,
      product_name: "design-develop",
      title: "E-Commerce Solutions",
      subtitle: "Online Store Development",
      description:
        "Complete e-commerce solutions with secure payment gateways, inventory management, and seamless shopping experiences.",
      image: "/images/ecommerce-solutions.jpg",
    },
    {
      id: 12,
      product_name: "design-develop",
      title: "Mobile App Development",
      subtitle: "Native & Cross-Platform Apps",
      description:
        "Development of mobile applications for iOS and Android platforms with intuitive interfaces and robust functionality.",
      image: "/images/mobile-app-development.jpg",
    },
  ],
};

// Mock fetch function
const fetchSubtypes = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (id) {
          const filterData = dummySubtypesData.subtypes.filter(
            (item) => item.product_name === id
          );
          resolve(filterData);
        } else {
          resolve([]);
        }
      } catch (error) {
        reject(new Error(error));
      }
    }, 400);
  });
};

const Digital = ({ subpage }) => {
  const [subtypeData, setSubtypeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSubtypeData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchSubtypes(subpage?.details);
        setSubtypeData(data);
      } catch (err) {
        setError(err.message);
        setSubtypeData([]);
      } finally {
        setLoading(false);
      }
    };

    if (subpage?.details) {
      getSubtypeData();
    } else {
      setLoading(false);
    }
  }, [subpage]);

  // Show nothing if no data or loading/error for specific cases
  if (loading) {
    return (
      <section>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16 md:py-20">
          <div className="flex flex-col items-center text-center">
            <div className="animate-pulse h-10 bg-gray-300 rounded w-64 mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-300 rounded w-96 mb-8"></div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="grid gap-6 rounded-md p-8 md:p-10 bg-sky-100 shadow-md"
              >
                <div className="animate-pulse w-24 h-24 bg-gray-300 rounded-full"></div>
                <div className="animate-pulse h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="animate-pulse h-4 bg-gray-300 rounded w-full"></div>
                  <div className="animate-pulse h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const hasData = Array.isArray(subtypeData) && subtypeData.length !== 0;

  if (!hasData) {
    return null;
  }

  if (error) {
    return (
      <section>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16 md:py-20 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Failed to load services: {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ display: hasData ? "block" : "none" }}>
      <div
        className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16 md:py-20"
        style={{ display: hasData ? "block" : "none" }}
      >
        {/* Title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-5xl capitalize">
            {subpage.details
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Services That We Provide
          </h2>
          <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
            We are one of the best{" "}
            {subpage.details
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Agency and can take care of all your{" "}
            {subpage.details
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Needs
          </p>
        </div>

        {/* Features Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {subtypeData.map((subtype) => (
            <DigitalCard
              key={subtype.id}
              title={subtype.title}
              subtitle={subtype.subtitle}
              image={subtype.image}
              description={subtype.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export function DigitalCard({ title, subtitle, image, description }) {
  // Generate placeholder image based on title
  const imageSrc = `https://picsum.photos/100/100?random=${title.length}&grayscale`;

  return (
    <div className="grid gap-6 rounded-md p-8 md:p-10 bg-sky-100 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageSrc}
        width={100}
        height={100}
        alt={title}
        className="rounded-full object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mb-2">{subtitle}</p>}
      </div>
      <p className="text-sm text-gray-500 text-justify leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default Digital;
