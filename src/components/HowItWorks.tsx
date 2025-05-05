"use client";

import React from 'react';
import { Button } from './ui/MovingBorders';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose Token',
      description: 'Users connect their Solana wallet and select the token they want to gate content with. Nimbus supports any SPL token — no allowlist or custom integration needed',
    },
    {
      id: 2,
      title: 'Build Your Page',
      description: 'Use Nimbus’s intuitive, no-code editor to build a landing page, portal, or dashboard. Add gated files, announcements, embeds, or links — all without writing a single line of code.',
    },
    {
      id: 3,
      title: 'Set Access Rules',
      description: 'Define exactly who gets access by setting token-gating rules: minimum balance, time-locks, or token type (e.g., NFTs, memecoins, governance tokens). Nimbus checks wallet balances in real-time to validate entry.',
    },
    {
      id: 4,
      title: 'Deploy and Share',
      description: 'Once published, your page is live with a unique URL. Share it with your community, and anyone holding your token can unlock access — turning your coin into a product.',
    },
  ];

  return (
    <section className="py-24" id="howitworks">
      {/* You can customize the background color here */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* You can customize the heading color here */}
          <h1 className='heading'>
        How it  <span className='text-yellow-400'>Works</span>
      </h1>
          {/* You can customize the subtitle color here */}
          <p className="text-xl max-w-2xl mx-auto opacity-80 py-4">
            Follow these simple steps to transform your assets into thriving communities with Nimbus
          </p>
        </div>

        <div className="hidden lg:flex flex-row gap-4 w-full">
  {steps.map((step, index) => (
    <Button
      key={step.title || index}
      className="w-full text-white border-neutral-200 dark:border-yellow-400"
      duration={Math.floor(Math.random() * 10000)}
    >
      <div className="relative w-full h-full rounded-2xl p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-2xl -z-10" />

        <div className="space-y-3">
          <p className="text-sm font-semibold text-yellow-400">Step {step.id}</p>
          <h3 className="text-xl font-bold">{step.title}</h3>
          <p className="opacity-70">{step.description}</p>
        </div>
      </div>
    </Button>
  ))}
</div>

      </div>
    </section>
  );
};

export default HowItWorks;