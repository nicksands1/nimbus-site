import { twMerge } from "tailwind-merge";
import { SectionBorder } from "./SectionBorder";
import { SectionContent } from "./SectionContent";
import { FaCheckCircle } from "react-icons/fa";

const tierColors = {
  white: "text-white",
  yellow: "text-yellow-400",
  amber: "text-amber-300",
  orange: "text-orange-300",
};

export const pricingTiers = [
  {
    title: "Basic",
    description: "Build simple token-gated sites with essential tools",
    price: 150,
    features: ["1 project", "Basic templates", "Nimbus branding"],
    color: "white",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "Premium",
    description: "Expand your token utility with advanced customization",
    price: 249,
    features: [
      "3 projects",
      "Premium templates",
      "Multi-token access rules",
      "Custom domain",
      "No Nimbus branding",
    ],
    color: "yellow",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "Enterprise",
    description: "Comprehensive tools for serious web3 communities",
    price: "Varies",
    features: [
      "10 projects",
      "All templates + priority access",
      "Advanced analytics",
      "Priority support",
      "API access",
    ],
    color: "orange",
    className: "lg:py-12 lg:my-6",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <SectionBorder>
          <SectionContent>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-200 leading-tight">
              Flexible plans for every need
            </h2>
            <div className="mt-12 flex flex-col lg:flex-row lg:items-start gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.title}
                  className={twMerge(
                    "border border-white/10 bg-white/5 rounded-3xl px-6 py-12 w-full max-w-sm mx-auto flex-1",
                    tier.className
                  )}
                >
                  <h3 className={twMerge("font-semibold text-4xl", tierColors[tier.color as keyof typeof tierColors])}>

                    {tier.title}
                  </h3>
                  <p className="mt-4 text-gray-400">{tier.description}</p>

                  <div className="mt-8">
                    {typeof tier.price === "number" ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-semibold text-gray-200 align-top">$</span>
                        <span className="text-7xl font-semibold text-gray-200">{tier.price}</span>
                        <span className="text-gray-400 text-lg">/month</span>
                      </div>
                    ) : (
                      <span className="text-3xl font-semibold text-gray-200">{tier.price}</span>
                    )}
                  </div>

                  <ul className="flex flex-col gap-4 mt-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="border-t border-yellow-200 pt-4 flex gap-4">
                        <FaCheckCircle className="size-6 text-yellow-400 flex-shrink-0" />
                        <span className="font-medium text-gray-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Pricing;
