
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <span className="text-2xl font-bold tracking-tighter block">
              Alfama <span className="font-light text-amber-500">Construtora</span>
            </span>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Referência em alto padrão e inovação no mercado imobiliário de Sergipe. Qualidade que transforma vidas.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">Sede Aracaju</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Av. Beira Mar, 1540<br />
              Centro Empresarial - Sala 302<br />
              Treze de Julho - CEP: 49020-010
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">Relacionamento</h4>
            <p className="text-slate-400 text-sm">
              atendimento@alfamase.com.br<br />
              (79) 3214-0000
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">Redes Sociais</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Instagram / @alfama_construtora</a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Facebook / AlfamaSE</a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">LinkedIn / AlfamaSE</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 uppercase tracking-[0.3em] font-medium">
          <p>© 2024 Alfama Construtora e Incorporadora Ltda.</p>
          <div className="flex items-center space-x-6">
            <p>CRECI: J-7979</p>
            <span className="text-white/20">|</span>
            <p>Vista Verde • Matrícula: 79.123</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
