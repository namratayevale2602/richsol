import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  MessageSquare,
  Phone,
  Smartphone,
  Megaphone,
  Bot,
  Zap,
  Code,
  Palette,
  AlertCircle,
  PhoneCall,
  Mail,
  Building,
  Sparkles,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Shield,
  Globe,
  Cloud,
} from "lucide-react";
import {
  alertsystems,
  bulkemails,
  bulksmss,
  bulkvoicee,
  designdevelopementt,
  designmarketingg,
  digitalautomationn,
  graphicDesignn,
  ivrr,
  outdoormarketingg,
  whatsappchatbots,
  whatsappservices,
} from "../../assets";

// Complete Static JSON Data with all 12 services
const productsData = {
  sectionTitle: "Our Digital Services",
  sectionDescription: "Comprehensive Solutions for Modern Business Needs",
  products: [
    {
      id: 1,
      title: "Bulk Sms",
      product_name: "bulk-sms",
      subtitle:
        "Secure, timely delivery of Transactional, Promotional, OTP messages",
      description:
        "Reliable bulk SMS services for marketing campaigns, alerts, and notifications. Reach thousands instantly with our robust SMS platform.",
      image: bulksmss,
      icon: MessageSquare,
      features: [
        "Transactional Messages",
        "Promotional Campaigns",
        "OTP Services",
        "High Delivery Rates",
      ],
      category: "Communication",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Bulk Voice",
      product_name: "bulk-voice",
      subtitle:
        "Send your message instantly with reliable bulk voice solutions.",
      description:
        "Professional bulk voice messaging services for customer engagement, alerts, and marketing campaigns with high delivery rates.",
      image: bulkvoicee,
      icon: Phone,
      features: [
        "Voice Broadcasting",
        "Multi-language Support",
        "Real-time Analytics",
        "High Engagement",
      ],
      category: "Communication",
      color: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      title: "Whatsapp Services",
      product_name: "whatsapp-services",
      subtitle:
        "Send your message instantly with reliable bulk WhatsApp solutions.",
      description:
        "Official WhatsApp Business API services for marketing, customer support, and automated messaging with high engagement rates.",
      image: whatsappservices,
      icon: Smartphone,
      features: [
        "WhatsApp Business API",
        "Bulk Messaging",
        "Media Support",
        "Template Messages",
      ],
      category: "Communication",
      color: "from-green-500 to-emerald-400",
    },
    {
      id: 4,
      title: "Digital Marketing",
      product_name: "digital-marketing",
      subtitle:
        "Boost your brand instantly with reliable digital marketing solutions.",
      description:
        "Comprehensive digital marketing services including SEO, social media marketing, PPC, and content marketing to grow your business online.",
      image: designmarketingg,
      icon: Megaphone,
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "PPC Campaigns",
        "Content Strategy",
      ],
      category: "Marketing",
      color: "from-orange-500 to-red-400",
    },
    {
      id: 5,
      title: "Whatsapp Chatbot",
      product_name: "whatsapp-chatbot",
      subtitle:
        "Power your business instantly with reliable WhatsApp API solutions.",
      description:
        "Intelligent WhatsApp chatbots for customer service, lead generation, and automated conversations. 24/7 customer support solutions.",
      image: whatsappchatbots,
      icon: Bot,
      features: [
        "AI-Powered Chatbots",
        "24/7 Support",
        "Lead Generation",
        "Customer Service",
      ],
      category: "Automation",
      color: "from-teal-500 to-cyan-400",
    },
    {
      id: 6,
      title: "Digital Automation",
      product_name: "digital-automation",
      subtitle:
        "Streamline your operations instantly with digital business automation.",
      description:
        "Advanced automation solutions for business processes, workflow optimization, and operational efficiency improvement.",
      image: digitalautomationn,
      icon: Zap,
      features: [
        "Workflow Automation",
        "Process Optimization",
        "Task Automation",
        "Efficiency Tools",
      ],
      category: "Automation",
      color: "from-indigo-500 to-purple-400",
    },
    {
      id: 7,
      title: "Design Development",
      product_name: "design-development",
      subtitle:
        "Transforming Visionary Concepts into Functional and Innovative Solutions with Expert Precision",
      description:
        "Professional website design, web development, and mobile app development services to establish your strong digital presence.",
      image: designdevelopementt,
      icon: Code,
      features: [
        "Web Development",
        "Mobile Apps",
        "UI/UX Design",
        "Custom Solutions",
      ],
      category: "Development",
      color: "from-violet-500 to-purple-400",
    },
    {
      id: 8,
      title: "Graphic Design",
      product_name: "graphic-design",
      subtitle:
        "Bringing Creative Concepts to Life with Artistic Precision and Visual Storytelling",
      description:
        "Professional graphic design services including logos, branding, marketing materials, and digital graphics for your business.",
      image: graphicDesignn,
      icon: Palette,
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Materials",
        "Digital Graphics",
      ],
      category: "Creative",
      color: "from-pink-500 to-rose-400",
    },
    {
      id: 9,
      title: "Alert System",
      product_name: "alert-system",
      subtitle:
        "Stay informed instantly with our efficient miss call alert system.",
      description:
        "Custom alert and notification systems for businesses. Real-time alerts via SMS, voice, email, and push notifications.",
      image: alertsystems,
      icon: AlertCircle,
      features: [
        "Real-time Alerts",
        "Multi-channel",
        "Custom Triggers",
        "Instant Notifications",
      ],
      category: "Automation",
      color: "from-amber-500 to-yellow-400",
    },
    {
      id: 10,
      title: "Ivr System",
      product_name: "ivr-system",
      subtitle:
        "Automate interactions seamlessly with our efficient IVR system.",
      description:
        "Professional IVR system development for call centers and businesses. Automate customer interactions and improve call management.",
      image: ivrr,
      icon: PhoneCall,
      features: [
        "Interactive Voice Response",
        "Call Routing",
        "Multi-level Menu",
        "Call Analytics",
      ],
      category: "Communication",
      color: "from-sky-500 to-blue-400",
    },
    {
      id: 11,
      title: "Bulk Email",
      product_name: "bulk-email",
      subtitle:
        "Reach your audience instantly with reliable bulk email solutions.",
      description:
        "Professional bulk email marketing services for newsletters, promotions, and customer engagement campaigns with high deliverability rates.",
      image: bulkemails,
      icon: Mail,
      features: [
        "Email Campaigns",
        "Newsletter Services",
        "High Deliverability",
        "Analytics",
      ],
      category: "Marketing",
      color: "from-red-500 to-orange-400",
    },
    {
      id: 12,
      title: "Outdoor Marketing",
      product_name: "outdoor-marketing",
      subtitle:
        "Captivating Audiences with Strategic Outdoor Advertising Solutions",
      description:
        "Comprehensive outdoor marketing services including hoardings, billboards, transit ads, and OOH advertising for maximum brand visibility.",
      image: outdoormarketingg,
      icon: Building,
      features: [
        "Billboard Advertising",
        "Transit Ads",
        "OOH Marketing",
        "Brand Visibility",
      ],
      category: "Marketing",
      color: "from-gray-600 to-gray-400",
    },
  ],
};

