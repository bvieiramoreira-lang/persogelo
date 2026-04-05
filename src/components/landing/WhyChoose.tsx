"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, CircleDollarSign, RefreshCw, BadgeCheck, CalendarClock, PackageOpen } from "lucide-react";

interface WhyChooseProps {
  onOpenBudget: () => void;
}

export default function WhyChoose({ onOpenBudget }: WhyChooseProps) {
  const cards = [
    {
      icon: <Heart strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-white mb-3" />,
      title: "83% das pessoas preferem esse brinde",
      text: "É um brinde extremamente útil que valoriza o cuidado da sua clínica e conquista de verdade os pacientes!",
      style: "bg-[#1f2937] text-white", 
      titleColor: "text-white"
    },
    {
      icon: <Lightbulb strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3" />,
      title: "85% vão lembrar sempre da sua marca",
      text: "A maioria nunca esquece quem presenteou em um momento de cuidado. Sua clínica fica marcada na memória de forma super positiva!",
      style: "bg-white text-black", 
      titleColor: "text-black"
    },
    {
      icon: <CircleDollarSign strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-white mb-3" />,
      title: "7x mais barato que campanhas digitais",
      text: "A bolsa térmica em formato de gelo personalizado tem custo por impacto até 7x menor do que impulsionamento e tráfego pago online.",
      style: "bg-[#1f2937] text-white",
      titleColor: "text-white"
    },
    {
      icon: <RefreshCw strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3" />,
      title: "63% das pessoas reutilizam em casa",
      text: "Sua marca passa a fazer parte do dia a dia da pessoa. Vai pra academia, piqueniques e viagens, gerando marketing visual orgânico onde ela for.",
      style: "bg-white text-black",
      titleColor: "text-black"
    }
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      
      {/* BG Pattern - Opcional para textura no azul */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* TÍTULO PRINCIPAL */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white tracking-tight mb-14 drop-shadow-sm">
          Por que fazer<br className="md:hidden" /> Gelos Personalizados?
        </h2>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-16 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-[1.5rem] p-6 md:p-8 flex flex-col items-center text-center shadow-xl transition-transform hover:-translate-y-2 border border-white/5 ${card.style}`}
            >
              {card.icon}
              <h3 className={`text-lg md:text-xl font-bold mb-3 ${card.titleColor} leading-tight`}>{card.title}</h3>
              <p className={`text-sm font-medium leading-relaxed opacity-90 ${card.style === 'bg-white text-black' ? 'text-gray-700' : 'text-gray-300'}`}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTÃO CENTRAL */}
        <div className="flex justify-center mb-20">
           <motion.button 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             onClick={onOpenBudget}
             className="bg-[#ff5757] text-white font-black uppercase tracking-wider text-base md:text-lg px-10 py-4 rounded-full shadow-lg hover:bg-[#e64747] hover:scale-105 transition-all duration-300"
           >
             Iniciar Atendimento
           </motion.button>
        </div>

        {/* ICONS INFORMATIVOS ABAIXO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto items-start relative pb-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="bg-white/10 p-4 md:p-5 rounded-full backdrop-blur-md mb-1 shadow-inner border border-white/10">
              <BadgeCheck strokeWidth={1.5} className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white">Fabricação Própria</h4>
            <p className="text-white/90 text-sm md:text-base font-medium max-w-[260px]">Matéria prima importada e atóxica. Garantindo segurança absoluta e durabilidade.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="bg-white/10 p-4 md:p-5 rounded-full backdrop-blur-md mb-1 shadow-inner border border-white/10">
              <CalendarClock strokeWidth={1.5} className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white">Prazo de fabricação</h4>
            <p className="text-white/90 text-sm md:text-base font-medium max-w-[260px]">A partir de 15 dias úteis, ou conforme o layout de formato aprovado.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="bg-white/10 p-4 md:p-5 rounded-full backdrop-blur-md mb-1 shadow-inner border border-white/10">
              <PackageOpen strokeWidth={1.5} className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white">Pedido mínimo</h4>
            <p className="text-white/90 text-sm md:text-base font-medium max-w-[260px]">A partir de 50 unidades idênticas do mesmo layout selecionado.</p>
          </motion.div>

          {/* Setinhas (Apenas no Desktop) */}
          <div className="hidden md:block absolute left-[30%] top-[20%] opacity-30 text-white font-light text-6xl">›</div>
          <div className="hidden md:block absolute right-[30%] top-[20%] opacity-30 text-white font-light text-6xl">›</div>

        </div>
      </div>
    </section>
  );
}
