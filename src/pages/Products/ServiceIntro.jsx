import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Dummy data
const productsData = {
  products: [
    {
      id: 1,
      product_name: "bulk-sms",
      title: "Bulk Sms",
      subtitle: "Mass Communication Made Easy",
      description:
        "Our Bulk SMS service allows you to send thousands of messages instantly with high delivery rates. Perfect for marketing campaigns, notifications, alerts, and customer engagement. Features include real-time analytics, scheduled messaging, and easy API integration.",
      image: "/images/bulk-sms.jpg",
    },
    {
      id: 2,
      product_name: "bulk-voice",
      title: "Bulk Voice",
      subtitle: "Voice Broadcasting at Scale",
      description:
        "Reach your audience with personalized voice messages. Our Bulk Voice service supports multiple languages, scheduling, and detailed reporting. Ideal for announcements, reminders, and marketing campaigns with a personal touch.",
      image: "/images/bulk-voice.jpg",
    },
    {
      id: 3,
      product_name: "whatsapp-service",
      title: "Whatsapp Service",
      subtitle: "Official WhatsApp Business API",
      description:
        "Integrate WhatsApp Business API for seamless customer communication. Send notifications, alerts, and marketing messages directly through WhatsApp. High engagement rates with rich media support and template messaging.",
      image: "/images/whatsapp-service.jpg",
    },
    {
      id: 4,
      product_name: "digital-marketing",
      title: "Digita Marketing",
      subtitle: "Complete Digital Marketing Solutions",
      description:
        "Comprehensive digital marketing services including SEO, SEM, social media marketing, and content strategy. Drive traffic, generate leads, and increase conversions with our data-driven approach.",
      image: "/images/digital-marketing.jpg",
    },
    {
      id: 5,
      product_name: "whats-chatbot",
      title: "Whatsapp Chatbot",
      subtitle: "AI-Powered WhatsApp Automation",
      description:
        "Automate customer interactions with our intelligent WhatsApp Chatbot. Handle queries, provide support, and engage customers 24/7 with natural language processing and seamless integration.",
      image: "/images/whatsapp-chatbot.jpg",
    },
    {
      id: 6,
      product_name: "digital-auto",
      title: "Digital Automation",
      subtitle: "Streamline Your Business Processes",
      description:
        "Automate repetitive tasks and workflows with our digital automation solutions. From lead management to customer support, increase efficiency and reduce manual errors.",
      image: "/images/digital-automation.jpg",
    },
    {
      id: 7,
      product_name: "design-develop",
      title: "Design Development",
      subtitle: "Web and Application Development",
      description:
        "Custom web and mobile application development services. From concept to deployment, we create responsive, scalable, and user-friendly solutions tailored to your business needs.",
      image: "/images/design-development.jpg",
    },
    {
      id: 8,
      product_name: "graphic-design",
      title: "Graphic Design",
      subtitle: "Creative Visual Solutions",
      description:
        "Professional graphic design services including branding, logo design, marketing materials, and social media graphics. Create compelling visual identities that resonate with your audience.",
      image: "/images/graphic-design.jpg",
    },
    {
      id: 9,
      product_name: "alert-system",
      title: "Alert System",
      subtitle: "Real-time Notification Platform",
      description:
        "Comprehensive alert system for emergency notifications, system alerts, and important updates. Multi-channel delivery including SMS, voice, email, and push notifications.",
      image: "/images/alert-system.jpg",
    },
    {
      id: 10,
      product_name: "ivr-system",
      title: "Ivr System",
      subtitle: "Intelligent Voice Response Solutions",
      description:
        "Advanced IVR system to automate customer interactions, reduce wait times, and improve customer satisfaction. Features include natural language processing, CRM integration, and detailed analytics.",
      image: "/images/ivr-system.jpg",
    },
    {
      id: 11,
      product_name: "bulk-email",
      title: "Bulk Email",
      subtitle: "Email Marketing Platform",
      description:
        "Send bulk email campaigns with high deliverability rates. Features include email templates, audience segmentation, A/B testing, and comprehensive analytics for your email marketing success.",
      image: "/images/bulk-email.jpg",
    },
    {
      id: 12,
      product_name: "outdoor-marketing",
      title: "Outdoor Marketing",
      subtitle: "Traditional Marketing Solutions",
      description:
        "Complete outdoor marketing solutions including hoardings, banners, vehicle branding, and event marketing. Reach your target audience through traditional yet effective marketing channels.",
      image: "/images/outdoor-marketing.jpg",
    },
  ],
};

