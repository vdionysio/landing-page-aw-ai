
import React from 'react';

const Features: React.FC = () => {
const amenities = [
    { 
      title: 'Sky Lounge & Rooftop', 
      icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z', 
      description: 'Um refúgio exclusivo no topo. Piscina com borda infinita e vista definitiva para o mar, ideal para contemplar o pôr do sol.' 
    },
    { 
      title: 'Wellness Center', 
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', 
      description: 'Equilíbrio pleno entre corpo e mente. Academia com equipamentos high-tech, sala de yoga e spa climatizado.' 
    },
    { 
      title: 'Gourmet Experience', 
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', 
      description: 'O cenário perfeito para suas recepções. Espaço gastronômico integrado, entregue decorado e equipado com churrasqueira premium.' 
    },
    { 
      title: 'Smart Home Ready', 
      icon: 'M13 10V3L4 14h7v7l9-11h-7z', 
      description: 'Seu apartamento conectado ao futuro. Infraestrutura para IoT, fechaduras biométricas e Wi-Fi de alta performance nas áreas comuns.' 
    },
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
