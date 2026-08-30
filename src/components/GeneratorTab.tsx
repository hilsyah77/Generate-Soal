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
  AlertCircle,
  HelpCircle,
  Clock,
  Sparkles,
  BookOpen,
  Filter,
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
}) => {
  const [activePkg, setActivePkg] = useState<PackageKey>('A');
  const [showAnswers, setShowAnswers] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

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
        // If all would be deselected, reset to none (meaning all elements)
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
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Pengaturan Acak & Pembuatan Paket Soal
              </h2>
              <p className="text-xs text-slate-500">
                Otomatisasi pengacakan opsi jawaban, susunan butir soal, dan komposisi kognitif
              </p>
            </div>
          </div>
          <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Total Soal Bank: {questionBank.length} Butir
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Jumlah Soal */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Jumlah Soal Per Paket
            </label>
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
                className="w-full rounded-xl border-slate-300 border px-3 py-2 text-xs font-bold text-indigo-950 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <span className="text-xs text-slate-500 whitespace-nowrap">butir</span>
            </div>
          </div>

          {/* Target Paket */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Target Paket Soal
            </label>
            <div className="flex items-center space-x-2.5 pt-1">
              {(['A', 'B', 'C', 'D'] as PackageKey[]).map((pkg) => {
                const isSelected = config.packages.includes(pkg);
                return (
                  <label
                    key={pkg}
                    className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold cursor-pointer transition ${
                      isSelected
                        ? 'bg-indigo-50 border-indigo-300 text-indigo-700 ring-1 ring-indigo-400/50'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handlePackageCheckbox(pkg)}
                      className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Paket {pkg}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Mode Pengacakan */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Metode Randomizer
            </label>
            <div className="space-y-1.5">
              <label className="flex items-center text-xs text-slate-700 cursor-pointer font-medium">
                <input
                  type="checkbox"
                  checked={config.shuffleOptions}
                  onChange={(e) => setConfig({ ...config, shuffleOptions: e.target.checked })}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 mr-2"
                />
                <span>Acak Opsi Pilihan Jawaban (A-D)</span>
              </label>
              <label className="flex items-center text-xs text-slate-700 cursor-pointer font-medium">
                <input
                  type="checkbox"
                  checked={config.shuffleQuestions}
                  onChange={(e) => setConfig({ ...config, shuffleQuestions: e.target.checked })}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 mr-2"
                />
                <span>Acak Nomor Urut Butir Soal</span>
              </label>
            </div>
          </div>

          {/* Tombol Generate */}
          <div className="flex items-end">
            <button
              onClick={onGenerate}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-md shadow-indigo-600/20 transition flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Generate Paket Now</span>
            </button>
          </div>
        </div>

        {/* Elemen Filter (Optional) */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center">
              <Filter className="w-3 h-3 mr-1 text-slate-400" />
              Filter Elemen Kurikulum (Kosongkan jika ambil semua):
            </span>
            {config.selectedElements.length > 0 && (
              <button
                onClick={() => setConfig((prev) => ({ ...prev, selectedElements: [] }))}
                className="text-[11px] text-indigo-600 hover:underline font-semibold"
              >
                Pilih Semua Elemen
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
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition ${
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

          <button
            onClick={onOpenHeaderModal}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition underline"
          >
            Edit Kop Ujian: {headerConfig.schoolName}
          </button>
        </div>
      </div>

      {/* Generated Result Container */}
      <div className="space-y-4">
        {/* Toolbar & Package Selector */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm no-print">
          {/* Package Tabs */}
          <div className="flex space-x-1.5">
            {availablePackages.map((pkg) => {
              const isActive = pkg === activePkg;
              return (
                <button
                  key={pkg}
                  onClick={() => setActivePkg(pkg)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Paket {pkg}</span>
                </button>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition flex items-center space-x-1.5 ${
                showAnswers
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
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
                    ? 'bg-violet-600 text-white border-violet-700 shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{showExplanations ? 'Tutup Pembahasan' : 'Buka Pembahasan'}</span>
              </button>
            )}

            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition flex items-center space-x-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{isCopying ? 'Menyalin...' : 'Salin Format Guru'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition flex items-center space-x-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Cetak PDF</span>
            </button>
          </div>
        </div>

        {/* Naskah Soal Display Area */}
        {currentQuestions && currentQuestions.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 card-print">
            {/* Header Naskah Ujian Resmi */}
            <div className="border-b-2 border-slate-900 pb-5 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left flex-grow">
                  <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-slate-900 leading-tight">
                    {headerConfig.examTitle}
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-indigo-900 mt-0.5">
                    {headerConfig.schoolName}
                  </p>
                  <p className="text-xs font-semibold text-slate-600 mt-1">
                    Mata Pelajaran: <span className="text-slate-900 font-bold">{headerConfig.subject}</span> • {headerConfig.gradeLevel} • Tahun Ajaran {headerConfig.academicYear}
                  </p>
                </div>

                {/* Kode Naskah Badge */}
                <div className="px-5 py-2.5 bg-slate-100 rounded-xl border-2 border-slate-900 text-center min-w-[130px] flex-shrink-0">
                  <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider block">
                    KODE NASKAH
                  </span>
                  <span className="text-2xl font-black text-indigo-950">
                    PAKET {activePkg}
                  </span>
                </div>
              </div>

              {/* Student Header Grid on Print */}
              <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700">
                <div>
                  <span className="font-semibold text-slate-500 block">Nama Siswa:</span>
                  <div className="border-b border-dotted border-slate-400 h-5"></div>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">Nomor Peserta / Kelas:</span>
                  <div className="border-b border-dotted border-slate-400 h-5"></div>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">Alokasi Waktu:</span>
                  <span className="font-bold text-slate-800">{headerConfig.timeLimit}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">Semester:</span>
                  <span className="font-bold text-slate-800">{headerConfig.semester}</span>
                </div>
              </div>
            </div>

            {/* Petunjuk Pengerjaan */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 mb-6 flex items-start space-x-2">
              <Clock className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>PETUNJUK UMUM:</strong> Pilihlah salah satu jawaban yang paling tepat (A, B, C, atau D) dengan memberi tanda silang (X) atau menghitamkan bulatan pada lembar jawaban yang tersedia!
              </div>
            </div>

            {/* List of Questions */}
            <div className="space-y-6">
              {currentQuestions.map((q) => {
                const elemInfo = ELEMENT_LABELS[q.element];
                const cogInfo = COGNITIVE_LABELS[q.level];

                return (
                  <div
                    key={q.id + '_' + q.num}
                    className="border-b border-slate-100 pb-5 last:border-0 last:pb-0"
                  >
                    {/* Metadata badges (Hidden when printed) */}
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

                    {/* Stem / Soal */}
                    <div className="flex items-start space-x-2 text-xs sm:text-sm text-slate-900 font-medium mb-3 leading-relaxed">
                      <span className="font-bold text-indigo-950 min-w-[24px]">{q.num}.</span>
                      <div className="whitespace-pre-line flex-grow">{q.stem}</div>
                    </div>

                    {/* Options (A, B, C, D) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-6 sm:pl-7 text-xs sm:text-sm">
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

                    {/* Explanation Box if toggled */}
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

            {/* Print Footer */}
            <div className="mt-8 pt-4 border-t border-slate-300 text-center text-xs text-slate-500 print-only">
              *** Naskah Soal Penilaian Informatika Kelas IX - Paket {activePkg} ***
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center text-slate-400 border border-slate-200 shadow-sm">
            <Sparkles className="w-12 h-12 text-indigo-300 mx-auto mb-3" />
            <p className="text-base font-bold text-slate-700">Belum ada paket soal yang di-generate</p>
            <p className="text-xs text-slate-500 mt-1">
              Klik tombol <strong>"Generate Paket Now"</strong> di atas untuk meracik paket soal acak A, B, C, dan D.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
