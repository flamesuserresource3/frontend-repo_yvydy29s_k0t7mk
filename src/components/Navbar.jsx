import React from 'react';

const blue = 'hsl(239 33% 36%)';

const Navbar = () => {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#beranda" onClick={scrollTo('beranda')} className="text-lg font-semibold tracking-tight" style={{ color: blue }}>
          Simpeka
        </a>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#beranda" onClick={scrollTo('beranda')} className="text-neutral-700 hover:text-black transition-colors">Beranda</a>
          <a href="#layanan" onClick={scrollTo('layanan')} className="text-neutral-700 hover:text-black transition-colors">Layanan</a>
          <a href="#verifikasi" onClick={scrollTo('verifikasi')} className="text-neutral-700 hover:text-black transition-colors">Verifikasi Sertifikat</a>
          <button
            className="rounded-md px-3.5 py-2 border transition-colors"
            style={{ borderColor: blue, color: blue }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = blue;
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = blue;
            }}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
