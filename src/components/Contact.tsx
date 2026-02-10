"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      {/* Grecas (Aztec step-fret) decorative border */}
      <svg
        className={styles.grecas}
        viewBox="0 0 1200 28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="greca" x="0" y="0" width="56" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M0 14 L7 14 L7 7 L14 7 L14 0 L21 0 L21 7 L28 7 L28 14 L35 14 L35 7 L42 7 L42 0 L49 0 L49 7 L56 7 L56 14"
              fill="none"
              stroke="rgba(26,18,12,0.08)"
              strokeWidth="2"
            />
            <path
              d="M0 21 L7 21 L7 28 L14 28 L14 21 L21 21 L21 14 L28 14 L28 21 L35 21 L35 28 L42 28 L42 21 L49 21 L49 14 L56 14"
              fill="none"
              stroke="rgba(204,107,60,0.06)"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="1200" height="28" fill="url(#greca)" />
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
