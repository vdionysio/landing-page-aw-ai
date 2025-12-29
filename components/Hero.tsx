
import React from 'react';
import LeadForm from './LeadForm';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-12 pb-24 md:py-24">
      {/* Imagem de Fundo - Edifício à beira-mar */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white text-center lg:text-left space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-600/20 border border-amber-600/30 text-amber-500 font-semibold text-sm tracking-widest uppercase">
              Lançamento em Aracaju
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight">
              O privilégio de viver entre o <span className="text-amber-500 italic">mar</span> e a <span className="text-amber-500">sofisticação</span>.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Descubra o Residencial Vista Verde na Coroa do Meio. A harmonia perfeita para quem busca exclusividade e qualidade de vida em Sergipe.
            </p>
            <div className="hidden lg:flex items-center space-x-12 pt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-500">2 e 3</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Dormitórios</p>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-500">Suíte</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Master com Closet</p>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-500">Vista</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Para o Mar</p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md lg:w-5/12">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 transform transition-all border border-slate-100">
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                  Tabela de Preços
                </h2>
                <p className="text-slate-500 mt-2 font-medium">
                  Solicite agora o book digital e as plantas exclusivas deste lançamento.
                </p>
              </div>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
