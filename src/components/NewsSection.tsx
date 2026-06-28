/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Search, Newspaper, Calendar, User, Eye, ArrowLeft, ChevronRight, Share2, Printer } from 'lucide-react';
import { newsArticles } from '../data/newsData';
import { NewsArticle } from '../types';

interface NewsSectionProps {
  selectedNewsId: string | null;
  setSelectedNewsId: (id: string | null) => void;
}

export default function NewsSection({ selectedNewsId, setSelectedNewsId }: NewsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [readingArticle, setReadingArticle] = useState<NewsArticle | null>(null);

  const categories = ['Semua', 'Kesehatan & Lingkungan', 'Kesejahteraan Sosial', 'Ekonomi & UMKM', 'Pengumuman'];

  // Handle selectedNewsId changes (deep-linking from homepage)
  useEffect(() => {
    if (selectedNewsId) {
      const art = newsArticles.find((a) => a.id === selectedNewsId);
      if (art) {
        setReadingArticle(art);
      }
    } else {
      setReadingArticle(null);
    }
  }, [selectedNewsId]);

  const filteredArticles = newsArticles.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleArticleClick = (article: NewsArticle) => {
    setReadingArticle(article);
    setSelectedNewsId(article.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setReadingArticle(null);
    setSelectedNewsId(null);
  };

  return (
    <div className="space-y-8 pb-24 md:pb-12">
      {readingArticle ? (
        /* Reading Article View */
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {/* Back button */}
          <button
            onClick={handleBackToList}
            className="inline-flex items-center space-x-2 text-sm font-bold text-blue-600 hover:text-blue-700 font-sans cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Berita & Pengumuman</span>
          </button>

          {/* Article Header */}
          <div className="space-y-4">
            <span className="inline-block text-[10px] font-extrabold bg-blue-100 text-blue-700 px-3 py-1 rounded-md tracking-wider uppercase font-sans">
              {readingArticle.category}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight font-sans">
              {readingArticle.title}
            </h2>

            {/* Author, Date, Reads */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-sans border-y border-slate-100 py-3">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{new Date(readingArticle.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <User className="w-4 h-4 text-slate-400" />
                <span>Ditulis oleh: {readingArticle.author}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Eye className="w-4 h-4 text-slate-400" />
                <span>Dibaca {readingArticle.reads + 12} kali</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            <img
              src={readingArticle.image}
              alt={readingArticle.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Body */}
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans space-y-5 whitespace-pre-wrap">
            {readingArticle.content}
          </div>

          {/* Share Actions Bar */}
          <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
            <p className="text-xs text-slate-400 font-sans italic">Pemerintah Kelurahan Ciptomulyo • Kanal Transparansi Informasi</p>
            <div className="flex space-x-2">
              <button
                onClick={() => window.print()}
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                title="Cetak Artikel"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Tautan berita berhasil disalin ke papan klip!');
                }}
                className="flex items-center space-x-1 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Bagikan</span>
              </button>
            </div>
          </div>

          {/* Recommended / Related Articles */}
          <div className="pt-8 border-t border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-sans">Rekomendasi Berita Lainnya</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newsArticles
                .filter((art) => art.id !== readingArticle.id)
                .slice(0, 2)
                .map((art) => (
                  <div
                    id={`related-news-${art.id}`}
                    key={art.id}
                    onClick={() => handleArticleClick(art)}
                    className="flex p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-500 cursor-pointer transition-colors space-x-3 items-center"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <p className="text-[9px] text-blue-600 font-bold font-sans uppercase">{art.category}</p>
                      <h4 className="text-xs font-bold text-slate-900 font-sans line-clamp-2 mt-0.5 leading-snug">
                        {art.title}
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        /* News List view */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Section header */}
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pusat Berita & Informasi Warga
            </h2>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">
              Dapatkan berita kegiatan kelurahan, pengumuman jadwal, bantuan kemanusiaan, sosialisasi kesehatan, dan regulasi terbaru.
            </p>
          </div>

          {/* Filters and Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-slate-200 pb-6 pt-4">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="news-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berita, pengumuman, atau artikel..."
                className="w-full bg-white border border-slate-200 text-slate-800 text-xs rounded-xl pl-9 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
              />
            </div>

            {/* Category horizontal filters */}
            <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => (
                <button
                  id={`news-cat-${cat}`}
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

          {/* Featured News Banner (top item of the list) */}
          {filteredArticles.length > 0 && searchQuery === '' && selectedCategory === 'Semua' && (
            <div
              id={`featured-news-banner`}
              onClick={() => handleArticleClick(filteredArticles[0])}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              <div className="lg:col-span-7 aspect-video lg:aspect-auto lg:h-[350px] bg-slate-100 overflow-hidden relative">
                <img
                  src={filteredArticles[0].image}
                  alt={filteredArticles[0].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 text-[10px] font-extrabold bg-blue-600 text-white px-3 py-1.5 rounded-md font-sans uppercase tracking-wider shadow-sm">
                  KABAR UTAMA
                </span>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-3">
                <p className="text-[10px] text-slate-400 font-sans font-medium">
                  {filteredArticles[0].date} • Oleh {filteredArticles[0].author}
                </p>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug hover:text-blue-600 transition-colors font-sans">
                  {filteredArticles[0].title}
                </h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed line-clamp-3">
                  {filteredArticles[0].summary}
                </p>
                <div className="pt-4 flex items-center text-xs font-bold text-blue-600 font-sans">
                  <span>Selengkapnya</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          )}

          {/* Grid of other articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {(searchQuery !== '' || selectedCategory !== 'Semua' ? filteredArticles : filteredArticles.slice(1)).map((art) => (
              <div
                id={`news-card-${art.id}`}
                key={art.id}
                onClick={() => handleArticleClick(art)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-extrabold bg-blue-600 text-white px-2.5 py-1 rounded-md font-sans uppercase tracking-wider">
                    {art.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-2">
                  <p className="text-[10px] text-slate-400 font-sans font-medium">
                    {art.date} • Oleh {art.author}
                  </p>
                  <h4 className="font-bold text-slate-950 text-sm leading-snug group-hover:text-blue-600 transition-colors font-sans line-clamp-2">
                    {art.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed line-clamp-3 flex-grow">
                    {art.summary}
                  </p>
                  <div className="pt-4 flex items-center text-xs font-bold text-blue-600 font-sans">
                    <span>Baca Selengkapnya</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}

            {filteredArticles.length === 0 && (
              <div className="col-span-full text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                <Newspaper className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-700 font-sans">Berita tidak ditemukan</p>
                <p className="text-xs text-slate-500 font-sans">Silakan coba kata kunci atau kategori yang lain.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
