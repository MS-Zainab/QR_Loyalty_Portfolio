import React, { useState, useEffect } from 'react';
import { Menu, X, QrCode, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onRequestDemo: () => void;
  onExploreExperience: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestDemo, onExploreExperience }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Compare', href: '#compare' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Live Demo', href: '#interactive-demo' },
    { label: 'Features', href: '#features' },
    { label: 'Roles', href: '#roles' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F3]/90 backdrop-blur-md shadow-sm border-b border-[#E6E4DC] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#overview"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29483D] rounded-lg p-1"
            aria-label="QR Loyalty by ZFH Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#29483D] text-[#FAF8F3] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <QrCode className="w-5 h-5 text-[#C6A875]" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#91A894] border-2 border-[#FAF8F3]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-base sm:text-lg tracking-tight text-[#29332E]">
                  QR Loyalty
                </span>
                <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#F2EEE5] text-[#29483D] border border-[#E6E4DC]">
                  v1.0
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wide text-[#747B73]">
                by Zenith Forge Hub (ZFH)
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#29332E]/80 hover:text-[#29483D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6A875] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onExploreExperience}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#29483D] bg-[#F2EEE5] hover:bg-[#E6E4DC] rounded-lg transition-colors border border-[#E6E4DC]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C6A875]" />
              Try Demo Card
            </button>
            <button
              onClick={onRequestDemo}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#FAF8F3] bg-[#29483D] hover:bg-[#1E372E] active:scale-[0.98] rounded-lg transition-all shadow-sm shadow-[#29483D]/10 cursor-pointer"
            >
              <span>Request a Demo</span>
              <ArrowUpRight className="w-4 h-4 text-[#C6A875]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onRequestDemo}
              className="px-3 py-1.5 text-xs font-medium text-[#FAF8F3] bg-[#29483D] rounded-lg cursor-pointer"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#29332E] hover:bg-[#F2EEE5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#29483D]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F3] border-b border-[#E6E4DC] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#29332E] hover:bg-[#F2EEE5] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E6E4DC] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreExperience();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#29483D] bg-[#F2EEE5] rounded-lg"
              >
                <Sparkles className="w-4 h-4 text-[#C6A875]" />
                Explore Interactive Demo
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#FAF8F3] bg-[#29483D] rounded-lg shadow-sm"
              >
                <span>Request a Demo</span>
                <ArrowUpRight className="w-4 h-4 text-[#C6A875]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
