import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-primary mr-2">G</span>
              <span className="text-xl font-semibold">Tamil Grammar By Random Walk</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Our AI-powered writing assistant helps you write with confidence across all your applications.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product/writing" className="text-gray-600 hover:text-primary transition-colors">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="/product/business" className="text-gray-600 hover:text-primary transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/product/education" className="text-gray-600 hover:text-primary transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-600 hover:text-primary transition-colors">
                  Writing Guides
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-600 hover:text-primary transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="text-gray-600 hover:text-primary transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/affiliates" className="text-gray-600 hover:text-primary transition-colors">
                  Affiliates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Tamil Grammar By Random Walk. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 text-sm">
              <Link href="/terms" className="text-gray-500 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-gray-500 hover:text-primary transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}