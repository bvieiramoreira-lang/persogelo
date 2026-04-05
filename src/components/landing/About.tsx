"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="quem-somos" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">

        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
            Quem é a Persogelo
          </h2>
        </div>
        
        <div className="flex flex-col gap-20 md:gap-32">
          {/* === SEÇÃO 1: IMAGEM ESQUERDA, TEXTO DIREITA === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* IMAGEM 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-silver/10 shadow-md relative">
                {/* O USER VAI ADICIONAR A IMAGEM NA PASTA PUBLIC COM O NOME about-1.jpg */}
                <img 
                  src="/images/about-1.jpg" 
                  alt="Nossa História" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="%23f0f7ff" width="100" height="100"/><text fill="%23a0aec0" x="50" y="50" font-family="Arial" font-size="5" text-anchor="middle" dominant-baseline="middle">Adicione about-1.jpg aqui</text></svg>';
                  }}
                />
              </div>
            </motion.div>

            {/* TEXTO 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-5 text-base md:text-lg text-black/80 leading-relaxed font-medium"
            >
              <p>
                Fundada a partir da experiência da <a href="https://personalizapp.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline hover:text-primary/80 transition-colors">Personaliza Brindes</a>, empresa que atua desde 2017 no mercado de brindes personalizados, a <strong className="text-primary font-bold">Persogelo</strong> nasceu com o objetivo de transformar o pós-procedimento em uma experiência de marca.
              </p>
              <p>
                Especializada em bolsas térmicas personalizadas para clínicas de estética e odontologia, desenvolvemos produtos que unem cuidado, funcionalidade e valorização da marca.
              </p>
              <p>
                Com <strong className="text-primary font-bold">fabricação própria</strong>, investimos continuamente em qualidade, processos e personalização, garantindo um produto seguro, eficiente e alinhado à identidade de cada cliente.
              </p>
            </motion.div>
          </div>

          {/* === SEÇÃO 2: TEXTO ESQUERDA, IMAGEM DIREITA === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* TEXTO 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-10 order-2 md:order-1"
            >
              <div>
                <h3 className="text-lg md:text-xl font-black text-black uppercase tracking-tight mb-4">Foco em Gerar Valor</h3>
                <div className="flex flex-col gap-4 text-base md:text-lg text-black/80 leading-relaxed font-medium">
                  <p>
                    Nosso foco é ajudar clínicas a <strong className="text-primary font-bold">fortalecerem sua marca</strong> através da experiência do paciente.
                  </p>
                  <p>
                    Mais do que um brinde, entregamos uma ferramenta de encantamento, que transmite cuidado, profissionalismo e atenção em cada detalhe.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-black text-black uppercase tracking-tight mb-4">Referência em Brindes Personalizados</h3>
                <div className="flex flex-col gap-4 text-base md:text-lg text-black/80 leading-relaxed font-medium">
                  <p>
                    A <a href="https://personalizapp.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline hover:text-primary/80 transition-colors">Personaliza Brindes</a>, empresa que originou a Persogelo, já atendeu grandes marcas como <strong className="text-primary font-bold">Heineken, Chandon, Mercado Livre, Cimed</strong>, entre outras em todo o Brasil.
                  </p>
                  <p>
                    Essa experiência nos permitiu desenvolver um <strong className="text-primary font-bold">padrão elevado de qualidade</strong>, aplicado agora de forma especializada ao mercado de estética e saúde.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* IMAGEM 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-1 md:order-2"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-silver/10 shadow-md relative">
                {/* O USER VAI ADICIONAR A IMAGEM NA PASTA PUBLIC COM O NOME about-2.jpg */}
                <img 
                  src="/images/about-2.jpg" 
                  alt="Foco em Gerar Valor" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="%23f0f7ff" width="100" height="100"/><text fill="%23a0aec0" x="50" y="50" font-family="Arial" font-size="5" text-anchor="middle" dominant-baseline="middle">Adicione about-2.jpg aqui</text></svg>';
                  }}
                />
              </div>
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
