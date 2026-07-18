"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";

const categories = ["Semua", "Kamera CCTV", "Rekaman", "Aksesoris", "Paket"];
const brands = ["Semua", ...new Set(products.map((p) => p.brand))];

export default function KatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedBrand, setSelectedBrand] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory;
    const matchesBrand = selectedBrand === "Semua" || product.brand === selectedBrand;
    const matchesSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesBrand && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-surface pt-[70px] pb-16">
      <section className="bg-primary text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3">
            Katalog Produk
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto">
            Lengkap untuk keamanan rumah, kantor, hingga area luas
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-10 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-border flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${selectedCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-slate-100 text-body hover:bg-slate-200"
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
              placeholder="Cari produk atau merek..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 text-secondary rounded-xl border border-transparent focus:border-primary focus:bg-white outline-none transition-all duration-300 text-sm font-medium"
            />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-border flex flex-wrap gap-2 items-center justify-center mt-4">
          <span className="text-xs font-semibold text-body mr-1">Merk:</span>
          {brands.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() => setSelectedBrand(brand)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 cursor-pointer ${
                selectedBrand === brand
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-body hover:bg-slate-200"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <Link
                  href={`/katalog/${product.slug}`}
                  className="no-underline"
                >
                  <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-secondary text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      {product.brand}
                    </span>
                    <span className="absolute top-3 right-3 bg-primary text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      {product.category === "Kamera CCTV" ? "Kamera" : product.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-base font-bold text-secondary mb-1.5 leading-snug group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-xs text-body leading-relaxed mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div>
                        {product.hasPrice ? (
                          <span className="text-base font-extrabold text-primary">
                            {product.price}
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-body">
                            Hubungi untuk harga
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-primary group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                        Detail
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-border shadow-sm">
            <span className="text-5xl mb-4 block">🔍</span>
            <h3 className="text-xl font-bold text-secondary mb-1">
              Belum Ada Produk
            </h3>
            <p className="text-sm text-body">
              Tidak ada produk di kategori ini. Coba kategori lain atau hubungi kami.
            </p>
          </div>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary to-primary-dark text-white p-8 md:p-12 overflow-hidden shadow-lg">
          <div className="relative z-10 text-center max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Butuh Bantuan Memilih?
            </h3>
            <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
              Kami siap membantu Anda memilih produk yang sesuai. Konsultasi gratis!
            </p>
            <a
              href="https://wa.me/628000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-primary font-bold text-base px-8 py-3.5 rounded-2xl transition-all duration-300 no-underline shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
