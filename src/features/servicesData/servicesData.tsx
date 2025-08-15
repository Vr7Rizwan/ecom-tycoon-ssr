// types.ts or servicesData.ts

// Interfaces
interface ServiceContent {
  title: string;
  content: string;
}

interface ServiceOverview {
  title: string;
  desc: string;
  goodAt: {
    title: string;
    content: ServiceContent[];
  };
}

interface ServiceBanner {
  title: string;
  underTitle: string;
  btn: string;
}

interface SolutionItem {
  title: string;
  content: string;
}
interface PricingItem{
  hourly:{
    starter: number;
    professional: number;
    enterprise: number;
  }
  fixed:{
    starter: number;
    professional: number;
    enterprise: number;
  }
}
interface ServiceData {
  category: string;
  banner: ServiceBanner;
  overview: ServiceOverview;
  btn: string;
  solutions: SolutionItem[];
  pricing: PricingItem;
}

// Corrected Data
export const servicesData: ServiceData[] = [
  {
    category: "web development",
    banner: {
      title: "web development",
      underTitle: "Building Seamless Experiences",
      btn: "Build High-Performance Website"
    },
    overview: {
      title: "Overview",
      desc:
        "Our web development services provide enterprise-grade and customized web development services tailored to meet the evolving demands of modern businesses. Whether you need a simple landing page or a complex web application, we have the expertise to deliver results that exceed expectations.",
      goodAt: {
        title: "What we are good at:",
        content: [
          {
            title: "Cutting-Edge Technologies:",
            content:
              "Our use of the latest frameworks and technologies such as React.js, Angular, Vue.js, Node.js, Laravel, Ruby on Rails, and Python ensures your web solutions are future-ready."
          },
          {
            title: "Responsive Design:",
            content:
              "Our approach guarantees your website adapts to all screen sizes, providing a seamless user experience."
          },
          {
            title: "Performance Optimization:",
            content:
              "We ensure your website is optimized for speed and performance, leveraging CDNs, lazy loading, and caching strategies to enhance load times.‍"
          },
          {
            title: "Web Security:",
            content:
              "We ensure that your website is protected with the latest security standards, including SSL encryption, firewalls, and regular security audits."
          }
        ]
      }
    },
    btn: "Build your website now",
    solutions: [
      {
        title: "Custom Web Development",
        content:
          "We specialize in building custom websites tailored to your unique business requirements. Our team works closely with you to understand your vision and create a fully customized web solution that meets both your functional and aesthetic goals. Whether it's a brand-new website or a platform upgrade, we ensure that the final product is scalable, user-friendly, and designed to evolve with your business."
      },
      {
        title: "E-Commerce Development", // FIXED: Different title
        content:
          "We develop powerful and secure e-commerce websites that enable businesses to sell products and services seamlessly online. Our expertise spans across various e-commerce platforms, including Shopify, Magento, WooCommerce, and BigCommerce. From responsive designs and intuitive shopping cart systems to secure payment gateways and inventory management, we deliver solutions that enhance the shopping experience."
      },
      {
        title: "Content Management Systems (CMS)", // ADDED: Third solution
        content:
          "We build flexible, easy-to-use CMS platforms like WordPress, Drupal, and Joomla that allow businesses to manage their website content effortlessly. Our CMS solutions are designed with scalability in mind, enabling you to grow your website and add new features over time. Whether you need a blog, a portfolio, or an enterprise-level site, we provide the tools you need to create, manage, and publish content effectively."
      },{
        title: "Web Application Development",
        content:
          "Our team develops complex, scalable web applications tailored to your business needs. Using frameworks such as React, Angular, and Vue.js, we build responsive, high-performance applications that are secure and user-friendly. Whether you need a custom CRM system, project management tool, or client portal, we provide end-to-end solutions that improve business processes and increase operational efficiency."
      },{
        title: "API Integration & Development",
        content:
          "We specialize in integrating third-party services and APIs into your web platform to enhance functionality and improve efficiency. Whether it’s payment gateways, social media platforms, CRM systems, or other enterprise software, we ensure that the integration process is seamless and that all systems communicate effectively. Our team also develops custom APIs to connect your website with other platforms or services, enhancing flexibility and scalability."
      },
    ],
    pricing: {
      hourly:{
        starter:25,
        professional:45,
        enterprise:75,
      },
      fixed:{
        starter:2500,
        professional:5500,
        enterprise:12500,
      }
    }
  }
];