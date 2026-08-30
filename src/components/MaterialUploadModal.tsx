import React, { useState, useRef } from 'react';
import {
  InformaticsElement,
  Question,
  ELEMENT_LABELS,
  GRADE9_TEXTBOOK_CHAPTERS,
} from '../types';
import {
  INFORMATICS_GRADE9_PRESETS,
  generateQuestionsFromMaterial,
  MaterialPreset,
} from '../utils/materialExtractor';
import {
  UploadCloud,
  FileText,
  Sparkles,
  CheckCircle2,
  X,
  BookOpen,
  Sliders,
  Plus,
  Trash2,
  HelpCircle,
  Cpu,
  Layers,
  ArrowRight,
  FolderOpen,
  FileCode,
  ShieldCheck,
  Search,
} from 'lucide-react';

interface MaterialUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddQuestionsToBank: (questions: Question[]) => void;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const MaterialUploadModal: React.FC<MaterialUploadModalProps> = ({
  isOpen,
  onClose,
  onAddQuestionsToBank,
  onToast,
}) => {
  const [selectedBabFilter, setSelectedBabFilter] = useState<string>('ALL');
  const [selectedElement, setSelectedElement] = useState<InformaticsElement>('BK');
  const [targetLevel, setTargetLevel] = useState<'Balanced' | 'LotS' | 'MotS' | 'HoTS'>('Balanced');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [topicTitle, setTopicTitle] = useState<string>('');
  const [materialContent, setMaterialContent] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedPreview, setGeneratedPreview] = useState<Question[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Filter presets based on selected Bab tab
  const filteredPresets = selectedBabFilter === 'ALL'
    ? INFORMATICS_GRADE9_PRESETS
    : INFORMATICS_GRADE9_PRESETS.filter((p) => p.babId === selectedBabFilter);

  // Handle Preset selection
  const handleSelectPreset = (preset: MaterialPreset) => {
    setSelectedElement(preset.element);
    setTopicTitle(preset.title);
    setMaterialContent(preset.summary);
    setFileName(`Preset Buku: ${preset.title} (${preset.pages})`);
    onToast(`Memuat materi "${preset.title}" (${preset.pages})`, 'info');
  };

  // Handle File Upload (txt, json, docx text, csv, etc.)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();

    if (file.name.endsWith('.json')) {
      reader.onload = (event) => {
        try {
          const content = event.target?.result as string;
          const parsed = JSON.parse(content);
          if (Array.isArray(parsed) && parsed[0]?.stem) {
            // Direct JSON question bank import
            setGeneratedPreview(parsed);
            onToast(`Memuat ${parsed.length} butir soal dari file JSON!`, 'success');
            return;
          }
          setMaterialContent(typeof parsed === 'string' ? parsed : JSON.stringify(parsed, null, 2));
        } catch (err) {
          setMaterialContent(event.target?.result as string);
        }
      };
      reader.readAsText(file);
    } else {
      // Standard text / markdown / csv reader
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setMaterialContent(text || '');
        if (!topicTitle) {
          setTopicTitle(file.name.replace(/\.[^/.]+$/, ''));
        }
      };
      reader.readAsText(file);
    }
  };

  // Generate Questions handler
  const handleGenerate = () => {
    if (!materialContent.trim()) {
      onToast('Harap pilih preset bab atau tempel ringkasan materi terlebih dahulu!', 'error');
      return;
    }

    setIsGenerating(true);

    setTimeout(() => {
      try {
        const results = generateQuestionsFromMaterial(
          materialContent,
          selectedElement,
          targetLevel,
          questionCount,
          topicTitle || undefined
        );

        if (results.length === 0) {
          onToast('Gagal mengekstrak materi. Pastikan materi memiliki teks yang cukup.', 'error');
        } else {
          setGeneratedPreview(results);
          onToast(`Berhasil men-generate ${results.length} butir soal Kurikulum Merdeka!`, 'success');
        }
      } catch (err) {
        console.error(err);
        onToast('Terjadi kesalahan saat memproses materi.', 'error');
      } finally {
        setIsGenerating(false);
      }
    }, 400);
  };

  // Save to Question Bank
  const handleSaveToBank = () => {
    if (generatedPreview.length === 0) return;
    onAddQuestionsToBank(generatedPreview);
    onToast(`Berhasil menambahkan ${generatedPreview.length} butir soal ke Bank Soal!`, 'success');
    setGeneratedPreview([]);
    onClose();
  };

  // Remove individual question from preview
  const handleRemovePreviewQuestion = (index: number) => {
    setGeneratedPreview((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 no-print">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                  Preset Materi SMP Kelas IX & Generator Soal
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Sesuai Daftar Isi Buku
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Pilih topik sesuai BAB I s.d. BAB IV Buku Informatika Kelas IX atau unggah modul ajar Anda sendiri.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          {generatedPreview.length === 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Preset Materi Kurikulum Merdeka (5 cols) */}
              <div className="lg:col-span-5 space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>Daftar Isi SMP Kelas IX</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    Buku Resmi
                  </span>
                </div>

                {/* Chapter filter pills */}
                <div className="flex flex-wrap gap-1">
                  <button
                    type="button"
                    onClick={() => setSelectedBabFilter('ALL')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                      selectedBabFilter === 'ALL'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    Semua Bab
                  </button>
                  {GRADE9_TEXTBOOK_CHAPTERS.map((ch) => (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setSelectedBabFilter(ch.id)}
                      className={`px-2 py-1 rounded-lg text-[11px] font-bold transition ${
                        selectedBabFilter === ch.id
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-white text-slate-600 hover:bg-indigo-50 border border-slate-200'
                      }`}
                      title={ch.fullTitle}
                    >
                      {ch.babNumber}
                    </button>
                  ))}
                </div>

                {/* Preset List Container */}
                <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1 flex-grow">
                  {filteredPresets.map((preset) => {
                    const elem = ELEMENT_LABELS[preset.element];
                    const isSelected = topicTitle === preset.title;
                    return (
                      <div
                        key={preset.id}
                        onClick={() => handleSelectPreset(preset)}
                        className={`w-full text-left p-3 rounded-xl border transition cursor-pointer group ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-50/80 shadow-xs'
                            : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100/70 px-1.5 py-0.5 rounded">
                            {preset.babNumber} - Sub-Bab {preset.subBabCode}
                          </span>
                          <span className="text-[10px] font-medium text-slate-500">
                            {preset.pages}
                          </span>
                        </div>
                        <p className="font-bold text-slate-900 text-xs leading-snug group-hover:text-indigo-900">
                          {preset.title.replace(/^BAB\s+[IVX]+\s*-\s*/, '')}
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100">
                          <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${elem.badgeBg}`}>
                            {elem.short} - {elem.full}
                          </span>
                          <span className="text-[9px] font-bold text-slate-500">
                            Level: {preset.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Middle/Right Column: Upload, Text Area, & Config (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* File Upload Box */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-300 hover:border-indigo-500 bg-slate-50/70 hover:bg-indigo-50/30 rounded-2xl p-3.5 text-center cursor-pointer transition flex flex-col items-center justify-center space-y-1.5"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".txt,.json,.csv,.md,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="p-2 rounded-full bg-indigo-100 text-indigo-700">
                    <UploadCloud className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      {fileName ? `File Terpilih: ${fileName}` : 'Atau Unggah Modul Ajar / File Mandiri (.TXT / .JSON / .CSV)'}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Dapat menggunakan materi dari preset buku di sebelah kiri atau mengunggah catatan sendiri
                    </p>
                  </div>
                </div>

                {/* Input Topic and Element */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Elemen Kurikulum:
                    </label>
                    <select
                      value={selectedElement}
                      onChange={(e) => setSelectedElement(e.target.value as InformaticsElement)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500 bg-white"
                    >
                      {(Object.keys(ELEMENT_LABELS) as InformaticsElement[]).map((elem) => (
                        <option key={elem} value={elem}>
                          {elem} - {ELEMENT_LABELS[elem].short}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Level Kognitif:
                    </label>
                    <select
                      value={targetLevel}
                      onChange={(e) => setTargetLevel(e.target.value as any)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500 bg-white"
                    >
                      <option value="Balanced">Campuran Seimbang (LotS, MotS, HoTS)</option>
                      <option value="HoTS">Fokus HoTS (C4-C5 Penalaran)</option>
                      <option value="MotS">Fokus MotS (C3 Penerapan)</option>
                      <option value="LotS">Fokus LotS (C1-C2 Pemahaman)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Jumlah Butir Soal:
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={questionCount}
                      onChange={(e) => setQuestionCount(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                  </div>
                </div>

                {/* Topik Judul */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Topik / Materi Pokok:
                  </label>
                  <input
                    type="text"
                    placeholder="Pilih dari preset di samping atau ketik topik bab..."
                    value={topicTitle}
                    onChange={(e) => setTopicTitle(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                {/* Text Area for Material Content */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700">
                      Rangkuman Materi / Pokok Pembahasan Buku:
                    </label>
                    <span className="text-[11px] text-slate-400">
                      {materialContent.length} karakter
                    </span>
                  </div>
                  <textarea
                    rows={6}
                    placeholder="Pilih preset materi dari daftar isi atau tempelkan ringkasan modul di sini..."
                    value={materialContent}
                    onChange={(e) => setMaterialContent(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs text-slate-800 font-sans leading-relaxed focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
                  />
                </div>

                {/* Generate Action Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleGenerate}
                    disabled={isGenerating || !materialContent.trim()}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md transition flex items-center justify-center space-x-2 ${
                      isGenerating || !materialContent.trim()
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {isGenerating
                        ? 'Sedang Memproses Materi & Meracik Soal...'
                        : `Generate ${questionCount} Soal Dari Bab Ini`}
                    </span>
                  </button>
                </div>

              </div>

            </div>
          ) : (
            /* Generated Questions Review Screen */
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h3 className="text-xs font-bold text-emerald-950">
                      Pratinjau {generatedPreview.length} Butir Soal Terbentuk
                    </h3>
                    <p className="text-[11px] text-emerald-800">
                      Periksa dan sesuaikan sebelum menyimpannya ke Bank Soal Master.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setGeneratedPreview([])}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition"
                  >
                    Kembali Pilih Bab / Edit Materi
                  </button>

                  <button
                    onClick={handleSaveToBank}
                    className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition flex items-center space-x-1.5"
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                    <span>Simpan Semua ke Bank Soal</span>
                  </button>
                </div>
              </div>

              {/* List of Generated Items */}
              <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-1">
                {generatedPreview.map((q, idx) => {
                  const elemInfo = ELEMENT_LABELS[q.element];
                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white transition space-y-3 relative group"
                    >
                      {/* Top metadata */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-xs text-indigo-950">
                            Soal #{idx + 1}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${elemInfo?.badgeBg || 'bg-slate-100'}`}>
                            {q.element} - {elemInfo?.short}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                            {q.level}
                          </span>
                          {q.materi && (
                            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                              {q.materi}
                            </span>
                          )}
                          {q.topic && (
                            <span className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                              {q.topic}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => handleRemovePreviewQuestion(idx)}
                          className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                          title="Hapus butir ini"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Stem */}
                      <p className="text-xs font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                        {q.stem}
                      </p>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {q.options.map((opt, optIdx) => {
                          const letter = ['A', 'B', 'C', 'D'][optIdx];
                          const isCorrect = optIdx === q.correctIndex;
                          return (
                            <div
                              key={letter}
                              className={`p-2 rounded-xl border flex items-start space-x-2 ${
                                isCorrect
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                                  : 'bg-white border-slate-200 text-slate-700'
                              }`}
                            >
                              <span className="font-bold min-w-[16px]">{letter}.</span>
                              <span className="flex-grow">{opt}</span>
                              {isCorrect && (
                                <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-100 px-1 rounded">
                                  KUNCI
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {q.explanation && (
                        <div className="p-2.5 rounded-xl bg-violet-50 border border-violet-100 text-[11px] text-violet-950">
                          <strong>Pembahasan:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div>
            Daftar Isi Standar Buku <strong>Informatika SMP Kelas IX (Kurikulum Merdeka)</strong>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
