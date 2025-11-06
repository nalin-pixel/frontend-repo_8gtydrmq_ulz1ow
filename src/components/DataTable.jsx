import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function DataTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/db/customers`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (mounted) setData(json);
      } catch (e) {
        if (mounted) setError(e.message || 'Error fetching data');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchData();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 bg-[#0b0f1a]/60 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.15)]">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-cyan-400/10" />
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-[#0b0f1a] to-[#0f1430]">
              <Th>ID</Th>
              <Th>Nama</Th>
              <Th>Kota</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-500/10">
            {loading && (
              <tr>
                <td colSpan={3} className="p-6 text-center text-cyan-300/80">Memuat data...</td>
              </tr>
            )}
            {error && !loading && (
              <tr>
                <td colSpan={3} className="p-6 text-center text-rose-300">{error}</td>
              </tr>
            )}
            {!loading && !error && data && data.length > 0 && data.map((row, idx) => (
              <Row key={idx} row={row} />
            ))}
            {!loading && !error && (!data || data.length === 0) && (
              <tr>
                <td colSpan={3} className="p-6 text-center text-cyan-300/80">Tidak ada data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="px-6 py-4 text-xs sm:text-sm tracking-widest uppercase font-semibold text-cyan-300 border-b border-cyan-500/30">{children}</th>
  );
}

function Row({ row }) {
  const id = row.id ?? row.ID ?? row._id ?? '';
  const nama = row.nama ?? row.Nama ?? row.name ?? '';
  const kota = row.kota ?? row.Kota ?? row.city ?? '';
  return (
    <tr className="group hover:bg-cyan-500/5 transition-colors">
      <Td>
        <span className="text-cyan-100 group-hover:text-white transition-colors">{String(id)}</span>
      </Td>
      <Td>
        <span className="text-fuchsia-200 group-hover:text-fuchsia-100 transition-colors">{String(nama)}</span>
      </Td>
      <Td>
        <span className="text-cyan-200 group-hover:text-cyan-100 transition-colors">{String(kota)}</span>
      </Td>
    </tr>
  );
}

function Td({ children }) {
  return (
    <td className="px-6 py-4 text-sm border-b border-cyan-500/10 relative">
      {/* glowing row hover */}
      <div className="pointer-events-none absolute inset-x-3 -inset-y-0.5 opacity-0 group-hover:opacity-100 bg-[radial-gradient(80%_40%_at_50%_0%,rgba(34,211,238,0.15),transparent)] rounded md:rounded-md transition-opacity" />
      <div className="relative">{children}</div>
    </td>
  );
}