const Products = () => {
  const products = productsData.products;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-blue-600">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
            {productsData.sectionTitle}
            <span className="block bg-gradient-to-r from-[#0cc0e1] via-[#83bfdf] to-[#137bca] bg-clip-text text-transparent">
              {productsData.sectionDescription}
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover our comprehensive range of digital solutions designed to
            accelerate your business growth
          </p>
        </motion.div>

        {/* Products Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="products-swiper pb-12"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="pb-4"
                >
                  <ProductCard product={product} index={index} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, index }) => {
  const IconComponent = product.icon;
  const redirect_url = `/products/${product.product_name}`;

  return (
    <motion.div
      whileHover={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
      className="group bg-white mx-auto rounded-2xl p-6 border-2 border-transparent hover:border-blue-600 cursor-pointer flex flex-col h-[500px] transition-all duration-300 shadow-lg hover:shadow-2xl"
    >
      {/* Icon and Category */}
      <div className="flex items-center justify-between mb-6">
        <div
          className={`p-3 rounded-xl bg-gradient-to-br ${product.color} shadow-lg`}
        >
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
          {product.category}
        </span>
      </div>

      {/* Product Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="mb-4 overflow-hidden rounded-xl"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </motion.div>

      {/* Product Title */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"
      >
        {product.title}
      </motion.h3>

      {/* Product Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.4 }}
        className="text-sm text-gray-600 mb-3"
      >
        {product.subtitle}
      </motion.p>

      {/* Product Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.5 }}
        className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-2"
      >
        {product.description}
      </motion.p>

      {/* Features */}
      {/* <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {product.features.slice(0, 3).map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div> */}

      {/* View More Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.6 }}
        className="mt-auto pt-4 border-t border-gray-100"
      >
        <motion.a
          href={redirect_url}
          whileHover={{ x: 5 }}
          className="text-blue-600 font-semibold transition-colors duration-300 inline-flex items-center justify-between w-full"
        >
          <span>Learn More</span>
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Products;
