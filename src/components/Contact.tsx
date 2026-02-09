"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
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
