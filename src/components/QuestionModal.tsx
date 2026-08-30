import React, { useState, useEffect } from 'react';
import { Question, InformaticsElement, CognitiveLevel, ELEMENT_LABELS, COGNITIVE_LABELS } from '../types';
import { X, CheckCircle2, Save, HelpCircle } from 'lucide-react';

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  questionToEdit: Question | null;
  onSave: (question: Question) => void;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
  isOpen,
  onClose,
  questionToEdit,
  onSave,
}) => {
  const [element, setElement] = useState<InformaticsElement>('BK');
  const [level, setLevel] = useState<CognitiveLevel>('MotS');
  const [stem, setStem] = useState('');
  const [options, setOptions] = useState<[string, string, string, string]>(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState<number>(0);
  const [explanation, setExplanation] = useState('');
  const [topic, setTopic] = useState('');

  useEffect(() => {
    if (questionToEdit) {
      setElement(questionToEdit.element);
      setLevel(questionToEdit.level);
      setStem(questionToEdit.stem);
      setOptions([...questionToEdit.options]);
      setCorrectIndex(questionToEdit.correctIndex);
      setExplanation(questionToEdit.explanation);
      setTopic(questionToEdit.topic || '');
    } else {
      setElement('BK');
      setLevel('MotS');
      setStem('');
      setOptions(['', '', '', '']);
      setCorrectIndex(0);
      setExplanation('');
      setTopic('');
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

    const newQuestion: Question = {
      id: questionToEdit ? questionToEdit.id : `q_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      element,
      level,
      stem: stem.trim(),
      options: [options[0].trim(), options[1].trim(), options[2].trim(), options[3].trim()],
      correctIndex,
      explanation: explanation.trim() || 'Pembahasan telah diverifikasi sesuai kunci.',
      topic: topic.trim() || undefined,
    };

    onSave(newQuestion);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">
              {questionToEdit ? 'Edit Butir Soal' : 'Tambah Soal Baru'}
            </h3>
            <p className="text-xs text-slate-500">
              Informatika Kelas IX • Kurikulum Merdeka
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          {/* Element and Cognitive Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Elemen / Capaian Pembelajaran (CP)
              </label>
              <select
                value={element}
                onChange={(e) => setElement(e.target.value as InformaticsElement)}
                className="w-full rounded-lg border-slate-300 border text-xs px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium"
              >
                {Object.entries(ELEMENT_LABELS).map(([k, info]) => (
                  <option key={k} value={k}>
                    {info.short} - {info.full}
                  </option>
                ))}
              </select>
            </div>

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

          {/* Topic / Materi Spesifik */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Topik / Materi Spesifik (Opsional)
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Contoh: Algoritma Sorting, Mail Merge, Fungsi VLOOKUP"
              className="w-full rounded-lg border-slate-300 border text-xs px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Stem (Pertanyaan) */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Teks Pertanyaan / Kasus Soal (Stem)
            </label>
            <textarea
              rows={4}
              value={stem}
              onChange={(e) => setStem(e.target.value)}
              placeholder="Tuliskan stimulus, teks narasi, atau pertanyaan studi kasus di sini..."
              className="w-full rounded-lg border-slate-300 border text-xs p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* 4 Choices */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-semibold text-slate-700">
                Pilihan Jawaban (Berikan 4 Opsi)
              </label>
              <span className="text-[11px] text-indigo-600 flex items-center">
                <HelpCircle className="w-3 h-3 mr-1" />
                Pilih radio button opsi yang benar
              </span>
            </div>

            {['A', 'B', 'C', 'D'].map((letter, idx) => {
              const isChecked = correctIndex === idx;
              return (
                <div
                  key={letter}
                  className={`flex items-center space-x-2 p-2 rounded-xl border transition ${
                    isChecked
                      ? 'bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-400'
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
                    className="flex-grow rounded-lg border-slate-300 border text-xs px-3 py-1.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
                    required
                  />
                  <label className="flex items-center space-x-1.5 cursor-pointer px-2 py-1 rounded hover:bg-emerald-100/50">
                    <input
                      type="radio"
                      name="correct_answer_radio"
                      checked={isChecked}
                      onChange={() => setCorrectIndex(idx)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                    />
                    <span className={`text-[11px] font-semibold ${isChecked ? 'text-emerald-700' : 'text-slate-500'}`}>
                      Kunci
                    </span>
                  </label>
                </div>
              );
            })}
          </div>

          {/* Explanation */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Kunci & Pembahasan Jawaban Lengkap
            </label>
            <textarea
              rows={3}
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Berikan penjelasan komprehensif mengapa opsi tersebut merupakan jawaban yang benar..."
              className="w-full rounded-lg border-slate-300 border text-xs p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition font-medium"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition flex items-center space-x-1.5 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Soal</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
