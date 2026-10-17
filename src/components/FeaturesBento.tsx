import React, { useState } from 'react';
import { 
  QrCode, 
  Award, 
  ShieldCheck, 
  Gift, 
  Layers, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  Store,
  Scissors
} from 'lucide-react';

export const FeaturesBento: React.FC = () => {
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'cafe' | 'salon'>('cafe');

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EEE5] border border-[#E6E4DC] text-xs font-semibold text-[#29483D]">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>Product Highlights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            Everything loyalty needs. <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#29483D]">Nothing unnecessarily complicated.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            Crafted for speed at the checkout counter and delight on customer smartphones.
          </p>
        </div>

        {/* Bento Grid Layout (6 varied tiles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* TILE 1: QR-Powered Entry (Col Span 1, Large Visual) */}
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-7 flex flex-col justify-between hover:border-[#91A894] transition-all duration-300 group shadow-xs">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-center text-[#29483D] group-hover:bg-[#29483D] group-hover:text-[#FAF8F3] transition-colors">
                <QrCode className="w-5 h-5 text-[#C6A875]" />
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-[#29332E] mb-1">
                  QR-Powered Entry
                </h3>
                <p className="text-xs text-[#747B73] leading-relaxed">
                  No App Store barrier. Pointing any phone camera at the counter display instantly opens the merchant passport in browser.
                </p>
              </div>

              {/* Visual illustration */}
              <div className="p-4 bg-[#FAF8F3] rounded-2xl border border-[#E6E4DC] flex items-center justify-center relative overflow-hidden my-2">
                <div className="relative p-3 bg-[#FFFFFF] rounded-xl shadow-xs border border-[#E6E4DC]/80">
                  <QrCode className="w-20 h-20 text-[#29483D]" />
                  <div className="absolute inset-x-2 top-2 h-0.5 bg-[#C6A875] animate-scan-line shadow-[0_0_8px_#C6A875]" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F2EEE5] flex items-center justify-between text-[11px] text-[#747B73]">
              <span className="text-[#91A894] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Zero Download Friction
              </span>
              <span className="font-mono text-[10px]">Universal URL</span>
            </div>
          </div>

          {/* TILE 2: Digital Loyalty Cards (Col Span 1) */}
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-7 flex flex-col justify-between hover:border-[#91A894] transition-all duration-300 group shadow-xs">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-center text-[#29483D] group-hover:bg-[#29483D] group-hover:text-[#FAF8F3] transition-colors">
                <Award className="w-5 h-5 text-[#C6A875]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#29332E] mb-1">
                  Tangible Stamp Milestones
                </h3>
                <p className="text-xs text-[#747B73] leading-relaxed">
                  Clear visual progress indicators motivate customers to return. Interactive stamp badges fill up with every visit.
                </p>
              </div>

              {/* Visual illustration: Stamp preview */}
              <div className="p-3.5 bg-[#FAF8F3] rounded-2xl border border-[#E6E4DC] space-y-2.5 my-2">
                <div className="flex justify-between text-[11px] font-bold text-[#29483D]">
                  <span>Morning Coffee Stamp Card</span>
                  <span className="text-[#C6A875]">6 / 8 Visits</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                    <div
                      key={s}
                      className={`h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                        s <= 6
                          ? 'bg-[#29483D] text-[#FAF8F3]'
                          : 'border border-dashed border-[#E6E4DC] bg-[#FFFFFF] text-[#747B73]'
                      }`}
                    >
                      {s <= 6 ? '✓' : s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F2EEE5] flex items-center justify-between text-[11px] text-[#747B73]">
              <span className="text-[#91A894] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Custom Visit Targets
              </span>
              <span className="font-mono text-[10px]">6, 8, 10, or 12</span>
            </div>
          </div>

          {/* TILE 3: Visit Verification (Col Span 1) */}
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-7 flex flex-col justify-between hover:border-[#91A894] transition-all duration-300 group shadow-xs">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-center text-[#29483D] group-hover:bg-[#29483D] group-hover:text-[#FAF8F3] transition-colors">
                <ShieldCheck className="w-5 h-5 text-[#91A894]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#29332E] mb-1">
                  Counter Staff PIN Verification
                </h3>
                <p className="text-xs text-[#747B73] leading-relaxed">
                  Fast 4-digit PIN verification ensures visits are authentic, protecting merchants against remote or unauthorized stamping.
                </p>
              </div>

              {/* Visual illustration: PIN pad snippet */}
              <div className="p-3.5 bg-[#FAF8F3] rounded-2xl border border-[#E6E4DC] space-y-2 my-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#29483D]" />
                  <span className="w-3 h-3 rounded-full bg-[#29483D]" />
                  <span className="w-3 h-3 rounded-full bg-[#29483D]" />
                  <span className="w-3 h-3 rounded-full bg-[#29483D]" />
                </div>
                <p className="text-[10px] text-center font-bold text-[#91A894]">
                  ✓ Authorized in &lt; 3 seconds
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F2EEE5] flex items-center justify-between text-[11px] text-[#747B73]">
              <span className="text-[#91A894] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Anti-Fraud Safeguard
              </span>
              <span className="font-mono text-[10px]">PIN-Protected</span>
            </div>
          </div>

          {/* TILE 4: Reward Management (Col Span 1) */}
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-7 flex flex-col justify-between hover:border-[#91A894] transition-all duration-300 group shadow-xs">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-center text-[#29483D] group-hover:bg-[#29483D] group-hover:text-[#FAF8F3] transition-colors">
                <Gift className="w-5 h-5 text-[#C6A875]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#29332E] mb-1">
                  Reward Management
                </h3>
                <p className="text-xs text-[#747B73] leading-relaxed">
                  Business owners specify their own rewards—free drink, dessert, discount, or treatment. Clear redemption logs prevent reuse.
                </p>
              </div>

              {/* Visual reward token */}
              <div className="p-3.5 bg-gradient-to-r from-[#F2EEE5] to-[#FAF8F3] rounded-2xl border border-[#C6A875]/40 flex items-center gap-3 my-2">
                <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#C6A875] flex items-center justify-center text-[#C6A875]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#29332E]">Free Artisan Pastry</p>
                  <p className="text-[10px] text-[#747B73]">One-time voucher token</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F2EEE5] flex items-center justify-between text-[11px] text-[#747B73]">
              <span className="text-[#91A894] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                One-Click Redemption
              </span>
              <span className="font-mono text-[10px]">No Duplicates</span>
            </div>
          </div>

          {/* TILE 5: Business-Specific Workspaces (Col Span 1 or 2 on desktop) */}
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-7 flex flex-col justify-between hover:border-[#91A894] transition-all duration-300 group shadow-xs">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-center text-[#29483D] group-hover:bg-[#29483D] group-hover:text-[#FAF8F3] transition-colors">
                <Layers className="w-5 h-5 text-[#91A894]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#29332E] mb-1">
                  Isolated Workspaces
                </h3>
                <p className="text-xs text-[#747B73] leading-relaxed">
                  Every merchant tenant operates within their own scoped partition. Customer data, visits, and staff accounts never overlap.
                </p>
              </div>

              {/* Mini workspace switcher visual */}
              <div className="p-3 bg-[#FAF8F3] rounded-2xl border border-[#E6E4DC] space-y-2 my-2">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveWorkspaceTab('cafe')}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 cursor-pointer transition-colors ${
                      activeWorkspaceTab === 'cafe'
                        ? 'bg-[#29483D] text-[#FAF8F3]'
                        : 'bg-[#FFFFFF] text-[#747B73] border border-[#E6E4DC]'
                    }`}
                  >
                    <Store className="w-3 h-3" />
                    <span>Workspace: Cafe</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveWorkspaceTab('salon')}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 cursor-pointer transition-colors ${
                      activeWorkspaceTab === 'salon'
                        ? 'bg-[#29483D] text-[#FAF8F3]'
                        : 'bg-[#FFFFFF] text-[#747B73] border border-[#E6E4DC]'
                    }`}
                  >
                    <Scissors className="w-3 h-3" />
                    <span>Workspace: Salon</span>
                  </button>
                </div>
                <div className="text-[10px] text-[#747B73] flex justify-between px-1">
                  <span>Tenant: {activeWorkspaceTab === 'cafe' ? 'tenant_cafe_084' : 'tenant_salon_192'}</span>
                  <span className="text-[#91A894] font-semibold">Strict Scope</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F2EEE5] flex items-center justify-between text-[11px] text-[#747B73]">
              <span className="text-[#91A894] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Data Separation
              </span>
              <span className="font-mono text-[10px]">tenant_id</span>
            </div>
          </div>

          {/* TILE 6: Role-Based Access (Col Span 1) */}
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-7 flex flex-col justify-between hover:border-[#91A894] transition-all duration-300 group shadow-xs">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-center text-[#29483D] group-hover:bg-[#29483D] group-hover:text-[#FAF8F3] transition-colors">
                <Users className="w-5 h-5 text-[#C6A875]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#29332E] mb-1">
                  Four Structured Roles
                </h3>
                <p className="text-xs text-[#747B73] leading-relaxed">
                  Clear boundaries for customers, counter staff, business owners, and platform administrators guarantee clean permissions.
                </p>
              </div>

              {/* 4 mini role chips */}
              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-2 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] text-center">
                  <p className="text-xs font-bold text-[#29332E]">Customer</p>
                  <p className="text-[9px] text-[#747B73]">Passport & Card</p>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] text-center">
                  <p className="text-xs font-bold text-[#29332E]">Staff</p>
                  <p className="text-[9px] text-[#747B73]">PIN Verification</p>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] text-center">
                  <p className="text-xs font-bold text-[#29332E]">Owner</p>
                  <p className="text-[9px] text-[#747B73]">Program Rules</p>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] text-center">
                  <p className="text-xs font-bold text-[#29332E]">ZFH Admin</p>
                  <p className="text-[9px] text-[#747B73]">Tenant Setup</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F2EEE5] flex items-center justify-between text-[11px] text-[#747B73]">
              <span className="text-[#91A894] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Granular Permissions
              </span>
              <a href="#roles" className="text-[#29483D] font-bold flex items-center gap-0.5 hover:underline">
                Explore Roles <ArrowUpRight className="w-3 h-3 text-[#C6A875]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
