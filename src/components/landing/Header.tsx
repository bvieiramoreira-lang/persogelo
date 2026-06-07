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

        {/* CTA Button & WhatsApp */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://wa.me/5548999552658"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black hover:text-[#25D366] transition-colors font-bold text-sm tracking-wide group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#25D366] group-hover:scale-110 transition-transform"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.638 1.97 14.162.94 11.53.94c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.387 1.357 4.847l-.993 3.629 3.734-.972zm11.23-6.223c-.302-.15-1.78-.875-2.056-.975-.275-.1-.476-.15-.675.15-.199.3-.77.975-.945 1.175-.175.2-.35.225-.65.075-.302-.15-1.272-.469-2.423-1.494-.895-.797-1.498-1.782-1.674-2.081-.175-.3-.018-.462.13-.61.135-.133.303-.35.454-.525.152-.175.202-.3.303-.5.101-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.007-.368-.009-.565-.009-.199 0-.523.074-.797.374-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.116 4.525.715.31 1.273.495 1.71.635.717.228 1.37.195 1.885.118.574-.086 1.78-.725 2.03-1.425.25-.7.25-1.299.175-1.425-.075-.125-.275-.2-.575-.35z" />
            </svg>
            <span>(48) 99955-2658</span>
          </a>
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
            <a
              href="https://wa.me/5548999552658"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-foreground hover:text-[#25D366] border border-silver/50 hover:border-[#25D366]/50 transition-colors font-bold text-base py-3 px-6 rounded-xl mb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#25D366]"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.638 1.97 14.162.94 11.53.94c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.387 1.357 4.847l-.993 3.629 3.734-.972zm11.23-6.223c-.302-.15-1.78-.875-2.056-.975-.275-.1-.476-.15-.675.15-.199.3-.77.975-.945 1.175-.175.2-.35.225-.65.075-.302-.15-1.272-.469-2.423-1.494-.895-.797-1.498-1.782-1.674-2.081-.175-.3-.018-.462.13-.61.135-.133.303-.35.454-.525.152-.175.202-.3.303-.5.101-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.007-.368-.009-.565-.009-.199 0-.523.074-.797.374-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.116 4.525.715.31 1.273.495 1.71.635.717.228 1.37.195 1.885.118.574-.086 1.78-.725 2.03-1.425.25-.7.25-1.299.175-1.425-.075-.125-.275-.2-.575-.35z" />
              </svg>
              <span>(48) 99955-2658</span>
            </a>
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
