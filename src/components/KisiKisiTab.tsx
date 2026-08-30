import React, { useState, useMemo, useEffect } from 'react';
import {
  Question,
  PackageQuestion,
  GeneratedPackages,
  ExamHeaderConfig,
  CognitiveLevel,
  COGNITIVE_LABELS,
  getMateriBadgeStyle,
  PackageKey,
} from '../types';
import {
  buildKisiKisiList,
  exportKisiKisiCSV,
} from '../utils/kisikisiHelper';
import {
  FileSpreadsheet,
  Printer,
  Download,
  Copy,
  Search,
  BookOpen,
  Lightbulb,
} from 'lucide-react';
import { copyToClipboard } from '../utils/generator';

interface KisiKisiTabProps {
  questionBank: Question[];
  packages: GeneratedPackages;
  headerConfig: ExamHeaderConfig;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
  onNavigateToGenerator: () => void;
  onOpenHeaderModal: () => void;
}

export const KisiKisiTab: React.FC<KisiKisiTabProps> = ({
  questionBank,
  packages,
  headerConfig,
  onToast,
}) => {
  // Available packages
  const activePackageKeys = Object.keys(packages) as PackageKey[];
  const [selectedSource, setSelectedSource] = useState<string>(
    activePackageKeys.length > 0 ? `pkg_${activePackageKeys[0]}` : 'bank'
  );
  const [selectedMateriFilter, setSelectedMateriFilter] = useState<string>('ALL');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<CognitiveLevel | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showKeys, setShowKeys] = useState(true);
  const [showExplanation, setShowExplanation] = useState(false);

  // Extract source questions
  const sourceQuestions: (Question | PackageQuestion)[] = useMemo(() => {
    if (selectedSource.startsWith('pkg_')) {
      const key = selectedSource.replace('pkg_', '') as PackageKey;
      return packages[key] || [];
    }
    return questionBank;
  }, [selectedSource, packages, questionBank]);

  const packageLetter = selectedSource.startsWith('pkg_')
    ? selectedSource.replace('pkg_', '')
    : undefined;

  // Build full Kisi-Kisi items
  const allKisiItems = useMemo(() => {
    return buildKisiKisiList(sourceQuestions, packageLetter);
  }, [sourceQuestions, packageLetter]);

  // Statistics
  const materiDistribution = useMemo(() => {
    const counts: Record<string, number> = {};
    allKisiItems.forEach((it) => {
      counts[it.materi] = (counts[it.materi] || 0) + 1;
    });
    return counts;
  }, [allKisiItems]);

  // List of materis that actually exist in the current source
  const availableMaterisInSource = useMemo(() => {
    return Object.keys(materiDistribution);
  }, [materiDistribution]);

  // Auto-reset materi filter if the selected materi does not exist in the newly selected source
  useEffect(() => {
    if (selectedMateriFilter !== 'ALL' && !materiDistribution[selectedMateriFilter]) {
      setSelectedMateriFilter('ALL');
    }
  }, [selectedSource, materiDistribution, selectedMateriFilter]);

  // Filtered items
  const filteredItems = useMemo(() => {
    return allKisiItems.filter((item) => {
      if (selectedMateriFilter !== 'ALL' && item.materi !== selectedMateriFilter) {
        return false;
      }
      if (selectedLevelFilter !== 'ALL' && item.level !== selectedLevelFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchMateri = item.materi.toLowerCase().includes(q);
        const matchTopic = item.topic.toLowerCase().includes(q);
        const matchIndicator = item.indicator.toLowerCase().includes(q);
        const matchStem = item.stemPreview.toLowerCase().includes(q);
        const matchExplanation = (item.explanation || '').toLowerCase().includes(q);
        if (!matchMateri && !matchTopic && !matchIndicator && !matchStem && !matchExplanation) return false;
      }
      return true;
    });
  }, [allKisiItems, selectedMateriFilter, selectedLevelFilter, searchQuery]);

  const levelDistribution = useMemo(() => {
    let lots = 0;
    let mots = 0;
    let hots = 0;
    allKisiItems.forEach((it) => {
      if (it.level === 'LotS') lots++;
      else if (it.level === 'MotS') mots++;
      else if (it.level === 'HoTS') hots++;
    });
    return { lots, mots, hots, total: allKisiItems.length };
  }, [allKisiItems]);

  // Handlers
  const handlePrint = () => {
    window.print();
  };

  const handleExportCSV = () => {
    exportKisiKisiCSV(allKisiItems, headerConfig, packageLetter);
    onToast('Kisi-kisi dan pembahasan berhasil diekspor ke file CSV/Excel!', 'success');
  };

  const handleCopyText = async () => {
    let text = `===========================================================\n`;
    text += `KISI-KISI & PEMBAHASAN ASESMEN INFORMATIKA KELAS IX\n`;
    text += `SATUAN PENDIDIKAN : ${headerConfig.schoolName.toUpperCase()}\n`;
    text += `MATA PELAJARAN    : ${headerConfig.subject.toUpperCase()}\n`;
    text += `KELAS / SEMESTER  : ${headerConfig.gradeLevel} / ${headerConfig.semester}\n`;
    text += `KURIKULUM         : KURIKULUM MERDEKA\n`;
    text += `TAHUN AJARAN      : ${headerConfig.academicYear}\n`;
    text += `KODE SUMBER       : ${packageLetter ? `PAKET ${packageLetter}` : 'BANK SOAL MASTER'}\n`;
    text += `===========================================================\n\n`;

    allKisiItems.forEach((it) => {
      text += `[No. ${it.no}] Materi: ${it.materi} (${it.level})\n`;
      text += `Sub-Materi     : ${it.topic}\n`;
      text += `Capaian Pemb.  : ${it.cp}\n`;
      text += `Indikator Soal : ${it.indicator}\n`;
      text += `Bentuk / No    : ${it.form} - Nomor ${it.questionNumber} (Kunci: ${it.correctLetter || '-'})\n`;
      if (it.explanation) {
        text += `Pembahasan     : ${it.explanation}\n`;
      }
      text += `-----------------------------------------------------------\n`;
    });

    const ok = await copyToClipboard(text);
    if (ok) {
      onToast('Format kisi-kisi dan pembahasan berhasil disalin ke clipboard!', 'success');
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Header Actions (No Print) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6 no-print">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Kisi-Kisi & Matriks Pembahasan Soal
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800">
                  Kurikulum Merdeka
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Matriks materi pokok, sub-materi, capaian pembelajaran, indikator soal, dan pembahasan
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center space-x-1.5"
              title="Salin Rangkuman Teks Kisi-Kisi & Pembahasan"
            >
              <Copy className="w-3.5 h-3.5 text-slate-600" />
              <span>Salin Teks</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition flex items-center space-x-1.5"
              title="Download format Spreadsheet CSV / Excel"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ekspor CSV / Excel</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition flex items-center space-x-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF Dokumen</span>
            </button>
          </div>
        </div>

        {/* Filters & Source Selector Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-4">
          {/* 1. Sumber Data */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              Sumber Kisi-Kisi:
            </label>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="w-full rounded-xl border-slate-300 border px-3 py-1.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50"
            >
              {activePackageKeys.map((key) => (
                <option key={key} value={`pkg_${key}`}>
                  Naskah Aktif: Paket {key} ({packages[key]?.length || 0} Soal)
                </option>
              ))}
              <option value="bank">Seluruh Bank Soal Master ({questionBank.length} Soal)</option>
            </select>
          </div>

          {/* 2. Filter Materi (Menyesuaikan Sumber Kisi-Kisi) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Filter Materi:</span>
              <span className="text-[10px] text-indigo-600 normal-case font-semibold">
                {availableMaterisInSource.length} Materi Aktif
              </span>
            </label>
            <select
              value={selectedMateriFilter}
              onChange={(e) => setSelectedMateriFilter(e.target.value)}
              className="w-full rounded-xl border-slate-300 border px-3 py-1.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50"
            >
              <option value="ALL">
                Semua Materi di {packageLetter ? `Paket ${packageLetter}` : 'Bank'} ({allKisiItems.length} Soal)
              </option>
              {availableMaterisInSource.map((mat) => (
                <option key={mat} value={mat}>
                  {mat} ({materiDistribution[mat] || 0} Soal)
                </option>
              ))}
            </select>
          </div>

          {/* 3. Filter Level Kognitif */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              Level Kognitif:
            </label>
            <select
              value={selectedLevelFilter}
              onChange={(e) => setSelectedLevelFilter(e.target.value as any)}
              className="w-full rounded-xl border-slate-300 border px-3 py-1.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50"
            >
              <option value="ALL">Semua Tingkat Kognitif</option>
              <option value="LotS">LotS (C1-C2): {levelDistribution.lots} Butir</option>
              <option value="MotS">MotS (C3): {levelDistribution.mots} Butir</option>
              <option value="HoTS">HoTS (C4-C5): {levelDistribution.hots} Butir</option>
            </select>
          </div>

          {/* 4. Pencarian Cepat */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              Cari Materi / Pembahasan:
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Ketik kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border-slate-300 border pl-8 pr-3 py-1.5 text-xs text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Source-Adaptive Materi Filter Chips */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-bold text-slate-500 mr-1 flex items-center space-x-1">
            <span>Materi {packageLetter ? `Paket ${packageLetter}` : 'Bank Master'}:</span>
          </span>

          {/* All Button */}
          <button
            type="button"
            onClick={() => setSelectedMateriFilter('ALL')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
              selectedMateriFilter === 'ALL'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>Semua</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                selectedMateriFilter === 'ALL' ? 'bg-indigo-800 text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {allKisiItems.length}
            </span>
          </button>

          {/* Individual Materi Buttons Present in this Source */}
          {availableMaterisInSource.map((mat) => {
            const isSelected = selectedMateriFilter === mat;
            const count = materiDistribution[mat] || 0;
            const badge = getMateriBadgeStyle(mat);

            return (
              <button
                key={mat}
                type="button"
                onClick={() => setSelectedMateriFilter(mat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs ring-1 ring-indigo-400'
                    : `${badge.bg} ${badge.text} ${badge.border} hover:opacity-90`
                }`}
                title={`Filter hanya materi ${mat} (${count} butir soal)`}
              >
                <span>{mat}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                    isSelected ? 'bg-indigo-800 text-white' : 'bg-white/90 text-slate-800 border border-slate-200/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}

          {selectedMateriFilter !== 'ALL' && (
            <button
              type="button"
              onClick={() => setSelectedMateriFilter('ALL')}
              className="text-[11px] text-rose-600 hover:text-rose-800 font-bold ml-1 transition underline"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Toggle options & Cognitive Summary */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-slate-500 font-semibold text-[11px]">Komposisi Kognitif:</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-[10px]">
              LotS: {levelDistribution.lots} ({levelDistribution.total ? Math.round((levelDistribution.lots / levelDistribution.total) * 100) : 0}%)
            </span>
            <span className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800 font-bold text-[10px]">
              MotS: {levelDistribution.mots} ({levelDistribution.total ? Math.round((levelDistribution.mots / levelDistribution.total) * 100) : 0}%)
            </span>
            <span className="px-2 py-0.5 rounded-md bg-rose-50 border border-rose-200 text-rose-800 font-bold text-[10px]">
              HoTS: {levelDistribution.hots} ({levelDistribution.total ? Math.round((levelDistribution.hots / levelDistribution.total) * 100) : 0}%)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-1.5 text-slate-700 font-medium cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={showKeys}
                onChange={(e) => setShowKeys(e.target.checked)}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span>Tampilkan Kolom Kunci</span>
            </label>

            <label className="flex items-center space-x-1.5 text-slate-700 font-medium cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={showExplanation}
                onChange={(e) => setShowExplanation(e.target.checked)}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span>Tampilkan Kolom Pembahasan</span>
            </label>
          </div>
        </div>
      </div>

      {/* Main Kisi-Kisi Official Document Container (Printable) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 card-print">
        {/* Official Header Table */}
        <div className="border-b-2 border-slate-900 pb-4 mb-5 text-center">
          <h2 className="text-base sm:text-lg font-black uppercase tracking-wider text-slate-900 leading-snug">
            KISI-KISI PENULISAN SOAL ASESMEN / PENILAIAN SUMATIF
          </h2>
          <h3 className="text-sm sm:text-base font-extrabold uppercase text-indigo-950 mt-0.5">
            {headerConfig.schoolName}
          </h3>
          <p className="text-xs font-semibold text-slate-600 mt-1">
            TAHUN AJARAN {headerConfig.academicYear}
          </p>

          {/* Sub Header Information Grid */}
          <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-y-1.5 gap-x-4 text-xs text-left text-slate-800">
            <div>
              <span className="font-semibold text-slate-500">Mata Pelajaran:</span>{' '}
              <span className="font-bold text-slate-900">{headerConfig.subject}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Kelas / Semester:</span>{' '}
              <span className="font-bold text-slate-900">
                {headerConfig.gradeLevel} / {headerConfig.semester}
              </span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Kurikulum:</span>{' '}
              <span className="font-bold text-slate-900">Kurikulum Merdeka</span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Alokasi Waktu / Bentuk:</span>{' '}
              <span className="font-bold text-slate-900">
                {headerConfig.timeLimit} (Pilihan Ganda)
              </span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Guru Pengampu:</span>{' '}
              <span className="font-bold text-slate-900">{headerConfig.teacherName}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Kode Naskah:</span>{' '}
              <span className="font-bold text-indigo-700">
                {packageLetter ? `Paket ${packageLetter}` : 'Master Bank Soal'}
              </span>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Jumlah Butir:</span>{' '}
              <span className="font-bold text-slate-900">{filteredItems.length} Soal</span>
            </div>
          </div>
        </div>

        {/* Kisi-Kisi Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 text-slate-900 font-extrabold uppercase text-[11px] tracking-tight">
                <th className="border border-slate-300 px-2.5 py-2.5 text-center w-10">No.</th>
                <th className="border border-slate-300 px-3 py-2.5 w-44">Materi Pembelajaran</th>
                <th className="border border-slate-300 px-3 py-2.5 w-40">Sub-Materi / Topik</th>
                <th className="border border-slate-300 px-3 py-2.5 min-w-[180px]">Capaian Pembelajaran (CP)</th>
                <th className="border border-slate-300 px-3 py-2.5 min-w-[200px]">Indikator Soal</th>
                <th className="border border-slate-300 px-2.5 py-2.5 text-center w-20">Level</th>
                <th className="border border-slate-300 px-2 py-2.5 text-center w-14">Bentuk</th>
                <th className="border border-slate-300 px-2 py-2.5 text-center w-14">No Soal</th>
                {showKeys && (
                  <th className="border border-slate-300 px-2 py-2.5 text-center w-14 no-print">Kunci</th>
                )}
                {showExplanation && (
                  <th className="border border-slate-300 px-3 py-2.5 min-w-[200px] no-print">Pembahasan</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const badge = getMateriBadgeStyle(item.materi);
                  const cogInfo = COGNITIVE_LABELS[item.level] || COGNITIVE_LABELS.MotS;

                  return (
                    <tr
                      key={item.id + '_' + item.no}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}
                    >
                      <td className="border border-slate-300 px-2 py-2 text-center font-bold text-slate-700">
                        {item.no}
                      </td>
                      <td className="border border-slate-300 px-2.5 py-2 font-semibold">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${badge.bg} ${badge.text} ${badge.border}`}>
                          {item.materi}
                        </span>
                      </td>
                      <td className="border border-slate-300 px-2.5 py-2 font-bold text-slate-900 leading-snug">
                        {item.topic}
                      </td>
                      <td className="border border-slate-300 px-2.5 py-2 text-slate-700 leading-relaxed text-[11px]">
                        {item.cp}
                      </td>
                      <td className="border border-slate-300 px-2.5 py-2 text-slate-900 leading-relaxed text-[11px] font-medium">
                        {item.indicator}
                      </td>
                      <td className="border border-slate-300 px-2 py-2 text-center">
                        <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-bold border ${cogInfo?.badge || 'bg-slate-100'}`}>
                          {item.level}
                        </span>
                      </td>
                      <td className="border border-slate-300 px-1.5 py-2 text-center font-semibold text-slate-700 text-[11px]">
                        PG
                      </td>
                      <td className="border border-slate-300 px-1.5 py-2 text-center font-black text-indigo-950 text-xs">
                        {item.questionNumber}
                      </td>
                      {showKeys && (
                        <td className="border border-slate-300 px-1.5 py-2 text-center font-black text-emerald-700 bg-emerald-50/50 text-xs no-print">
                          {item.correctLetter || '-'}
                        </td>
                      )}
                      {showExplanation && (
                        <td className="border border-slate-300 px-2.5 py-2 text-slate-700 text-[11px] leading-relaxed no-print">
                          {item.explanation || '-'}
                        </td>
                      )}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={8 + (showKeys ? 1 : 0) + (showExplanation ? 1 : 0)}
                    className="border border-slate-300 px-4 py-8 text-center text-slate-500 italic"
                  >
                    Tidak ada butir kisi-kisi yang cocok dengan kriteria filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Official Signatures for Printed Document */}
        <div className="mt-10 pt-6 border-t border-slate-300 grid grid-cols-2 text-xs text-slate-900 print-only">
          <div className="text-center">
            <p>Mengetahui,</p>
            <p className="font-bold">Kepala Sekolah {headerConfig.schoolName}</p>
            <div className="h-16"></div>
            <p className="font-bold underline">_________________________</p>
            <p className="text-[10px] text-slate-600">NIP. ........................................</p>
          </div>

          <div className="text-center">
            <p>Kota/Kabupaten, {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="font-bold">Guru Mata Pelajaran Informatika</p>
            <div className="h-16"></div>
            <p className="font-bold underline">{headerConfig.teacherName || '_________________________'}</p>
            <p className="text-[10px] text-slate-600">NIP. ........................................</p>
          </div>
        </div>

        {/* Footer print note */}
        <div className="mt-6 text-center text-[9px] text-slate-400 print-only">
          Dokumen Kisi-Kisi Soal Asesmen Informatika Kelas IX - Kurikulum Merdeka
        </div>
      </div>
    </div>
  );
};
