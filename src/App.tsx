import React, { useState, useEffect, useCallback } from 'react';
import {
  Question,
  GeneratedPackages,
  GeneratorConfig,
  ExamHeaderConfig,
} from './types';
import { DEFAULT_QUESTIONS } from './data/defaultQuestions';
import { generatePackages } from './utils/generator';
import { Navbar } from './components/Navbar';
import { GeneratorTab } from './components/GeneratorTab';
import { BankTab } from './components/BankTab';
import { KisiKisiTab } from './components/KisiKisiTab';
import { StudentExamSimulator } from './components/StudentExamSimulator';
import { AnswerMatrixModal } from './components/AnswerMatrixModal';
import { QuestionModal } from './components/QuestionModal';
import { SchoolHeaderModal, defaultExamHeader } from './components/SchoolHeaderModal';
import { MaterialUploadModal } from './components/MaterialUploadModal';
import { ToastContainer, ToastMessage } from './components/Toast';

const STORAGE_KEY_BANK = 'smp_informatics_grade9_bank_v3';
const STORAGE_KEY_HEADER = 'smp_informatics_grade9_header_v2';

export default function App() {
  // 1. Bank Soal State
  const [questionBank, setQuestionBank] = useState<Question[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BANK);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= DEFAULT_QUESTIONS.length) return parsed;
      }
    } catch (e) {
      console.error('Failed to load bank from storage:', e);
    }
    return DEFAULT_QUESTIONS;
  });

  // 2. Exam Header Configuration State
  const [headerConfig, setHeaderConfig] = useState<ExamHeaderConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_HEADER);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load header from storage:', e);
    }
    return defaultExamHeader;
  });

  // 3. Generator Configuration State
  const [generatorConfig, setGeneratorConfig] = useState<GeneratorConfig>({
    questionCount: 10,
    packages: ['A', 'B', 'C', 'D'],
    shuffleOptions: true,
    shuffleQuestions: true,
    selectedElements: [],
  });

  // 4. Generated Packages State
  const [packages, setPackages] = useState<GeneratedPackages>({});

  // 5. Navigation & Modal States
  const [activeTab, setActiveTab] = useState<'generator' | 'bank' | 'kisikisi' | 'student' | 'matrix'>('generator');
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [questionToEdit, setQuestionToEdit] = useState<Question | null>(null);
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false);
  const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false);

  // 6. Toasts State
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 4);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Save bank to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BANK, JSON.stringify(questionBank));
    } catch (e) {
      console.error('Failed to save bank to localStorage:', e);
    }
  }, [questionBank]);

  // Save header to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_HEADER, JSON.stringify(headerConfig));
    } catch (e) {
      console.error('Failed to save header config to localStorage:', e);
    }
  }, [headerConfig]);

  // Generate packages handler
  const handleGenerate = useCallback(() => {
    if (questionBank.length === 0) {
      showToast('Bank soal kosong! Tambahkan soal terlebih dahulu.', 'error');
      return;
    }
    const result = generatePackages(questionBank, generatorConfig);
    setPackages(result);
    showToast(`Berhasil meracik ${generatorConfig.packages.length} paket soal!`, 'success');
  }, [questionBank, generatorConfig, showToast]);

  // Auto-generate on initial mount
  useEffect(() => {
    const result = generatePackages(questionBank, generatorConfig);
    setPackages(result);
  }, []);

  // Question CRUD handlers
  const handleSaveQuestion = (newOrUpdated: Question) => {
    setQuestionBank((prev) => {
      const idx = prev.findIndex((q) => q.id === newOrUpdated.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = newOrUpdated;
        return next;
      } else {
        return [newOrUpdated, ...prev];
      }
    });
    showToast('Soal berhasil disimpan ke bank soal!', 'success');
  };

  const handleAddMultipleQuestions = (newQuestions: Question[]) => {
    setQuestionBank((prev) => [...newQuestions, ...prev]);
    showToast(`Berhasil menambahkan ${newQuestions.length} butir soal ke Bank Soal!`, 'success');
  };

  const handleDeleteQuestion = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus butir soal ini dari bank?')) {
      setQuestionBank((prev) => prev.filter((q) => q.id !== id));
      showToast('Soal berhasil dihapus dari bank.', 'info');
    }
  };

  const handleResetDefault = () => {
    if (window.confirm('Kembalikan seluruh bank soal ke standar 25+ soal Kurikulum Merdeka default?')) {
      setQuestionBank(DEFAULT_QUESTIONS);
      showToast('Bank soal berhasil dikembalikan ke standar default!', 'info');
    }
  };

  const handleImportBank = (imported: Question[]) => {
    setQuestionBank(imported);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        bankCount={questionBank.length}
        onOpenAddModal={() => {
          setQuestionToEdit(null);
          setIsQuestionModalOpen(true);
        }}
        onOpenHeaderModal={() => setIsHeaderModalOpen(true)}
        onOpenMaterialModal={() => setIsMaterialModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'generator' && (
          <GeneratorTab
            questionBank={questionBank}
            config={generatorConfig}
            setConfig={setGeneratorConfig}
            packages={packages}
            onGenerate={handleGenerate}
            headerConfig={headerConfig}
            onToast={showToast}
            onOpenHeaderModal={() => setIsHeaderModalOpen(true)}
            onOpenKisiKisi={() => setActiveTab('kisikisi')}
            onOpenMaterialModal={() => setIsMaterialModalOpen(true)}
          />
        )}

        {activeTab === 'kisikisi' && (
          <KisiKisiTab
            questionBank={questionBank}
            packages={packages}
            headerConfig={headerConfig}
            onToast={showToast}
            onNavigateToGenerator={() => setActiveTab('generator')}
            onOpenHeaderModal={() => setIsHeaderModalOpen(true)}
          />
        )}

        {activeTab === 'bank' && (
          <BankTab
            questionBank={questionBank}
            onAddQuestion={() => {
              setQuestionToEdit(null);
              setIsQuestionModalOpen(true);
            }}
            onEditQuestion={(q) => {
              setQuestionToEdit(q);
              setIsQuestionModalOpen(true);
            }}
            onDeleteQuestion={handleDeleteQuestion}
            onResetDefault={handleResetDefault}
            onImportBank={handleImportBank}
            onToast={showToast}
          />
        )}

        {activeTab === 'student' && (
          <StudentExamSimulator packages={packages} onToast={showToast} />
        )}

        {activeTab === 'matrix' && (
          <AnswerMatrixModal
            isOpen={true}
            onClose={() => setActiveTab('generator')}
            packages={packages}
            onToast={showToast}
          />
        )}
      </main>

      {/* Question Add/Edit Modal */}
      <QuestionModal
        isOpen={isQuestionModalOpen}
        onClose={() => setIsQuestionModalOpen(false)}
        questionToEdit={questionToEdit}
        onSave={handleSaveQuestion}
      />

      {/* School Exam Header Modal */}
      <SchoolHeaderModal
        isOpen={isHeaderModalOpen}
        onClose={() => setIsHeaderModalOpen(false)}
        headerConfig={headerConfig}
        onSave={(cfg) => {
          setHeaderConfig(cfg);
          showToast('Pengaturan Kop Ujian berhasil diperbarui!', 'success');
        }}
      />

      {/* Material Upload & Automatic Question Generator Modal */}
      <MaterialUploadModal
        isOpen={isMaterialModalOpen}
        onClose={() => setIsMaterialModalOpen(false)}
        onAddQuestionsToBank={handleAddMultipleQuestions}
        onToast={showToast}
      />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Footer */}
      <footer className="mt-auto py-4 bg-white border-t border-slate-200 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            <strong>Generator Soal Informatika IX</strong> • Kurikulum Merdeka (Fase D SMP)
          </p>
          <p className="text-slate-400">
            Didesain untuk Mempermudah Guru Menyusun Kisi-Kisi, Mengunggah Materi, & Mengacak Paket Penilaian Asesmen
          </p>
        </div>
      </footer>
    </div>
  );
}

