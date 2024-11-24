"use client";

import React, { useState } from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { MedicineList } from '@/components/medicine/medicine-list';
import { MedicineFilters } from '@/components/medicine/medicine-filters';

export default function MedicinesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-semibold">Recherche de Médicaments</h1>
        </div>
      </header>

      <main className="pt-16 pb-20">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un médicament..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl border-0 focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
            >
              <Filter size={20} />
            </button>
          </div>

          {showFilters && <MedicineFilters />}

          <MedicineList searchQuery={searchQuery} />
        </div>
      </main>
    </div>
  );
}