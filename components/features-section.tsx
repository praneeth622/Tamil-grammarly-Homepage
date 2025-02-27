"use client";

import { useState, useEffect, useRef } from "react";
import { 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  Zap, 
  Shield, 
  Sparkles 
} from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Writing Suggestions",
      description: "Get real-time feedback on grammar, spelling, punctuation, and more as you type.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      benefits: [
        "Correct grammar and spelling errors instantly",
        "Improve sentence structure and clarity",
        "Enhance vocabulary with better word choices",
        "Maintain consistent tone throughout your writing"
      ]
    },
    {
      title: "Tone Detection",
      description: "Understand how your message comes across and adjust to match your intended audience.",
      icon: <FileText className="h-6 w-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      benefits: [
        "Detect the tone of your writing (formal, friendly, confident)",
        "Get suggestions to match your intended tone",
        "Ensure consistency across different sections",
        "Adapt to different audiences and contexts"
      ]
    },
    {
      title: "Performance Insights",
      description: "Track your writing habits and improvements over time with detailed analytics.",
      icon: <Zap className="h-6 w-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      benefits: [
        "View statistics on your writing performance",
        "Track improvement over time",
        "Identify common mistakes and patterns",
        "Set goals and measure progress"
      ]
    },
    {
      title: "Security & Privacy",
      description: "Your data is encrypted and protected with enterprise-grade security measures.",
      icon: <Shield className="h-6 w-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      benefits: [
        "End-to-end encryption for all your documents",
        "GDPR and CCPA compliant data handling",
        "Control over how your data is used",
        "Option to delete your data at any time"
      ]
    },
    {
      title: "AI-Powered Suggestions",
      description: "Advanced AI algorithms provide context-aware writing suggestions tailored to your style.",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      benefits: [
        "Context-aware writing assistance",
        "Style adaptation based on document type",
        "Full-sentence rewrites for clarity",
        "Suggestions that match your personal writing style"
      ]
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
            Features That Transform Your Writing
          </h2>
          <p className={`text-lg text-gray-600 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
            Our comprehensive suite of writing tools helps you communicate effectively in any situation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 rounded-lg cursor-pointer transition-all duration-300",
                  activeTab === index
                    ? "bg-primary/10 border-l-4 border-primary"
                    : "hover:bg-gray-50"
                )}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="md:col-span-8 bg-gray-50 rounded-xl p-6 md:p-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{features[activeTab].title}</h3>
                <p className="text-gray-600 mb-6">{features[activeTab].description}</p>
                
                <div className="space-y-3">
                  {features[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={features[activeTab].image}
                  alt={features[activeTab].title}
                  className="rounded-lg shadow-lg w-full h-64 object-cover animate-fade-in"
                />
                <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}