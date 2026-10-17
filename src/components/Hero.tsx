import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Coffee, 
  QrCode, 
  ShieldCheck, 
  Award,
  Scan
} from 'lucide-react';

interface HeroProps {
  onRequestDemo: () => void;
  onExploreExperience: () => void;
  onOpenWorkflowSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestDemo,
  onExploreExperience,
  onOpenWorkflowSimulator
}) => {
  const [heroVisits, setHeroVisits] = useState(6);
  const maxVisits = 10;

  const handleHeroStampClick = () => {
    setHeroVisits((prev) => (prev >= maxVisits ? 1 : prev + 1));
  };

  return (
    <section id="overview" className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-[#91A894]/15 via-[#C6A875]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 -left-32 w-80 h-80 bg-[#E8C8B8]/20 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-72 -right-32 w-96 h-96 bg-[#91A894]/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 text-center lg:text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E6E4DC] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#91A894] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#29483D] uppercase">
                Introducing QR Loyalty by ZFH
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#29332E] font-normal leading-[1.12]">
                Every Visit Has <br />
                <span className="font-serif italic text-[#29483D] font-normal relative inline-block">
                  Its Reward.
                  <span className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-[#C6A875] to-[#91A894] rounded-full opacity-60" />
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#747B73] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed pt-1">
                Bring customer loyalty into the digital age with QR-powered visits, clear progress, and rewards your customers can look forward to.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#FAF8F3] bg-[#29483D] hover:bg-[#1E372E] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#29483D]/15 group cursor-pointer"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 text-[#C6A875] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreExperience}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#29483D] bg-[#F2EEE5] hover:bg-[#E9E3D5] rounded-xl transition-colors border border-[#E6E4DC] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C6A875]" />
                <span>Explore the Experience</span>
              </button>
            </div>

            {/* Trial notification banner & trust indicators */}
            <div className="pt-2 flex flex-col gap-3">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs text-[#747B73]">
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#FAF8F3] border border-[#C6A875]/40 text-[#29483D] font-medium text-[11px]">
                  Introductory Offer
                </span>
                <span>Ask about the 15-day trial · Subject to onboarding confirmation</span>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-[#747B73]/90 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#91A894]" />
                  <span>Zero App Download Needed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#91A894]" />
                  <span>PIN-Verified Visits</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#91A894]" />
                  <span>Multi-Tenant Separation</span>
                </div>
              </div>
            </div>

            {/* Sub-label */}
            <p className="text-xs uppercase tracking-widest text-[#747B73]/70 font-semibold text-center lg:text-left">
              Designed for modern local businesses & boutique merchants
            </p>
          </div>

          {/* Right Column: Layered Product Visual Composition */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Desktop Dashboard Panel (tucked behind the card for realistic depth) */}
            <div className="hidden sm:block absolute -top-8 -right-4 w-[92%] h-[370px] bg-[#FFFFFF] rounded-2xl border border-[#E6E4DC] shadow-xl p-5 -rotate-1 opacity-90 transition-transform duration-500 hover:rotate-0">
              <div className="flex items-center justify-between pb-4 border-b border-[#F2EEE5]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E8C8B8]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C6A875]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#91A894]" />
                  <span className="ml-2 text-xs font-medium text-[#747B73]">
                    ZFH Portal · Owner Console (Demo Cafe)
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#29483D] bg-[#F2EEE5] px-2 py-0.5 rounded">
                  Tenant ID: #tc-8924
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#E6E4DC]">
                  <p className="text-[11px] text-[#747B73]">Verified Today</p>
                  <p className="text-xl font-bold text-[#29483D]">38 visits</p>
                  <p className="text-[10px] text-[#91A894]">100% staff verified</p>
                </div>
                <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#E6E4DC]">
                  <p className="text-[11px] text-[#747B73]">Active Regulars</p>
                  <p className="text-xl font-bold text-[#29483D]">142</p>
                  <p className="text-[10px] text-[#747B73]">Enrolled via QR</p>
                </div>
                <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#E6E4DC]">
                  <p className="text-[11px] text-[#747B73]">Next Reward</p>
                  <p className="text-xl font-bold text-[#C6A875]">12 ready</p>
                  <p className="text-[10px] text-[#747B73]">Milestone: 10th Cup</p>
                </div>
              </div>
            </div>

            {/* Main Floating Mobile Loyalty Card */}
            <div className="relative z-10 w-full max-w-[360px] bg-gradient-to-b from-[#FFFFFF] to-[#FAF8F3] rounded-3xl border border-[#E6E4DC] shadow-2xl p-6 sm:p-7 space-y-5 animate-soft-float">
              
              {/* Illustrative preview banner */}
              <div className="flex items-center justify-between pb-3 border-b border-[#F2EEE5]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#29483D] flex items-center justify-center text-[#FAF8F3]">
                    <Coffee className="w-4 h-4 text-[#C6A875]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#29332E]">ZFH Demo Cafe</h3>
                    <p className="text-[11px] text-[#747B73]">Customer: Ayesha</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FAF8F3] text-[#29483D] border border-[#E6E4DC]">
                  Digital Card
                </span>
              </div>

              {/* Progress Summary */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-2xl font-bold text-[#29483D]">{heroVisits}</span>
                    <span className="text-sm text-[#747B73]"> / {maxVisits} visits</span>
                  </div>
                  <span className="text-xs font-semibold text-[#C6A875]">
                    {maxVisits - heroVisits > 0 ? `${maxVisits - heroVisits} more to Free Coffee` : '🎉 Reward Unlocked!'}
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2.5 bg-[#F2EEE5] rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#91A894] via-[#C6A875] to-[#29483D] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(heroVisits / maxVisits) * 100}%` }}
                  />
                </div>
              </div>

              {/* Stamp Grid (10 slots) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#747B73]">
                  <span>Loyalty Stamp Matrix</span>
                  <span className="text-[10px] text-[#91A894] font-medium">Tap slot to preview</span>
                </div>
                <div className="grid grid-cols-5 gap-2.5">
                  {Array.from({ length: maxVisits }).map((_, index) => {
                    const isEarned = index < heroVisits;
                    const isReward = index === maxVisits - 1;
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={handleHeroStampClick}
                        title={`Stamp ${index + 1}: ${isEarned ? 'Earned' : 'Pending'}`}
                        className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative cursor-pointer ${
                          isEarned
                            ? 'bg-[#29483D] text-[#FAF8F3] shadow-sm shadow-[#29483D]/20 scale-100'
                            : 'bg-[#FAF8F3] text-[#747B73]/60 border border-dashed border-[#E6E4DC] hover:border-[#91A894]'
                        }`}
                      >
                        {isReward ? (
                          <Award className={`w-4 h-4 ${isEarned ? 'text-[#C6A875]' : 'text-[#747B73]/60'}`} />
                        ) : isEarned ? (
                          <CheckCircle2 className="w-4 h-4 text-[#91A894]" />
                        ) : (
                          <span className="text-[11px] font-semibold">{index + 1}</span>
                        )}
                        {isReward && (
                          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#C6A875] rounded-full animate-ping" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reward Preview Card */}
              <div className="p-3.5 rounded-2xl bg-[#F2EEE5] border border-[#E6E4DC] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F3] flex items-center justify-center border border-[#E6E4DC]">
                    <Award className="w-5 h-5 text-[#C6A875]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#29332E]">Next Reward: Free Coffee</h4>
                    <p className="text-[10px] text-[#747B73]">Any signature blend on 10th visit</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#FAF8F3] text-[#29483D] border border-[#E6E4DC]">
                  {heroVisits >= 10 ? 'Ready' : 'In Progress'}
                </span>
              </div>

              {/* Interactive trigger */}
              <div className="pt-1 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenWorkflowSimulator}
                  className="w-full text-center py-2 px-3 rounded-lg bg-[#FAF8F3] hover:bg-[#F2EEE5] border border-[#E6E4DC] text-xs font-medium text-[#29483D] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Scan className="w-3.5 h-3.5 text-[#91A894]" />
                  <span>Simulate Customer Scan Flow</span>
                </button>
              </div>

              {/* Label */}
              <p className="text-[10px] text-center text-[#747B73]/80 italic">
                Illustrative preview · Demo data for ZFH Demo Cafe
              </p>
            </div>

            {/* Floating micro badges around the card */}
            <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-[#FFFFFF] rounded-2xl border border-[#E6E4DC] shadow-lg p-3 flex items-center gap-2.5 z-20 animate-soft-float-delayed">
              <div className="w-8 h-8 rounded-xl bg-[#91A894]/20 flex items-center justify-center text-[#29483D]">
                <ShieldCheck className="w-4 h-4 text-[#29483D]" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#29332E]">PIN Verified</p>
                <p className="text-[10px] text-[#747B73]">No fake stamps</p>
              </div>
            </div>

            <div className="hidden sm:flex absolute top-12 -left-10 bg-[#FFFFFF] rounded-2xl border border-[#E6E4DC] shadow-lg p-3 items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-xl bg-[#C6A875]/20 flex items-center justify-center text-[#C6A875]">
                <QrCode className="w-4 h-4 text-[#29483D]" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#29332E]">Zero App Setup</p>
                <p className="text-[10px] text-[#747B73]">Camera opens browser</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
