import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">About Swiggy</h1>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            Swiggy is India's largest and most valuable online food ordering and delivery platform. Founded in 2014,
            Swiggy is based out of Bangalore, India and, as of 2024, operates in over 500 cities across the country.
          </p>
          <p className="text-lg mb-4">
            Swiggy partners with thousands of restaurants to offer customers a wide range of cuisines and dishes
            delivered straight to their doorsteps. With a focus on technology and customer experience, Swiggy has
            revolutionized the food delivery industry in India.
          </p>
          <p className="text-lg mb-4">
            Whether you're craving your favorite local delicacy or looking to try something new, Swiggy makes it easy
            and convenient to order food online and have it delivered quickly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
