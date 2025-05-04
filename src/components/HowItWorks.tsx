"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Create Your Community',
      description: 'Set up your space and define your communitys unique access requirements.',
      icon: '✨',
    },
    {
      id: 2,
      title: 'Connect Assets',
      description: 'Link NFTs, tokens, and other digital assets to enable access control.',
      icon: '🔗',
    },
    {
      id: 3,
      title: 'Customize Experience',
      description: 'Design membership tiers and exclusive content for your community.',
      icon: '🎨',
    },
    {
      id: 4,
      title: 'Engage & Grow',
      description: 'Foster meaningful interactions and expand your community over time.',
      icon: '📈',
    },
  ];

  return (
    <section className="py-24" id="howitworks">
      {/* You can customize the background color here */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* You can customize the heading color here */}
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          {/* You can customize the subtitle color here */}
          <p className="text-xl max-w-2xl mx-auto opacity-80">
            Follow these simple steps to transform your assets into thriving communities with Nimbus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Card container - You can customize the background and border colors here */}
              <div className="relative w-full h-full rounded-2xl p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden">
                {/* Decorative gradient - You can customize this gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-2xl -z-10" />
                
                {/* Icon container - You can customize the background color here */}
                <div className="flex items-center justify-center w-12 h-12 text-2xl rounded-full mb-4 bg-gradient-to-br from-purple-500 to-blue-500">
                  {step.icon}
                </div>
                
                <div className="space-y-3">
                  {/* Step indicator - You can customize the color here */}
                  <p className="text-sm font-semibold text-blue-400">Step {step.id}</p>
                  
                  {/* Card title - You can customize the text color here */}
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  
                  {/* Card description - You can customize the text color here */}
                  <p className="opacity-70">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;