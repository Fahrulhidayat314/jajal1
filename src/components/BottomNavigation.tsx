/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Home, User, FileText, MessageSquare, Newspaper, BookOpen } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNavigation({ activeTab, setActiveTab }: BottomNavigationProps) {
  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'services', label: 'Layanan', icon: FileText },
    { id: 'news', label: 'Berita', icon: Newspaper },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50 md:hidden">
      <div className="flex justify-around items-center h-16 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              id={`bottom-nav-${item.id}`}
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full text-center transition-colors ${
                isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
              <span className="text-[10px] mt-1 font-medium font-sans truncate max-w-full px-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