// Mock fetch function
const fetchIntro = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (id) {
          const filterID = productsData.products.filter(
            (item) => item.product_name === id
          );

          if (filterID.length > 0) {
            resolve({
              id: filterID[0].id,
              title: filterID[0].title,
              subtitle: filterID[0].subtitle,
              description: filterID[0].description,
              image: filterID[0].image,
            });
          } else {
            reject(new Error("Product not found"));
          }
        } else {
          reject(new Error("No product ID provided"));
        }
      } catch (error) {
        reject(error);
      }
    }, 300);
  });
};

const ServiceIntro = ({ subpage }) => {
  const [introduction, setIntroduction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getIntroData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchIntro(subpage?.details);
        setIntroduction(data);
      } catch (err) {
        setError(err.message);
        setIntroduction(null);
      } finally {
        setLoading(false);
      }
    };

    if (subpage?.details) {
      getIntroData();
    } else {
      setLoading(false);
    }
  }, [subpage]);

  if (loading) {
    return (
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10 flex items-center">
        <div className="card bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100 shadow-xl flex flex-col sm:flex-row items-center ser-intro px-5 w-full">
          <div className="w-full sm:w-2/5">
            <div className="animate-pulse w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-full sm:w-3/5 p-5">
            <div className="animate-pulse h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="animate-pulse h-6 bg-gray-300 rounded w-1/2 mb-3"></div>
            <div className="space-y-2 mb-4">
              <div className="animate-pulse h-4 bg-gray-300 rounded w-full"></div>
              <div className="animate-pulse h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="animate-pulse h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
            <div className="flex flex-row mt-5 flex-wrap gap-2">
              <div className="animate-pulse h-10 bg-gray-300 rounded w-40 mr-2"></div>
              <div className="animate-pulse h-10 bg-gray-300 rounded w-36"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !introduction) {
    if (!subpage?.details) {
      return null;
    }
    return (
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Product not found: {subpage?.details}
        </div>
      </div>
    );
  }

  const formatTitle = (title) => {
    if (title === "Ivr System") return "IVR System";
    if (title === "Bulk Sms") return "Bulk SMS";
    if (title === "Digita Marketing") return "Digital Marketing";
    if (title === "Whatsapp Chatbot") return "WhatsApp Chatbot";
    return title;
  };

  // Generate placeholder image based on product
  const imageSrc = `https://picsum.photos/500/300?random=${introduction.id}&grayscale`;

  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10 flex items-center">
      <div className="card bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100 shadow-xl flex flex-col sm:flex-row items-center ser-intro px-5 w-full">
        <div className="w-full sm:w-2/5">
          <img
            src={imageSrc}
            width={500}
            height={100}
            alt={"service-intro"}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <div className="w-full sm:w-3/5 p-5">
          <h2 className="text-4xl font-bold capitalize">
            {formatTitle(introduction.title)}
          </h2>
          <h2 className="text-2xl my-3 font-semibold">
            {introduction.subtitle}
          </h2>
          <p className="text-sm text-justify antialiased pe-5">
            {introduction.description}
          </p>
          <div className="my-3 sm:my-5 flex flex-row flex-wrap gap-2">
            <Link
              to="/schedule-a-demo"
              className="btn rounded-full border-2 border-sky-500 bg-white text-sky-500 px-5 sm:px-10 me-2 sm:me-5 hover:bg-sky-500 hover:text-white transition-colors duration-200 py-2"
            >
              Schedule A Demo
            </Link>
            <Link
              to="/contact"
              className="btn bg-blue-950 px-5 sm:px-10 rounded-full text-white border-2 hover:bg-blue-800 transition-colors duration-200 py-2"
            >
              Talk To Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
