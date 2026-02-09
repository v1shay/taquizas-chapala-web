"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col justify-center px-10 md:px-24 z-10"
        >
          <span className="text-xs tracking-[0.35em] text-neutral-400 uppercase mb-6">
            Taquizas
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Estilo Chapala
          </h1>

          <p className="mt-6 max-w-md text-lg text-neutral-400">
            Authentic taco catering for unforgettable events.
          </p>
        </motion.div>

        {/* RIGHT — VIDEO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* TEMP GRADIENT FALLBACK (guaranteed to render) */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-800" />

          {/* VIDEO (will layer on top if supported) */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/landing-page.MOV" />
          </video>

          <div className="absolute inset-0 bg-black/35" />
        </motion.div>

      </div>
    </section>
  );
}
