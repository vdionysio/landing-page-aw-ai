
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-slate-900 tracking-tighter">
            Alfama <span className="font-light text-amber-700">Construtora</span>
          </span>
        </div>
        
        <a 
          href="https://wa.me/5579999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#128c7e] hover:bg-[#075e54] text-white px-6 py-2.5 rounded-full font-semibold transition-all flex items-center space-x-2 shadow-lg shadow-green-900/20 text-sm md:text-base"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.038 3.284l-.569 2.1c-.123.45.351.85.759.621l2.031-1.147c.722.451 1.582.652 2.479.652 3.18 0 5.767-2.586 5.767-5.766 0-3.18-2.587-5.766-5.767-5.766zm2.865 8.466c-.18.506-.884.912-1.39.948-.471.033-.961-.017-1.423-.133-1.072-.271-2.034-.927-2.807-1.701-.774-.773-1.43-1.735-1.701-2.807-.116-.461-.166-.951-.133-1.422.036-.506.442-1.21.948-1.39.253-.09.51-.129.771-.129.131 0 .26.02.385.059.182.057.291.135.39.293l.503 1.208c.083.199.043.43-.094.594l-.326.391c-.152.183-.162.463-.024.658.337.476.76.903 1.246 1.258.196.143.486.136.674-.022l.402-.34c.159-.134.383-.171.58-.083l1.24.524c.162.069.255.163.313.344.053.167.086.335.086.505 0 .273-.043.541-.14.803z"/>
          </svg>
          <span className="hidden md:inline">Consultoria via WhatsApp</span>
          <span className="md:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
