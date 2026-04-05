"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onOpenBudget: () => void;
}

export default function Hero({ onOpenBudget }: HeroProps) {
  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-background flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center h-full">
          
          {/* Text Content - Formato Visual Refinado Baseado na Referência */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full justify-center items-center text-center h-full pt-10 lg:pt-0 mx-auto"
          >
            <div className="flex flex-col gap-1 mb-8 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.2rem] font-bold tracking-tight text-black whitespace-nowrap">
                Bolsas Térmicas Personalizadas
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-[1.7rem] text-black font-light leading-snug mt-2 flex flex-col items-center">
                <span>que elevam a experiência do seu paciente</span>
                <span className="font-extrabold mt-1">e fortalecem sua marca</span>
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm font-medium text-foreground/80 w-full max-w-2xl mx-auto uppercase tracking-[0.15em] leading-relaxed mb-8">
              Já produzimos <span className="font-extrabold">milhares</span> de bolsas personalizadas com a marca de <span className="font-extrabold">clínicas</span> de todo o Brasil
            </p>
            
            <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={onOpenBudget}
                className="w-full sm:w-auto bg-primary hover:bg-[#343976] text-white text-xl font-black py-4 px-12 rounded-[8px] transition-all duration-300 shadow-md uppercase tracking-wide"
              >
                SOLICITAR ORÇAMENTO
              </button>
              <span className="text-sm font-bold text-foreground/60 tracking-[0.15em] uppercase">
                A partir de 30 unidades
              </span>
            </div>
          </motion.div>
          
          {/* Image Content - Aqui ficará a bolsa enviada */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative z-10 w-full max-w-lg lg:max-w-none hover:scale-105 transition-transform duration-700">
              <img 
                src="/images/hero-products.png" 
                alt="Bolsas Térmicas Persogelo Personalizadas" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
