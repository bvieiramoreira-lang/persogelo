"use client";

import { Play } from "lucide-react";

interface VideoCTAProps {
  onOpenVideo: () => void;
}

export default function VideoCTA({ onOpenVideo }: VideoCTAProps) {
  return (
    <section className="bg-primary border-y border-white/10 overflow-hidden relative">
      {/* Elementos de background bem sutis */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]" />
      
      <div 
        onClick={onOpenVideo}
        className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-6 md:py-8 cursor-pointer group"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-[#ff5757] flex items-center justify-center text-white shadow-lg shadow-[#ff5757]/30 group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
            <Play size={28} className="translate-x-0.5 fill-white" />
          </div>
          
          <div className="flex flex-col text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Assista o vídeo e entenda melhor
            </h3>
            <p className="text-white/70 text-sm md:text-base font-medium">
              Veja em 1 minuto porque nosso produto é campeão de vendas.
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-8 rounded-full whitespace-nowrap transition-colors flex items-center gap-2 text-sm uppercase tracking-wider backdrop-blur-sm group-hover:border-white/40">
            Dar o Play <Play size={14} className="fill-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
