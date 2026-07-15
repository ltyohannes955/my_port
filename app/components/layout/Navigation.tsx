"use client";

import { useCallback, useEffect, useState } from "react";
import LineSidebar from "@/app/components/reactbits/LineSidebar";

const navItems = [
  "Me",
  "Skills",
  "Education",
  "Projects",
  "GitHub",
  "WakaTime",
  "Contact",
];

const sectionIds = [
  "me",
  "skills",
  "education",
  "projects",
  "github",
  "wakatime",
  "contact",
];

export default function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleItemClick = useCallback((index: number) => {
    const id = sectionIds[index];
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-30">
      <LineSidebar
        items={navItems}
        showIndex={true}
        showMarker={true}
        activeIndex={activeIndex}
        onItemClick={handleItemClick}
      />
    </div>
  );
}
