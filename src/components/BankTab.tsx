import React, { useState, useRef, useMemo } from 'react';
import {
  Question,
  COGNITIVE_LABELS,
  getMateriBadgeStyle,
} from '../types';
import {
  Search,
  Plus,
  RotateCcw,
  Download,
  Upload,
  Edit,
  Trash2,
  Filter,
  CheckCircle2,
  BookOpen,
  Layers,
  Lightbulb,
  Database,
  Sparkles,
  FileSpreadsheet,
} from 'lucide-react';
import { exportBankToJson } from '../utils/generator';

interface BankTabProps {
  questionBank: Question[];
  onAddQuestion: () => void;
  onEditQuestion: (q: Question) => void;
  onDeleteQuestion: (id: string) => void;
  onResetDefault: () => void;
  onClearAll?: () => void;
  onOpenMaterialModal?: () => void;
  onImportBank: (imported: Question[]) => void;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const BankTab: React.FC<BankTabProps> = ({
  questionBank,
  onAddQuestion,
  onEditQuestion,
  onDeleteQuestion,
  onResetDefault,
  onClearAll,
  onOpenMaterialModal,
  onImportBank,
  onToast,
}) => {
  const [materiFilter, setMateriFilter] = useState<string>('ALL');
  const [levelFilter, setLevelFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Dynamic distinct list of Materis from the question bank
  const availableMateris = useMemo(() => {
    const set = new Set<string>();
    questionBank.forEach((q) => {
      const m = q.materi || q.topic || 'Materi Umum';
      set.add(m);
    });
    return Array.from(set);
  }, [questionBank]);

  // Counts per materi
  const materiDistribution = useMemo(() => {
    const map: Record<string, number> = {};
    questionBank.forEach((q) => {
      const m = q.materi || q.topic || 'Materi Umum';
      map[m] = (map[m] || 0) + 1;
    });
    return map;
  }, [questionBank]);

  // Filter logic
  const filteredQuestions = questionBank.filter((q) => {
    const qMateri = q.materi || q.topic || 'Materi Umum';
    if (materiFilter !== 'ALL' && qMateri !== materiFilter) return false;
    if (levelFilter !== 'ALL' && q.level !== levelFilter) return false;
    if (searchQuery.trim()) {
      const qText = (
        q.stem +
        ' ' +
        (q.explanation || '') +
        ' ' +
        (q.materi || '') +
        ' ' +
        (q.topic || '') +
        ' ' +
        q.options.join(' ')
      ).toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].stem && parsed[0].options) {
          const normalized: Question[] = parsed.map((item) => ({
            ...item,
            materi: item.materi || item.topic || (item.element ? 'Informatika' : 'Materi Pembahasan'),
            explanation: item.explanation || 'Pembahasan telah diverifikasi sesuai kunci.',
          }));
          onImportBank(normalized);
          onToast(`Berhasil mengimpor ${normalized.length} butir soal ke Bank!`, 'success');
        } else {
          onToast('Format berkas JSON tidak valid untuk Bank Soal.', 'error');
        }
      } catch (err) {
        onToast('Gagal membaca berkas JSON.', 'error');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleExport = () => {
    exportBankToJson(questionBank);
    onToast('Bank Soal berhasil diekspor ke file JSON!', 'success');
  };

  return (
    <div className="space-y-6">
      {/* Hidden file input for import */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".json"
        className="hidden"
      />

      {/* Filter and Top Action Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Materi Filter */}
            <div className="w-full sm:w-auto">
              <select
                value={materiFilter}
                onChange={(e) => setMateriFilter(e.target.value)}
                className="w-full sm:w-56 rounded-xl border-slate-300 border text-xs px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium text-slate-800"
              >
                <option value="ALL">Semua Materi Pokok ({questionBank.length} Soal)</option>
                {availableMateris.map((m) => {
                  const count = materiDistribution[m] || 0;
                  return (
                    <option key={m} value={m}>
                      {m} ({count})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Cognitive Level Filter */}
            <div className="w-full sm:w-auto">
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="w-full sm:w-44 rounded-xl border-slate-300 border text-xs px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium text-slate-800"
              >
                <option value="ALL">Semua Tingkat Kognitif</option>
                <option value="LotS">LotS (C1-C2 Dasar)</option>
                <option value="MotS">MotS (C3 Penerapan)</option>
                <option value="HoTS">HoTS (C4-C5 Analisis)</option>
              </select>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari materi, soal, pembahasan..."
                className="w-full rounded-xl border-slate-300 border text-xs pl-8 pr-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center space-x-1.5"
              title="Unggah berkas JSON Bank Soal"
            >
              <Upload className="w-3.5 h-3.5 text-slate-600" />
              <span>Impor JSON</span>
            </button>

            {questionBank.length > 0 && (
              <button
                onClick={handleExport}
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition flex items-center space-x-1.5"
                title="Unduh seluruh bank soal ke JSON"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Ekspor JSON</span>
              </button>
            )}

            {questionBank.length > 0 && onClearAll && (
              <button
                onClick={onClearAll}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition flex items-center space-x-1.5"
                title="Hapus seluruh data dari bank soal & paket"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Hapus Semua Data</span>
              </button>
            )}

            <button
              onClick={onResetDefault}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition flex items-center space-x-1.5"
              title="Muat kembali 400 butir soal Kurikulum Merdeka default"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Muat Data Standar (400 Soal)</span>
            </button>

            <button
              onClick={onAddQuestion}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition flex items-center space-x-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Soal & Pembahasan</span>
            </button>
          </div>

        </div>

        {/* Quick Materi Distribution Pills */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500 font-semibold flex items-center">
            <Layers className="w-3.5 h-3.5 mr-1 text-slate-400" />
            Materi:
          </span>
          <span
            onClick={() => setMateriFilter('ALL')}
            className={`cursor-pointer px-2.5 py-1 rounded-lg text-[11px] font-bold border transition ${
              materiFilter === 'ALL'
                ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
          >
            Semua ({questionBank.length})
          </span>
          {availableMateris.map((m) => {
            const count = materiDistribution[m] || 0;
            const badge = getMateriBadgeStyle(m);
            const isSelected = materiFilter === m;
            return (
              <span
                key={m}
                onClick={() => setMateriFilter(isSelected ? 'ALL' : m)}
                className={`cursor-pointer px-2.5 py-1 rounded-lg text-[11px] font-bold border transition flex items-center space-x-1 ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                    : `${badge.bg} ${badge.text} ${badge.border} hover:opacity-85`
                }`}
              >
                <span>{m}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                    isSelected ? 'bg-indigo-800 text-white' : 'bg-white/80 border border-slate-200/50'
                  }`}
                >
                  {count}
                </span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q, idx) => {
            const materiName = q.materi || q.topic || 'Materi Umum';
            const badge = getMateriBadgeStyle(materiName);
            const cogInfo = COGNITIVE_LABELS[q.level] || COGNITIVE_LABELS.MotS;
            const letters = ['A', 'B', 'C', 'D'];

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-sm transition space-y-3.5"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      #{idx + 1}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-lg border ${badge.bg} ${badge.text} ${badge.border}`}>
                      Materi: {materiName}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-lg border ${cogInfo.badge}`}>
                      {q.level}
                    </span>
                    {q.topic && q.topic !== materiName && (
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        {q.topic}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => onEditQuestion(q)}
                      className="px-2.5 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition flex items-center space-x-1"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => onDeleteQuestion(q.id)}
                      className="px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg transition flex items-center space-x-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Hapus</span>
                    </button>
                  </div>
                </div>

                {/* Stem */}
                <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                  {q.stem}
                </p>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {q.options.map((opt, oIdx) => {
                    const isKey = oIdx === q.correctIndex;
                    return (
                      <div
                        key={oIdx}
                        className={`p-2.5 rounded-xl border flex items-start space-x-2 ${
                          isKey
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold ring-1 ring-emerald-400'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className="font-bold text-slate-500 min-w-[16px]">{letters[oIdx]}.</span>
                        <span className="flex-grow">{opt}</span>
                        {isKey && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Form Pembahasan & Kunci View */}
                <div className="pt-2 text-xs text-slate-700 bg-indigo-50/50 p-3.5 rounded-xl border border-indigo-100 space-y-1">
                  <div className="font-bold text-indigo-900 flex items-center justify-between">
                    <span className="flex items-center">
                      <Lightbulb className="w-3.5 h-3.5 mr-1 text-amber-500" />
                      Kunci Jawaban: {letters[q.correctIndex]} ({q.options[q.correctIndex]})
                    </span>
                    <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-100/70 px-2 py-0.2 rounded">
                      Pembahasan
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed pl-5 font-normal">
                    {q.explanation || 'Pembahasan terverifikasi sesuai kunci jawaban yang telah ditentukan.'}
                  </p>
                </div>
              </div>
            );
          })
        ) : questionBank.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-slate-200 shadow-sm space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600 shadow-inner">
              <Database className="w-8 h-8" />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Bank Soal Masih Kosong
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Seluruh data demo aplikasi telah dibersihkan. Anda dapat mulai menambahkan butir soal baru secara manual, mengunggah materi pembelajaran, atau memuat kembali 400 butir soal standar bawaan.
              </p>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
              <button
                onClick={onAddQuestion}
                className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-2.5 shadow-sm group-hover:scale-105 transition">
                  <Plus className="w-4 h-4" />
                </div>
                <span className="block text-xs font-bold text-emerald-950">Tambah Manual</span>
                <span className="text-[11px] text-emerald-700 leading-snug block mt-0.5">
                  Input soal, 4 opsi pilihan, kunci & pembahasan
                </span>
              </button>

              {onOpenMaterialModal && (
                <button
                  onClick={onOpenMaterialModal}
                  className="p-4 rounded-xl border border-violet-200 bg-violet-50/50 hover:bg-violet-50 hover:border-violet-300 text-left transition group"
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center mb-2.5 shadow-sm group-hover:scale-105 transition">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="block text-xs font-bold text-violet-950">Upload Materi</span>
                  <span className="text-[11px] text-violet-700 leading-snug block mt-0.5">
                    Ekstrak soal otomatis dari teks modul/bab
                  </span>
                </button>
              )}

              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-left transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center mb-2.5 shadow-sm group-hover:scale-105 transition">
                  <Upload className="w-4 h-4" />
                </div>
                <span className="block text-xs font-bold text-slate-900">Impor JSON</span>
                <span className="text-[11px] text-slate-500 leading-snug block mt-0.5">
                  Unggah berkas cadangan bank soal JSON
                </span>
              </button>

              <button
                onClick={onResetDefault}
                className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/60 hover:bg-indigo-100/60 text-left transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center mb-2.5 shadow-sm group-hover:scale-105 transition">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <span className="block text-xs font-bold text-indigo-950">Muat 400 Soal Standar</span>
                <span className="text-[11px] text-indigo-700 leading-snug block mt-0.5">
                  8 Materi Pokok Kurikulum Merdeka Fase D
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center text-slate-400 border border-slate-200 shadow-sm">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-600">Tidak ada soal yang sesuai dengan filter.</p>
            <p className="text-xs text-slate-400 mt-1">Coba sesuaikan materi pokok, level kognitif, atau kata kunci pencarian.</p>
          </div>
        )}
      </div>
    </div>
  );
};
