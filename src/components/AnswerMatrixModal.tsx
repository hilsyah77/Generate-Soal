import React from 'react';
import { GeneratedPackages, PackageKey, ELEMENT_LABELS } from '../types';
import { FileSpreadsheet, X, Printer, Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/generator';

interface AnswerMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  packages: GeneratedPackages;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const AnswerMatrixModal: React.FC<AnswerMatrixModalProps> = ({
  isOpen,
  onClose,
  packages,
  onToast,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const pkgKeys: PackageKey[] = (['A', 'B', 'C', 'D'] as PackageKey[]).filter(
    (k) => packages[k] && packages[k]!.length > 0
  );

  if (pkgKeys.length === 0) {
    return (
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <FileSpreadsheet className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800 mb-1">Belum Ada Paket Soal</h3>
          <p className="text-xs text-slate-500 mb-5">
            Silakan generate paket soal terlebih dahulu di tab "Generator Paket" untuk melihat matriks kunci jawaban.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg"
          >
            Tutup
          </button>
        </div>
      </div>
    );
  }

  // Find max question length across packages
  const maxQuestions = Math.max(...pkgKeys.map((k) => packages[k]?.length || 0));
  const rows = Array.from({ length: maxQuestions }, (_, i) => i + 1);

  const handleCopyMatrix = async () => {
    let tsv = `No\t${pkgKeys.map((k) => `Paket ${k}`).join('\t')}\tElemen / Bab\tTingkat Kognitif\n`;
    rows.forEach((num) => {
      const pA = packages['A']?.[num - 1];
      const elem = pA?.element || '-';
      const lvl = pA?.level || '-';
      const keys = pkgKeys.map((k) => packages[k]?.[num - 1]?.correctLetter || '-').join('\t');
      tsv += `${num}\t${keys}\t${elem}\t${lvl}\n`;
    });

    const success = await copyToClipboard(tsv);
    if (success) {
      setCopied(true);
      onToast('Matriks kunci jawaban berhasil disalin untuk Excel/Sheets!', 'success');
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white z-10 no-print">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base">Matriks Master Kunci Jawaban (Paket A, B, C, D)</h3>
              <p className="text-xs text-slate-500">Tabel perbandingan kunci jawaban untuk koreksi cepat lembar jawaban siswa</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between no-print text-xs">
          <div className="text-slate-600 font-medium">
            Menampilkan <span className="font-bold text-indigo-700">{pkgKeys.length} Paket</span> ({maxQuestions} Butir Soal)
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyMatrix}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-semibold transition flex items-center space-x-1"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin!' : 'Salin Format Excel / Sheets'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-semibold transition flex items-center space-x-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Matriks</span>
            </button>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="p-6 overflow-y-auto flex-grow card-print">
          <div className="text-center mb-5 pb-3 border-b-2 border-slate-900">
            <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase">
              MATRIKS KUNCI JAWABAN ASESMEN INFORMATIKA KELAS IX
            </h2>
            <p className="text-xs font-semibold text-slate-600">
              KURIKULUM MERDEKA • KOREKSI PENILAIAN GURU
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 text-slate-800 uppercase font-bold border-b border-slate-300 text-center">
                  <th className="py-2.5 px-3 border border-slate-300 w-12">No</th>
                  {pkgKeys.map((k) => (
                    <th key={k} className="py-2.5 px-3 border border-slate-300 bg-indigo-50/50 text-indigo-950 font-black">
                      Paket {k}
                    </th>
                  ))}
                  <th className="py-2.5 px-3 border border-slate-300">Elemen / Bab</th>
                  <th className="py-2.5 px-3 border border-slate-300">Level Kognitif</th>
                  <th className="py-2.5 px-3 border border-slate-300 text-left">Topik Materi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rows.map((num) => {
                  const sampleQ = packages['A']?.[num - 1] || packages[pkgKeys[0]]?.[num - 1];
                  const elemInfo = sampleQ ? ELEMENT_LABELS[sampleQ.element] : null;

                  return (
                    <tr key={num} className="hover:bg-slate-50/80 transition text-center">
                      <td className="py-2 px-3 font-bold text-slate-700 border border-slate-300 bg-slate-50/40">
                        {num}
                      </td>
                      {pkgKeys.map((k) => {
                        const q = packages[k]?.[num - 1];
                        const letter = q?.correctLetter || '-';
                        return (
                          <td
                            key={k}
                            className="py-2 px-3 font-black text-sm text-indigo-900 border border-slate-300 bg-indigo-50/20"
                          >
                            <span className="inline-block w-6 h-6 leading-6 rounded-md bg-indigo-100/70 border border-indigo-200">
                              {letter}
                            </span>
                          </td>
                        );
                      })}
                      <td className="py-2 px-3 border border-slate-300 font-semibold text-slate-700">
                        {elemInfo ? elemInfo.short : '-'}
                      </td>
                      <td className="py-2 px-3 border border-slate-300">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${
                            sampleQ?.level === 'HoTS'
                              ? 'bg-rose-50 text-rose-700 border-rose-200'
                              : sampleQ?.level === 'MotS'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          }`}
                        >
                          {sampleQ?.level || '-'}
                        </span>
                      </td>
                      <td className="py-2 px-3 border border-slate-300 text-left text-slate-600 max-w-[200px] truncate">
                        {sampleQ?.topic || '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-200 pt-3">
            <span>Dicetak secara otomatis via Generator Soal Informatika IX</span>
            <span className="font-semibold text-slate-700">Tanda Tangan Guru Pengampu</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end no-print">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
