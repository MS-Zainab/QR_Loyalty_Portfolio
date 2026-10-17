import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Coffee,
  ShieldCheck
} from 'lucide-react';
import { InquiryType } from '../types';

interface FinalCTAProps {
  onSelectInquiry: (inquiry: InquiryType) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onSelectInquiry }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#29483D] text-[#FAF8F3] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#91A894]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#C6A875]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Compelling Pitch & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E372E] border border-[#91A894]/40 text-xs font-semibold text-[#FAF8F3]">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A875]" />
              <span>Pilot Program Open</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#FAF8F3] leading-[1.15]">
              Your next loyal customer <br className="hidden sm:inline" />
              <span className="font-serif italic text-[#C6A875]">starts here.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#FAF8F3]/85 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover how a digital loyalty experience could work for your business. Talk to ZFH about a demonstration and introductory trial availability.
            </p>

            {/* Trial transparent banner */}
            <div className="p-4 rounded-2xl bg-[#1E372E] border border-[#C6A875]/30 text-xs text-[#FAF8F3]/90 space-y-1">
              <div className="flex items-center justify-center lg:justify-start gap-2 font-bold text-[#C6A875]">
                <Calendar className="w-4 h-4" />
                <span>Introductory 15-Day Merchant Trial Planned</span>
              </div>
              <p className="text-[11px] text-[#FAF8F3]/75">
                Trial availability is subject to confirmation and onboarding arrangements for participating merchants.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onSelectInquiry('demo')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#29483D] bg-[#FAF8F3] hover:bg-[#F2EEE5] transition-all shadow-md cursor-pointer"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 text-[#C6A875]" />
              </button>

              <button
                onClick={() => onSelectInquiry('trial')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#FAF8F3] bg-[#1E372E] hover:bg-[#162720] border border-[#C6A875]/50 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C6A875]" />
                <span>Ask About the 15-Day Trial</span>
              </button>
            </div>

            {/* Checklist */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2 text-xs text-[#FAF8F3]/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#91A894]" />
                Tailored walkthrough
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#91A894]" />
                Direct founder support
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#91A894]" />
                Zero setup pressure
              </span>
            </div>

          </div>

          {/* Right Column: Floating Visual Card Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] bg-gradient-to-b from-[#FAF8F3] to-[#F2EEE5] text-[#29332E] rounded-3xl p-6 sm:p-7 shadow-2xl border-2 border-[#C6A875]/40 space-y-5 animate-soft-float">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#E6E4DC]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#29483D] flex items-center justify-center text-[#C6A875]">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#29332E]">Artisan Cafe & Bakery</h4>
                    <p className="text-[10px] text-[#747B73]">VIP Regular Card</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#29483D] text-[#FAF8F3]">
                  10 / 10 Visits
                </span>
              </div>

              <div className="p-4 bg-[#FFFFFF] rounded-2xl border border-[#C6A875] space-y-2 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#C6A875]/20 flex items-center justify-center text-[#29483D]">
                  <Award className="w-5 h-5 text-[#29483D]" />
                </div>
                <h5 className="text-sm font-bold text-[#29332E]">Free Specialty Drink Ready</h5>
                <p className="text-[11px] text-[#747B73]">
                  Customer shows counter staff to redeem perk.
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#747B73] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#91A894]" />
                  Staff PIN Secured
                </span>
                <span className="font-mono text-[#29483D] font-bold">QR Loyalty</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
