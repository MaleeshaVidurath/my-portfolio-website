import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    darkMode,
    toggleDarkMode
  } = useTheme();
  return <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              DevPortfolio
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </nav>
          <div className="flex items-center">
            <button onClick={toggleDarkMode} className="p-2 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" aria-label="Toggle dark mode">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ml-2 p-2 md:hidden text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" aria-label="Toggle mobile menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>)}
          </div>
        </div>}
    </header>;
}