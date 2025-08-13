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
    img: string;
    content: string;
  }
  
  interface ServiceData {
    category: string;
    banner: ServiceBanner;
    overview: ServiceOverview;
    btn: string;
    solutions: SolutionItem[];
  }
  
  // Sample Data
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
          img: "/assets/Services/web development/solution-1.webp",
          content:
            "We specialize in building custom websites tailored to your unique business requirements. Our team works closely with you to understand your vision and create a fully customized web solution that meets both your functional and aesthetic goals. Whether it's a brand-new website or a platform upgrade, we ensure that the final product is scalable, user-friendly, and designed to evolve with your business."
        },
        {
          title: "Custom Web Development",
          img: "/assets/Services/web development/solution-1.webp",
          content:
            "We specialize in building custom websites tailored to your unique business requirements. Our team works closely with you to understand your vision and create a fully customized web solution that meets both your functional and aesthetic goals. Whether it's a brand-new website or a platform upgrade, we ensure that the final product is scalable, user-friendly, and designed to evolve with your business."
        }
      ]
    },
    {
      category: "Mobile App development",
      banner: {
        title: "mobile app development",
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
          img: "/assets/Services/web development/solution-1.webp",
          content:
            "We specialize in building custom websites tailored to your unique business requirements. Our team works closely with you to understand your vision and create a fully customized web solution that meets both your functional and aesthetic goals. Whether it's a brand-new website or a platform upgrade, we ensure that the final product is scalable, user-friendly, and designed to evolve with your business."
        },
        {
          title: "Custom Web Development",
          img: "/assets/Services/web development/solution-1.webp",
          content:
            "We specialize in building custom websites tailored to your unique business requirements. Our team works closely with you to understand your vision and create a fully customized web solution that meets both your functional and aesthetic goals. Whether it's a brand-new website or a platform upgrade, we ensure that the final product is scalable, user-friendly, and designed to evolve with your business."
        }
      ]
    }
  ];
  