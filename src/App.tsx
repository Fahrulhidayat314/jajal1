/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import HomeSection from './components/HomeSection';
import ProfileSection from './components/ProfileSection';
import ServicesSection from './components/ServicesSection';
import NewsSection from './components/NewsSection';
import { Landmark, ShieldCheck, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import logoMalang from './assets/images/logo_malang.svg';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeSection 
            setActiveTab={setActiveTab} 
            setSelectedNewsId={setSelectedNewsId} 
          />
        );
      case 'profile':
        return <ProfileSection />;
      case 'services':
        return <ServicesSection />;
      case 'news':
        return (
          <NewsSection 
            selectedNewsId={selectedNewsId} 
            setSelectedNewsId={setSelectedNewsId} 
          />
        );
      default:
        return (
          <HomeSection 
            setActiveTab={setActiveTab} 
            setSelectedNewsId={setSelectedNewsId} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      {/* 1. TOP HEADER NAVIGATION */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. MAIN APP CONTENT CANVAS */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveSection()}
      </main>

      {/* 3. TRUSTWORTHY GOVERNMENT FOOTER */}
      <footer className="bg-slate-900 text-slate-400 pt-12 pb-24 md:pb-12 border-t border-slate-800 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          
          {/* Logo and About */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <img 
                src={logoMalang} 
                alt="Lambang Kota Malang" 
                className="w-7 h-9 object-contain" 
              />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">Pemerintah Kota Malang</h2>
                <p className="text-xs text-slate-400">Kelurahan Ciptomulyo • Kec. Sukun</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Situs resmi Kelurahan Ciptomulyo menyajikan kanal transparansi publik, pengurusan surat administrasi tanpa calo, data kependudukan dinamis, serta pusat pengaduan mandiri warga Sukun, Kota Malang.
            </p>
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Zona Integritas Bebas Pungutan Liar (Pungli)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Peta Navigasi Situs</h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Beranda Utama' },
                { id: 'profile', label: 'Profil Wilayah & Statistik' },
                { id: 'services', label: 'Panduan Pelayanan Publik' },
                { id: 'complaints', label: 'Pengaduan SAMBAT Online', url: 'https://sambat.malangkota.go.id' },
                { id: 'news', label: 'Kabar Berita & Pengumuman' },
              ].map((link) => (
                <li key={link.id}>
                  {link.url ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors flex items-center space-x-1"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-600" />
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        setActiveTab(link.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-white transition-colors flex items-center space-x-1"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-600" />
                      <span>{link.label}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Footer */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Hubungi Sekretariat</h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Jl. Kolonel Sugiono VIII / No.1 Ciptomulyo Sukun Malang</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>(0341) 322175 (Hari & Jam Kerja)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>kel-ciptomulyo@malangkota.go.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Footer Bottom info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center space-x-1">
            <Landmark className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-semibold text-slate-300">Hak Cipta © 2026 Pemerintah Kelurahan Ciptomulyo Kota Malang</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://malangkota.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Portal Resmi Kota Malang
            </a>
          </div>
        </div>
      </footer>

      {/* 4. MOBILE-ONLY BOTTOM NAVIGATION */}
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

