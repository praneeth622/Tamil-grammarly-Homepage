"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      quote: "This writing assistant has completely transformed how I communicate. The suggestions are spot-on and have helped me become a more confident writer.",
      author: "Sarah Johnson",
      role: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5
    },
    {
      quote: "As someone who writes emails all day, this tool has saved me countless hours and helped me communicate more effectively with clients.",
      author: "Michael Chen",
      role: "Sales Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5
    },
    {
      quote: "The tone detection feature is incredible. It helps me ensure my emails strike the right balance between professional and friendly.",
      author: "Emily Rodriguez",
      role: "HR Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 4
    },
    {
      quote: "I've tried many writing assistants, but this one stands out for its accuracy and helpful suggestions. It's like having a professional editor by my side.",
      author: "David Thompson",
      role: "Content Creator",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
            What Our Users Say
          </h2>
          <p className={`text-lg text-gray-600 ${isIntersecting ? 'animate-slide-up' : 'opacity-0'}`}>
            Join thousands of satisfied users who have improved their writing with our assistance.
          </p>
        </div>
        
        <div className={`relative max-w-4xl mx-auto ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="h-14 w-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium italic text-gray-700 mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? "w-8 bg-primary" : "w-2 bg-gray-300"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="h-10 w-10 rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="h-10 w-10 rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -left-6 h-24 w-24 bg-primary/10 rounded-full -z-10"></div>
          <div className="absolute -bottom-6 -right-6 h-16 w-16 bg-primary/20 rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
}