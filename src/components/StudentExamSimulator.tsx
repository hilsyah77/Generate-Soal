import React, { useState, useEffect } from 'react';
import {
  GeneratedPackages,
  PackageKey,
  PackageQuestion,
  ELEMENT_LABELS,
  COGNITIVE_LABELS,
} from '../types';
import {
  GraduationCap,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Send,
  Award,
  BookOpen,
  PieChart,
  Layers,
} from 'lucide-react';

interface StudentExamSimulatorProps {
  packages: GeneratedPackages;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const StudentExamSimulator: React.FC<StudentExamSimulatorProps> = ({
  packages,
  onToast,
}) => {
  const availablePackages: PackageKey[] = (['A', 'B', 'C', 'D'] as PackageKey[]).filter(
    (k) => packages[k] && packages[k]!.length > 0
  );

  const [selectedPkg, setSelectedPkg] = useState<PackageKey>(availablePackages[0] || 'A');
  const [studentAnswers, setStudentAnswers] = useState<Record<number, number>>({});
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);

  const activeQuestions: PackageQuestion[] = packages[selectedPkg] || [];

  // Reset exam state when package changes
  useEffect(() => {
    setStudentAnswers({});
    setCurrentQIndex(0);
    setIsSubmitted(false);
    setSecondsElapsed(0);
    setTimerActive(activeQuestions.length > 0);
  }, [selectedPkg, packages]);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (timerActive && !isSubmitted) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, isSubmitted]);

  if (availablePackages.length === 0 || activeQuestions.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center text-slate-500 border border-slate-200 shadow-sm max-w-xl mx-auto my-8">
        <GraduationCap className="w-12 h-12 text-indigo-400 mx-auto mb-3" />
        <h3 className="text-base font-bold text-slate-800">Paket Soal Belum Tersedia</h3>
        <p className="text-xs text-slate-500 mt-1 mb-4">
          Silakan beralih ke tab <strong>"Generator Paket"</strong> dan klik <strong>"Generate Paket Now"</strong> terlebih dahulu.
        </p>
      </div>
    );
  }

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (qNum: number, optIdx: number) => {
    if (isSubmitted) return;
    setStudentAnswers((prev) => ({
      ...prev,
      [qNum]: optIdx,
    }));
  };

  const handleSubmitExam = () => {
    const answeredCount = Object.keys(studentAnswers).length;
    if (answeredCount < activeQuestions.length) {
      const confirmSubmit = window.confirm(
        `Anda baru menjawab ${answeredCount} dari ${activeQuestions.length} soal. Apakah Anda yakin ingin menyelesaikan ujian sekarang?`
      );
      if (!confirmSubmit) return;
    }
    setIsSubmitted(true);
    setTimerActive(false);
    onToast('Ujian selesai! Skor dan analisis hasil telah dihitung.', 'success');
  };

  const handleRestart = () => {
    setStudentAnswers({});
    setCurrentQIndex(0);
    setIsSubmitted(false);
    setSecondsElapsed(0);
    setTimerActive(true);
  };

  // Score Calculation
  let correctCount = 0;
  activeQuestions.forEach((q) => {
    if (studentAnswers[q.num] === q.correctIndex) {
      correctCount++;
    }
  });

  const totalScore = activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0;
  const currentQ = activeQuestions[currentQIndex];

  return (
    <div className="space-y-6">
      {/* Top Banner / Package Switcher & Timer */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900">
              Simulasi Ujian CBT Interaktif
            </h2>
            <p className="text-xs text-slate-500">
              Uji pemahaman siswa secara langsung dengan penilaian otomatis dan pembahasan
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Select Package */}
          <div className="flex items-center space-x-1.5">
            <span className="text-xs font-semibold text-slate-600">Paket:</span>
            <div className="flex space-x-1">
              {availablePackages.map((pkg) => (
                <button
                  key={pkg}
                  onClick={() => setSelectedPkg(pkg)}
                  disabled={timerActive && Object.keys(studentAnswers).length > 0 && !isSubmitted}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    selectedPkg === pkg
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-50'
                  }`}
                >
                  {pkg}
                </button>
              ))}
            </div>
          </div>

          {/* Timer Badge */}
          <div className="px-3 py-1 rounded-lg bg-slate-900 text-emerald-400 font-mono text-xs font-bold flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(secondsElapsed)}</span>
          </div>
        </div>
      </div>

      {/* Result Card (When Submitted) */}
      {isSubmitted && (
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-800 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <Award className="w-8 h-8 text-amber-300" />
              </div>
              <div>
                <h3 className="text-xl font-black">Hasil Penilaian Siswa • Paket {selectedPkg}</h3>
                <p className="text-xs text-indigo-200 mt-1">
                  Waktu Pengerjaan: {formatTime(secondsElapsed)} • Dijawab: {Object.keys(studentAnswers).length} dari {activeQuestions.length} Soal
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-center px-5 py-3 rounded-xl bg-white/10 border border-white/20">
                <span className="text-[11px] uppercase font-bold text-indigo-200 block">Skor Akhir</span>
                <span className="text-3xl font-black text-amber-300">{totalScore}</span>
                <span className="text-xs text-slate-300 block">/ 100</span>
              </div>

              <div className="text-center px-5 py-3 rounded-xl bg-white/10 border border-white/20">
                <span className="text-[11px] uppercase font-bold text-indigo-200 block">Benar / Salah</span>
                <span className="text-2xl font-black text-emerald-400">{correctCount}</span>
                <span className="text-xs text-rose-300"> / {activeQuestions.length - correctCount} Salah</span>
              </div>

              <button
                onClick={handleRestart}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition flex items-center space-x-1.5 shadow-lg"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Ujian</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main CBT Interface: Left Question View, Right Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Active Question Box */}
        <div className="lg:col-span-3 space-y-4">
          {currentQ && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold text-xs">
                    Soal No. {currentQ.num}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${ELEMENT_LABELS[currentQ.element].badgeBg}`}>
                    {ELEMENT_LABELS[currentQ.element].short} - {ELEMENT_LABELS[currentQ.element].full}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${COGNITIVE_LABELS[currentQ.level].badge}`}>
                    {currentQ.level}
                  </span>
                </div>

                <span className="text-xs text-slate-400 font-semibold">
                  {currentQIndex + 1} dari {activeQuestions.length} Soal
                </span>
              </div>

              {/* Stem */}
              <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
                {currentQ.stem}
              </p>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {['A', 'B', 'C', 'D'].map((letter, optIdx) => {
                  const isSelected = studentAnswers[currentQ.num] === optIdx;
                  const isCorrect = optIdx === currentQ.correctIndex;
                  const isStudentWrong = isSubmitted && isSelected && !isCorrect;

                  let optStyles = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100/80';
                  if (!isSubmitted && isSelected) {
                    optStyles = 'bg-indigo-50 border-indigo-400 text-indigo-950 ring-2 ring-indigo-500 font-semibold';
                  } else if (isSubmitted) {
                    if (isCorrect) {
                      optStyles = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-500';
                    } else if (isStudentWrong) {
                      optStyles = 'bg-rose-50 border-rose-400 text-rose-950 line-through ring-2 ring-rose-400';
                    }
                  }

                  return (
                    <div
                      key={letter}
                      onClick={() => handleSelectOption(currentQ.num, optIdx)}
                      className={`p-3.5 rounded-xl border flex items-start space-x-3 cursor-pointer transition ${optStyles}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-white border border-slate-300 text-xs font-black text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {letter}
                      </span>
                      <span className="text-xs sm:text-sm flex-grow leading-relaxed">
                        {currentQ.options[optIdx]}
                      </span>
                      {isSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      )}
                      {isSubmitted && isStudentWrong && (
                        <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation Box (when submitted) */}
              {isSubmitted && (
                <div className="mt-4 p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs text-indigo-950 space-y-1">
                  <div className="font-bold text-indigo-900 flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>Pembahasan Resmi (Kunci: {currentQ.correctLetter})</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setCurrentQIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentQIndex === 0}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 transition flex items-center space-x-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya</span>
                </button>

                {!isSubmitted ? (
                  currentQIndex === activeQuestions.length - 1 ? (
                    <button
                      onClick={handleSubmitExam}
                      className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition flex items-center space-x-1.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Selesaikan Ujian</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentQIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition flex items-center space-x-1"
                    >
                      <span>Selanjutnya</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )
                ) : (
                  <button
                    onClick={() => setCurrentQIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
                    disabled={currentQIndex === activeQuestions.length - 1}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 transition flex items-center space-x-1"
                  >
                    <span>Selanjutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Question Navigator Palette */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
              Nomor Soal
            </h3>

            <div className="grid grid-cols-5 gap-2">
              {activeQuestions.map((q, idx) => {
                const isCurrent = idx === currentQIndex;
                const isAnswered = studentAnswers[q.num] !== undefined;
                const isCorrect = studentAnswers[q.num] === q.correctIndex;

                let btnStyles = 'bg-slate-100 text-slate-700 border-slate-200';

                if (!isSubmitted) {
                  if (isCurrent) {
                    btnStyles = 'bg-indigo-600 text-white border-indigo-700 ring-2 ring-indigo-400 font-bold';
                  } else if (isAnswered) {
                    btnStyles = 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold';
                  }
                } else {
                  if (isCurrent) {
                    btnStyles = isCorrect
                      ? 'bg-emerald-600 text-white ring-2 ring-emerald-400 font-bold'
                      : 'bg-rose-600 text-white ring-2 ring-rose-400 font-bold';
                  } else if (isCorrect) {
                    btnStyles = 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold';
                  } else {
                    btnStyles = 'bg-rose-100 text-rose-900 border-rose-400 font-bold';
                  }
                }

                return (
                  <button
                    key={q.num}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`h-9 rounded-xl border text-xs font-bold transition flex items-center justify-center ${btnStyles}`}
                  >
                    {q.num}
                  </button>
                );
              })}
            </div>

            {/* Status Legend */}
            <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded bg-emerald-100 border border-emerald-300"></span>
                <span>{isSubmitted ? 'Jawaban Benar' : 'Sudah Dijawab'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-200"></span>
                <span>{isSubmitted ? 'Jawaban Salah' : 'Belum Dijawab'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded bg-indigo-600 border border-indigo-700"></span>
                <span>Soal Sedang Aktif</span>
              </div>
            </div>

            {!isSubmitted && (
              <button
                onClick={handleSubmitExam}
                className="w-full py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kumpulkan Lembar Jawaban</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
