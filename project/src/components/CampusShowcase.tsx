import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface CampusProps {
  name: string;
  image: string;
  description: string;
  features: string[];
}

export const CampusShowcase: React.FC = () => {
  const campuses: CampusProps[] = [
    {
      name: 'University of California',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Navigate the sprawling UC campus with ease. From the iconic Sather Tower to the numerous research facilities, CampNAV helps students and visitors find their way around this historic campus.',
      features: ['Complete indoor mapping', 'Historic landmark information', 'Accessibility routes', 'Event integration']
    },
    {
      name: 'MIT',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'MIT\'s complex layout of interconnected buildings becomes easy to navigate with CampNAV\'s precise indoor mapping and direction system, helping you find labs, classrooms, and research centers.',
      features: ['Lab and research finder', '3D building models', 'Underground tunnel navigation', 'Integration with MIT events']
    },
    {
      name: 'Stanford University',
      image: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Explore Stanford\'s beautiful campus with AR-powered tours and navigation. Find your way through the quad, to athletic facilities, or locate art installations across campus.',
      features: ['Outdoor trail navigation', 'Art and sculpture tour', 'Sports facility directions', 'Virtual tour guides']
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? campuses.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === campuses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCampus = campuses[currentIndex];

  return (
    <section id="campuses" className="py-16 md:py-24 bg-blue-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Campus Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join these leading institutions that trust CampNAV to help their students, faculty, and visitors navigate campus.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img 
                  src={currentCampus.image} 
                  alt={currentCampus.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentCampus.name}</h3>
                  </div>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button 
                  onClick={goToPrevious}
                  className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors"
                  aria-label="Previous campus"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={goToNext}
                  className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors"
                  aria-label="Next campus"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {currentCampus.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {currentCampus.description}
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Campus-Specific Features:
              </h4>
              <ul className="space-y-3">
                {currentCampus.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.from({ length: campuses.length }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'w-8 bg-blue-600 dark:bg-blue-400' 
                          : 'w-2 bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-label={`Go to campus ${index + 1}`}
                    />
                  ))}
                </div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Bring CampNAV to your campus
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Trusted by leading universities nationwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {['Stanford', 'MIT', 'UCLA', 'Harvard', 'Yale', 'Princeton'].map((name, index) => (
              <div key={index} className="text-lg font-bold text-gray-500 dark:text-gray-400">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};