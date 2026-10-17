import React from 'react';
import { 
  GitBranch, 
  ExternalLink, 
  Check, 
  FolderGit2
} from 'lucide-react';
import { PROJECT_STAGES } from '../data/mockData';

export const ZFHCaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-20 lg:py-28 bg-[#F2EEE5]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E6E4DC] text-xs font-semibold text-[#29483D]">
            <FolderGit2 className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>Product Case Study</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            Built with purpose <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#29483D]">by Zenith Forge Hub.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            QR Digital Loyalty System is a product developed by the Zenith Forge Hub team to explore a practical digital solution for customer loyalty and repeat-visit management.
          </p>
        </div>

        {/* 4 Stages Journey Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROJECT_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-7 flex flex-col justify-between hover:border-[#91A894] transition-all shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F2EEE5]">
                  <span className="text-2xl font-serif font-bold text-[#C6A875]">
                    {stage.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FAF8F3] text-[#29483D] border border-[#E6E4DC]">
                    Phase
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#29332E]">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-medium text-[#747B73] mt-0.5">
                    {stage.tagline}
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  {stage.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#747B73]">
                      <Check className="w-3.5 h-3.5 text-[#91A894] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Repository & Open Source Verification Card */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <svg className="w-5 h-5 text-[#29483D]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <h3 className="text-base font-bold text-[#29332E]">
                  Transparent Codebase & Repositories
                </h3>
              </div>
              <p className="text-xs text-[#747B73] max-w-xl">
                Explore the genuine codebase, technical commits, architecture structure, and team updates directly on GitHub.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://github.com/MS-Zainab/QR_Digital_System"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#FAF8F3] bg-[#29483D] hover:bg-[#1E372E] transition-colors"
              >
                <GitBranch className="w-4 h-4 text-[#C6A875]" />
                <span>Product Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://zfh.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#29483D] bg-[#FAF8F3] hover:bg-[#F2EEE5] border border-[#E6E4DC] transition-colors"
              >
                <span>Meet ZFH</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#747B73]" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
