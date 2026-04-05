"use client";

import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchemaStep1 = z.object({
  phone: z.string().min(14, "WhatsApp inválido")
});

const formSchemaStep2 = z.object({
  phone: z.string().min(14, "WhatsApp inválido"),
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("E-mail inválido")
});

type FormData = z.infer<typeof formSchemaStep2>;

export default function Modal({ isOpen, onClose }: ModalProps) {
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
          source: "Modal Flutuante (Orçamento Rápido)"
        }),
      });

      if (!response.ok) throw new Error("Erro ao enviar contato");
      
      setSuccess(true);
      setStep(1);
      reset();
    } catch (error) {
      console.error("Erro na conversão:", error);
      alert("Ocorreu um erro ao enviar. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-silver/50"
          >
            <button 
              onClick={() => {
                if(step === 2 && !success) {
                  setStep(1);
                } else {
                  onClose();
                  setTimeout(() => setStep(1), 500);
                }
              }}
              className="absolute top-6 right-6 text-foreground/50 hover:text-primary transition-colors z-50"
            >
              <X size={24} />
            </button>

            {success ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#00c95a]/10 text-[#00c95a] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Recebemos seu pedido!</h3>
                <p className="text-foreground/70">Em breve nossa equipe entrará em contato com a tabela de preços detalhada.</p>
                <button 
                  onClick={() => { setSuccess(false); onClose(); }}
                  className="mt-8 bg-[#00c95a] hover:bg-[#00b04f] text-white font-bold py-3.5 px-8 rounded-xl transition-colors w-full shadow-lg shadow-[#00c95a]/20"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 pr-8">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {step === 1 ? "Orçamento Rápido" : "Quase lá!"}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {step === 1 
                      ? "Preencha seu WhatsApp para falarmos com você." 
                      : "Precisamos apenas do seu nome e e-mail para continuar."}
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-5">
                  {step === 1 ? (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex flex-col gap-6"
                    >
                      <div className="grid grid-cols-12 gap-3 items-end">
                        <div className="col-span-4">
                          <label className="block text-sm font-bold text-foreground mb-2">DDI</label>
                          <div className="flex flex-row items-center justify-between w-full border border-silver/60 rounded-lg px-3 py-3.5 bg-white cursor-pointer select-none h-[50px]">
                            <div className="flex items-center gap-2">
                              <span>🇧🇷</span>
                              <span className="font-bold text-foreground text-sm">(+55)</span>
                            </div>
                            <ChevronDown size={14} className="text-foreground/40" />
                          </div>
                        </div>
                        
                        <div className="col-span-8 relative">
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
                        {errors.phone && <p className="text-red-500 text-xs font-semibold">{errors.phone.message}</p>}
                      </div>

                      <button 
                        type="button"
                        onClick={onNextStep}
                        className="w-full bg-[#00c95a] hover:bg-[#00b04f] text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg shadow-[#00c95a]/20"
                      >
                        Próximo
                      </button>

                      <p className="text-center text-[13px] text-[#0091c5] font-medium mt-1">
                        Ao enviar este formulário, você concorda com as nossas <a href="#" className="underline hover:text-[#007ba8]">Políticas de Privacidade.</a>
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex flex-col gap-5"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5 ml-1">Nome Completo</label>
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
                        className="mt-3 bg-[#ff5757] hover:bg-[#e64747] text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-[#ff5757]/20 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                           <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                          "Solicitar Orçamento"
                        )}
                      </button>
                    </motion.div>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
