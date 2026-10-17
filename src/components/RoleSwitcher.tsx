import React, { useState } from 'react';
import { 
  User, 
  ShieldCheck, 
  Briefcase, 
  Server, 
  CheckCircle2, 
  Sparkles, 
  Clock
} from 'lucide-react';
import { USER_ROLES } from '../data/mockData';
import { UserRole } from '../types';

export const RoleSwitcher: React.FC = () => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const currentRole: UserRole = USER_ROLES[activeRoleIndex];

  const getRoleIcon = (id: string) => {
    switch (id) {
      case 'customer':
        return <User className="w-4 h-4" />;
      case 'staff':
        return <ShieldCheck className="w-4 h-4" />;
      case 'owner':
        return <Briefcase className="w-4 h-4" />;
      case 'admin':
        return <Server className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  return (
    <section id="roles" className="py-20 lg:py-28 bg-[#F2EEE5]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E6E4DC] text-xs font-semibold text-[#29483D]">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>Role-Based Workflows</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            Four distinct roles. <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#29483D]">One coherent platform.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            Every user interacts with a tailored, focused interface designed exclusively for their operational responsibilities.
          </p>

          {/* Segmented Switcher Controls */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] max-w-xl mx-auto mt-4 shadow-xs">
            {USER_ROLES.map((role, idx) => {
              const active = activeRoleIndex === idx;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRoleIndex(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#29483D] text-[#FAF8F3] shadow-sm'
                      : 'text-[#747B73] hover:text-[#29332E] hover:bg-[#F2EEE5]'
                  }`}
                >
                  {getRoleIcon(role.id)}
                  <span>{role.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Role Showcase Container */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-10 shadow-lg shadow-[#29483D]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Role Details & Capabilities */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#91A894]/20 text-[#29483D] border border-[#91A894]/40">
                    {currentRole.badge}
                  </span>
                  <span className="text-xs text-[#747B73]">Verified in repository</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#29332E]">
                  {currentRole.title}
                </h3>
                <p className="text-sm font-medium text-[#C6A875]">
                  {currentRole.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#747B73] leading-relaxed pt-1">
                  {currentRole.summary}
                </p>
              </div>

              {/* Capability checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#747B73]">
                  Authorized Capabilities & Permissions
                </h4>

                <div className="space-y-2.5">
                  {currentRole.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-start gap-3 transition-colors hover:border-[#91A894]"
                    >
                      {cap.isVerified ? (
                        <CheckCircle2 className="w-4 h-4 text-[#91A894] shrink-0 mt-0.5" />
                      ) : (
                        <Clock className="w-4 h-4 text-[#C6A875] shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-[#29332E]">{cap.title}</p>
                          <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                            cap.isVerified ? 'bg-[#91A894]/20 text-[#29483D]' : 'bg-[#C6A875]/20 text-[#C6A875]'
                          }`}>
                            {cap.isVerified ? 'Verified' : 'Roadmap'}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#747B73] leading-relaxed">{cap.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Mock Screen Interface Preview */}
            <div className="lg:col-span-6 bg-[#FAF8F3] rounded-3xl border border-[#E6E4DC] p-6 shadow-inner relative">
              
              {/* Screen Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E6E4DC] mb-5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E8C8B8]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C6A875]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#91A894]" />
                  <span className="ml-2 text-xs font-semibold text-[#29332E]">
                    {currentRole.mockScreenTitle}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#747B73]">
                  Role: {currentRole.id.toUpperCase()}
                </span>
              </div>

              {/* Dynamic screen mockup per role */}
              {currentRole.id === 'customer' && (
                <div className="space-y-4 bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6E4DC] shadow-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#29332E]">ZFH Demo Cafe</p>
                      <p className="text-[10px] text-[#747B73]">Cardholder: Ayesha Khan</p>
                    </div>
                    <span className="text-[10px] font-bold bg-[#FAF8F3] px-2 py-0.5 rounded text-[#29483D] border border-[#E6E4DC]">
                      6 / 10 Stamps
                    </span>
                  </div>
                  <div className="w-full bg-[#F2EEE5] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#91A894] h-full w-[60%]" />
                  </div>
                  <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#E6E4DC] text-xs flex items-center justify-between">
                    <span>Reward: Free Barista Coffee</span>
                    <span className="text-[#C6A875] font-bold">4 visits away</span>
                  </div>
                </div>
              )}

              {currentRole.id === 'staff' && (
                <div className="space-y-4 bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6E4DC] shadow-xs">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#29332E]">Counter Stamp Authorization</p>
                    <span className="text-[10px] bg-[#91A894]/20 text-[#29483D] px-2 py-0.5 rounded font-bold">Terminal Active</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#E6E4DC] text-center space-y-2">
                    <p className="text-xs text-[#747B73]">Enter Authorized Venue PIN:</p>
                    <div className="flex justify-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#29483D]" />
                      <span className="w-3 h-3 rounded-full bg-[#29483D]" />
                      <span className="w-3 h-3 rounded-full bg-[#29483D]" />
                      <span className="w-3 h-3 rounded-full bg-[#91A894]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#747B73] pt-1">
                    <span>Customer: Phone lookup OK</span>
                    <span className="text-[#91A894] font-bold">Ready to Stamp</span>
                  </div>
                </div>
              )}

              {currentRole.id === 'owner' && (
                <div className="space-y-4 bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6E4DC] shadow-xs">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#29332E]">Merchant Loyalty Settings</p>
                    <span className="text-[10px] bg-[#C6A875]/20 text-[#29483D] px-2 py-0.5 rounded font-bold">Workspace Owner</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#FAF8F3] border border-[#E6E4DC]">
                      <span className="text-[#747B73]">Visit Goal:</span>
                      <span className="font-bold text-[#29483D]">10 visits per reward</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#FAF8F3] border border-[#E6E4DC]">
                      <span className="text-[#747B73]">Staff Verification PIN:</span>
                      <span className="font-mono font-bold text-[#29483D]">•••• (Configured)</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#FAF8F3] border border-[#E6E4DC]">
                      <span className="text-[#747B73]">Printable QR Stand:</span>
                      <span className="text-[#91A894] font-bold">Generated (PDF)</span>
                    </div>
                  </div>
                </div>
              )}

              {currentRole.id === 'admin' && (
                <div className="space-y-4 bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6E4DC] shadow-xs">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#29332E]">ZFH Platform Orchestrator</p>
                    <span className="text-[10px] bg-[#29483D] text-[#FAF8F3] px-2 py-0.5 rounded font-bold">Super Admin</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center p-2 rounded-lg bg-[#FAF8F3] border border-[#E6E4DC]">
                      <span className="text-[#747B73]">Total Tenants Active:</span>
                      <span className="font-bold text-[#29483D]">Multi-Tenant Partitioned</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-[#FAF8F3] border border-[#E6E4DC]">
                      <span className="text-[#747B73]">Database Query Scopes:</span>
                      <span className="text-[#91A894] font-bold">Enforced (tenant_id)</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-[#FAF8F3] border border-[#E6E4DC]">
                      <span className="text-[#747B73]">System API Latency:</span>
                      <span className="text-[#C6A875] font-bold">Normal (~45ms)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom caption */}
              <p className="text-[10px] text-center text-[#747B73] mt-3 italic">
                Illustrative preview reflecting actual repository role definitions
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
