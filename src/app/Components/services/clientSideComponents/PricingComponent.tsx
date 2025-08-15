import React, { useState } from 'react'
import { Check } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import FormPopUpServer from '../../formPopUp/FormPopUpServer';
import { RootState } from '@/features/store/store';
import { setIsFormPopupOpen } from '@/features/slice/slice';

interface PricingFeature {
  feature: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  badge?: string;
  hourlyPrice: string;
  fixedPrice: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
  popular?: boolean;
}
export default function PricingComponent({pricingPlans,emailKey}:{pricingPlans:PricingPlan[],emailKey:any}) {
    const dispatch = useDispatch();
    const isFormPopupOpen = useSelector((state:RootState)=>state.customSlice.isFormPopupOpen);
    const handleClick = () =>{
        dispatch(setIsFormPopupOpen(true));
    }
    const hanldeCloseFormPopup = ()=>{
        dispatch(setIsFormPopupOpen(false));
    }
  const [isHourly, setIsHourly] = useState(true);

  const getButtonClasses = (variant: string, popular?: boolean) => {
    const baseClasses = "w-full py-3 md:py-4 px-6 md:px-8 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl";
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-primaryColor text-white hover:bg-primaryColor/90`;
      case 'secondary':
        return `${baseClasses} bg-secondaryColor text-black hover:bg-secondaryColor/90`;
      case 'outline':
        return `${baseClasses} border-2 border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white bg-transparent`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-9/10 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-primaryColor/10 dark:bg-primaryColor/20 text-primaryColor dark:text-primaryColor px-4 py-2 rounded-full text-sm font-medium mb-6">
            Pricing
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight tracking-tight mb-6 text-gray-900 dark:text-white">
            Choose the plan that fits{" "}
            <span className="block">
              your <em className="text-primaryColor not-italic">needs</em>.
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Flexible pricing options designed to scale with your business. 
            From startups to enterprise, we have the perfect solution for you.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-1 rounded-full w-fit mx-auto">
            <button
              onClick={() => setIsHourly(true)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                isHourly 
                  ? 'bg-primaryColor text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
              }`}
            >
              Hourly Rate
            </button>
            <button
              onClick={() => setIsHourly(false)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                !isHourly 
                  ? 'bg-primaryColor text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
              }`}
            >
              Fixed Project
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl lg:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl dark:shadow-2xl dark:hover:shadow-primaryColor/10 transition-all duration-500 border ${
                plan.popular 
                  ? 'border-primaryColor ring-4 ring-primaryColor/10 dark:ring-primaryColor/20 scale-105' 
                  : plan.name === 'Custom'
                  ? 'border-secondaryColor ring-2 ring-secondaryColor/20 dark:ring-secondaryColor/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primaryColor/30 dark:hover:border-primaryColor/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primaryColor text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Custom Badge */}
              {plan.name === 'Custom' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-secondaryColor to-yellow-400 text-black px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Custom Solution
                  </div>
                </div>
              )}

              {/* Plan Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                  plan.name === 'Custom' 
                    ? 'bg-secondaryColor/20 dark:bg-secondaryColor/30 text-secondaryColor dark:text-secondaryColor'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}>
                  {plan.badge}
                </div>
              </div>

              {/* Plan Name & Price */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  {plan.name === 'Custom' ? (
                    <div className="text-center w-full">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primaryColor to-secondaryColor bg-clip-text text-transparent">
                        Let's Discuss
                      </span>
                      <div className="text-gray-600 dark:text-gray-400 text-base mt-2">
                        Pricing based on complexity
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryColor">
                        ${isHourly ? plan.hourlyPrice : plan.fixedPrice}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-lg">
                        {isHourly ? '/hour' : '/project'}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`rounded-full p-1 mt-0.5 ${
                        item.included 
                          ? plan.name === 'Custom'
                            ? 'bg-secondaryColor/20 dark:bg-secondaryColor/30'
                            : 'bg-primaryColor/10 dark:bg-primaryColor/20' 
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        <Check className={`w-4 h-4 ${
                          item.included 
                            ? plan.name === 'Custom'
                              ? 'text-secondaryColor'
                              : 'text-primaryColor'
                            : 'text-gray-400 dark:text-gray-600'
                        }`} />
                      </div>
                      <span className={`text-base ${
                        item.included 
                          ? 'text-gray-800 dark:text-gray-200' 
                          : 'text-gray-400 dark:text-gray-600'
                      }`}>
                        {item.feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button onClick={handleClick} className={getButtonClasses(plan.buttonVariant, plan.popular)}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="text-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {isHourly ? "Flexible Hourly Engagement" : "Comprehensive Project Solutions"}
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            {isHourly 
              ? "Our hourly rates provide maximum flexibility for ongoing projects, consultations, and iterative development. Perfect for businesses that need continuous support and want to scale their development efforts based on immediate needs."
              : "Fixed project pricing offers predictable costs and clear deliverables. Ideal for businesses with well-defined requirements who want comprehensive solutions without worrying about hourly overages or scope creep."
            }
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md dark:shadow-lg border border-transparent dark:border-gray-700">
              <div className="text-primaryColor text-2xl font-bold mb-2">
                {isHourly ? "24/7" : "100%"}
              </div>
              <div className="text-gray-800 dark:text-gray-200 font-semibold mb-1">
                {isHourly ? "Support Available" : "Project Completion"}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {isHourly ? "Round-the-clock assistance" : "Guaranteed delivery"}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md dark:shadow-lg border border-transparent dark:border-gray-700">
              <div className="text-primaryColor text-2xl font-bold mb-2">
                {isHourly ? "50+" : "500+"}
              </div>
              <div className="text-gray-800 dark:text-gray-200 font-semibold mb-1">
                {isHourly ? "Expert Developers" : "Projects Delivered"}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {isHourly ? "Skilled professionals ready" : "Successful completions"}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md dark:shadow-lg border border-transparent dark:border-gray-700">
              <div className="text-primaryColor text-2xl font-bold mb-2">
                {isHourly ? "1 Hour" : "30 Days"}
              </div>
              <div className="text-gray-800 dark:text-gray-200 font-semibold mb-1">
                {isHourly ? "Minimum Billing" : "Free Support"}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {isHourly ? "Transparent billing" : "Post-launch assistance"}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleClick} className="border-2 border-primaryColor text-primaryColor dark:text-primaryColor px-8 py-4 rounded-full font-semibold text-lg hover:bg-primaryColor hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
      {isFormPopupOpen && <FormPopUpServer onClose={hanldeCloseFormPopup} emailKey={emailKey} />}
    </div>
  );
}