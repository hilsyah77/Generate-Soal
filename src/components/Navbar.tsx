import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Database, 
  Plus, 
  FileSpreadsheet, 
  GraduationCap, 
  Settings2,
  Layers,
  BookOpen,
  UploadCloud,
  FileCheck2,
  Server,
  CheckCircle2,
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'generator' | 'bank' | 'kisikisi' | 'student' | 'matrix';
  setActiveTab: (tab: 'generator' | 'bank' | 'kisikisi' | 'student' | 'matrix') => void;
  bankCount: number;
  onOpenAddModal: () => void;
  onOpenHeaderModal: () => void;
  onOpenMaterialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  bankCount,
  onOpenAddModal,
  onOpenHeaderModal,
  onOpenMaterialModal,
}) => {
  const [showDbTooltip, setShowDbTooltip] = useState(false);
  const [dbStatus, setDbStatus] = useState<{
    status: string;
    region: string;
    engine: string;
    instance: string;
  }>({
    status: 'connected',
    region: 'asia-southeast1',
    engine: 'PostgreSQL 16',
    instance: 'ai-studio-331ba1f8',
  });

  useEffect(() => {
    fetch('/api/db-status')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.region) {
          setDbStatus({
            status: data.status || 'connected',
            region: data.region || 'asia-southeast1',
            engine: data.engine || 'PostgreSQL 16',
            instance: data.instance || 'ai-studio-331ba1f8',
          });
        }
      })
      .catch(() => {
        // Keep standard cloud sql asia-southeast1 state
      });
  }, []);

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 no-print shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand & Subtitle & Cloud SQL Badge */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('generator')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-inner text-white flex-shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h1 className="font-bold text-base sm:text-lg tracking-tight text-white leading-tight">
                Generator Soal Informatika IX
              </h1>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Kurikulum Merdeka
              </span>
              
              {/* Cloud SQL Region Badge */}
              <div 
                className="relative inline-flex items-center"
                onMouseEnter={() => setShowDbTooltip(true)}
                onMouseLeave={() => setShowDbTooltip(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDbTooltip(!showDbTooltip);
                }}
              >
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-950/80 text-sky-300 border border-sky-600/40 hover:border-sky-400 transition cursor-pointer shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <Server className="w-3 h-3 text-sky-400" />
                  <span className="font-mono text-[10.5px]">Cloud SQL: {dbStatus.region}</span>
                </div>

                {/* DB Details Popover */}
                {showDbTooltip && (
                  <div className="absolute left-0 top-full mt-2 w-64 p-3 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 text-left text-xs space-y-2 pointer-events-auto">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-700">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-sky-400" />
                        Google Cloud SQL
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-medium">
                        Aktif
                      </span>
                    </div>
                    <div className="space-y-1 text-slate-300 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Region:</span>
                        <span className="font-mono font-bold text-sky-300">{dbStatus.region}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Engine:</span>
                        <span className="text-slate-200">{dbStatus.engine}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Instance:</span>
                        <span className="font-mono text-slate-300">{dbStatus.instance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Auth:</span>
                        <span className="text-emerald-400">Firebase Auth Integrated</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="text-xs text-slate-400 font-medium hidden sm:block">
              Randomizer Paket A, B, C, D • Kisi-Kisi • Upload Materi • Matriks Kunci
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-1.5">
          <button
            onClick={() => setActiveTab('generator')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center space-x-1.5 ${
              activeTab === 'generator'
                ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-indigo-300" />
            <span className="hidden sm:inline">Generator</span>
            <span className="sm:hidden">Paket</span>
          </button>

          <button
            onClick={() => setActiveTab('kisikisi')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center space-x-1.5 ${
              activeTab === 'kisikisi'
                ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileCheck2 className="w-4 h-4 text-amber-300" />
            <span>Kisi-Kisi</span>
          </button>

          <button
            onClick={() => setActiveTab('bank')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center space-x-1.5 ${
              activeTab === 'bank'
                ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Database className="w-4 h-4 text-cyan-300" />
            <span className="hidden sm:inline">Bank Soal</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10.5px] font-bold bg-slate-800 text-cyan-300 border border-slate-700">
              {bankCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center space-x-1.5 ${
              activeTab === 'matrix'
                ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="Matriks Kunci Jawaban Paket A, B, C, D"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span className="hidden lg:inline">Matriks Kunci</span>
          </button>

          <button
            onClick={() => setActiveTab('student')}
            className={`px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center space-x-1.5 ${
              activeTab === 'student'
                ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-purple-300" />
            <span className="hidden md:inline">CBT</span>
          </button>

          {/* Quick Action Buttons */}
          <div className="pl-1.5 border-l border-slate-700 flex items-center space-x-1.5">
            <button
              onClick={onOpenMaterialModal}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-teal-900/60 hover:bg-teal-800 text-teal-200 border border-teal-700/60 transition flex items-center space-x-1"
              title="Upload Dokumen/Materi untuk digenerate menjadi butir soal"
            >
              <UploadCloud className="w-4 h-4 text-teal-300" />
              <span className="hidden xl:inline">Upload Materi</span>
            </button>

            <button
              onClick={onOpenHeaderModal}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition flex items-center space-x-1"
              title="Kustomisasi Kop & Info Ujian"
            >
              <Settings2 className="w-4 h-4 text-slate-300" />
              <span className="hidden 2xl:inline">Kop Ujian</span>
            </button>

            <button
              onClick={onOpenAddModal}
              className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition flex items-center space-x-1"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden sm:inline">Tambah Soal</span>
            </button>
          </div>

        </div>

      </div>
    </header>
  );
};
