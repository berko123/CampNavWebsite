import React from 'react';
import { MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-800">
          <div>
            <div className="flex items-center mb-5">
              <MapPin className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">CampNAV</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming campus navigation with augmented reality technology for colleges and universities nationwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-400 hover:text-blue-400 flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-blue-400 flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  How It Works
                </a>
              </li>
              <li>
                <a href="#campuses" className="text-gray-400 hover:text-blue-400 flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Campus Partners
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-blue-400 flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Download App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on new features and campus partners.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from CampNAV.
            </p>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} CampNAV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};