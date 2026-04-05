"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchemaStep1 = z.object({
  phone: z.string().min(14, "WhatsApp inválido")
});

const formSchemaStep2 = z.object({
  phone: z.string().min(14, "WhatsApp inválido"),
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("E-mail inválido")
});

type FormData = z.infer<typeof formSchemaStep2>;

export default function LeadFormSection() {
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const { register, handleSubmit, formState: { errors }, reset, setValue, trigger } = useForm<FormData>({
    resolver: zodResolver(formSchemaStep2),
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 9) {
      value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }
    
    setValue("phone", value, { shouldValidate: true });
  };

  const onNextStep = async () => {
    const isStep1Valid = await trigger("phone");
    if (isStep1Valid) {
      setStep(2);
    }
  };

  const onSubmitForm = async (data: FormData) => {
    if (step === 1) {
      onNextStep();
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: data.phone,
          name: data.name,
          email: data.email,
          source: "Sessão de Fim de Página"
        }),
      });

      if (!response.ok) throw new Error("Erro ao enviar contato");
      
      setSuccess(true);
      setTimeout(() => {
        setStep(1);
        reset();
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Erro na conversão:", error);
      alert("Ocorreu um erro de rede. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20 border-t border-silver/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-3">
            Preencha abaixo e receba os layouts com a marca da sua empresa!
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            Um consultor entrará em contato com você via WhatsApp
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-10 border border-silver/30 max-w-xl mx-auto overflow-hidden min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center w-full"
              >
                <div className="w-16 h-16 bg-[#00c95a]/10 text-[#00c95a] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Solicitação enviada com sucesso!</h3>
                <p className="text-foreground/70">Em breve nossa equipe entrará em contato enviando os mockups.</p>
              </motion.div>
            ) : (
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
                className="w-full"
              >
                <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-6 w-full">
                  {step === 1 ? (
                    <div className="flex flex-col gap-6">
                      <div className="grid grid-cols-12 gap-3 items-end">
                        <div className="col-span-4 md:col-span-3">
                          <label className="block text-sm font-bold text-foreground mb-2">DDI</label>
                          <div className="flex flex-row items-center justify-between w-full border border-silver/60 rounded-lg px-3 py-3.5 bg-white cursor-pointer select-none h-[50px]">
                            <div className="flex items-center gap-2">
                              {/* NOTE: If user provides flag, replace this emoji later. Standard is emoji here to keep UI identical to modal */}
                              <span>🇧🇷</span>
                              <span className="font-bold text-foreground text-xs md:text-sm">(+55)</span>
                            </div>
                            <ChevronDown size={14} className="text-foreground/40" />
                          </div>
                        </div>
                        
                        <div className="col-span-8 md:col-span-9 relative">
                          <label className="block text-sm font-bold text-foreground mb-2">Número do WhatsApp</label>
                          <input 
                            {...register("phone")}
                            onChange={handlePhoneChange}
                            placeholder="(48) 98435-3081"
                            maxLength={15}
                            autoFocus
                            className="w-full bg-[#f2f6fa] border border-transparent focus:border-[#d0dbe5] rounded-lg px-4 py-3.5 h-[50px] outline-none transition-all placeholder:text-foreground/40 text-foreground font-medium text-base"
                          />
                        </div>
                      </div>
                      <div className="w-full text-right -mt-5 h-4">
                        {errors.phone && <p className="text-red-500 text-xs font-semibold pr-1">{errors.phone.message}</p>}
                      </div>

                      <button 
                        type="button"
                        onClick={onNextStep}
                        className="w-full bg-[#00c95a] hover:bg-[#00b04f] text-white font-bold text-lg py-3.5 rounded-xl transition-colors shadow-lg shadow-[#00c95a]/20"
                      >
                        Próximo
                      </button>

                      <p className="text-center text-[12px] text-[#0091c5] font-medium mt-1">
                        Ao enviar este formulário, você concorda com as nossas <a href="#" className="underline hover:text-[#007ba8]">Políticas de Privacidade.</a>
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center justify-between pl-1 pr-2 mb-2">
                         <h3 className="text-lg font-bold text-foreground">Só falta o nome!</h3>
                         <button type="button" onClick={() => setStep(1)} className="text-sm font-semibold text-primary underline">Voltar</button>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5 ml-1">Nome da Clínica ou Empresa</label>
                        <input 
                          {...register("name")}
                          autoFocus
                          placeholder="Sua Clínica ou Seu Nome"
                          className="w-full bg-[#f2f6fa] border border-transparent focus:border-[#d0dbe5] rounded-xl px-4 py-3 outline-none transition-all placeholder:text-foreground/40 text-foreground"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.name.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5 ml-1">E-mail corporativo (opcional)</label>
                        <input 
                          {...register("email")}
                          placeholder="clinica@exemplo.com.br"
                          className="w-full bg-[#f2f6fa] border border-transparent focus:border-[#d0dbe5] rounded-xl px-4 py-3 outline-none transition-all placeholder:text-foreground/40 text-foreground"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.email.message}</p>}
                      </div>
                      
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-3 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-primary/20 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                           <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                          "Receber Mockups Grátis"
                        )}
                      </button>
                    </div>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
