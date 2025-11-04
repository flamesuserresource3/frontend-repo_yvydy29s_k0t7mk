import React from 'react';
import { BookOpen, FileCheck, GraduationCap } from 'lucide-react';

const blue = 'hsl(239 33% 36%)';

const services = [
  {
    title: 'TOEFL ITP',
    desc: 'Tes berbasis kertas untuk kebutuhan akademik dan institusi. Jadwal fleksibel dan hasil cepat.',
    icon: BookOpen,
    features: ['Format Listening, Structure, Reading', 'Skor skala 310–677', 'Sertifikat digital + on-chain'],
  },
  {
    title: 'TOEFL iBT',
    desc: 'Tes berbasis internet dengan cakupan kemampuan berbahasa Inggris yang komprehensif.',
    icon: GraduationCap,
    features: ['Listening, Reading, Speaking, Writing', 'Skor 0–120', 'Pelaporan hasil instan'],
  },
  {
    title: 'TOEFL Prediction',
    desc: 'Simulasi untuk mengukur kesiapan sebelum mengikuti tes resmi dengan biaya lebih ringan.',
    icon: FileCheck,
    features: ['Latihan terarah', 'Analisis kelemahan', 'Rekomendasi belajar'],
  },
];

const Services = () => {
  return (
    <section id="layanan" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Layanan TOEFL</h2>
          <p className="mt-2 text-neutral-600">Pilih jenis tes yang sesuai dengan kebutuhan Anda.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: 'hsl(239 33% 96%)' }}>
                  <s.icon size={22} style={{ color: blue }} />
                </div>
                <h3 className="text-lg font-semibold text-black">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: blue }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="w-full rounded-md px-4 py-2 text-white" style={{ backgroundColor: blue }}>
                  Pilih
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
