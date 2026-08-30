import React, { useState } from 'react';
import { ExamHeaderConfig } from '../types';
import { School, X, Save, RotateCcw } from 'lucide-react';

interface SchoolHeaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerConfig: ExamHeaderConfig;
  onSave: (config: ExamHeaderConfig) => void;
}

export const defaultExamHeader: ExamHeaderConfig = {
  schoolName: 'SMP NEGERI INDONESIA JAYA',
  examTitle: 'ASESMEN SUMATIF AKHIR SEMESTER (ASAS)',
  subject: 'INFORMATIKA',
  gradeLevel: 'KELAS IX (SEMBILAN) / FASE D',
  semester: 'GENAP / GANJIL',
  academicYear: '2025/2026',
  timeLimit: '90 Menit',
  teacherName: 'Guru Pengampu Informatika',
};

export const SchoolHeaderModal: React.FC<SchoolHeaderModalProps> = ({
  isOpen,
  onClose,
  headerConfig,
  onSave,
}) => {
  const [formData, setFormData] = useState<ExamHeaderConfig>(headerConfig);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(defaultExamHeader);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <School className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base">Pengaturan Kop Ujian & Identitas Naskah</h3>
              <p className="text-xs text-slate-500">Kop ini akan tercetak di bagian atas naskah soal dan dokumen PDF</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Nama Satuan Pendidikan / Sekolah</label>
            <input
              type="text"
              value={formData.schoolName}
              onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              placeholder="Contoh: SMP NEGERI 1 TELADAN"
              className="w-full rounded-lg border-slate-300 border px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Judul Penilaian / Asesmen</label>
            <input
              type="text"
              value={formData.examTitle}
              onChange={(e) => setFormData({ ...formData, examTitle: e.target.value })}
              placeholder="Contoh: ASESMEN SUMATIF AKHIR SEMESTER (ASAS)"
              className="w-full rounded-lg border-slate-300 border px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Mata Pelajaran</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-lg border-slate-300 border px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Kelas / Fase</label>
              <input
                type="text"
                value={formData.gradeLevel}
                onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                className="w-full rounded-lg border-slate-300 border px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Tahun Ajaran</label>
              <input
                type="text"
                value={formData.academicYear}
                onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                placeholder="2025/2026"
                className="w-full rounded-lg border-slate-300 border px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Semester</label>
              <input
                type="text"
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                placeholder="Genap / Ganjil"
                className="w-full rounded-lg border-slate-300 border px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Alokasi Waktu</label>
              <input
                type="text"
                value={formData.timeLimit}
                onChange={(e) => setFormData({ ...formData, timeLimit: e.target.value })}
                placeholder="90 Menit"
                className="w-full rounded-lg border-slate-300 border px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Guru Pengampu</label>
            <input
              type="text"
              value={formData.teacherName}
              onChange={(e) => setFormData({ ...formData, teacherName: e.target.value })}
              placeholder="Nama Guru Pengampu"
              className="w-full rounded-lg border-slate-300 border px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition flex items-center space-x-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default</span>
            </button>

            <div className="flex items-center space-x-2">
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
                <span>Simpan Kop</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
