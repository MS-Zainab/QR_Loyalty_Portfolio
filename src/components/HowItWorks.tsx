import React, { useState } from 'react';
import { 
  QrCode, 
  UserCheck, 
  ShieldCheck, 
  Gift, 
  ArrowRight,
  Clock,
  Sparkles,
  Smartphone,
  Lock,
  CheckCircle2
} from 'lucide-react';

interface HowItWorksProps {
  onOpenWorkflowSimulator: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenWorkflowSimulator }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Scan QR Code',
      actor: 'Customer',
      actorColor: 'bg-[#91A894]/15 text-[#29483D] border-[#91A894]/30',
      timing: '< 3 seconds',
      description: 'The customer scans the business’s unique QR stand displayed at the counter. Opens instantly in any mobile browser.',
      icon: QrCode,
      mockDetail: {
        header: 'Counter Stand Scan',
        content: 'Camera detects QR → Launches instant web portal (No App Store redirect)',
        badge: 'Universal Browser'
      }
    },
    {
      number: '02',
      title: 'Identify Customer',
      actor: 'Customer',
      actorColor: 'bg-[#C6A875]/20 text-[#29483D] border-[#C6A875]/40',
      timing: '< 5 seconds',
      description: 'Customer inputs their name and phone number on the lightweight interface to pull up their merchant loyalty record.',
      icon: UserCheck,
      mockDetail: {
        header: 'Instant Identity Lookup',
        content: 'Name + Phone lookup → Loads active stamp card & visit history',
        badge: 'Zero Password Friction'
      }
    },
    {
      number: '03',
      title: 'Staff Verification',
      actor: 'Staff Member',
      actorColor: 'bg-[#29483D] text-[#FAF8F3] border-[#29483D]',
      timing: '< 4 seconds',
      description: 'Counter staff keys in the venue’s authorized PIN to verify the genuine purchase and authorize the stamp.',
      icon: ShieldCheck,
      mockDetail: {
        header: 'PIN Authorization',
        content: 'Staff enters 4-digit venue PIN → Stamps cannot be forged or faked remotely',
        badge: 'Fraud Prevention'
      }
    },
    {
      number: '04',
      title: 'Earn & Celebrate',
      actor: 'Customer & Merchant',
      actorColor: 'bg-[#E8C8B8]/30 text-[#29483D] border-[#E8C8B8]',
      timing: 'Instantaneous',
      description: 'Loyalty progress increments immediately. Once target visits are completed, reward becomes ready for redemption.',
      icon: Gift,
      mockDetail: {
        header: 'Progress Updated',
        content: 'New stamp activated + Milestone unlocked when criteria are fulfilled',
        badge: 'Automatic Unlock'
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FAF8F3] relative overflow-hidden">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E6E4DC_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EEE5] border border-[#E6E4DC] text-xs font-semibold text-[#29483D]">
            <Clock className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>Frictionless Counter Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            Simple for customers. <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#29483D]">Practical for businesses.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            Four clear steps designed to keep checkout queues moving quickly while ensuring legitimate, staff-verified visit stamps.
          </p>
        </div>

        {/* 4 Steps Horizontal Desktop Grid / Vertical Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = activeStepIndex === index;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIndex(index)}
                className={`group cursor-pointer rounded-3xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-2 border-[#29483D] shadow-xl shadow-[#29483D]/10 -translate-y-1'
                    : 'bg-[#FAF8F3] border border-[#E6E4DC] hover:border-[#91A894] hover:bg-[#FFFFFF]'
                }`}
              >
                {/* Step Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-[#C6A875]">
                      {step.number}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${step.actorColor}`}>
                      {step.actor}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#29483D] text-[#FAF8F3]' : 'bg-[#F2EEE5] text-[#29332E] group-hover:bg-[#29483D] group-hover:text-[#FAF8F3]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-base font-bold text-[#29332E] mb-1.5 flex items-center justify-between">
                      <span>{step.title}</span>
                      <span className="text-[10px] font-normal text-[#747B73]">{step.timing}</span>
                    </h3>
                    <p className="text-xs text-[#747B73] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Action footer */}
                <div className="pt-4 mt-4 border-t border-[#F2EEE5] flex items-center justify-between text-[11px]">
                  <span className="text-[#91A894] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {step.mockDetail.badge}
                  </span>
                  <span className="text-[#747B73] group-hover:text-[#29483D] transition-colors font-medium">
                    {isSelected ? 'Active Step' : 'Click to preview'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Step Preview Stage */}
        <div className="mt-10 bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#29483D] text-[#FAF8F3]">
                  Step {steps[activeStepIndex].number} Preview
                </span>
                <span className="text-xs font-semibold text-[#747B73]">
                  {steps[activeStepIndex].title} in action
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#29332E]">
                {steps[activeStepIndex].mockDetail.header}
              </h4>
              <p className="text-sm text-[#747B73] leading-relaxed">
                {steps[activeStepIndex].mockDetail.content}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E6E4DC] text-xs text-[#29332E]">
                  <Smartphone className="w-4 h-4 text-[#91A894]" />
                  <span>Works on any iOS / Android camera</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E6E4DC] text-xs text-[#29332E]">
                  <Lock className="w-4 h-4 text-[#C6A875]" />
                  <span>Staff PIN keeps stamps genuine</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#FAF8F3] rounded-2xl border border-[#E6E4DC] text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#29483D] flex items-center justify-center text-[#FAF8F3] shadow-md">
                {React.createElement(steps[activeStepIndex].icon, { className: 'w-7 h-7 text-[#C6A875]' })}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#747B73] font-bold">Try the Interactive Flow</p>
                <p className="text-sm font-bold text-[#29332E]">Experience all 4 steps in our sandbox</p>
              </div>
              <button
                onClick={onOpenWorkflowSimulator}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF8F3] bg-[#29483D] hover:bg-[#1E372E] rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C6A875]" />
                <span>Launch Interactive Counter Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
