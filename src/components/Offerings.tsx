"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Offerings.module.css";

type MenuBlock = {
  title: string;
  items: string[];
};

const BLOCKS: MenuBlock[] = [
  {
    title: "MEATS",
    items: [
      "Asada (grilled steak)",
      "Al pastor",
      "Pollo (seasoned chicken)",
      "Carnitas",
      "Vegetarian option",
    ],
  },
  {
    title: "TOPPINGS & SIDES",
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
      "Guacamole",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function Offerings() {
  const [cart, setCart] = useState<string[]>([]);

  function addToCart(item: string) {
    setCart((prev) => [...prev, item]);
  }

  function removeFromCart(index: number) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <section className={styles.section} id="menu">
      <div className={styles.inner}>
        <motion.header className={styles.header} {...fadeUp}>
          <h2 className={styles.title}>MENU</h2>
          <p className={styles.subheader}>
            We bring the plancha, tortillas, and a full taco station—your guests choose their favorites
            and we serve fresh throughout your event.
          </p>
        </motion.header>

        <div className={styles.blocks}>
          {BLOCKS.map((block) => (
            <motion.article
              key={block.title}
              className={styles.block}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className={styles.blockTitle}>{block.title}</h3>

              <ul className={styles.list}>
                {block.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span>{item}</span>
                    <button
                      className={styles.addBtn}
                      onClick={() => addToCart(item)}
                      aria-label={`Add ${item}`}
                    >
                      +
                    </button>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      {/* CART */}
      <AnimatePresence>
        <motion.aside
          className={styles.cart}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <h4 className={styles.cartTitle}>Your Order</h4>

          {cart.length === 0 ? (
            <p className={styles.cartEmpty}>No items yet</p>
          ) : (
            <ul className={styles.cartList}>
              {cart.map((item, i) => (
                <li key={`${item}-${i}`}>
                  {item}
                  <button onClick={() => removeFromCart(i)}>×</button>
                </li>
              ))}
            </ul>
          )}
        </motion.aside>
      </AnimatePresence>
    </section>
  );
}
