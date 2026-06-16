"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, Info, ShoppingCart } from "lucide-react";

// --- DEFINIÇÃO DOS PREÇOS ESPECÍFICOS POR MODELO (Tabela Gelo Tradicional + Colorido/Glitter)
const PRODUCT_SPECIFIC_PRICES: Record<string, {
  tradicional: { q: number; p1: string; p2: string; }[];
  colorido: { q: number; p1: string; p2: string; }[];
  glitter: { q: number; p1: string; p2: string; }[];
}> = {
  boca: {
    tradicional: [
      { q: 20, p1: "7,15", p2: "8,05" },
      { q: 50, p1: "5,56", p2: "6,26" },
      { q: 100, p1: "4,92", p2: "5,54" },
      { q: 200, p1: "4,45", p2: "5,01" },
      { q: 500, p1: "3,65", p2: "4,11" },
      { q: 1000, p1: "3,34", p2: "3,76" }
    ],
    colorido: [
      { q: 20, p1: "9,40", p2: "10,30" },
      { q: 50, p1: "7,31", p2: "8,01" },
      { q: 100, p1: "6,47", p2: "7,09" },
      { q: 200, p1: "5,85", p2: "6,41" },
      { q: 500, p1: "4,80", p2: "5,26" },
      { q: 1000, p1: "4,39", p2: "4,81" }
    ],
    glitter: [
      { q: 20, p1: "11,65", p2: "12,55" },
      { q: 50, p1: "9,06", p2: "9,76" },
      { q: 100, p1: "8,02", p2: "8,64" },
      { q: 200, p1: "7,25", p2: "7,81" },
      { q: 500, p1: "5,95", p2: "6,41" },
      { q: 1000, p1: "5,44", p2: "5,86" }
    ]
  },
  oval: {
    tradicional: [
      { q: 20, p1: "7,15", p2: "8,05" },
      { q: 50, p1: "5,56", p2: "6,26" },
      { q: 100, p1: "4,92", p2: "5,54" },
      { q: 200, p1: "4,45", p2: "5,01" },
      { q: 500, p1: "3,65", p2: "4,11" },
      { q: 1000, p1: "3,34", p2: "3,76" }
    ],
    colorido: [
      { q: 20, p1: "9,40", p2: "10,30" },
      { q: 50, p1: "7,31", p2: "8,01" },
      { q: 100, p1: "6,47", p2: "7,09" },
      { q: 200, p1: "5,85", p2: "6,41" },
      { q: 500, p1: "4,80", p2: "5,26" },
      { q: 1000, p1: "4,39", p2: "4,81" }
    ],
    glitter: [
      { q: 20, p1: "11,65", p2: "12,55" },
      { q: 50, p1: "9,06", p2: "9,76" },
      { q: 100, p1: "8,02", p2: "8,64" },
      { q: 200, p1: "7,25", p2: "7,81" },
      { q: 500, p1: "5,95", p2: "6,41" },
      { q: 1000, p1: "5,44", p2: "5,86" }
    ]
  },
  olhos: {
    tradicional: [
      { q: 20, p1: "6,07", p2: "6,97" },
      { q: 50, p1: "4,72", p2: "5,42" },
      { q: 100, p1: "4,18", p2: "4,80" },
      { q: 200, p1: "3,78", p2: "4,34" },
      { q: 500, p1: "3,10", p2: "3,56" },
      { q: 1000, p1: "2,83", p2: "3,25" }
    ],
    colorido: [
      { q: 20, p1: "8,32", p2: "9,22" },
      { q: 50, p1: "6,47", p2: "7,17" },
      { q: 100, p1: "5,73", p2: "6,35" },
      { q: 200, p1: "5,18", p2: "5,74" },
      { q: 500, p1: "4,25", p2: "4,71" },
      { q: 1000, p1: "3,88", p2: "4,30" }
    ],
    glitter: [
      { q: 20, p1: "10,57", p2: "11,47" },
      { q: 50, p1: "8,22", p2: "8,92" },
      { q: 100, p1: "7,28", p2: "7,90" },
      { q: 200, p1: "6,58", p2: "7,14" },
      { q: 500, p1: "5,40", p2: "5,86" },
      { q: 1000, p1: "4,93", p2: "5,35" }
    ]
  },
  bola: {
    tradicional: [
      { q: 20, p1: "7,34", p2: "8,24" },
      { q: 50, p1: "5,71", p2: "6,41" },
      { q: 100, p1: "5,06", p2: "5,68" },
      { q: 200, p1: "4,57", p2: "5,13" },
      { q: 500, p1: "3,75", p2: "4,21" },
      { q: 1000, p1: "3,43", p2: "3,85" }
    ],
    colorido: [
      { q: 20, p1: "9,59", p2: "10,49" },
      { q: 50, p1: "7,46", p2: "8,16" },
      { q: 100, p1: "6,61", p2: "7,23" },
      { q: 200, p1: "5,97", p2: "6,53" },
      { q: 500, p1: "4,90", p2: "5,36" },
      { q: 1000, p1: "4,48", p2: "4,90" }
    ],
    glitter: [
      { q: 20, p1: "11,84", p2: "12,74" },
      { q: 50, p1: "9,21", p2: "9,91" },
      { q: 100, p1: "8,16", p2: "8,78" },
      { q: 200, p1: "7,37", p2: "7,93" },
      { q: 500, p1: "6,05", p2: "6,51" },
      { q: 1000, p1: "5,53", p2: "5,95" }
    ]
  },
  absorvente: {
    tradicional: [
      { q: 20, p1: "7,66", p2: "8,56" },
      { q: 50, p1: "5,96", p2: "6,66" },
      { q: 100, p1: "5,28", p2: "5,90" },
      { q: 200, p1: "4,78", p2: "5,32" },
      { q: 500, p1: "3,91", p2: "4,37" },
      { q: 1000, p1: "3,57", p2: "3,99" }
    ],
    colorido: [
      { q: 20, p1: "9,91", p2: "10,81" },
      { q: 50, p1: "7,71", p2: "8,41" },
      { q: 100, p1: "6,83", p2: "7,45" },
      { q: 200, p1: "6,16", p2: "6,72" },
      { q: 500, p1: "5,06", p2: "5,52" },
      { q: 1000, p1: "4,62", p2: "5,04" }
    ],
    glitter: [
      { q: 20, p1: "12,16", p2: "13,06" },
      { q: 50, p1: "9,46", p2: "10,16" },
      { q: 100, p1: "8,38", p2: "9,00" },
      { q: 200, p1: "7,56", p2: "8,12" },
      { q: 500, p1: "6,21", p2: "6,67" },
      { q: 1000, p1: "5,67", p2: "6,09" }
    ]
  },
  dente: {
    tradicional: [
      { q: 20, p1: "7,66", p2: "8,56" },
      { q: 50, p1: "5,96", p2: "6,66" },
      { q: 100, p1: "5,28", p2: "5,90" },
      { q: 200, p1: "4,78", p2: "5,32" },
      { q: 500, p1: "3,91", p2: "4,37" },
      { q: 1000, p1: "3,57", p2: "3,99" }
    ],
    colorido: [
      { q: 20, p1: "9,91", p2: "10,81" },
      { q: 50, p1: "7,71", p2: "8,41" },
      { q: 100, p1: "6,83", p2: "7,45" },
      { q: 200, p1: "6,16", p2: "6,72" },
      { q: 500, p1: "5,06", p2: "5,52" },
      { q: 1000, p1: "4,62", p2: "5,04" }
    ],
    glitter: [
      { q: 20, p1: "12,16", p2: "13,06" },
      { q: 50, p1: "9,46", p2: "10,16" },
      { q: 100, p1: "8,38", p2: "9,00" },
      { q: 200, p1: "7,56", p2: "8,12" },
      { q: 500, p1: "6,21", p2: "6,67" },
      { q: 1000, p1: "5,67", p2: "6,09" }
    ]
  }
};

