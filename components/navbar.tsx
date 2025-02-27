"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Pen, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Users 
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={closeDropdowns}>
              <span className="text-2xl font-bold text-primary mr-2">G</span>
              <span className="text-xl font-semibold">Grammarly</span>
            </Link>
            
            <nav className="hidden md:flex ml-10 space-x-1">
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown("product")}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                >
                  Product
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdown === "product" ? "rotate-180" : ""
                  }`} />
                </button>
                {activeDropdown === "product" && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 animate-fade-in">
                    <div className="grid gap-4">
                      <Link href="/product/writing" className="flex items-start p-2 rounded-md hover:bg-gray-50" onClick={closeDropdowns}>
                        <Pen className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Writing</p>
                          <p className="text-sm text-gray-500">Compose clear, mistake-free writing</p>
                        </div>
                      </Link>
                      <Link href="/product/business" className="flex items-start p-2 rounded-md hover:bg-gray-50" onClick={closeDropdowns}>
                        <Briefcase className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Business</p>
                          <p className="text-sm text-gray-500">Elevate your team's writing</p>
                        </div>
                      </Link>
                      <Link href="/product/education" className="flex items-start p-2 rounded-md hover:bg-gray-50" onClick={closeDropdowns}>
                        <GraduationCap className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Education</p>
                          <p className="text-sm text-gray-500">Support student writers</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown("plans")}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                >
                  Plans
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdown === "plans" ? "rotate-180" : ""
                  }`} />
                </button>
                {activeDropdown === "plans" && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 animate-fade-in">
                    <div className="grid gap-4">
                      <Link href="/plans/individual" className="flex items-start p-2 rounded-md hover:bg-gray-50" onClick={closeDropdowns}>
                        <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Individual</p>
                          <p className="text-sm text-gray-500">For personal writing needs</p>
                        </div>
                      </Link>
                      <Link href="/plans/business" className="flex items-start p-2 rounded-md hover:bg-gray-50" onClick={closeDropdowns}>
                        <Briefcase className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Business</p>
                          <p className="text-sm text-gray-500">For teams of 3 or more</p>
                        </div>
                      </Link>
                      <Link href="/plans/enterprise" className="flex items-start p-2 rounded-md hover:bg-gray-50" onClick={closeDropdowns}>
                        <Globe className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Enterprise</p>
                          <p className="text-sm text-gray-500">For large organizations</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/features" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100" onClick={closeDropdowns}>
                Features
              </Link>
              
              <Link href="/pricing" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100" onClick={closeDropdowns}>
                Pricing
              </Link>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary" onClick={closeDropdowns}>
              Log in
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-black">Get Started</Button>
          </div>
          
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <div className="border-b pb-2">
              <button
                onClick={() => toggleDropdown("mobile-product")}
                className="flex items-center justify-between w-full py-2 text-left"
              >
                <span className="font-medium">Product</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${
                  activeDropdown === "mobile-product" ? "rotate-180" : ""
                }`} />
              </button>
              {activeDropdown === "mobile-product" && (
                <div className="pl-4 pt-2 pb-1 space-y-2 animate-fade-in">
                  <Link href="/product/writing" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Writing
                  </Link>
                  <Link href="/product/business" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Business
                  </Link>
                  <Link href="/product/education" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Education
                  </Link>
                </div>
              )}
            </div>
            
            <div className="border-b pb-2">
              <button
                onClick={() => toggleDropdown("mobile-plans")}
                className="flex items-center justify-between w-full py-2 text-left"
              >
                <span className="font-medium">Plans</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${
                  activeDropdown === "mobile-plans" ? "rotate-180" : ""
                }`} />
              </button>
              {activeDropdown === "mobile-plans" && (
                <div className="pl-4 pt-2 pb-1 space-y-2 animate-fade-in">
                  <Link href="/plans/individual" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Individual
                  </Link>
                  <Link href="/plans/business" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Business
                  </Link>
                  <Link href="/plans/enterprise" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Enterprise
                  </Link>
                </div>
              )}
            </div>
            
            <div className="border-b pb-2">
              <Link href="/features" className="block py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </Link>
            </div>
            
            <div className="border-b pb-2">
              <Link href="/pricing" className="block py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
            </div>
            
            <div className="pt-2 space-y-3">
              <Link href="/login" className="block py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Log in
              </Link>
              <Button className="w-full bg-primary hover:bg-primary/90 text-black" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}