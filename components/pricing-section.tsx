"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: "Free",
      description: "Basic writing assistance for casual users",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Basic grammar and spelling checks",
        "Limited suggestions (up to 150 per month)",
        "Standard response time",
        "Browser extension",
        "Mobile app access"
      ],
      notIncluded: [
        "Advanced grammar checks",
        "Style suggestions",
        "Tone detection",
        "Plagiarism detection",
        "Priority support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      description: "Advanced features for individuals who write frequently",
      monthlyPrice: 29.95,
      yearlyPrice: 19.98,
      features: [
        "Everything in Free",
        "Advanced grammar and style checks",
        "Unlimited suggestions",
        "Tone detection",
        "Clarity rewrites",
        "Plagiarism detection (50 pages/month)",
        "Priority support"
      ],
      notIncluded: [],
      cta: "Try Premium",
      popular: true
    },
    {
      name: "Business",
      description: "Comprehensive solution for teams and businesses",
      monthlyPrice: 49.95,
      yearlyPrice: 39.98,
      features: [
        "Everything in Premium",
        "Team management dashboard",
        "Style guide integration",
        "Analytics and reporting",
        "Unlimited plagiarism detection",
        "SAML SSO",
        "Dedicated account manager",
        "API access"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
            Simple, Transparent Pricing
          </h2>
          <p className={`text-lg text-gray-600 mb-8 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
            Choose the plan that fits your needs. All plans include core writing assistance features.
          </p>
          
          <div className={`inline-flex items-center p-1 bg-gray-100 rounded-full ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "bg-white shadow-sm" : "text-gray-600"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly ? "bg-white shadow-sm" : "text-gray-600"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly <span className="text-primary font-semibold">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className={`grid md:grid-cols-3 gap-8 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl border transition-all duration-300",
                plan.popular
                  ? "border-primary shadow-lg scale-105 md:scale-110 z-10"
                  : "border-gray-200 hover:border-primary/50 hover:shadow-md"
              )}
            >
              {plan.popular && (
                <div className="bg-primary text-black text-center py-2 rounded-t-xl font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}