const getPricesData = (id: string) => {
  const prices = PRODUCT_SPECIFIC_PRICES[id] || PRODUCT_SPECIFIC_PRICES["boca"];
  return {
    tradicional: {
      title: "Modelo Tradicional",
      img: `/images/textura-${id}-tradicional.png`,
      tiers: prices.tradicional,
      colors: [
        { name: "Cristal", hex: "#e0e0e0" }
      ]
    },
    colorido: {
      title: "Modelo Gel Colorido",
      img: `/images/textura-${id}-colorido.png`,
      tiers: prices.colorido,
      colors: [
        { name: "Azul", hex: "#3b82f6" },
        { name: "Vermelho", hex: "#ef4444" },
        { name: "Amarelo", hex: "#eab308" },
        { name: "Verde", hex: "#22c55e" },
        { name: "Roxo", hex: "#a855f7" },
        { name: "Laranja", hex: "#f97316" },
        { name: "Rosa", hex: "#ec4899" }
      ]
    },
    glitter: {
      title: "Modelo Gel Glitter",
      img: `/images/textura-${id}-glitter.png`,
      tiers: prices.glitter,
      colors: [
        { name: "Vermelho", hex: "#ef4444" },
        { name: "Rosa", hex: "#ec4899" },
        { name: "Dourado", hex: "#eab308" },
        { name: "Prata", hex: "#cbd5e1" },
        { name: "Rosé", hex: "#fda4af" }
      ]
    }
  };
};

