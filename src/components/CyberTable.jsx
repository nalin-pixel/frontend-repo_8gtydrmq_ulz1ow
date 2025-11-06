import React, { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function CyberTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/db/customers`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!ignore) setRows(Array.isArray(data) ? data : data?.items || []);
      } catch (e) {
        if (!ignore) setError(e?.message || 'Gagal mengambil data');
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-cyan-500 to-purple-600 opacity-40 blur-md" aria-hidden></div>
      <div className="relative rounded-2xl border border-cyan-400/30 bg-[#0b0f1acc] backdrop-blur-md shadow-[0_0_30px_rgba(8,145,178,0.25)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-cyan-100/90">
            <thead className="bg-[#0b0f1a]">
              <tr className="border-b border-cyan-400/20">
                <th className="px-4 py-3 text-xs md:text-sm tracking-widest text-fuchsia-300/90">ID</th>
                <th className="px-4 py-3 text-xs md:text-sm tracking-widest text-cyan-300/90">Nama</th>
                <th className="px-4 py-3 text-xs md:text-sm tracking-widest text-purple-300/90">Kota</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-400/10">
              {loading && (
                <tr>
                  <td colSpan={3} className="px-4 py-6 text-center text-cyan-300/80 animate-pulse">Memuat data...</td>
                </tr>
              )}
              {error && !loading && (
                <tr>
                  <td colSpan={3} className="px-4 py-6 text-center text-rose-300">{error}</td>
                </tr>
              )}
              {!loading && !error && rows.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-4 py-6 text-center text-cyan-300/70">Tidak ada data</td>
                </tr>
              )}
              {!loading && !error && rows.map((r, idx) => (
                <tr
                  key={r.id ?? idx}
                  className="transition-all hover:bg-cyan-500/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] group"
                >
                  <td className="px-4 py-3 font-mono text-fuchsia-200/90">
                    <span className="group-hover:text-fuchsia-300">{r.id ?? r._id ?? ''}</span>
                  </td>
                  <td className="px-4 py-3 text-cyan-100">
                    <span className="group-hover:text-cyan-200">{r.nama ?? r.name ?? ''}</span>
                  </td>
                  <td className="px-4 py-3 text-purple-200/90">
                    <span className="group-hover:text-purple-200">{r.kota ?? r.city ?? ''}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
