"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      {/* Grecas (Aztec step-fret) decorative border — top */}
      <svg
        className={styles.grecasTop}
        viewBox="0 0 1200 44"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="greca-top" x="0" y="0" width="56" height="44" patternUnits="userSpaceOnUse">
            {/* Primary step-fret */}
            <path
              d="M0 14 L7 14 L7 7 L14 7 L14 0 L21 0 L21 7 L28 7 L28 14 L35 14 L35 7 L42 7 L42 0 L49 0 L49 7 L56 7 L56 14"
              fill="none"
              stroke="rgba(180,60,30,0.22)"
              strokeWidth="2.5"
            />
            {/* Secondary mirrored step-fret */}
            <path
              d="M0 22 L7 22 L7 29 L14 29 L14 36 L21 36 L21 29 L28 29 L28 22 L35 22 L35 29 L42 29 L42 36 L49 36 L49 29 L56 29 L56 22"
              fill="none"
              stroke="rgba(204,85,50,0.15)"
              strokeWidth="2"
            />
            {/* Connecting dots */}
            <circle cx="14" cy="18" r="1.5" fill="rgba(180,60,30,0.18)" />
            <circle cx="42" cy="18" r="1.5" fill="rgba(180,60,30,0.18)" />
          </pattern>
        </defs>
        <rect width="1200" height="44" fill="url(#greca-top)" />
      </svg>

      {/* Grecas decorative border — bottom */}
      <svg
        className={styles.grecasBottom}
        viewBox="0 0 1200 44"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="greca-bottom" x="0" y="0" width="56" height="44" patternUnits="userSpaceOnUse">
            <path
              d="M0 14 L7 14 L7 7 L14 7 L14 0 L21 0 L21 7 L28 7 L28 14 L35 14 L35 7 L42 7 L42 0 L49 0 L49 7 L56 7 L56 14"
              fill="none"
              stroke="rgba(180,60,30,0.18)"
              strokeWidth="2"
            />
            <path
              d="M0 22 L7 22 L7 29 L14 29 L14 36 L21 36 L21 29 L28 29 L28 22 L35 22 L35 29 L42 29 L42 36 L49 36 L49 29 L56 29 L56 22"
              fill="none"
              stroke="rgba(204,85,50,0.12)"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="1200" height="44" fill="url(#greca-bottom)" />
      </svg>

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title} id="contact-title">
            Please contact us for quotes
          </h2>

          <div className={styles.people}>
            <div className={styles.person}>
              <div className={styles.name}>Maria</div>
              <a className={styles.phone} href="tel:+14089108397">
                408-910-8397
              </a>
            </div>

            <div className={styles.person}>
              <div className={styles.name}>Ana</div>
              <a className={styles.phone} href="tel:+14089103057">
                408-910-3057
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