const ptProducts = [
  { id: "boca", name: "Formato Boca", desc: "Modelado para procedimentos labiais.", spec: "Tamanho: 10x5 cm", img: "/images/product-boca.png", data: getPricesData("boca"), isBestSeller: true },
  { id: "oval", name: "Formato Oval", desc: "Clássico para aplicação no rosto.", spec: "Tamanho: 11x7 cm", img: "/images/product-oval.png", data: getPricesData("oval") },
  { id: "olhos", name: "Formato Olhos", desc: "Perfeito para áreas sensíveis sob os olhos.", spec: "Tamanho: 9x5 cm", img: "/images/product-olhos.png", data: getPricesData("olhos") },
  { id: "bola", name: "Formato Bola", desc: "Formato redondo tradicional e versátil.", spec: "Tamanho: 9x9 cm", img: "/images/product-bola.png", data: getPricesData("bola") },
  { id: "absorvente", name: "Formato Absorvente", desc: "Design alongado e ergonômico.", spec: "Tamanho: 15,5x6 cm", img: "/images/product-absorvente.png", data: getPricesData("absorvente") },
  { id: "dente", name: "Formato Dente", desc: "Exclusivo para clínicas odontológicas.", spec: "Tamanho: 10x8 cm", img: "/images/product-dente.png", data: getPricesData("dente") }
];

