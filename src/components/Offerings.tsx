"use client";

import { motion } from "framer-motion";
import styles from "./Offerings.module.css";

type MenuBlock = {
  title: string;
  items: string[];
  reverse?: boolean;
};

const BLOCKS: MenuBlock[] = [
  {
    title: "MEATS",
    items: [
      "Asada (grilled steak)",
      "Al pastor",
      "Pollo (seasoned chicken)",
      "Carnitas",
      "Vegetarian option available on request",
    ],
  },
  {
    title: "TOPPINGS & SIDES",
    reverse: true,
    items: [
      "Cilantro + onion",
      "Lime + radishes",
      "Grilled onions + peppers",
      "Rice + beans",
      "Chips",
    ],
  },
  {
    title: "SALSAS & EXTRAS",
    items: [
      "Salsa roja",
      "Salsa verde",
      "Pico de gallo",
      "Salsa de árbol (spicy)",
      "Guacamole + add-ons",
    ],
  },
];

const blockReveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
} as const;

export default function Offerings() {
  return (
    <section className={styles.section} id="menu" aria-labelledby="menu-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title} id="menu-title">
            MENU
          </h2>
          <p className={styles.subheader}>
            We bring the plancha, tortillas, and a full taco station—your guests choose their favorites
            and we serve fresh throughout your event.
          </p>
        </motion.header>

        <div className={styles.blocks}>
          {BLOCKS.map((block) => (
            <motion.article
              key={block.title}
              className={[styles.block, block.reverse ? styles.blockReverse : ""]
                .filter(Boolean)
                .join(" ")}
              {...blockReveal}
            >
              <div className={styles.textCol}>
                <h3 className={styles.blockTitle}>{block.title}</h3>
                <ul className={styles.list}>
                  {block.items.map((item) => (
                    <li key={item} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.imageCol} aria-hidden="true">
                <div className={styles.imagePlaceholder} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
