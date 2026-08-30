import React, { useState, useEffect } from 'react';
import { Question, CognitiveLevel, COGNITIVE_LABELS, SUGGESTED_MATERI } from '../types';
import { X, Save, HelpCircle, BookOpen, Layers, Lightbulb } from 'lucide-react';

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  questionToEdit: Question | null;
  onSave: (question: Question) => void;
  availableMateris?: string[];
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
  isOpen,
  onClose,
  questionToEdit,
  onSave,
  availableMateris = [],
}) => {
  const [materi, setMateri] = useState<string>('Berpikir Komputasional');
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState<CognitiveLevel>('MotS');
  const [stem, setStem] = useState('');
  const [options, setOptions] = useState<[string, string, string, string]>(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState<number>(0);
  const [explanation, setExplanation] = useState('');
  const [cp, setCp] = useState('');
  const [indicator, setIndicator] = useState('');

  // Combined list of suggestions
  const materiSuggestions = Array.from(
    new Set([...SUGGESTED_MATERI, ...availableMateris.filter(Boolean)])
  );

  useEffect(() => {
    if (questionToEdit) {
      setMateri(questionToEdit.materi || (questionToEdit.element ? 'Informatika' : '') || 'Berpikir Komputasional');
      setTopic(questionToEdit.topic || '');
      setLevel(questionToEdit.level);
      setStem(questionToEdit.stem);
      setOptions([...questionToEdit.options]);
      setCorrectIndex(questionToEdit.correctIndex);
      setExplanation(questionToEdit.explanation || '');
      setCp(questionToEdit.cp || '');
      setIndicator(questionToEdit.indicator || '');
    } else {
      setMateri(availableMateris[0] || 'Berpikir Komputasional');
      setTopic('');
      setLevel('MotS');
      setStem('');
      setOptions(['', '', '', '']);
      setCorrectIndex(0);
      setExplanation('');
      setCp('');
      setIndicator('');
    }
  }, [questionToEdit, isOpen]);

  if (!isOpen) return null;

  const handleOptionChange = (idx: number, val: string) => {
    const nextOpts = [...options] as [string, string, string, string];
    nextOpts[idx] = val;
    setOptions(nextOpts);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stem.trim()) return;
    if (options.some((opt) => !opt.trim())) return;
    if (!materi.trim()) return;

    const newQuestion: Question = {
      id: questionToEdit ? questionToEdit.id : `q_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      materi: materi.trim(),
      topic: topic.trim() || undefined,
      level,
      stem: stem.trim(),
      options: [options[0].trim(), options[1].trim(), options[2].trim(), options[3].trim()],
      correctIndex,
      explanation: explanation.trim() || 'Kunci jawaban dan pembahasan telah diverifikasi.',
      cp: cp.trim() || undefined,
      indicator: indicator.trim() || undefined,
    };

    onSave(newQuestion);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[92vh] overflow-y-auto">
        {/* Header Modal */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <h3 className="font-bold text-slate-900 text-lg flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>{questionToEdit ? 'Edit Butir Soal & Pembahasan' : 'Tambah Soal & Pembahasan Baru'}</span>
            </h3>
            <p className="text-xs text-slate-500">
              Formulir Materi Pokok, Stimulus Soal, Opsi Jawaban, dan Pembahasan Lengkap
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
          
          {/* Section 1: Form Materi & Tingkat Kognitif */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800 text-xs flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>Materi & Klasifikasi Soal</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Form Materi */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Materi Pembelajaran <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    list="materi-list"
                    value={materi}
                    onChange={(e) => setMateri(e.target.value)}
                    placeholder="Ketik atau pilih nama materi..."
                    className="w-full rounded-lg border-slate-300 border text-xs px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium text-slate-900"
                    required
                  />
                  <datalist id="materi-list">
                    {materiSuggestions.map((m) => (
                      <option key={m} value={m} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Tingkat Kognitif */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tingkat Kognitif
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value as CognitiveLevel)}
                  className="w-full rounded-lg border-slate-300 border text-xs px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium"
                >
                  {Object.entries(COGNITIVE_LABELS).map(([k, info]) => (
                    <option key={k} value={k}>
                      {info.label} ({info.desc})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Preset Chips for Materi */}
            <div>
              <span className="text-[11px] text-slate-500 font-medium block mb-1">
                Pilihan Cepat Materi:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {materiSuggestions.slice(0, 6).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMateri(m)}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border transition ${
                      materi === m
                        ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-Topik Spesifik (Opsional) */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Sub-Topik / Pokok Bahasan Spesifik (Opsional)
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Contoh: Algoritma Sorting, Mail Merge, Fungsi VLOOKUP, Struktur Tree"
                className="w-full rounded-lg border-slate-300 border text-xs px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
              />
            </div>
          </div>

          {/* Section 2: Pertanyaan / Kasus Soal (Stem) */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Teks Pertanyaan / Kasus Soal (Stem) <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={4}
              value={stem}
              onChange={(e) => setStem(e.target.value)}
              placeholder="Tuliskan stimulus narasi, kode program, tabel data, atau pertanyaan studi kasus di sini..."
              className="w-full rounded-lg border-slate-300 border text-xs p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none leading-relaxed"
              required
            />
          </div>

          {/* Section 3: 4 Choices + Radio Kunci */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-semibold text-slate-700">
                Pilihan Jawaban (Berikan 4 Opsi) <span className="text-rose-500">*</span>
              </label>
              <span className="text-[11px] text-indigo-600 flex items-center font-medium">
                <HelpCircle className="w-3 h-3 mr-1" />
                Pilih radio button opsi yang merupakan kunci benar
              </span>
            </div>

            {['A', 'B', 'C', 'D'].map((letter, idx) => {
              const isChecked = correctIndex === idx;
              return (
                <div
                  key={letter}
                  className={`flex items-center space-x-2 p-2 rounded-xl border transition ${
                    isChecked
                      ? 'bg-emerald-50/80 border-emerald-300 ring-1 ring-emerald-400'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="w-6 font-bold text-slate-700 text-xs text-center">
                    {letter}.
                  </span>
                  <input
                    type="text"
                    value={options[idx]}
                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                    placeholder={`Teks Pilihan Jawaban ${letter}`}
                    className="flex-grow rounded-lg border-slate-300 border text-xs px-3 py-1.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium"
                    required
                  />
                  <label className="flex items-center space-x-1.5 cursor-pointer px-2.5 py-1 rounded-md hover:bg-emerald-100/60 transition">
                    <input
                      type="radio"
                      name="correct_answer_radio"
                      checked={isChecked}
                      onChange={() => setCorrectIndex(idx)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                    />
                    <span className={`text-[11px] font-bold ${isChecked ? 'text-emerald-800' : 'text-slate-500'}`}>
                      Kunci ({letter})
                    </span>
                  </label>
                </div>
              );
            })}
          </div>

          {/* Section 4: Form Pembahasan Lengkap */}
          <div className="bg-indigo-50/60 border border-indigo-200/80 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-indigo-950 flex items-center space-x-1.5 text-xs">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Form Pembahasan / Penjelasan Kunci Jawaban Lengkap</span>
                <span className="text-rose-500">*</span>
              </label>
              <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
                Kunci: Opsi {['A', 'B', 'C', 'D'][correctIndex]}
              </span>
            </div>
            <p className="text-[11px] text-slate-600">
              Tuliskan alasan, konsep ilmiah, langkah perhitungan, atau analisis mengapa jawaban tersebut benar:
            </p>
            <textarea
              rows={3}
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Contoh: Pada algoritma Bubble Sort, proses perbandingan dilakukan berpasangan dari kiri ke kanan. Pada pass pertama, elemen terbesar (22) akan digeser hingga menempati posisi indeks paling akhir..."
              className="w-full rounded-lg border-indigo-200 border text-xs p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white leading-relaxed"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 transition font-medium"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition flex items-center space-x-1.5 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Soal & Pembahasan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
