
import React from 'react';

const Features: React.FC = () => {
  const amenities = [
    { title: 'Terraço Vista Mar', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', description: 'Espaço exclusivo na cobertura com vista panorâmica definitiva para a Orla de Atalaia.' },
    { title: 'Espaço Fitness & Spa', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', description: 'Academia de última geração e área de relaxamento com hidromassagem e sauna.' },
    { title: 'Varanda Gourmet Premium', icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.703 2.703 0 00-3 0 2.703 2.703 0 01-3 0 2.703 2.703 0 00-3 0 2.703 2.703 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 16v2c0 1.105 2.239 2 5 2s5-.895 5-2v-2M5 8.965c0-1.969 2.306-3.594 5.337-3.915C10.662 5.022 11 5 11.5 5c.5 0 .838.022 1.163.05 3.031.321 5.337 1.946 5.337 3.915 0 5.247-3.75 10.232-6.5 11.035-2.75-.803-6.5-5.788-6.5-11.035z', description: 'Ampla varanda integrada à cozinha, ideal para churrascos e recepções privativas.' },
    { title: 'Infraestrutura Inteligente', icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 20c4.083 0 7.662-2.433 9.243-5.932M6.602 4.647L6.721 4.5a10 10 0 0114.505 5.908', description: 'Preparado para automação residencial completa e portaria virtual de alta segurança.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Elegância em cada detalhe</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Combinamos a brisa marinha de Aracaju com um projeto arquitetônico de padrão internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {amenities.map((item, index) => (
            <div key={index} className="group relative">
              <div className="mb-6 inline-flex w-16 h-16 bg-slate-50 text-amber-600 rounded-2xl items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
