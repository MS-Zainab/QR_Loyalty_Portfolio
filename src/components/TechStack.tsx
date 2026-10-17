import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  ArrowDown, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { TECH_STACK } from '../data/mockData';

export const TechStack: React.FC = () => {
  const [activeTechTab, setActiveTechTab] = useState<'all' | 'Frontend' | 'Backend' | 'Database' | 'Deployment'>('all');

  const filteredTech = activeTechTab === 'all' 
    ? TECH_STACK 
    : TECH_STACK.filter(t => t.category === activeTechTab);

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EEE5] border border-[#E6E4DC] text-xs font-semibold text-[#29483D]">
            <Cpu className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>Modern Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            Thoughtfully built. <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#29483D]">Ready to evolve.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            A reliable, lightweight tech stack designed for high counter availability, responsive mobile views, and clean tenant boundaries.
          </p>

          {/* Tech category filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {(['all', 'Frontend', 'Backend', 'Database', 'Deployment'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechTab(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                  activeTechTab === cat
                    ? 'bg-[#29483D] text-[#FAF8F3] border-[#29483D]'
                    : 'bg-[#FAF8F3] text-[#747B73] border-[#E6E4DC] hover:border-[#91A894]'
                }`}
              >
                {cat === 'all' ? 'All Verified Technologies' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Chips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E6E4DC] hover:border-[#91A894] transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F2EEE5] text-[#29483D]">
                    {tech.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#91A894] font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#29332E]">
                  {tech.name}
                </h3>
                <p className="text-xs font-medium text-[#C6A875]">
                  {tech.role}
                </p>
                <p className="text-xs text-[#747B73] leading-relaxed pt-1">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-8 space-y-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#747B73]">
              Application Architecture Pipeline
            </h4>
            <p className="text-xs text-[#747B73]">
              End-to-end request lifecycle from customer camera scan to authorized stamp log
            </p>
          </div>

          <div className="space-y-3 relative">
            
            {/* Flow Step 1 */}
            <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#29483D] flex items-center justify-center text-[#FAF8F3]">
                  <Globe className="w-4 h-4 text-[#C6A875]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#29332E]">1. Client Devices & QR Triggers</p>
                  <p className="text-[11px] text-[#747B73]">Mobile Safari / Chrome, Staff Tablets, Counter QR display</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#29483D] bg-[#FFFFFF] px-2 py-1 rounded border border-[#E6E4DC]">
                HTTPS / TLS
              </span>
            </div>

            <div className="flex justify-center text-[#91A894]">
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>

            {/* Flow Step 2 */}
            <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#29483D] flex items-center justify-center text-[#FAF8F3]">
                  <Code2 className="w-4 h-4 text-[#91A894]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#29332E]">2. Web Application & Routing</p>
                  <p className="text-[11px] text-[#747B73]">React 19 SPA, dynamic tenant route parsing, mobile-first views</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#29483D] bg-[#FFFFFF] px-2 py-1 rounded border border-[#E6E4DC]">
                Vite Bundle
              </span>
            </div>

            <div className="flex justify-center text-[#91A894]">
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>

            {/* Flow Step 3 */}
            <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#29483D] flex items-center justify-center text-[#FAF8F3]">
                  <Server className="w-4 h-4 text-[#C6A875]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#29332E]">3. Backend & Authorization Layer</p>
                  <p className="text-[11px] text-[#747B73]">Node.js / Express API, staff PIN validation, tenant middleware</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#29483D] bg-[#FFFFFF] px-2 py-1 rounded border border-[#E6E4DC]">
                REST API
              </span>
            </div>

            <div className="flex justify-center text-[#91A894]">
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>

            {/* Flow Step 4 */}
            <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#29483D] flex items-center justify-center text-[#FAF8F3]">
                  <Database className="w-4 h-4 text-[#91A894]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#29332E]">4. Database & Relational Scopes</p>
                  <p className="text-[11px] text-[#747B73]">PostgreSQL / Supabase with strictly scoped tenant tables and visit ledgers</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#29483D] bg-[#FFFFFF] px-2 py-1 rounded border border-[#E6E4DC]">
                PostgreSQL
              </span>
            </div>

          </div>

          <p className="text-[11px] text-center text-[#747B73] mt-6 italic">
            Diagram accurately mirrors the system's verified codebase boundaries and services.
          </p>
        </div>

      </div>
    </section>
  );
};
