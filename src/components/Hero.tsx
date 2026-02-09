"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>

        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.label}>TAQUIZAS</span>
          <h1 className={styles.title}>
            Estilo<br />Chapala
          </h1>
          <p className={styles.subtitle}>
            Authentic taco catering for unforgettable events
          </p>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <video autoPlay muted loop playsInline>
            <source src="/landing-page.MOV" />
          </video>
          <div className={styles.overlay} />
        </motion.div>

      </div>
    </section>
  );
}
