import React, { useState } from 'react';
import { 
  Layers, 
  Lock, 
  Database, 
  ChevronDown, 
  ChevronUp, 
  Store, 
  Coffee, 
  ShieldCheck, 
  Key, 
  Server
} from 'lucide-react';

export const MultiTenantArchitecture: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EEE5] border border-[#E6E4DC] text-xs font-semibold text-[#29483D]">
            <Layers className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>Architecture & Data Isolation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            Every business gets <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#29483D]">its own space.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            Each business operates within its own tenant context, keeping customer records, counter staff PINs, and loyalty rules separated.
          </p>
        </div>

        {/* Visual Architecture Diagram */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-10 shadow-sm relative">
          
          {/* Top Platform Core Layer */}
          <div className="max-w-md mx-auto p-4 sm:p-5 rounded-2xl bg-[#29483D] text-[#FAF8F3] text-center shadow-md relative z-10">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Server className="w-4 h-4 text-[#C6A875]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#C6A875]">
                Shared Infrastructure Engine
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold">
              ZFH QR Loyalty Core Platform
            </h3>
            <p className="text-xs text-[#FAF8F3]/80 mt-1">
              Auth Gateway · QR URL Router · Verification APIs · Multi-Tenant Middleware
            </p>
          </div>

          {/* Connecting Trunk Line */}
          <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-[#29483D] to-[#91A894] mx-auto my-1" />

          {/* Split Workspaces Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative">
            
            {/* WORKSPACE A: Cafe */}
            <div className="p-6 rounded-3xl bg-[#FAF8F3] border-2 border-[#91A894]/40 relative space-y-4 shadow-sm hover:border-[#91A894] transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6E4DC]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#91A894]/20 flex items-center justify-center text-[#29483D]">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#29332E]">Tenant A: Artisan Cafe</h4>
                    <p className="text-[11px] font-mono text-[#747B73]">ID: #tenant_cafe_01</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFFFFF] text-[#29483D] border border-[#E6E4DC]">
                  <Lock className="w-3 h-3 text-[#91A894]" />
                  Isolated Scope
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E4DC] flex justify-between items-center">
                  <span className="text-[#747B73]">Loyalty Goal:</span>
                  <span className="font-bold text-[#29332E]">10 visits (Free Coffee)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E4DC] flex justify-between items-center">
                  <span className="text-[#747B73]">Staff Verification PIN:</span>
                  <span className="font-mono text-[#29483D]">•••• (Unique to Cafe)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E4DC] flex justify-between items-center">
                  <span className="text-[#747B73]">Customer Registry:</span>
                  <span className="font-bold text-[#91A894]">Cafe Customers Only</span>
                </div>
              </div>

              <p className="text-[11px] text-[#747B73] italic">
                Only counter staff and owners authorized for Tenant A can access these loyalty logs.
              </p>
            </div>

            {/* WORKSPACE B: Salon */}
            <div className="p-6 rounded-3xl bg-[#FAF8F3] border-2 border-[#C6A875]/40 relative space-y-4 shadow-sm hover:border-[#C6A875] transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6E4DC]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#C6A875]/20 flex items-center justify-center text-[#29483D]">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#29332E]">Tenant B: Boutique Salon</h4>
                    <p className="text-[11px] font-mono text-[#747B73]">ID: #tenant_salon_02</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFFFFF] text-[#29483D] border border-[#E6E4DC]">
                  <Lock className="w-3 h-3 text-[#C6A875]" />
                  Isolated Scope
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E4DC] flex justify-between items-center">
                  <span className="text-[#747B73]">Loyalty Goal:</span>
                  <span className="font-bold text-[#29332E]">6 visits (Scalp Care Perk)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E4DC] flex justify-between items-center">
                  <span className="text-[#747B73]">Staff Verification PIN:</span>
                  <span className="font-mono text-[#29483D]">•••• (Unique to Salon)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E4DC] flex justify-between items-center">
                  <span className="text-[#747B73]">Customer Registry:</span>
                  <span className="font-bold text-[#91A894]">Salon Customers Only</span>
                </div>
              </div>

              <p className="text-[11px] text-[#747B73] italic">
                Salon visits cannot leak into the cafe program; database queries enforce tenant scoping.
              </p>
            </div>

          </div>

          {/* Database & Storage Layer below */}
          <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-[#91A894] to-[#29483D] mx-auto my-2" />

          <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] text-center space-y-1">
            <div className="flex items-center justify-center gap-2">
              <Database className="w-4 h-4 text-[#29483D]" />
              <span className="text-xs font-bold text-[#29332E]">
                PostgreSQL Relational Storage
              </span>
            </div>
            <p className="text-[11px] text-[#747B73]">
              All queries filtered by <code className="font-mono text-[#29483D] bg-[#F2EEE5] px-1 py-0.5 rounded">WHERE tenant_id = :id</code>
            </p>
          </div>

          {/* Boundary notice */}
          <p className="text-[11px] text-center text-[#747B73] mt-5 italic">
            Visual boundary indicators represent logical database partition scoping as designed in the codebase.
          </p>

          {/* Expandable Technical Panel Trigger */}
          <div className="mt-8 pt-6 border-t border-[#E6E4DC] text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#29483D] bg-[#F2EEE5] hover:bg-[#E9E3D5] transition-colors cursor-pointer border border-[#E6E4DC]"
            >
              <span>{isExpanded ? 'Hide Technical Separation Details' : 'How separation works (Technical Architecture)'}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expandable Technical Details Content */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-[#E6E4DC] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left animate-fadeIn">
              
              <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] space-y-2">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-[#91A894]" />
                  <h4 className="text-xs font-bold text-[#29332E]">1. Tenant Identifiers</h4>
                </div>
                <p className="text-[11px] text-[#747B73] leading-relaxed">
                  Every business record has a designated UUID primary key (<code className="font-mono">tenant_id</code>) that binds customer visits, staff logins, and rewards.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C6A875]" />
                  <h4 className="text-xs font-bold text-[#29332E]">2. Auth Scoping</h4>
                </div>
                <p className="text-[11px] text-[#747B73] leading-relaxed">
                  Backend API routes inspect authentication tokens and query parameters to ensure operators only interact with their permitted tenant ID.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] space-y-2">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#29483D]" />
                  <h4 className="text-xs font-bold text-[#29332E]">3. Query Filtering</h4>
                </div>
                <p className="text-[11px] text-[#747B73] leading-relaxed">
                  All relational joins on customers, visits, and redemptions strictly enforce tenant boundaries to prevent cross-business visibility.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] space-y-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#E8C8B8]" />
                  <h4 className="text-xs font-bold text-[#29332E]">4. Staff PIN Hash</h4>
                </div>
                <p className="text-[11px] text-[#747B73] leading-relaxed">
                  Counter PINs are hashed or securely compared against tenant configuration, ensuring one venue's PIN cannot authorize another venue's stamps.
                </p>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
