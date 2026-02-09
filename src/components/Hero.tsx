"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">

        {/* LEFT — BRANDING */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col justify-center px-8 md:px-20"
        >
          {/* Logo placeholder */}
          <div className="mb-6 text-xs tracking-[0.3em] text-neutral-400 uppercase">
            Taquizas
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Estilo Chapala
          </h1>

          <p className="mt-4 max-w-md text-lg text-neutral-400">
            Authentic taco catering for unforgettable events.
          </p>

          <div className="mt-8">
            <span className="inline-block text-sm tracking-widest text-neutral-500">
              Scroll to explore
            </span>
          </div>
        </motion.div>

        {/* RIGHT — VIDEO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/landing-page.MOV" type="video/quicktime" />
          </video>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>

      </div>
    </section>
  );
}
