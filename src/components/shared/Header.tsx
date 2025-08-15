import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/assessments', label: 'Assessments', icon: '📋' },
    { path: '/coaching', label: 'Coaching', icon: '👥' },
    { path: '/content', label: 'Content', icon: '📚' },
    { path: '/progress', label: 'Progress', icon: '📈' },
    { path: '/qeeg', label: 'qEEG', icon: '⚡' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-brain-500 to-wellness-500 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white font-bold text-lg">🧠</span>
              </motion.div>
              <div>
                <motion.h1 
                  className="text-xl font-bold bg-gradient-to-r from-brain-600 to-wellness-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  Limitless Brain Wellness
                </motion.h1>
                <p className="text-xs text-gray-500 hidden sm:block">Science-backed brain optimization</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 relative ${
                    isActive(item.path)
                      ? 'bg-brain-50 text-brain-700 border border-brain-200'
                      : 'text-gray-600 hover:text-brain-600 hover:bg-gray-50'
                  }`}
                >
                  <motion.span 
                    className="text-base"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span>{item.label}</span>
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-6 h-0.5 bg-brain-600 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ x: '-50%' }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/profile">
              <Button variant="outline" className="text-sm">
                Profile
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button className="bg-gradient-to-r from-brain-600 to-wellness-600 hover:from-brain-700 hover:to-wellness-700 text-sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-brain-600 hover:bg-gray-50"
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden py-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-brain-50 text-brain-700 border border-brain-200'
                          : 'text-gray-600 hover:text-brain-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <motion.div 
                  className="pt-4 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full justify-center">
                      Profile
                    </Button>
                  </Link>
                  <Link to="/onboarding" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full justify-center bg-gradient-to-r from-brain-600 to-wellness-600">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Secondary Navigation Bar (Optional - for features/categories) */}
      <div className="hidden xl:block bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 py-2 text-xs text-gray-600">
            <span className="flex items-center space-x-1">
              <span>🎯</span>
              <span>ADHD Support</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>🧠</span>
              <span>Memory Enhancement</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>😌</span>
              <span>Stress Management</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>💡</span>
              <span>Cognitive Training</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>📊</span>
              <span>Progress Tracking</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
