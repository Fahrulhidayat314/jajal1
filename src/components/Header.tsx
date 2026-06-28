/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, MessageSquare, Newspaper, User, Home, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoMalang from '../assets/images/logo_malang.svg';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'profile', label: 'Profil Kelurahan', icon: User },
    { id: 'services', label: 'Pelayanan Publik', icon: FileText },
    { id: 'news', label: 'Berita & Pengumuman', icon: Newspaper },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-40 shadow-sm">
      {/* Official Top Bar (Singapore/UK inspired minimalist agency line) */}
      <div className="bg-blue-900 text-white text-[11px] py-1.5 px-4 font-sans flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium tracking-wide">Situs Resmi Pemerintah Kota Malang • Kelurahan Ciptomulyo</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-slate-300">Jam Layanan: Senin – Kamis (08.00 – 15.30), Jum’at (07.30 – 14.30, Istirahat: 11.30 – 12.30)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo and Brand */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center space-x-3 cursor-pointer select-none"
          id="header-logo-brand"
        >
          <img 
            src={logoMalang} 
            alt="Lambang Kota Malang" 
            className="w-9 h-11 object-contain" 
          />
          <div>
            <h1 className="text-[15px] font-bold text-slate-900 leading-tight tracking-tight uppercase">
              Kelurahan Ciptomulyo
            </h1>
            <p className="text-xs text-slate-500 leading-none font-sans mt-0.5">
              Kecamatan Sukun, Kota Malang
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                id={`desktop-nav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md text-[13px] font-semibold transition-colors font-sans ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600 rounded-b-none'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Admin/Call quick info */}
        <div className="hidden md:flex items-center">
          <a
            href="https://sambat.malangkota.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold font-sans tracking-wide transition-colors shadow-sm"
          >
            Ajukan Aduan
          </a>
        </div>

        {/* Mobile Toggle Button (only on top bar for small screens) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-600 hover:text-slate-900 focus:outline-none p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu (slide-down panel) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-slate-50 animate-fadeIn duration-200 shadow-inner">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  id={`drawer-nav-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-2 px-4">
              <div className="border-t border-slate-200 pt-3">
                <p className="text-xs text-slate-500 font-sans">Hubungi Kantor Kelurahan:</p>
                <p className="text-sm font-bold text-slate-800 font-sans mt-0.5">(0341) 322175</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
