"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffb199] via-[#ff9a8b] to-[#ff6a88]" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 md:grid-cols-2">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col justify-center px-12 md:px-28"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xs uppercase text-white/80 mb-6"
          >
            Taquizas
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1 }}
            className="text-6xl md:text-8xl font-bold leading-[0.95]"
          >
            Estilo
            <br />
            Chapala
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 max-w-md text-lg md:text-xl text-white/85"
          >
            Authentic taco catering for unforgettable events.
          </motion.p>
        </motion.div>

        {/* RIGHT — VIDEO */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          {/* VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="public/landing-page.MOV" />
          </video>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>

      </div>
    </section>
  );
}
