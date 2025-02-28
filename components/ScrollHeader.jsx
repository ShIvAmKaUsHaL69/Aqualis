"use client";
import { useState, useEffect } from "react";
import Header from "./Header";

export default function ScrollHeader() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = Math.max(window.scrollY, 0); // Prevent negative values (iOS bug)
      setIsScrolling(true);

      if (!ticking) {
        requestAnimationFrame(() => {
          if (scrollY < 10) {
            setVisible(true); // Always show when at the very top
          } else if (scrollY > lastScrollY) {
            setVisible(false); // Hide when scrolling down
          } else {
            setVisible(true); // Show when scrolling up
          }

          setLastScrollY(scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleScrollEnd = () => {
      setTimeout(() => setIsScrolling(false), 300);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchend", handleScrollEnd);
    window.addEventListener("mouseup", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchend", handleScrollEnd);
      window.removeEventListener("mouseup", handleScrollEnd);
    };
  }, [lastScrollY]);

  return <Header className={`${visible ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300`} />;
}
