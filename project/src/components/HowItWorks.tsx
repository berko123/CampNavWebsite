import React from 'react';
import { Download, Smartphone, MapPin, Navigation } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
      <div className="flex-shrink-0">
        <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-3">
          <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How CampNAV Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Getting started with CampNAV is easy — just follow these simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <Step 
              number={1} 
              title="Download the App" 
              description="Download CampNAV from your app store and create an account using your school email." 
              icon={<Download className="h-5 w-5" />}
            />
            <Step 
              number={2} 
              title="Select Your Campus" 
              description="Choose your college from our growing list of partner campuses across the nation." 
              icon={<MapPin className="h-5 w-5" />}
            />
            <Step 
              number={3} 
              title="Point Your Camera" 
              description="Simply point your camera at your surroundings, and let the AR technology identify your location." 
              icon={<Smartphone className="h-5 w-5" />}
            />
            <Step 
              number={4} 
              title="Follow AR Directions" 
              description="Follow the augmented reality directions overlaid on your screen to reach your destination." 
              icon={<Navigation className="h-5 w-5" />}
            />
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-2xl p-3 shadow-xl max-w-md mx-auto">
              <div className="rounded-xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-inner relative">
                <img 
                  src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CampNAV in use on a smartphone"
                  className="w-full object-cover"
                />
                {/* AR UI Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-between">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                      <MapPin className="h-4 w-4 text-blue-600 mr-1" />
                      <span className="text-xs font-medium text-gray-800">Main Library</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-xs font-medium text-gray-800">250m</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-3/4 h-1 bg-blue-500/70 rounded-full mb-2 animate-pulse"></div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <Navigation className="h-5 w-5 text-blue-600 mr-2" />
                      <div>
                        <p className="text-sm font-bold text-gray-800">Turn right at Science Hall</p>
                        <p className="text-xs text-gray-600">Continue for 100 meters</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-blue-200 dark:bg-blue-800/40 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 h-20 w-20 bg-blue-300 dark:bg-blue-700/40 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};