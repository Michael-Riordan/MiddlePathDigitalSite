'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - Logo & Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start space-y-6"
        >

          <h1 className="text-4xl md:text-5xl font-bold text-green-950 leading-tight">
            Websites Without Subscriptions
          </h1>

          <p className="text-lg text-gray-600">
            At <span className="font-semibold text-green-800">Middle Path Digital</span>, 
            we create simple, balanced websites that you fully own. 
            One-time cost. Zero ongoing fees. Peace of mind for your business.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✅ No Subscriptions</li>
            <li>✅ Balanced Websites</li>
            <li>✅ Peace of Mind</li>
          </ul>

          <div className="flex space-x-4 pt-4">
            <a
              href="tel:6316171415"
              className="px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-800 transition"
            >
              Call Now
            </a>
            <a
              href="#our-work"
              className="px-6 py-3 border border-green-700 text-green-700 rounded-2xl shadow hover:bg-green-50 transition"
            >
              See Examples
            </a>
          </div>
        </motion.div>

        {/* Right side - Visual Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.55 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-2xl flex items-center justify-center">
            <Image
              src="/NewMiddlePathLogo.png"
              alt="Balanced Web Design"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}