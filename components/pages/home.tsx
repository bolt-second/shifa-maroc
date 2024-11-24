"use client";

import React from 'react';
import { Search, Map, Clock, Navigation2, Phone, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { pharmacies } from '@/lib/data/pharmacies';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-emerald-700"
          >
            Shifa Maroc
          </motion.h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <span className="sr-only">Menu</span>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="pt-16 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-6 bg-emerald-700"
        >
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Rechercher un médicament ou une pharmacie..."
              className="w-full px-4 py-3 pl-12 rounded-xl border-0 focus:ring-2 focus:ring-emerald-500 shadow-lg"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 px-4 py-6">
          <Link href="/pharmacies" passHref>
            <QuickActionCard
              icon={<Navigation2 size={24} />}
              title="Pharmacies Proches"
              color="bg-blue-500"
              delay={0.1}
            />
          </Link>
          <Link href="/garde" passHref>
            <QuickActionCard
              icon={<Clock size={24} />}
              title="Pharmacies de Garde"
              color="bg-red-500"
              delay={0.2}
            />
          </Link>
          <Link href="/medicaments" passHref>
            <QuickActionCard
              icon={<Search size={24} />}
              title="Médicaments"
              color="bg-purple-500"
              delay={0.3}
            />
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="px-4 mb-6"
        >
          <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden shadow-md">
            <PharmacyMap 
              position={[33.5731, -7.5898]}
              name="Pharmacies à proximité"
            />
          </div>
        </motion.div>

        <section className="px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-semibold mb-4"
          >
            Pharmacies à proximité
          </motion.h2>
          <div className="space-y-4">
            {pharmacies.map((pharmacy, index) => (
              <Link href={`/pharmacies/${pharmacy.id}`} key={pharmacy.id}>
                <PharmacyCard
                  name={pharmacy.name}
                  distance={pharmacy.distance || ''}
                  status={pharmacy.status}
                  address={pharmacy.address}
                  delay={0.6 + index * 0.1}
                />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white fixed bottom-0 w-full border-t border-gray-200 shadow-lg"
      >
        <div className="flex justify-around py-3">
          <BottomNavItem icon={<Navigation2 size={24} />} label="Proche" active />
          <BottomNavItem icon={<Clock size={24} />} label="Garde" />
          <BottomNavItem icon={<Search size={24} />} label="Recherche" />
        </div>
      </motion.nav>
    </div>
  );
};

const QuickActionCard = ({ icon, title, color, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="flex flex-col items-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
  >
    <div className={cn("p-3 rounded-full text-white mb-2", color)}>{icon}</div>
    <span className="text-sm font-medium text-gray-700 text-center">{title}</span>
  </motion.div>
);

const PharmacyCard = ({ name, distance, status, address, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{address}</p>
      </div>
      <span className={cn(
        "px-2 py-1 rounded-full text-xs font-medium",
        status === 'De Garde' ? 'bg-red-100 text-red-800' : 
        status === 'Ouverte' ? 'bg-green-100 text-green-800' :
        'bg-gray-100 text-gray-800'
      )}>
        {status}
      </span>
    </div>
    <div className="flex items-center justify-between mt-4">
      <span className="text-sm text-gray-500 flex items-center">
        <Navigation2 size={16} className="mr-1" />
        {distance}
      </span>
      <button className="flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors">
        <Phone size={16} className="mr-1" />
        Appeler
      </button>
    </div>
  </motion.div>
);

const BottomNavItem = ({ icon, label, active = false }) => (
  <button className={cn(
    "flex flex-col items-center transition-colors",
    active ? 'text-emerald-600' : 'text-gray-400 hover:text-gray-600'
  )}>
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </button>
);