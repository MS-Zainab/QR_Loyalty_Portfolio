import React from 'react';
import { 
  QrCode, 
  Mail, 
  ExternalLink, 
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F3] border-t border-[#E6E4DC] pt-16 pb-12 text-[#29332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E6E4DC]">
          
          {/* Brand Info (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#29483D] flex items-center justify-center text-[#FAF8F3] shadow-xs">
                <QrCode className="w-5 h-5 text-[#C6A875]" />
              </div>
              <div>
                <span className="font-bold text-lg text-[#29332E] tracking-tight">
                  QR Loyalty
                </span>
                <p className="text-[11px] text-[#747B73]">
                  Digital Loyalty & Visit Management
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#747B73] leading-relaxed max-w-sm">
              "Every visit has its reward." A simpler way for businesses to reward loyal customers, track visits, and manage digital loyalty cards with QR-powered technology.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:zenithforgehub@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2EEE5] hover:bg-[#E6E4DC] text-xs font-medium text-[#29483D] transition-colors border border-[#E6E4DC]"
              >
                <Mail className="w-3.5 h-3.5 text-[#C6A875]" />
                <span>zenithforgehub@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Product Links (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#29332E]">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-[#747B73]">
              <li><a href="#overview" className="hover:text-[#29483D] transition-colors">Overview</a></li>
              <li><a href="#compare" className="hover:text-[#29483D] transition-colors">Paper vs QR</a></li>
              <li><a href="#how-it-works" className="hover:text-[#29483D] transition-colors">How It Works</a></li>
              <li><a href="#interactive-demo" className="hover:text-[#29483D] transition-colors">Interactive Demo</a></li>
              <li><a href="#features" className="hover:text-[#29483D] transition-colors">Key Features</a></li>
            </ul>
          </div>

          {/* Architecture & Roles (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#29332E]">
              Architecture
            </h4>
            <ul className="space-y-2 text-xs text-[#747B73]">
              <li><a href="#roles" className="hover:text-[#29483D] transition-colors">User Roles</a></li>
              <li><a href="#architecture" className="hover:text-[#29483D] transition-colors">Multi-Tenant Setup</a></li>
              <li><a href="#technology" className="hover:text-[#29483D] transition-colors">Tech Stack</a></li>
              <li><a href="#case-study" className="hover:text-[#29483D] transition-colors">ZFH Case Study</a></li>
              <li><a href="#faq" className="hover:text-[#29483D] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Development & GitHub (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#29332E]">
              Code & Collaboration
            </h4>
            <ul className="space-y-2.5 text-xs text-[#747B73]">
              <li>
                <a
                  href="https://github.com/MS-Zainab/QR_Digital_System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#29483D] transition-colors"
                >
                  <span>QR_Digital_System Repo</span>
                  <ExternalLink className="w-3 h-3 text-[#C6A875]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MS-Zainab/ZFH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#29483D] transition-colors"
                >
                  <span>ZFH Team Repository</span>
                  <ExternalLink className="w-3 h-3 text-[#C6A875]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MS-Zainab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#29483D] transition-colors"
                >
                  <span>Developer Profile</span>
                  <ExternalLink className="w-3 h-3 text-[#C6A875]" />
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[11px] text-[#747B73]/80 block">
                  Introductory 15-day merchant trial availability subject to onboarding confirmation.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#747B73]">
          <div className="flex items-center gap-1">
            <span>QR Digital Loyalty System — A product by</span>
            <strong className="text-[#29332E] font-semibold">Zenith Forge Hub</strong>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#747B73]/70">
              Built with React, Vite & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#F2EEE5] hover:bg-[#E6E4DC] text-[#29483D] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
