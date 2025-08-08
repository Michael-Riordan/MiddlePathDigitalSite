'use client'

import { useState } from "react";
import Reason from "./Reason";

const reasons = [
  {
    title: "One-Time Cost, Lifetime Ownership",
    description: "Pay once, and the website is yours forever.",
    details:
      "Unlike subscription-based platforms, Middle Path Digital charges a one-time fee for your website. You own it outright, with no recurring costs draining your business every month."
  },
  {
    title: "No Hidden Fees or Lock-In",
    description: "Your site, your choice of hosting.",
    details:
      "Canceling a subscription with an AI builder often means losing your site. With us, you keep everything—your files, your design, your content—and can host anywhere you like."
  },
  {
    title: "Tailored to Your Business",
    description: "Custom-built, not just a template.",
    details:
      "AI sites often churn out generic templates. We handcraft your site using Next.js, React, and Tailwind so it reflects your unique brand and leaves a lasting impression."
  },
  {
    title: "Fast, Modern, and Scalable",
    description: "Built for speed and future growth.",
    details:
      "Using the same tech stack trusted by top companies, we ensure your website is lightning-fast and ready to grow with your business—whether that means adding features or scaling traffic."
  },
  {
    title: "Human Understanding Over Algorithms",
    description: "We listen, design, and deliver.",
    details:
      "AI tools can’t capture your business’s personality or values. We take the time to understand your story, your goals, and your customers to create a site that truly connects."
  },
  {
    title: "Full Control Over Design & Content",
    description: "No limitations, no compromises.",
    details:
      "Subscription platforms box you into their system. With us, you can customize every aspect of your site, from layout to functionality, without being limited by platform rules."
  },
  {
    title: "Ethical, Mindful Development",
    description: "Balanced, functional, and simple.",
    details:
      "Inspired by the 'Middle Path' philosophy, we build websites that strike the perfect balance—functional, beautiful, and free from unnecessary complexity or upselling."
  },
  {
    title: "Peace of Mind Support",
    description: "Real human help, when you need it.",
    details:
      "Forget automated support bots and ticket systems. You can call or text directly for updates, changes, or advice—helping you focus on your business, not your website headaches."
  }
];

export default function Why() {
    const [activeReason, setActiveReason] = useState(null);


    return (
        <section className="text-green-900">
            <h1 className="text-4xl md:text-4xl text-center mt-20 font-semibold">Why Choose Middle Path?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-evenly mt-10 flex-wrap p-6">
                {reasons.map((reason, idx) => {
                    return (
                        <Reason 
                            key={idx}
                            title={reason.title}
                            description={reason.description}
                            onClick={() => setActiveReason(reason)}
                        />
                    );
                })}
            </div>

            {activeReason && (
                <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xl">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-3/4 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
                            onClick={() => setActiveReason(null)}
                        >
                            ✕
                        </button>
                        <h2 className="text-3xl font-bold">{activeReason.title}</h2>
                        <p className="mt-4 text-gray-700 text-xl">{activeReason.details}</p>
                    </div>
                </div> 
            )}
        </section>
    );
}