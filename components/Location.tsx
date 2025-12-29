
import React from 'react';

const Location: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                No coração da <span className="text-amber-600">Coroa do Meio</span>
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed font-light">
                Viver em Aracaju é um privilégio, e o Vista Verde coloca você no centro de tudo o que importa. 
                Segurança, lazer e a brisa constante do Oceano Atlântico.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center space-x-3 mb-3 text-amber-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" /></svg>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Orla de Atalaia</h4>
                </div>
                <p className="text-slate-500 text-sm">Apenas 800m da passarela do caranguejo e áreas de lazer.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center space-x-3 mb-3 text-amber-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" /></svg>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Shopping Riomar</h4>
                  <p className="text-slate-500 text-sm">4 minutos de distância para seu conforto e conveniência.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 aspect-square lg:aspect-auto lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&q=80&w=1200" 
                alt="Visão aérea de Aracaju" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10"></div>
              <div className="absolute top-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
                 <h5 className="font-bold text-slate-900 mb-1">Coroa do Meio</h5>
                 <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Aracaju • Sergipe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
