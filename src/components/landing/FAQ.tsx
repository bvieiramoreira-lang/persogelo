"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Qual o prazo de produção?",
    answer: "De 5 a 10 dias úteis, dependendo da quantidade e do tipo de personalização."
  },
  {
    question: "Existe pedido mínimo?",
    answer: "Sim, o pedido mínimo é de 20 unidades."
  },
  {
    question: "A personalização está incluída no valor?",
    answer: "Sim, 1 cor de personalização está inclusa. Para mais cores, há custo adicional."
  },
  {
    question: "Quais tipos de personalização são possíveis?",
    answer: "Silk 1 ou 2 cores ou impressão digital (para projetos especiais)."
  },
  {
    question: "Vocês enviam para todo o Brasil?",
    answer: "Sim, realizamos entregas para todo o território nacional."
  },
  {
    question: "Os produtos podem ser usados em contato direto com a pele?",
    answer: "Sim, mas recomendamos evitar o contato com os olhos e não ingerir. Em caso de contato acidental, lave com água e procure orientação médica."
  },
  {
    question: "É possível fazer o produto com ou sem logo?",
    answer: "Sim. Produzimos com a marca do cliente ou sem personalização, conforme solicitado."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos cartão de crédito, PIX e boleto bancário."
  },
  {
    question: "Como utilizar a bolsa térmica?",
    answer: (
      <div className="flex flex-col gap-5 text-sm md:text-base mt-2">
        <div>
          <h4 className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">❄️ Modo de Uso</h4>
          
          <h5 className="font-semibold text-primary mt-3 mb-1">Compressa Fria</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Congele a bolsa térmica em torno de -18 °C (0 °F) por 4 a 8 horas.</li>
            <li>Para melhores resultados, deixe no congelador de um dia para o outro.</li>
            <li>Evite quedas após o congelamento para preservar o material.</li>
          </ul>

          <h5 className="font-semibold text-[#ff5757] mt-4 mb-1">Compressa Quente</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Aqueça a água no micro-ondas (em recipiente adequado) ou no fogão.</li>
            <li><span className="font-bold border-b border-[#ff5757]/30">Nunca aqueça a bolsa diretamente no micro-ondas.</span></li>
            <li>Mergulhe a bolsa em água quente por aproximadamente 2 minutos.</li>
            <li>Retire com cuidado e teste a temperatura antes de aplicar.</li>
          </ul>

          <h5 className="font-semibold text-foreground mt-4 mb-1">Aplicação</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Utilize sempre um pano fino entre a bolsa e a pele para evitar queimaduras.</li>
            <li>Use conforme orientação profissional.</li>
          </ul>
        </div>

        <div className="border-t border-silver/20 pt-5 mt-2">
          <h4 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">💜 Usos Versáteis</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-primary mb-2">Na Saúde</h5>
              <ul className="list-disc pl-5 space-y-1 text-foreground/90">
                <li>Alívio de dores musculares</li>
                <li>Cólica menstrual</li>
                <li>Dores nas costas e articulações</li>
                <li>Lesões e contusões</li>
                <li>Relaxamento e melhora do sono</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#ff5757] mb-2">Na Estética</h5>
              <ul className="list-disc pl-5 space-y-1 text-foreground/90">
                <li>Relaxamento facial e pós-procedimentos</li>
                <li>Limpeza de pele e tratamentos faciais</li>
                <li>Redução de inchaços e olheiras</li>
                <li>Cuidados com mãos e pés</li>
                <li>Auxílio em casos de sinusite e congestão nasal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-foreground/70 text-lg">
            Tudo o que você precisa saber antes de fazer o seu pedido.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-xl bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md border-primary/40' : 'border-silver/60 hover:border-silver'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-foreground/50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-foreground/80 leading-relaxed border-t border-silver/20 pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
