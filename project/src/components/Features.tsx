import React from 'react';
import { Map, Compass, MapPin, Navigation2, Clock, Users, Layout, Eye } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Map className="h-6 w-6" />,
      title: 'Real-time AR Navigation',
      description: 'See directions overlaid on your actual surroundings, making navigation intuitive and easy.'
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: 'Indoor & Outdoor Mapping',
      description: 'Seamless navigation from outdoor spaces into buildings with precise indoor directions.'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Points of Interest',
      description: 'Discover and learn about important campus locations, facilities, and hidden gems.'
    },
    {
      icon: <Navigation2 className="h-6 w-6" />,
      title: 'Customized Routes',
      description: 'Get personalized paths based on accessibility needs, time constraints, or scenic preferences.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Class Schedule Integration',
      description: 'Connect your schedule to get timely navigation to your next class or appointment.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Friend Location Sharing',
      description: 'Safely share your location with friends to meet up anywhere on campus.'
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: 'Campus Events',
      description: 'Discover and navigate to events happening around campus with real-time updates.'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Virtual Campus Tours',
      description: 'Explore campus virtually before arriving with immersive AR tours.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-blue-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern Campus Navigation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            CampNAV combines cutting-edge AR technology with intuitive design to transform how you navigate campus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};