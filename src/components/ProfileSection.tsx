/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { User, Users, Landmark, Award, BarChart3, TrendingUp, Sparkles, MapPin, Layers } from 'lucide-react';
import { demographicStats, generalStats } from '../data/statsData';
import { officials } from '../data/officialsData';

export default function ProfileSection() {
  const [activeStatTab, setActiveStatTab] = useState<'gender' | 'ageGroups' | 'education' | 'occupation'>('gender');

  const statTabs = [
    { id: 'gender', label: 'Jenis Kelamin', icon: Users },
    { id: 'ageGroups', label: 'Kelompok Usia', icon: TrendingUp },
    { id: 'education', label: 'Pendidikan', icon: Award },
    { id: 'occupation', label: 'Pekerjaan', icon: BarChart3 },
  ];

  // Colors array for rendering items in occupation/education if not defined
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#6366f1', '#14b8a6', '#f43f5e'];

  return (
    <div className="space-y-12 pb-24 md:pb-12">
      {/* HEADER SECTION */}
      <section className="text-center space-y-3 max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold font-sans">
          <Landmark className="w-3.5 h-3.5" />
          <span>Profil Wilayah Resmi</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Kenali Lebih Dekat Kelurahan Ciptomulyo
        </h2>
        <p className="text-sm text-slate-500 font-sans leading-relaxed">
          Sejarah panjang, komitmen visi misi, struktur tata kepengurusan kelurahan, dan statistik demografis terkini.
        </p>
      </section>

      {/* 1. SEJARAH KELURAHAN CIPTOMULYO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Decorative visual on the left for history */}
          <div className="lg:col-span-4 bg-blue-900 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400')" }} />
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-extrabold bg-blue-800 text-blue-300 border border-blue-700 px-2.5 py-1 rounded-md tracking-wider uppercase font-sans">
                Asal-Usul Wilayah
              </span>
              <h3 className="text-2xl font-bold tracking-tight">Kilas Sejarah Ciptomulyo</h3>
              <p className="text-blue-200 text-xs leading-relaxed font-sans">
                Ciptomulyo berasal dari gabungan kata Bahasa Jawa: &quot;Cipto&quot; yang berarti menciptakan/mewujudkan, dan &quot;Mulyo&quot; yang bermakna kemuliaan atau kemakmuran hidup.
              </p>
            </div>
            <div className="relative z-10 pt-8 flex items-center space-x-2 text-xs text-blue-300 font-sans font-medium">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Kecamatan Sukun, Kota Malang</span>
            </div>
          </div>

          {/* History Details */}
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Kelurahan Ciptomulyo terbentuk seiring dengan perluasan administratif Kota Malang pada masa lampau. Sejak awal perkembangannya, wilayah ini dihuni oleh masyarakat yang gigih dan religius. Lokasinya yang strategis di dekat jalur perlintasan kereta api dan jalan raya penghubung utama Malang-Blitar-Kepanjen menjadikannya tumbuh cepat sebagai kawasan pemukiman padat sekaligus sentra pengolahan logam dan usaha jasa mikro.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Masyarakat asli Ciptomulyo dikenal memiliki semangat gotong royong yang kental. Dalam dinamika pembangunannya, nama Ciptomulyo senantiasa dihayati sebagai doa bersama agar kelurahan ini dapat mewujudkan kehidupan warga yang berkecukupan, mulia, aman, dan tenteram di bawah bimbingan aparat pemerintah kelurahan yang berdedikasi tinggi.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl text-center">
                <p className="text-[10px] text-slate-400 font-sans">Luas Wilayah</p>
                <p className="text-sm font-bold text-slate-800 font-sans mt-0.5">{generalStats.areaSize}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl text-center">
                <p className="text-[10px] text-slate-400 font-sans">Kepadatan</p>
                <p className="text-xs font-bold text-slate-800 font-sans mt-0.5">{generalStats.density}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl text-center">
                <p className="text-[10px] text-slate-400 font-sans">Rukun Warga (RW)</p>
                <p className="text-sm font-bold text-slate-800 font-sans mt-0.5">{generalStats.totalRW}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl text-center">
                <p className="text-[10px] text-slate-400 font-sans">Rukun Tetangga (RT)</p>
                <p className="text-sm font-bold text-slate-800 font-sans mt-0.5">{generalStats.totalRT}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISI & MISI KELURAHAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-xl">
                <Sparkles className="w-5 h-5 text-blue-200" />
              </div>
              <h3 className="text-lg font-bold font-sans uppercase tracking-wider">Visi Kelurahan</h3>
            </div>
            <p className="text-blue-50 text-base font-bold font-sans leading-relaxed pt-2">
              &ldquo;Terwujudnya Ciptomulyo Sebagai Kelurahan Sehat, Berbudaya, Asri dan Aman Dalam Rangka Menuju Masyarakat yang Bermartabat.&rdquo;
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center space-x-3 text-blue-700">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-sans uppercase tracking-wider">Misi Kelurahan</h3>
            </div>
            <div className="space-y-6 pt-2">
              {/* Misi 1 */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold font-mono mt-0.5">
                    1
                  </span>
                  <p className="font-bold text-slate-900 text-sm sm:text-base font-sans">
                    Mewujudkan Peningkatan Kesehatan Masyarakat
                  </p>
                </div>
                <ul className="pl-9 space-y-1.5 list-disc list-outside text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                  <li>Peningkatan kualitas dan kuantitas sarana/ prasarana kesehatan</li>
                  <li>Peningkatan kualitas kesehatan Balita</li>
                  <li>Peningkatan perilaku hidup sehat</li>
                  <li>Peningkatan kualitas kesehatan lingkungan</li>
                </ul>
              </div>

              {/* Misi 2 */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold font-mono mt-0.5">
                    2
                  </span>
                  <p className="font-bold text-slate-900 text-sm sm:text-base font-sans">
                    Mewujudkan Penyelenggaraan Pembangunan Yang Ramah Lingkungan
                  </p>
                </div>
                <ul className="pl-9 space-y-1.5 list-disc list-outside text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                  <li>Peningkatan perencanaan , penataan dan pengendalian tata ruang</li>
                  <li>Perencanaan pembangunan berbasis masyarakat</li>
                  <li>Peningkatan kualitas air, tanah dan udara</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE STATISTICS DASHBOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-sans">Pusat Data & Statistik Warga</h3>
              <p className="text-xs text-slate-500 font-sans">Statistik demografis kependudukan Kelurahan Ciptomulyo semester I tahun 2026.</p>
            </div>
            <div className="bg-slate-100 p-1 rounded-xl flex items-center space-x-1.5 self-start overflow-x-auto max-w-full">
              <span className="text-[10px] font-extrabold text-blue-600 px-2 py-0.5 bg-blue-50 border border-blue-100 rounded font-sans uppercase tracking-wider flex-shrink-0 mr-1 hidden sm:inline">
                SIAK LIVE
              </span>
            </div>
          </div>

          {/* Tab Selection */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {statTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeStatTab === tab.id;
              return (
                <button
                  id={`stat-tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActiveStatTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold font-sans transition-all whitespace-nowrap border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Stat Visualizer Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-center">
            {/* Legend & Details */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-sans">
                  {demographicStats[activeStatTab].title}
                </h4>
                <p className="text-xs text-slate-500 font-sans mt-1">
                  {demographicStats[activeStatTab].description}
                </p>
              </div>

              {/* Total Summary */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 font-sans uppercase tracking-wider">Total Terdata</p>
                  <p className="text-xl font-extrabold text-slate-900 font-mono mt-0.5">
                    {activeStatTab === 'gender' 
                      ? generalStats.totalPopulation.toLocaleString('id-ID') + ' Jiwa'
                      : demographicStats[activeStatTab].items.reduce((acc, curr) => acc + curr.value, 0).toLocaleString('id-ID') + ' Orang'
                    }
                  </p>
                </div>
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {demographicStats[activeStatTab].items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-sans">
                    <div className="flex items-center space-x-2">
                      <span 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: item.color || colors[idx % colors.length] }} 
                      />
                      <span className="font-medium text-slate-700">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-bold text-slate-900">{item.value.toLocaleString('id-ID')}</span>
                      <span className="text-slate-400 ml-1.5 font-mono">({item.percentage || Math.round((item.value / generalStats.totalPopulation) * 100)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsive custom-built high-quality SVG/HTML chart */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-center min-h-[250px] space-y-4">
              {demographicStats[activeStatTab].items.map((item, idx) => {
                const percentage = item.percentage || Math.round((item.value / generalStats.totalPopulation) * 100);
                const barColor = item.color || colors[idx % colors.length];
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="font-bold text-slate-800">{item.label}</span>
                      <span className="font-mono font-bold text-blue-700">{percentage}%</span>
                    </div>
                    <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden relative shadow-inner">
                      <div 
                        className="h-full rounded-full transition-all duration-500 ease-out"
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: barColor,
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)'
                        }} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRUKTUR ORGANISASI / STAFF LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900 font-sans">Pamong & Staf Kelurahan</h3>
            <p className="text-xs text-slate-500 font-sans">Aparatur sipil negara yang melayani kebutuhan warga Kelurahan Ciptomulyo.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {officials.map((staff) => (
              <div
                id={`staff-card-${staff.id}`}
                key={staff.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col items-center p-5 text-center group hover:border-blue-500 hover:shadow-md transition-all duration-200"
              >
                {/* Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-blue-500 transition-colors bg-slate-100 shadow-sm flex-shrink-0">
                  <img
                    src={staff.photoUrl}
                    alt={staff.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Details */}
                <div className="mt-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-slate-950 text-xs sm:text-sm font-sans tracking-tight leading-snug">
                      {staff.name}
                    </h4>
                    <p className="text-[10px] text-blue-600 font-sans font-bold tracking-wider uppercase mt-1">
                      {staff.position}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 mt-3 w-full">
                    <p className="text-[9px] text-slate-400 font-sans uppercase">No. Kontak Layanan</p>
                    <a
                      href={`tel:${staff.phone}`}
                      className="text-xs font-mono font-bold text-slate-700 hover:text-blue-600 transition-colors block mt-0.5"
                    >
                      {staff.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
