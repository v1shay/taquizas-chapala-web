"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.brand}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          Chapala
        </button>

        <div className={styles.links}>
          <button
            type="button"
            className={styles.navLink}
            onClick={() => scrollTo("menu")}
          >
            Menu
          </button>

          <span className={styles.dot} aria-hidden="true" />

          <button
            type="button"
            className={styles.ctaLink}
            onClick={() => scrollTo("contact")}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
