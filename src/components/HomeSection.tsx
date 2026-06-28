/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, MessageSquare, Newspaper, User, ChevronRight, Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { newsArticles } from '../data/newsData';

interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
  setSelectedNewsId: (id: string | null) => void;
}

export default function HomeSection({ setActiveTab, setSelectedNewsId }: HomeSectionProps) {
  // Get latest 3 news articles for preview
  const latestNews = newsArticles.slice(0, 3);

  // Quick link item details
  const quickLinks = [
    {
      id: 'services',
      title: 'Pelayanan Publik',
      desc: 'Syarat & prosedur KK, KTP, SKTM, SKU, dsb.',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100/50',
    },
    {
      id: 'complaints',
      title: 'Layanan Pengaduan',
      desc: 'Sampaikan aduan langsung ke portal SAMBAT Kota Malang.',
      icon: MessageSquare,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:bg-indigo-100/50',
      url: 'https://sambat.malangkota.go.id',
    },
    {
      id: 'news',
      title: 'Berita & Acara',
      desc: 'Informasi terkini kegiatan warga Ciptomulyo.',
      icon: Newspaper,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100/50',
    },
    {
      id: 'profile',
      title: 'Profil Wilayah',
      desc: 'Sejarah, struktur organisasi, & statistik warga.',
      icon: User,
      color: 'bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-100/50',
    },
  ];

  const announcements = [
    {
      id: 'news-5',
      tag: 'KESEHATAN',
      title: 'Jadwal Imunisasi Nasional PIN Polio Juni-Juli 2026',
      date: '24 Juni 2026',
    },
    {
      id: 'news-2',
      tag: 'BANSOS',
      title: 'Penyaluran Beras Bulog CBP Tahap II Sedang Berlangsung',
      date: '18 Juni 2026',
    },
  ];

  return (
    <div className="space-y-10 pb-20 md:pb-10">
      {/* 1. HERO SECTION WITH WELCOME */}
      <section className="relative overflow-hidden bg-slate-950 text-white rounded-3xl mx-4 sm:mx-6 md:mx-0">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/ciptomulyo_hero_banner_1782317770753.jpg"
            alt="Kantor Kelurahan Ciptomulyo"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-20 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Portal Kependudukan Mandiri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Selamat Datang di Portal Resmi <span className="text-blue-400">Kelurahan Ciptomulyo</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-sans">
            Situs informasi pelayanan publik terpadu, penyaluran program bantuan, pengaduan keluhan warga secara langsung, dan transparansi data wilayah Kelurahan Ciptomulyo, Kota Malang.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setActiveTab('services')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center space-x-2 font-sans"
            >
              <span>Urus Surat Pelayanan</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="https://sambat.malangkota.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl text-sm font-bold transition-colors flex items-center justify-center space-x-2 font-sans"
            >
              <span>Aduan & Aspirasi</span>
              <span className="bg-red-500/20 text-red-400 text-[10px] px-1.5 py-0.5 rounded font-mono ml-1 border border-red-500/30">SAMBAT</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. SAMBUTAN LURAH & BRIEF INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-blue-600 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256"
              alt="Drs. Heri Syakir, M.AP"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-3 flex-grow">
            <div className="inline-block text-xs font-extrabold text-blue-600 tracking-wider uppercase font-sans">
              Sambutan Kepala Kelurahan
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              &ldquo;Melayani dengan Integritas, Transparansi, dan Respons Cepat&rdquo;
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-sans italic">
              &ldquo;Kelurahan Ciptomulyo berkomitmen tinggi menyajikan kemudahan birokrasi bagi seluruh lapisan warga. Melalui portal mobile-first ini, kami memangkas waktu pelayanan dan mendekatkan jalur aspirasi langsung ke meja pimpinan kelurahan. Mari bersama membangun Ciptomulyo yang mandiri, bersih, dan sejahtera.&rdquo;
            </p>
            <div className="pt-2">
              <p className="text-sm font-bold text-slate-900 font-sans">Drs. Heri Syakir, M.AP</p>
              <p className="text-xs text-slate-500 font-sans">Kepala Lurah Ciptomulyo, Kota Malang</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK ACCESS BUTTONS (Citizen Focused Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight font-sans">Akses Layanan Cepat</h3>
            <p className="text-xs text-slate-500 font-sans">Navigasi langsung ke kebutuhan administrasi utama warga.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link: any) => {
              const Icon = link.icon;
              return (
                <button
                  id={`quick-link-${link.id}`}
                  key={link.id}
                  onClick={() => {
                    if (link.url) {
                      window.open(link.url, '_blank', 'noopener,noreferrer');
                    } else {
                      setActiveTab(link.id);
                    }
                  }}
                  className={`flex flex-col text-left p-5 rounded-2xl border transition-all text-slate-800 ${link.color}`}
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm inline-block self-start mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm font-sans">{link.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-sans leading-relaxed flex-grow">
                    {link.desc}
                  </p>
                  <div className="flex items-center space-x-1 text-xs font-bold text-slate-900 mt-4">
                    <span>{link.url ? 'Buka Portal' : 'Akses'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ANNOUNCEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h3 className="text-base font-bold text-slate-900 font-sans">Pengumuman Penting Kelurahan</h3>
            </div>
            <button
              onClick={() => setActiveTab('news')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 font-sans"
            >
              Lihat Semua
            </button>
          </div>
          <div className="space-y-4">
            {announcements.map((ann) => (
              <div
                id={`announcement-${ann.id}`}
                key={ann.id}
                onClick={() => {
                  setSelectedNewsId(ann.id);
                  setActiveTab('news');
                }}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-100 cursor-pointer transition-colors"
              >
                <div className="space-y-1">
                  <span className="inline-block text-[9px] font-extrabold bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-sans tracking-wide">
                    {ann.tag}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors font-sans leading-snug">
                    {ann.title}
                  </h4>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400 mt-2 sm:mt-0 font-sans flex-shrink-0">
                  <span>{ann.date}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LATEST NEWS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight font-sans">Berita & Informasi Terkini</h3>
              <p className="text-xs text-slate-500 font-sans">Kegiatan dan kemasyarakatan terbaru di Kelurahan Ciptomulyo.</p>
            </div>
            <button
              onClick={() => setActiveTab('news')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center space-x-1 font-sans"
            >
              <span>Semua Berita</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((article) => (
              <div
                id={`news-card-${article.id}`}
                key={article.id}
                onClick={() => {
                  setSelectedNewsId(article.id);
                  setActiveTab('news');
                }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-extrabold bg-blue-600 text-white px-2.5 py-1 rounded-md font-sans uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-2">
                  <p className="text-[10px] text-slate-400 font-sans font-medium">
                    {article.date} • Oleh {article.author}
                  </p>
                  <h4 className="font-bold text-slate-950 text-sm leading-snug group-hover:text-blue-600 transition-colors font-sans line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed line-clamp-3 flex-grow">
                    {article.summary}
                  </p>
                  <div className="pt-4 flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700 font-sans">
                    <span>Baca Selengkapnya</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUBMIT COMPLAINT ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-6 sm:p-10 text-white shadow-lg space-y-6 flex flex-col md:flex-row md:items-center md:justify-between md:space-y-0 md:gap-8">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-extrabold font-sans leading-snug">
              Ada Keluhan, Aspirasi, atau Masalah di Wilayah Anda?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm font-sans leading-relaxed">
              Mulai dari kerusakan jalan, lampu penerangan padam, masalah tumpukan sampah, hingga kendala pelayanan publik. Laporkan segera ke Desk Pengaduan SAMBAT Online Kota Malang. Laporan Anda langsung diteruskan ke instansi terkait!
            </p>
          </div>
          <a
            href="https://sambat.malangkota.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-800 hover:bg-blue-50 px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-colors font-sans shadow-sm flex items-center justify-center space-x-2 flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span>Kirim Pengaduan SAMBAT</span>
          </a>
        </div>
      </section>

      {/* 7. DETAILED CONTACT INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8" id="footer-kontak">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans">Kantor Kelurahan</h4>
            <div className="space-y-3 text-xs text-slate-600 font-sans leading-relaxed">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Jl. Kolonel Sugiono VIII / No.1 Ciptomulyo Sukun Malang</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>(0341) 322175</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>kel-ciptomulyo@malangkota.go.id</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans">Waktu Operasional Pelayanan</h4>
            <div className="space-y-3 text-xs text-slate-600 font-sans">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800">Senin – Kamis</p>
                  <p>08.00 – 15.30</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800">Jum’at</p>
                  <p>07.30 – 14.30 (Istirahat: 11.30 – 12.30)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans">Lokasi Wilayah</h4>
            <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <iframe
                title="Peta Kantor Kelurahan Ciptomulyo"
                src="https://maps.google.com/maps?q=Kantor%20Kelurahan%20Ciptomulyo%20Malang&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
