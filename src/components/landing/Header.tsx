"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenBudget: () => void;
}

export default function Header({ onOpenBudget }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Produtos", href: "#produtos" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Dúvidas", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md py-3 border-b border-silver/30" : "py-5 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 relative z-50">
          <img 
            src="/logo.png" 
            alt="Persogelo" 
            className="h-14 md:h-16 w-auto object-contain transition-all"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-base font-bold text-black tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onOpenBudget}
            className="bg-[#ff5757] hover:bg-[#e64747] text-white font-bold py-2.5 px-6 rounded-xl transition-colors shadow-md shadow-[#ff5757]/20"
          >
            Orçamento Rápido
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col pt-24 px-6 z-40">
            <ul className="flex flex-col gap-6 text-xl font-semibold mb-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-foreground hover:text-primary transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBudget();
              }}
              className="bg-[#ff5757] hover:bg-[#e64747] text-white font-bold py-3 px-6 rounded-xl text-center shadow-md"
            >
              Orçamento Rápido
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
