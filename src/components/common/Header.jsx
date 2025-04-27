import { NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Cryptos', path: '/crypto' },
    { name: 'Actualités', path: '/news' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-white dark:bg-dark-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-primary-light dark:text-primary-dark">
              CryptoVision
            </NavLink>
          </div>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  isActive 
                    ? 'text-primary-light dark:text-primary-dark font-medium' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark'
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="md:hidden text-gray-600 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-200 pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  isActive 
                    ? 'text-primary-light dark:text-primary-dark font-medium py-2' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark py-2'
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};