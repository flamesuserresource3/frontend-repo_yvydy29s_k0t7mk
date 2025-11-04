import React from 'react';

const blue = 'hsl(239 33% 36%)';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Simpeka. Semua hak dilindungi.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#beranda" className="text-neutral-700 hover:text-black transition-colors">Beranda</a>
          <a href="#layanan" className="text-neutral-700 hover:text-black transition-colors">Layanan</a>
          <a href="#verifikasi" className="text-neutral-700 hover:text-black transition-colors">Verifikasi</a>
          <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: blue }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
