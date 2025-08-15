// pricing.ts
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { servicesData } from "./servicesData";

interface PricingFeature { feature: string; included: boolean; }
interface PricingPlan {
  name: string;
  badge?: string;
  hourlyPrice: string;     // keep string and stringify numbers
  fixedPrice: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "outline";
  popular?: boolean;
}

export function PricingData(): PricingPlan[] {
  const activeService = useSelector((s: RootState) => s.customSlice.activeService);
  const activeData = servicesData.find(
    svc => svc.category.toLowerCase() === activeService?.toLowerCase()
  );

  const starterHourly = activeData?.pricing.hourly.starter;
  const starterFixed = activeData?.pricing.fixed.starter;
  const professionalHourly = activeData?.pricing.hourly.professional;
  const professionalFixed = activeData?.pricing.fixed.professional;
  const enterpriseHourly = activeData?.pricing.hourly.enterprise;
  const enterpriseFixed = activeData?.pricing.fixed.enterprise;
  return [
    {
      name: "Starter",
      badge: "Basic",
      hourlyPrice: starterHourly != null ? String(starterHourly) : "N/A",
      fixedPrice: starterFixed != null ? String(starterFixed) : "N/A",
      description: "Perfect for small projects and startups looking to establish their digital presence.",
      features: [
        { feature: "Up to 3 revisions", included: true },
        { feature: "Basic responsive design", included: true },
        { feature: "Email support", included: true },
        { feature: "1 month maintenance", included: true },
        { feature: "Custom integrations", included: false },
        { feature: "Priority support", included: false },
        { feature: "Advanced analytics", included: false },
        { feature: "Database optimization", included: false },
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      name: "Professional",
      badge: "Most Popular",
      hourlyPrice: professionalHourly != null ? String(professionalHourly) : "N/A",
      fixedPrice: professionalFixed != null ? String(professionalFixed) : "N/A",
      description: "Ideal for growing businesses that need comprehensive solutions and dedicated support.",
      features: [
        { feature: "Up to 5 revisions", included: true },
        { feature: "Advanced responsive design", included: true },
        { feature: "Priority email & chat support", included: true },
        { feature: "3 months maintenance", included: true },
        { feature: "Custom integrations", included: true },
        { feature: "SEO optimization", included: true },
        { feature: "Advanced analytics", included: false },
        { feature: "Database optimization", included: false },
      ],
      buttonText: "Start Building",
      buttonVariant: "primary",
      popular: true,
    },
    {
      name: "Enterprise",
      badge: "Premium",
      hourlyPrice: enterpriseHourly != null ? String(enterpriseHourly) : "N/A",
      fixedPrice: enterpriseFixed != null ? String(enterpriseFixed) : "N/A",
      description: "Complete enterprise solution with unlimited revisions and comprehensive support.",
      features: [
        { feature: "Unlimited revisions", included: true },
        { feature: "Premium responsive design", included: true },
        { feature: "24/7 dedicated support", included: true },
        { feature: "6 months maintenance", included: true },
        { feature: "Custom integrations", included: true },
        { feature: "Advanced SEO & analytics", included: true },
        { feature: "Performance optimization", included: true },
        { feature: "Database optimization", included: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "secondary",
    },
    {
      name: "Custom",
      badge: "Tailored",
      hourlyPrice: "Custom",
      fixedPrice: "Custom",
      description: "Fully customized solution designed specifically for your unique requirements and complexity.",
      features: [
        { feature: "Unlimited revisions", included: true },
        { feature: "Bespoke architecture design", included: true },
        { feature: "Dedicated project team", included: true },
        { feature: "Extended maintenance period", included: true },
        { feature: "Complex system integrations", included: true },
        { feature: "Enterprise-grade security", included: true },
        { feature: "Performance & scalability", included: true },
        { feature: "Custom deployment solutions", included: true },
      ],
      buttonText: "Discuss Requirements",
      buttonVariant: "primary",
    },
  ];
}
