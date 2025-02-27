"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-background pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your Writing with{" "}
              <span className="text-gradient">AI-Powered</span> Assistance
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Communicate confidently across email, social media, and documents with real-time writing suggestions.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className={`flex items-center ${isVisible ? 'animate-slide-up stagger-1' : 'opacity-0'}`}>
                <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-700">Grammar and spelling checks</span>
              </div>
              <div className={`flex items-center ${isVisible ? 'animate-slide-up stagger-2' : 'opacity-0'}`}>
                <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-700">Tone and clarity suggestions</span>
              </div>
              <div className={`flex items-center ${isVisible ? 'animate-slide-up stagger-3' : 'opacity-0'}`}>
                <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-700">Plagiarism detection</span>
              </div>
            </div>
            
            <div className={`pt-4 ${isVisible ? 'animate-slide-up stagger-4' : 'opacity-0'}`}>
              <Button className="bg-primary hover:bg-primary/90 text-black text-lg px-8 py-6 h-auto">
                Get Started — It's Free
              </Button>
            </div>
          </div>
          
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white rounded-xl shadow-xl p-6 animate-float relative z-10">
              <div className="flex items-center justify-between mb-4 border-b pb-3">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                    <span className="font-bold">G</span>
                  </div>
                  <span className="font-medium">Document Editor</span>
                </div>
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-3 flex-shrink-0">
                    <span className="text-xs">✕</span>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 w-full">
                    <p className="text-red-500 line-through text-sm">Their is a mistake in this sentense.</p>
                    <p className="text-xs text-gray-500 mt-1">Grammar and spelling error</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 mr-3 flex-shrink-0">
                    <span className="text-xs">!</span>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 w-full">
                    <p className="text-yellow-500 text-sm">The meeting will be held on tomorrow.</p>
                    <p className="text-xs text-gray-500 mt-1">Unnecessary word</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3 w-full">
                    <p className="text-primary text-sm">There is a mistake in this sentence.</p>
                    <p className="text-xs text-gray-500 mt-1">Corrected version</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <div className="h-3 w-16 bg-gray-100 rounded mt-1"></div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary animate-pulse-yellow">
                    <span className="text-xs">✓</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 h-16 w-16 bg-primary/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}