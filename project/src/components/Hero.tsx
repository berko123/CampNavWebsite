import React from 'react';
import { ArrowRight, MapPin, Compass, Navigation } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"></div>
        <div className="absolute left-1/3 top-1/3 h-40 w-40 rounded-full bg-blue-600/20 blur-2xl"></div>
        <div className="absolute left-1/4 bottom-1/4 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6 animate-fade-in">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Revolutionizing Campus Navigation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Navigate Campus
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {" "}With AR{" "}
              </span>
              Technology
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              CampNAV transforms how students, visitors, and faculty navigate college campuses with augmented reality. Never get lost again.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1"
              >
                Get Demo
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium flex items-center justify-center group transition-all"
              >
                How it works
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2806513/pexels-photo-2806513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="College campus with AR navigation overlay"
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent mix-blend-multiply"></div>
              
              {/* AR UI Elements */}
              <div className="absolute top-1/4 left-1/4 bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-3 flex items-center transform -rotate-6 animate-float">
                <Compass className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">Student Center</span>
              </div>
              
              <div className="absolute bottom-1/3 right-1/4 bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-3 flex items-center transform rotate-3 animate-float-delayed">
                <Navigation className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">Science Building</span>
              </div>
              
              <div className="absolute inset-0 border-4 border-white/30 rounded-xl"></div>
            </div>
            
            {/* Stats */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 flex space-x-8 w-11/12 max-w-md">
              <div className="flex-1 text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Partner Campuses</p>
              </div>
              <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex-1 text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">95%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Navigation Accuracy</p>
              </div>
              <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex-1 text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4.8</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">User Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};