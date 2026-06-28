/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, FileText, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { services } from '../data/servicesData';
import { ServiceItem } from '../types';

export default function ServicesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = ['Semua', 'Kependudukan', 'Kesejahteraan', 'Umum', 'Pertanahan'];

  const filteredServices = services.filter((svc) => {
    const matchesSearch = svc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          svc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || svc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-24 md:pb-12">
      {/* Detail/Detailed Service view */}
      {selectedService ? (
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {/* Back button */}
          <button
            onClick={() => {
              setSelectedService(null);
            }}
            className="inline-flex items-center space-x-2 text-sm font-bold text-blue-600 hover:text-blue-700 font-sans cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Layanan</span>
          </button>

          {/* Service Title header */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-extrabold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md tracking-wider uppercase font-sans">
                {selectedService.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">
              {selectedService.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              {selectedService.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requirements Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans border-b border-slate-100 pb-2">
                Persyaratan Dokumen (Wajib)
              </h4>
              <ul className="space-y-3">
                {selectedService.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans border-b border-slate-100 pb-2">
                Prosedur Pengurusan
              </h4>
              <ol className="space-y-4">
                {selectedService.steps.map((step, idx) => (
                  <li key={idx} className="flex space-x-3 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ) : (
        /* Grid list of services */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Header intro */}
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Panduan Administrasi & Pelayanan Publik
            </h2>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">
              Cari persyaratan, alur prosedur pengurusan, dan durasi pengerjaan surat keterangan resmi di Kelurahan Ciptomulyo.
            </p>
          </div>

          {/* Search and category filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-slate-200 pb-6 pt-4">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="service-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari layanan (KTP, KK, SKTM, SKU...)"
                className="w-full bg-white border border-slate-200 text-slate-800 text-xs rounded-xl pl-9 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
              />
            </div>

            {/* Categories horizontal list */}
            <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => (
                <button
                  id={`service-cat-${cat}`}
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap font-sans border ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.length > 0 ? (
              filteredServices.map((svc) => (
                <div
                  id={`service-card-${svc.id}`}
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className="group bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:border-blue-500 hover:shadow-md transition-all cursor-pointer h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-extrabold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md tracking-wide uppercase font-sans border border-blue-100">
                        {svc.category}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors font-sans">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed line-clamp-3">
                      {svc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-end">
                    <div className="flex items-center space-x-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 font-sans">
                      <span>Syarat & Prosedur</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-700 font-sans">Layanan tidak ditemukan</p>
                <p className="text-xs text-slate-500 font-sans">Silakan coba kata kunci atau kategori yang lain.</p>
              </div>
            )}
          </div>

          {/* DISPENDUKCAPIL ACTION BANNER */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-6 sm:p-10 text-white shadow-lg space-y-6 flex flex-col md:flex-row md:items-center md:justify-between md:space-y-0 md:gap-8 mt-10">
            <div className="space-y-3 max-w-xl text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold font-sans leading-snug">
                Butuh Layanan Administrasi Kependudukan Lainnya?
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm font-sans leading-relaxed">
                Untuk pengurusan dokumen kependudukan seperti Kartu Keluarga, KTP-el, KIA, Akta Kelahiran, Akta Kematian, dan Surat Pindah secara online, Anda dapat langsung mengakses portal resmi Dinas Kependudukan dan Pencatatan Sipil Kota Malang.
              </p>
            </div>
            <a
              href="https://dispendukcapil.malangkota.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-2xl font-extrabold text-sm sm:text-base transition-colors shadow-sm font-sans flex-shrink-0 cursor-pointer"
            >
              <span>Layanan Dispendukcapil Online</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
