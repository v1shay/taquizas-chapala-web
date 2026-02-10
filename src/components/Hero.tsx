"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* FULL-SCREEN VIDEO BACKGROUND */}
      <div className={styles.videoBg}>
        <video autoPlay muted loop playsInline>
          <source src="/landing-page.MOV" />
        </video>
        <div className={styles.overlay} />
      </div>

      {/* CENTERED TEXT */}
      <div className={styles.content}>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.span
            className={styles.kicker}
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            TAQUIZAS
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 1 }}
          >
            Estilo<br />Chapala
          </motion.h1>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Authentic Mexican taco catering for unforgettable events
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
