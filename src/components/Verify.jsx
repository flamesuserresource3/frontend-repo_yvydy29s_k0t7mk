import React, { useState } from 'react';
import { Upload, CheckCircle2, Shield } from 'lucide-react';

const blue = 'hsl(239 33% 36%)';

const Verify = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | verifying | success | error

  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  const verifyNow = () => {
    if (!file) return;
    setStatus('verifying');
    // Simulasi proses verifikasi (UI-only)
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="verifikasi" className="bg-neutral-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">Verifikasi Sertifikat</h2>
          <p className="mt-2 text-neutral-600">Unggah file sertifikat Anda untuk melakukan verifikasi keaslian berbasis smart contract.</p>
        </div>

        <div
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          className="rounded-xl border-2 border-dashed bg-white p-8 text-center"
          style={{ borderColor: 'hsl(0 0% 85%)' }}
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: 'hsl(239 33% 96%)' }}>
            <Upload size={22} style={{ color: blue }} />
          </div>
          <p className="text-neutral-700">Seret & letakkan file sertifikat di sini, atau</p>
          <div className="mt-3">
            <label
              htmlFor="file"
              className="inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 text-white"
              style={{ backgroundColor: blue }}
            >
              Pilih File
            </label>
            <input id="file" type="file" className="hidden" onChange={onFileChange} />
          </div>
          {file && (
            <div className="mt-6 text-left mx-auto max-w-xl">
              <p className="text-sm text-neutral-600">File dipilih:</p>
              <p className="mt-1 font-medium text-black">{file.name}</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg border border-neutral-200 p-3">
                  <p className="text-neutral-600">Ringkasan</p>
                  <ul className="mt-2 space-y-1 text-neutral-800">
                    <li>Nama: {file.name}</li>
                    <li>Ukuran: {(file.size / 1024).toFixed(1)} KB</li>
                    <li>Tipe: {file.type || 'Tidak diketahui'}</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-neutral-200 p-3">
                  <p className="text-neutral-600">Keamanan</p>
                  <div className="mt-2 flex items-center gap-2 text-neutral-800">
                    <Shield size={18} style={{ color: blue }} />
                    Data sertifikat akan dicocokkan dengan rekaman on-chain.
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={verifyNow}
                  disabled={status === 'verifying'}
                  className="rounded-md px-4 py-2 text-white disabled:opacity-70"
                  style={{ backgroundColor: blue }}
                >
                  {status === 'verifying' ? 'Memverifikasi…' : 'Verifikasi Sekarang'}
                </button>
                {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 size={20} />
                    Verifikasi berhasil (demo)
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Verify;
