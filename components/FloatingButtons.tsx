"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/918209912773"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact CoreViaSupport on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#247A52] text-white shadow-[0_14px_32px_rgba(36,122,82,0.28)] transition hover:-translate-y-1 hover:bg-[#1D6544]"
      >
        <MessageCircle size={21} />
      </a>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E7DDD8] bg-white text-[#201A16] shadow-[0_12px_28px_rgba(32,26,22,0.12)] transition hover:-translate-y-1 hover:border-[#C21E3A] hover:text-[#C21E3A]"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}