export default function Products() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: string) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  useEffect(() => {
    if (selectedId && panelRef.current) {
      setTimeout(() => {
        const yOffset = -100; 
        const y = panelRef.current!.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 150);
    }
  }, [selectedId]);

  const selectedProduct = ptProducts.find((p) => p.id === selectedId);

  return (
    <section id="produtos" className="py-24 bg-white relative selection:bg-primary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Nossos Modelos
          </h2>
          <p className="text-black/80 md:text-lg">
            <span className="block mb-1">Um catálogo completo para representar sua marca.</span>
            <span className="block">Clique em um formato para ver <strong className="text-primary text-xl relative top-0.5 mx-1">tabelas de preço</strong> e texturas.</span>
          </p>
        </div>

        {/* VITRINE DE CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12">
          {ptProducts.map((prod, idx) => {
            const isSelected = selectedId === prod.id;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => handleSelect(prod.id)}
                className={`group rounded-xl md:rounded-[2rem] p-6 md:p-8 transition-all duration-300 border cursor-pointer overflow-hidden relative flex flex-col justify-start gap-4 md:gap-8
                  ${isSelected ? "bg-[#f8fbff] border-primary shadow-xl scale-[1.02] z-10 ring-4 ring-primary/20" : "bg-white border-silver/40 shadow-sm hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2"}
                `}
              >
                {/* Etiqueta de selecao hover */}
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <span className="bg-primary text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    VER PREÇOS
                  </span>
                </div>

                {/* Badge Mais Vendido */}
                {prod.isBestSeller && (
                  <div className="absolute top-0 left-0 bg-[#ff5757] text-white text-[10px] md:text-xs font-black tracking-wide px-3 md:px-4 py-1.5 shadow-md z-20 rounded-tl-xl md:rounded-tl-[2rem] rounded-br-xl">
                    MAIS VENDIDO 🔥
                  </div>
                )}
                
                {/* TÍTULO NO TOPO (Estilo Catálogo) */}
                <div className="text-center z-10 relative">
                  <h3 className={`text-2xl md:text-[2rem] leading-none font-black tracking-tight uppercase transition-colors ${isSelected ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                    {prod.name.replace('Formato ', '')}
                  </h3>
                  <p className="text-foreground/60 font-medium text-xs md:text-sm mt-3 leading-tight hidden md:block">
                    {prod.desc}
                  </p>
                </div>

                {/* IMAGEM ABAIXO */}
                <div className="h-32 md:h-56 flex items-center justify-center relative mt-2 md:mt-4">
                  <img src={prod.img} alt={prod.name} className="max-h-full max-w-[100%] md:max-w-[110%] object-contain relative z-10 drop-shadow-sm group-hover:drop-shadow-lg group-hover:scale-110 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ACCORDION EXPANSIVO (Master-Detail) */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-3xl p-6 md:p-12 border border-silver/50 shadow-2xl relative mt-4">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 md:top-8 md:right-8 bg-background hover:bg-silver/40 text-foreground/50 hover:text-foreground p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="mb-10 border-b border-silver/30 pb-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="w-40 md:w-56 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl scale-150" />
                    <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full object-contain drop-shadow-xl relative z-10" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl text-primary mb-6">
                      Gelo Gel Reutilizável <strong className="font-extrabold">{selectedProduct.name}</strong>
                    </h3>
                    <div className="flex flex-col gap-1.5 text-foreground/80 md:text-xl">
                      <p><span className="italic">Formato:</span> <strong className="font-extrabold">{selectedProduct.name.replace('Formato ', '')}</strong></p>
                      <p><span className="italic">Tamanho:</span> <strong className="font-extrabold">{selectedProduct.spec.replace('Tamanho: ', '')}</strong></p>
                      <p><span className="italic">Material:</span> <strong className="font-extrabold">PVC Cristal</strong></p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-12 md:gap-16 divide-y divide-silver/40">
                  {/* SEÇÃO TRADICIONAL */}
                  <TextureSection data={selectedProduct.data.tradicional} />
                  
                  {/* SEÇÃO COLORIDO */}
                  <TextureSection data={selectedProduct.data.colorido} />
                  
                  {/* SEÇÃO GLITTER */}
                  <TextureSection data={selectedProduct.data.glitter} />
                </div>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Subcomponente construído exatamente baseado na estética das imagens
function TextureSection({ data }: { data: any }) {
  return (
    <div className="flex flex-col mb-4 md:mb-12 pt-8 md:pt-12">
      {/* Título e Imagem da Textura */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
        <h4 className="text-3xl md:text-[2.5rem] font-bold text-foreground text-center">
          {data.title}
        </h4>
        {data.img && (
          <div className="w-56 md:w-80 flex items-center justify-center">
            <img src={data.img} alt={data.title} className="w-full object-contain filter drop-shadow-2xl hover:scale-[1.10] transition-transform duration-500" />
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-5 md:gap-4 lg:gap-6 mb-12">
        {data.tiers.map((tier: any, i: number) => (
          <div key={i} className="flex-1 min-w-[200px] flex flex-col gap-3 items-center">
            {/* BOX PREÇO SUPERIOR (Impressão Base) */}
            <div className="w-full bg-white rounded-3xl border border-silver/80 overflow-hidden flex flex-col items-center shadow-md relative group hover:border-primary transition-colors">
              <div className="w-full bg-foreground text-white text-center py-3 font-bold text-base md:text-lg tracking-wide">
                {tier.q} unidades
              </div>
              <div className="w-full text-center py-5 md:py-6 px-2 flex flex-col items-center justify-center">
                <div className="text-foreground/50 text-[11px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 leading-none">por apenas</div>
                <div className="flex items-start justify-center">
                  <span className="text-secondary font-bold text-lg md:text-xl relative top-2 mr-1">R$</span>
                  <span className="text-secondary font-black text-[3.5rem] md:text-[4rem] leading-none">{tier.p1.split(',')[0]}</span>
                  <div className="flex flex-col items-start ml-1 mt-1.5">
                    <span className="text-secondary font-bold text-xl md:text-2xl leading-none">,{tier.p1.split(',')[1]}</span>
                    <span className="text-secondary/60 font-black text-xs md:text-sm mt-1">und.</span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-secondary text-white text-[11px] md:text-sm font-bold text-center py-2.5 uppercase flex items-center justify-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
                Entrega Rápida
              </div>
            </div>

            {/* BOX PREÇO INFERIOR (Imp. 2 cores) */}
             <div className="w-full max-w-[240px] bg-white rounded-full border border-silver/80 overflow-hidden flex items-center justify-between pl-0 pr-4 shadow-sm hover:border-foreground hover:shadow-md transition-all group mt-1">
                <div className="bg-foreground text-white text-[11px] md:text-sm font-black h-full py-2 px-4 md:px-5 leading-tight flex flex-col justify-center rounded-l-full">
                  <span>Imp. 2</span>
                  <span>cores</span>
                </div>
                <div className="flex-1 flex justify-center items-center py-1.5">
                   <span className="text-secondary font-bold text-xs relative top-[-6px] mr-1">R$</span>
                   <span className="text-secondary font-black text-2xl md:text-[1.8rem] leading-none">{tier.p2.split(',')[0]}</span>
                   <div className="flex flex-col items-start ml-0.5">
                     <span className="text-secondary font-bold text-xs md:text-sm leading-none">,{tier.p2.split(',')[1]}</span>
                     <span className="text-secondary/60 font-bold text-[9px] md:text-[10px] mt-0.5">und.</span>
                   </div>
                </div>
             </div>

             {/* BOTÃO COMPRAR */}
             <button 
               onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
               className="w-full mt-1 bg-[#ff5757] hover:bg-[#e04848] text-white font-extrabold text-xs md:text-sm py-3 rounded-2xl shadow border border-red-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
             >
                <ShoppingCart size={18} strokeWidth={2.5} className="group-hover/btn:scale-110 transition-transform" />
                <span className="tracking-wide text-shadow-sm">COMPRAR AGORA</span>
             </button>
          </div>
        ))}
      </div>

      <div className="text-center flex flex-col items-center gap-4 mt-6 pb-6 md:pb-8">
        <span className="text-sm md:text-base font-extrabold text-foreground uppercase tracking-widest mb-2">Opções de Cores</span>
        <div className="flex flex-wrap justify-center gap-4">
          {data.colors.map((color: any, j: number) => (
             <div key={j} className="flex items-center gap-3 bg-white border border-silver/50 pl-3 pr-5 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
               <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-silver/40 shadow-inner" style={{ backgroundColor: color.hex }}></div>
               <span className="text-xs md:text-sm font-bold text-foreground/80">{color.name}</span>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
