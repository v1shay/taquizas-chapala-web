"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const CART_STORAGE_KEY = "tc_cart_v1";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const;

const revealOnScroll = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
} as const;

export default function Offerings() {
  const [cart, setCart] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];

    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) return [];

      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed) && parsed.every((x) => typeof x === "string")) {
        return parsed;
      }

      return [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = useMemo(() => cart.length, [cart.length]);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore storage write errors
    }
  }, [cart]);

  function addToCart(item: string) {
    setCart((prev) => [...prev, item]);
    setIsCartOpen(true);
  }

  function removeFromCart(index: number) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <section className={styles.section} id="menu" aria-labelledby="menu-title">
      <div className={styles.inner}>
        <motion.header className={styles.header} {...fadeUp}>
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
              className={styles.block}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className={styles.blockTitle}>{block.title}</h3>

              <ul className={styles.list}>
                {block.items.map((item) => (
                  <motion.li key={item} className={styles.listItem} {...revealOnScroll}>
                    <span>{item}</span>
                    <button
                      type="button"
                      className={styles.addBtn}
                      onClick={() => addToCart(item)}
                      aria-label={`Add ${item}`}
                    >
                      +
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      {/* FLOATING CART */}
      <div className={styles.cartDock}>
        <motion.button
          type="button"
          className={styles.cartToggle}
          onClick={() => setIsCartOpen((v) => !v)}
          whileTap={{ scale: 0.98 }}
          aria-expanded={isCartOpen}
          aria-controls="floating-cart"
        >
          <span className={styles.cartToggleLabel}>Cart</span>
          <motion.span
            className={styles.cartToggleCount}
            key={cartCount}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            aria-label={`${cartCount} items`}
          >
            {cartCount}
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {isCartOpen ? (
            <motion.aside
              id="floating-cart"
              className={styles.cart}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: 10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-label="Cart"
            >
              <div className={styles.cartHeader}>
                <h4 className={styles.cartTitle}>Your Order</h4>
                <button
                  type="button"
                  className={styles.cartClose}
                  onClick={() => setIsCartOpen(false)}
                >
                  Close
                </button>
              </div>

              {cart.length === 0 ? (
                <p className={styles.cartEmpty}>No items yet</p>
              ) : (
                <ul className={styles.cartList}>
                  {cart.map((item, i) => (
                    <li key={`${item}-${i}`} className={styles.cartRow}>
                      <span className={styles.cartItemName}>{item}</span>
                      <button
                        type="button"
                        className={styles.cartRemoveBtn}
                        onClick={() => removeFromCart(i)}
                        aria-label={`Remove ${item}`}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <div className={styles.cartFooter}>
                <button
                  type="button"
                  className={styles.cartClearBtn}
                  onClick={clearCart}
                  disabled={cart.length === 0}
                >
                  Clear
                </button>
                <a className={styles.cartCta} href="#contact">
                  Request a quote
                </a>
              </div>
            </motion.aside>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
