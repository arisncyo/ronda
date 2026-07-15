"use client";

import Link from "next/link";
import { useState } from "react";
import { articles } from "@/data/articles";

const categories = ["Semua", "Tips & Panduan", "Teknologi", "Maintenance"];

export default function ArtikelPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "Semua" || article.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-[70px] pb-16">
      <section className="bg-[#1888CD] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3">
            Artikel & Edukasi Keamanan
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto">
            Dapatkan tips praktis, panduan perawatan, dan informasi teknologi
            CCTV terbaru untuk menjaga keamanan keluarga dan tempat usaha Anda.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-10 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-[#eef2f6] flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1888CD] text-white shadow-md shadow-[#1888CD]/20"
                    : "bg-[#f1f5f9] text-[#50595A] hover:bg-[#e2e8f0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#f1f5f9] text-[#042327] rounded-xl border border-transparent focus:border-[#1888CD] focus:bg-white outline-none transition-all duration-300 text-sm font-medium"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/artikel/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#eef2f6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 no-underline flex flex-col h-full"
              >
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#1888CD] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    {article.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} Baca</span>
                  </div>

                  <h3 className="text-base font-bold text-[#042327] mb-2 leading-snug line-clamp-2 group-hover:text-[#1888CD] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#50595A] leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[#1888CD] group-hover:gap-2 transition-all self-start">
                    Baca Selengkapnya
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#eef2f6] shadow-sm">
            <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <h3 className="text-xl font-bold text-[#042327] mb-1">
              Artikel Tidak Ditemukan
            </h3>
            <p className="text-sm text-[#50595A]">
              Tidak ada artikel yang cocok dengan kata kunci pencarian atau
              kategori Anda.
            </p>
          </div>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1888CD] to-[#042327] text-white p-8 md:p-12 overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Ingin Meningkatkan Keamanan Properti Anda?
            </h3>
            <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
              Tim ahli kami siap membantu Anda melakukan survey lokasi,
              merekomendasikan titik pemasangan kamera, dan memberikan estimasi
              biaya secara gratis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/628000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#042327] hover:bg-[#f0f4f8] font-bold text-sm sm:text-base px-6 py-3 rounded-xl transition-all duration-300 no-underline shadow-md"
              >
                Konsultasi WhatsApp Sekarang
              </a>
              <Link
                href="/#paket"
                className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 hover:bg-white/10 font-bold text-sm sm:text-base px-6 py-3 rounded-xl transition-all duration-300 no-underline"
              >
                Lihat Paket CCTV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
