import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  stars: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image, stars }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
          />
        ))}
      </div>
      <div className="relative mb-6 flex-grow">
        <Quote className="absolute top-0 left-0 h-10 w-10 text-blue-100 dark:text-blue-900/30 -translate-x-2 -translate-y-2" />
        <p className="text-gray-600 dark:text-gray-300 relative z-10 pl-3">{quote}</p>
      </div>
      <div className="flex items-center mt-4">
        <img 
          src={image} 
          alt={name} 
          className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-blue-200 dark:border-blue-800" 
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "CampNAV has completely transformed how our students navigate our campus. Especially for new students, it's been invaluable in helping them find their classes during the first weeks.",
      name: "Dr. Sarah Johnson",
      role: "Dean of Student Affairs, UCLA",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stars: 5
    },
    {
      quote: "As a freshman, finding my way around campus was overwhelming until I started using CampNAV. The AR directions made it so much easier to locate buildings and classrooms.",
      name: "Michael Chen",
      role: "Student, Stanford University",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stars: 5
    },
    {
      quote: "The indoor navigation feature is exceptional. Our campus has complex building layouts, and CampNAV helps visitors find specific rooms and offices with remarkable accuracy.",
      name: "Emily Rodriguez",
      role: "Campus Tour Director, MIT",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stars: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What People Are Saying
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear from universities and students who have transformed their campus experience with CampNAV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              stars={testimonial.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
};