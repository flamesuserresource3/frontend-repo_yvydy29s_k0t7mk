import React from 'react';
import { Shield, Rocket, CheckCircle } from 'lucide-react';

const blue = 'hsl(239 33% 36%)';

const Hero = () => {
  return (
    <section id="beranda" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-black">
              SIMPEKA — Sistem Manajemen Tes TOEFL dengan Keamanan Blockchain
            </h1>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              Kelola pendaftaran, pelaksanaan, hingga sertifikasi TOEFL dalam satu tempat. Informasi penting dari sertifikat disimpan ke dalam smart contract sehingga mudah diverifikasi dan tahan manipulasi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-700">
              <div className="flex items-center gap-2"><Shield size={18} style={{ color: blue }} /> Keamanan terdesentralisasi</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} style={{ color: blue }} /> Verifikasi cepat</div>
              <div className="flex items-center gap-2"><Rocket size={18} style={{ color: blue }} /> Antarmuka sederhana</div>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#layanan" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-white" style={{ backgroundColor: blue }}>
                Pilih Layanan
              </a>
              <a href="#verifikasi" className="inline-flex items-center justify-center rounded-md px-4 py-2 border" style={{ borderColor: blue, color: blue }}>
                Verifikasi Sertifikat
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="h-full w-full rounded-md bg-gradient-to-br from-white via-white to-neutral-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: 'hsl(239 33% 96%)' }}>
                    <Shield size={28} style={{ color: blue }} />
                  </div>
                  <p className="text-lg font-medium text-black">Sertifikat Terlindungi</p>
                  <p className="mt-1 text-sm text-neutral-600">Ringkasan data sertifikat direkam di blockchain untuk keaslian yang dapat dibuktikan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
