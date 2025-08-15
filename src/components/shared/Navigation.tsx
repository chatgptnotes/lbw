import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'

export default function Navigation() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/assessment', label: 'Assessments', icon: '📝' },
    { path: '/content', label: 'Content', icon: '📚' },
    { path: '/coaching', label: 'Coaching', icon: '🧠' },
    { path: '/qeeg', label: 'qEEG', icon: '⚡' },
    { path: '/progress', label: 'Progress', icon: '📊' },
  ]

  // Don't show navigation on landing page or onboarding
  if (location.pathname === '/' || location.pathname.startsWith('/onboarding')) {
    return null
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brain-500 to-wellness-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LBW</span>
            </div>
            <span className="font-bold text-gray-900 hidden sm:block">Limitless Brain Wellness</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-brain-50 text-brain-700 border border-brain-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile">
              <Button variant="outline" size="sm">
                Profile
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              Sign Out
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-brain-50 text-brain-700 border border-brain-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Profile
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="w-full">
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
