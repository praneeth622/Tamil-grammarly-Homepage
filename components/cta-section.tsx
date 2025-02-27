"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-20 bg-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
            Ready to Transform Your Writing?
          </h2>
          <p className={`text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto ${isIntersecting ? 'animate-slide-up stagger-1' : 'opacity-0'}`}>
            Join millions of users who trust our AI-powered writing assistant to help them communicate with confidence.
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 ${isIntersecting ? 'animate-slide-up stagger-2' : 'opacity-0'}`}>
            <Button className="bg-primary hover:bg-primary/90 text-black text-lg px-8 py-6 h-auto">
              Get Started — It's Free
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 h-auto">
              See Plans <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className={`text-sm text-gray-500 mt-6 ${isIntersecting ? 'animate-slide-up stagger-3' : 'opacity-0'}`}>
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}