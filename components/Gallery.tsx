
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { 
      title: 'Design Contemporâneo e Atemporal', 
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200' 
    },
    { 
      title: 'Living Integrado com Acabamento Premium', 
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200' 
    },
    { 
      title: 'Suíte Master: Seu Refúgio Particular', 
      url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200' 
    },
    { 
      title: 'Lazer Exclusivo e Paisagismo', 
      url: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80&w=1200' 
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Onde o design encontra o horizonte.</h2>
            <p className="text-slate-400 text-lg">Materiais nobres e acabamento premium que definem o novo padrão de luxo em Sergipe.</p>
          </div>
          <button className="border border-amber-500 text-amber-500 px-8 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all uppercase tracking-widest text-sm">
            Ver todas as plantas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Exclusividade</p>
                <h4 className="text-2xl font-bold">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
