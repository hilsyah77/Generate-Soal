import React, { useState } from 'react';
import {
  Question,
  GeneratedPackages,
  PackageKey,
  GeneratorConfig,
  ExamHeaderConfig,
  InformaticsElement,
  ELEMENT_LABELS,
  COGNITIVE_LABELS,
} from '../types';
import {
  SlidersHorizontal,
  RefreshCw,
  Eye,
  EyeOff,
  Copy,
  Printer,
  FileText,
  CheckCircle2,
  Columns,
  LayoutGrid,
  BookOpen,
  Filter,
  Sparkles,
  FileSpreadsheet,
  UploadCloud,
  Shuffle,
} from 'lucide-react';
import { formatTeacherText, copyToClipboard } from '../utils/generator';

interface GeneratorTabProps {
  questionBank: Question[];
  config: GeneratorConfig;
  setConfig: React.Dispatch<React.SetStateAction<GeneratorConfig>>;
  packages: GeneratedPackages;
  onGenerate: () => void;
  headerConfig: ExamHeaderConfig;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
  onOpenHeaderModal: () => void;
  onOpenKisiKisi?: () => void;
  onOpenMaterialModal?: () => void;
}

export const GeneratorTab: React.FC<GeneratorTabProps> = ({
  questionBank,
  config,
  setConfig,
  packages,
  onGenerate,
  headerConfig,
  onToast,
  onOpenHeaderModal,
  onOpenKisiKisi,
  onOpenMaterialModal,
}) => {
  const [activePkg, setActivePkg] = useState<PackageKey>('A');
  const [showAnswers, setShowAnswers] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [viewMode, setViewMode] = useState<'2col' | 'cards'>('2col');

  // Available package keys
  const availablePackages: PackageKey[] = (['A', 'B', 'C', 'D'] as PackageKey[]).filter(
    (k) => packages[k] && packages[k]!.length > 0
  );

  // Current active questions
  const currentQuestions = packages[activePkg] || (availablePackages[0] ? packages[availablePackages[0]] : []);

  // Compute cognitive distribution for active package
  const lotsCount = currentQuestions?.filter((q) => q.level === 'LotS').length || 0;
  const motsCount = currentQuestions?.filter((q) => q.level === 'MotS').length || 0;
  const hotsCount = currentQuestions?.filter((q) => q.level === 'HoTS').length || 0;
  const totalQ = currentQuestions?.length || 0;

  const handlePackageCheckbox = (pkg: PackageKey) => {
    if (config.packages.includes(pkg)) {
      if (config.packages.length <= 1) {
        onToast('Minimal pilih satu paket target (A, B, C, atau D).', 'error');
        return;
      }
      setConfig((prev) => ({
        ...prev,
        packages: prev.packages.filter((p) => p !== pkg),
      }));
    } else {
      setConfig((prev) => ({
        ...prev,
        packages: [...prev.packages, pkg].sort() as PackageKey[],
      }));
    }
  };

  const handleCopyText = async () => {
    if (!currentQuestions || currentQuestions.length === 0) return;
    setIsCopying(true);
    const text = formatTeacherText(activePkg, currentQuestions, headerConfig.schoolName);
    const success = await copyToClipboard(text);
    if (success) {
      onToast(`Teks naskah Paket ${activePkg} berhasil disalin ke clipboard!`, 'success');
    } else {
      onToast('Gagal menyalin teks.', 'error');
    }
    setTimeout(() => setIsCopying(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleElementFilterToggle = (elem: InformaticsElement) => {
    setConfig((prev) => {
      const exists = prev.selectedElements.includes(elem);
      if (exists) {
        const next = prev.selectedElements.filter((e) => e !== elem);
        return { ...prev, selectedElements: next };
      } else {
        return { ...prev, selectedElements: [...prev.selectedElements, elem] };
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Pengaturan Acak & Pembuatan Paket Soal
              </h2>
              <p className="text-xs text-slate-500">
                Pengacakan presisi paralel untuk Paket A, B, C, dan D dengan kunci jawaban otomatis
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {onOpenMaterialModal && (
              <button
                onClick={onOpenMaterialModal}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition flex items-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Upload Materi & AI</span>
              </button>
            )}
            {onOpenKisiKisi && (
              <button
                onClick={onOpenKisiKisi}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition flex items-center space-x-1.5"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-amber-600" />
                <span>Lihat Kisi-Kisi</span>
              </button>
            )}
            <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-200">
              Bank Soal: {questionBank.length} Butir
            </div>
          </div>
        </div>

        {/* 3-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Kolom 1: Jumlah Soal & METODE RANDOMIZER (Tepat di bawah Jumlah Soal) */}
          <div className="lg:col-span-4 bg-slate-50/80 p-4 rounded-2xl border border-slate-200 space-y-4">
            {/* 1.1 Jumlah Soal */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-800">
                  1. Jumlah Soal Per Paket
                </label>
                <span className="text-[11px] font-semibold text-indigo-600">
                  Maks. {questionBank.length} butir
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min={1}
                  max={Math.max(questionBank.length, 1)}
                  value={config.questionCount}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      questionCount: Math.max(1, Math.min(questionBank.length, parseInt(e.target.value) || 1)),
                    })
                  }
                  className="w-full rounded-xl border-slate-300 border px-3 py-2 text-sm font-black text-indigo-950 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <span className="text-xs text-slate-600 font-bold whitespace-nowrap">butir</span>
              </div>

              {/* Preset buttons: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 */}
              <div className="mt-2.5">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Pilihan Cepat Jumlah Soal:
                </p>
                <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
                  {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((cnt) => {
                    const isAvailable = cnt <= questionBank.length;
                    const isSelected = config.questionCount === cnt;

                    return (
                      <button
                        key={cnt}
                        type="button"
                        disabled={!isAvailable}
                        onClick={() => setConfig({ ...config, questionCount: cnt })}
                        title={
                          isAvailable
                            ? `Pilih ${cnt} butir soal per paket`
                            : `Bank soal hanya memiliki ${questionBank.length} butir`
                        }
                        className={`py-1 px-1 rounded-lg text-[11px] font-extrabold text-center transition flex items-center justify-center ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400'
                            : isAvailable
                            ? 'bg-white text-slate-700 border border-slate-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200'
                            : 'bg-slate-100 text-slate-300 border border-slate-200/60 cursor-not-allowed'
                        }`}
                      >
                        {cnt}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">
                    Atau gunakan seluruh bank:
                  </span>
                  <button
                    type="button"
                    onClick={() => setConfig({ ...config, questionCount: questionBank.length })}
                    className={`px-2 py-0.5 rounded-lg text-[10.5px] font-bold transition ${
                      config.questionCount === questionBank.length
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50'
                    }`}
                  >
                    Semua ({questionBank.length} Soal)
                  </button>
                </div>
              </div>
            </div>

            {/* 1.2 METODE RANDOMIZER (DIPINDAHKAN TEPAT DI BAWAH JUMLAH SOAL) */}
            <div className="pt-3 border-t border-slate-200/80">
              <div className="flex items-center space-x-1.5 mb-2">
                <Shuffle className="w-3.5 h-3.5 text-indigo-600" />
                <label className="text-xs font-bold text-slate-800">
                  2. Navigasi Metode Randomizer
                </label>
              </div>

              <div className="space-y-2 bg-white p-3 rounded-xl border border-slate-200">
                <label className="flex items-start text-xs text-slate-700 cursor-pointer font-medium select-none">
                  <input
                    type="checkbox"
                    checked={config.shuffleOptions}
                    onChange={(e) => setConfig({ ...config, shuffleOptions: e.target.checked })}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 mt-0.5 mr-2"
                  />
                  <div>
                    <span className="font-bold text-slate-800 block">Acak Opsi Pilihan (A-D)</span>
                    <span className="text-[10px] text-slate-500 leading-tight block">
                      Mengacak posisi pilihan tanpa mengubah kunci jawaban valid
                    </span>
                  </div>
                </label>

                <label className="flex items-start text-xs text-slate-700 cursor-pointer font-medium select-none pt-1 border-t border-slate-100">
                  <input
                    type="checkbox"
                    checked={config.shuffleQuestions}
                    onChange={(e) => setConfig({ ...config, shuffleQuestions: e.target.checked })}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 mt-0.5 mr-2"
                  />
                  <div>
                    <span className="font-bold text-slate-800 block">Acak Nomor Urut Soal</span>
                    <span className="text-[10px] text-slate-500 leading-tight block">
                      Mengacak susunan nomor urut soal antar Paket A, B, C, dan D
                    </span>
                  </div>
                </label>
              </div>
              <p className="text-[10px] text-slate-500 mt-1.5 flex items-center">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 mr-1 flex-shrink-0" />
                <span>Metode Fisher-Yates Paralel (Butir Soal Induk Seragam)</span>
              </p>
            </div>
          </div>

          {/* Kolom 2: Target Paket Soal & Filter Elemen Kurikulum */}
          <div className="lg:col-span-5 space-y-4">
            {/* 2.1 Target Paket */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                3. Target Paket Soal yang Digenerate
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['A', 'B', 'C', 'D'] as PackageKey[]).map((pkg) => {
                  const isSelected = config.packages.includes(pkg);
                  return (
                    <label
                      key={pkg}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs font-bold cursor-pointer transition ${
                        isSelected
                          ? 'bg-indigo-50 border-indigo-400 text-indigo-950 ring-1 ring-indigo-400'
                          : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center space-x-1.5">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handlePackageCheckbox(pkg)}
                          className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-sm font-black">Paket {pkg}</span>
                      </div>
                      <span className="text-[10px] font-normal text-slate-500 mt-0.5">
                        {packages[pkg]?.length || config.questionCount} Butir
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* 2.2 Filter Elemen Kurikulum */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-800">
                  4. Filter Elemen Kurikulum Informatika:
                </label>
                {config.selectedElements.length > 0 && (
                  <button
                    onClick={() => setConfig((prev) => ({ ...prev, selectedElements: [] }))}
                    className="text-[11px] text-indigo-600 hover:underline font-semibold"
                  >
                    Pilih Semua
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(Object.keys(ELEMENT_LABELS) as InformaticsElement[]).map((elem) => {
                  const info = ELEMENT_LABELS[elem];
                  const isSelected = config.selectedElements.includes(elem);
                  return (
                    <button
                      key={elem}
                      onClick={() => handleElementFilterToggle(elem)}
                      className={`px-2 py-1 rounded-lg text-[10.5px] font-semibold border transition ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                          : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      {info.short} ({info.full.split(' ')[0]})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Kolom 3: Tombol Aksi Generate & Ringkasan */}
          <div className="lg:col-span-3 flex flex-col justify-between bg-slate-900 text-white p-4 rounded-2xl space-y-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                Kompilasi Naskah
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Siap memproses <strong>{config.packages.length} Paket</strong> (@ {config.questionCount} Butir) dengan kunci jawaban terdistribusi.
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={onGenerate}
                className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm shadow-lg shadow-indigo-500/30 transition flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Generate Paket Sekarang</span>
              </button>

              <button
                onClick={onOpenHeaderModal}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2 px-3 rounded-xl transition flex items-center justify-center space-x-1.5 border border-slate-700"
              >
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Atur Kop & Info Naskah</span>
              </button>
            </div>
          </div>

        </div>

        {/* Estimasi Komposisi Kognitif */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-slate-700">Komposisi Paket Aktif:</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
              LotS: {lotsCount} ({totalQ > 0 ? Math.round((lotsCount / totalQ) * 100) : 0}%)
            </span>
            <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-bold">
              MotS: {motsCount} ({totalQ > 0 ? Math.round((motsCount / totalQ) * 100) : 0}%)
            </span>
            <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 font-bold">
              HoTS: {hotsCount} ({totalQ > 0 ? Math.round((hotsCount / totalQ) * 100) : 0}%)
            </span>
          </div>

          <div className="text-[11px] text-slate-400 font-medium">
            Paket Aktif: <strong>Paket {activePkg}</strong> ({totalQ} butir)
          </div>
        </div>
      </div>

      {/* Package Selector & Action Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 no-print">
          {/* Package Tabs */}
          <div className="flex items-center space-x-1.5 bg-white p-1 rounded-2xl border border-slate-200 shadow-xs">
            {availablePackages.map((pkg) => (
              <button
                key={pkg}
                onClick={() => setActivePkg(pkg)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center space-x-1.5 ${
                  activePkg === pkg
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>PAKET {pkg}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    activePkg === pkg
                      ? 'bg-indigo-700 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {packages[pkg]?.length || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200">
              <button
                onClick={() => setViewMode('2col')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center space-x-1 transition ${
                  viewMode === '2col'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Format Naskah 2 Kolom Presisi Cetak"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Naskah 2 Kolom</span>
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center space-x-1 transition ${
                  viewMode === 'cards'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Format Kartu Interaktif"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Format Kartu</span>
              </button>
            </div>

            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition flex items-center space-x-1.5 ${
                showAnswers
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {showAnswers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showAnswers ? 'Sembunyikan Kunci' : 'Tampilkan Kunci'}</span>
            </button>

            {showAnswers && (
              <button
                onClick={() => setShowExplanations(!showExplanations)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition flex items-center space-x-1.5 ${
                  showExplanations
                    ? 'bg-violet-600 text-white border-violet-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{showExplanations ? 'Tutup Pembahasan' : 'Lihat Pembahasan'}</span>
              </button>
            )}

            <button
              onClick={handleCopyText}
              disabled={isCopying}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition flex items-center space-x-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{isCopying ? 'Menyalin...' : 'Salin Teks Guru'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition flex items-center space-x-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF (2 Kolom)</span>
            </button>
          </div>
        </div>

        {/* Naskah Soal Display Area */}
        {currentQuestions && currentQuestions.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 card-print">
            {/* Header Naskah Ujian Resmi */}
            <div className="border-b-2 border-slate-900 pb-3 mb-4 exam-header">
              <div className="flex items-center justify-between gap-3">
                <div className="text-left flex-grow">
                  <h2 className="text-sm sm:text-base font-black uppercase tracking-tight text-slate-900 leading-tight">
                    {headerConfig.examTitle}
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-indigo-950 mt-0.5">
                    {headerConfig.schoolName}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 font-medium">
                    Mata Pelajaran: <span className="font-bold text-slate-900">{headerConfig.subject}</span> • {headerConfig.gradeLevel} • Tahun Ajaran {headerConfig.academicYear}
                  </p>
                </div>

                <div className="px-3.5 py-1.5 bg-slate-50 rounded-lg border-2 border-slate-900 text-center min-w-[100px] flex-shrink-0">
                  <span className="text-[8.5px] uppercase font-black text-slate-500 tracking-wider block">
                    KODE NASKAH
                  </span>
                  <span className="text-lg sm:text-xl font-black text-indigo-950 leading-tight">
                    PAKET {activePkg}
                  </span>
                </div>
              </div>
            </div>

            {/* List of Questions: Rendered as 2-column precision layout */}
            {viewMode === '2col' ? (
              <div className="exam-columns md:columns-2 gap-7">
                {currentQuestions.map((q) => {
                  const elemInfo = ELEMENT_LABELS[q.element];
                  const cogInfo = COGNITIVE_LABELS[q.level];

                  return (
                    <div
                      key={q.id + '_' + q.num}
                      className="exam-question-item mb-3.5 pb-2.5 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      {/* Metadata badges (Hidden when printed) */}
                      <div className="flex items-center space-x-1.5 mb-1 no-print">
                        <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${elemInfo.badgeBg}`}>
                          {elemInfo.short}
                        </span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${cogInfo.badge}`}>
                          {q.level}
                        </span>
                      </div>

                      {/* Stem / Soal */}
                      <div className="flex items-start space-x-1.5 text-xs text-slate-900 leading-snug mb-1.5">
                        <span className="font-bold text-indigo-950 min-w-[20px]">{q.num}.</span>
                        <div className="whitespace-pre-line flex-grow text-slate-900 font-medium">
                          {q.stem}
                        </div>
                      </div>

                      {/* Options (A, B, C, D) - Clean 2-column print style */}
                      <div className="space-y-0.5 pl-5 text-xs">
                        {['A', 'B', 'C', 'D'].map((letter, optIdx) => {
                          const isCorrectKey = showAnswers && optIdx === q.correctIndex;
                          return (
                            <div
                              key={letter}
                              className={`flex items-start space-x-1.5 leading-snug py-0.5 rounded transition ${
                                isCorrectKey
                                  ? 'text-emerald-700 font-bold bg-emerald-50/70 px-1 -mx-1'
                                  : 'text-slate-800'
                              }`}
                            >
                              <span className="font-bold min-w-[16px] text-slate-700 flex-shrink-0">
                                {letter}.
                              </span>
                              <span className="flex-grow">{q.options[optIdx]}</span>
                              {isCorrectKey && (
                                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded no-print flex-shrink-0">
                                  KUNCI
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation Box if toggled */}
                      {showAnswers && showExplanations && (
                        <div className="mt-2 ml-5 p-2 rounded-lg bg-violet-50 border border-violet-200 text-[11px] text-violet-950 no-print">
                          <p className="font-bold text-violet-900 mb-0.5 flex items-center">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 mr-1" />
                            Kunci: {q.correctLetter}
                          </p>
                          <p className="text-violet-900 leading-normal">
                            {q.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Card View mode on screen */
              <div className="space-y-5">
                {currentQuestions.map((q) => {
                  const elemInfo = ELEMENT_LABELS[q.element];
                  const cogInfo = COGNITIVE_LABELS[q.level];

                  return (
                    <div
                      key={q.id + '_' + q.num}
                      className="border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                    >
                      {/* Metadata badges */}
                      <div className="flex items-center space-x-2 mb-2 no-print">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${elemInfo.badgeBg}`}>
                          {elemInfo.short} - {elemInfo.full}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${cogInfo.badge}`}>
                          {q.level}
                        </span>
                        {q.topic && (
                          <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            {q.topic}
                          </span>
                        )}
                      </div>

                      {/* Stem */}
                      <div className="flex items-start space-x-2 text-xs sm:text-sm text-slate-900 font-medium mb-3 leading-relaxed">
                        <span className="font-bold text-indigo-950 min-w-[24px]">{q.num}.</span>
                        <div className="whitespace-pre-line flex-grow">{q.stem}</div>
                      </div>

                      {/* Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6 sm:pl-7 text-xs sm:text-sm">
                        {['A', 'B', 'C', 'D'].map((letter, optIdx) => {
                          const isCorrectKey = showAnswers && optIdx === q.correctIndex;
                          return (
                            <div
                              key={letter}
                              className={`flex items-start space-x-2 p-2.5 rounded-xl border transition ${
                                isCorrectKey
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold ring-1 ring-emerald-400'
                                  : 'bg-slate-50/80 border-slate-200 text-slate-800 hover:bg-slate-100/80'
                              }`}
                            >
                              <span className="font-bold text-slate-600 min-w-[18px]">{letter}.</span>
                              <span className="flex-grow">{q.options[optIdx]}</span>
                              {isCorrectKey && (
                                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded no-print">
                                  KUNCI
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {showAnswers && showExplanations && (
                        <div className="mt-3 ml-6 sm:ml-7 p-3 rounded-xl bg-violet-50 border border-violet-200 text-xs text-violet-950 no-print">
                          <p className="font-bold text-violet-900 mb-1 flex items-center">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                            Kunci Jawaban: {q.correctLetter}
                          </p>
                          <p className="text-violet-900 leading-relaxed">
                            <strong>Pembahasan:</strong> {q.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Print Footer */}
            <div className="mt-6 pt-3 border-t border-slate-300 text-center text-[10px] text-slate-500 print-only">
              *** Naskah Soal Penilaian Informatika Kelas IX - Paket {activePkg} ***
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
            <p className="text-slate-500 font-semibold text-sm">
              Belum ada paket soal yang digenerate. Klik tombol "Generate Paket Sekarang" di atas!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


