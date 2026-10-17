import React, { useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  Sparkles, 
  FileQuestion, 
  Smartphone,
  ArrowRight
} from 'lucide-react';

export const ProblemPromise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'paper' | 'digital'>('both');

  const paperDisadvantages = [
    {
      title: 'Easily lost or forgotten',
      desc: 'Customers frequently leave cards at home or in other bags when paying at the counter.'
    },
    {
      title: 'Manual stamp friction',
      desc: 'Physical ink stamps smudge, get forged, or run dry during busy morning queues.'
    },
    {
      title: 'Zero merchant visibility',
      desc: 'Business owners have no idea how many cards are circulating or who their top regulars are.'
    },
    {
      title: 'Environmental waste',
      desc: 'Thousands of discarded paper cards end up in trash cans when partially completed.'
    }
  ];

  const digitalAdvantages = [
    {
      title: 'Always on customer’s phone',
      desc: 'Accessible instantly through the phone camera without needing an App Store download.'
    },
    {
      title: 'PIN-verified authenticity',
      desc: 'Counter staff quickly keys in an authorized venue PIN to guarantee each stamp is real.'
    },
    {
      title: 'Clear reward anticipation',
      desc: 'Customers see exactly how many visits remain until their reward is ready to redeem.'
    },
    {
      title: 'Separated merchant workspaces',
      desc: 'Each business manages their own visit goals, reward perks, and staff PINs independently.'
    }
  ];

  return (
    <section id="compare" className="py-20 lg:py-28 bg-[#F2EEE5]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F3] border border-[#E6E4DC] text-xs font-semibold text-[#29483D] tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>The Loyalty Evolution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            Good customers deserve to be <span className="font-serif italic text-[#29483D]">remembered.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            Paper stamp cards served businesses for decades. Today, digital visits make rewarding regulars simpler, cleaner, and far more rewarding.
          </p>

          {/* Filter Pills for Mobile convenience */}
          <div className="inline-flex items-center p-1 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] sm:hidden mt-2">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'both' ? 'bg-[#29483D] text-[#FAF8F3]' : 'text-[#747B73]'
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setActiveTab('paper')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'paper' ? 'bg-[#29483D] text-[#FAF8F3]' : 'text-[#747B73]'
              }`}
            >
              Paper
            </button>
            <button
              onClick={() => setActiveTab('digital')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'digital' ? 'bg-[#29483D] text-[#FAF8F3]' : 'text-[#747B73]'
              }`}
            >
              QR Digital
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
          
          {/* Subtle bridge circle in center for desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FAF8F3] border-2 border-[#E6E4DC] shadow-md items-center justify-center text-[#29483D]">
            <ArrowRight className="w-5 h-5 text-[#C6A875]" />
          </div>

          {/* LEFT: Traditional Paper Cards */}
          {(activeTab === 'both' || activeTab === 'paper') && (
            <div className="bg-[#FAF8F3] rounded-3xl border border-[#E6E4DC] p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-[#E8C8B8]">
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E6E4DC]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#E8C8B8] flex items-center justify-center text-[#747B73]">
                      <FileQuestion className="w-5 h-5 text-[#747B73]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#29332E]">Traditional Paper Cards</h3>
                      <p className="text-xs text-[#747B73]">Physical stamp punchcards</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF8F3] text-[#747B73] border border-[#E6E4DC]">
                    Conventional
                  </span>
                </div>

                {/* Simulated Paper Card Graphic */}
                <div className="p-4 bg-[#F2EEE5] rounded-2xl border border-dashed border-[#E6E4DC] relative overflow-hidden">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-serif italic text-[#747B73]">Neighborhood Cafe Stamp Card</span>
                    <span className="text-[10px] text-[#747B73]/70">Lost in wallet 72% of time</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((slot) => (
                      <div
                        key={slot}
                        className={`h-10 rounded-lg flex items-center justify-center text-xs ${
                          slot <= 3
                            ? 'bg-[#E6E4DC] text-[#747B73] line-through font-serif'
                            : 'border border-dashed border-[#E6E4DC] bg-[#FAF8F3] text-[#747B73]/40'
                        }`}
                      >
                        {slot <= 3 ? '☕' : slot}
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-center text-[#747B73] mt-2 italic">
                    "Sorry, I left my card in my other jacket today..."
                  </p>
                </div>

                {/* Drawbacks Checklist */}
                <div className="space-y-3.5 pt-2">
                  {paperDisadvantages.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-[#747B73] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-[#29332E]">{item.title}</p>
                        <p className="text-xs text-[#747B73]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-6 mt-6 border-t border-[#E6E4DC]/80">
                <p className="text-xs text-[#747B73]/80">
                  Paper cards were simple, but customer retention shouldn't rely on paper slipping into the bottom of a pocket.
                </p>
              </div>
            </div>
          )}

          {/* RIGHT: QR Digital Loyalty */}
          {(activeTab === 'both' || activeTab === 'digital') && (
            <div className="bg-[#FFFFFF] rounded-3xl border-2 border-[#91A894]/40 p-6 sm:p-8 flex flex-col justify-between shadow-lg shadow-[#91A894]/10 transition-all hover:border-[#29483D]">
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E6E4DC]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#29483D] flex items-center justify-center text-[#FAF8F3]">
                      <Smartphone className="w-5 h-5 text-[#C6A875]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#29332E]">QR Digital Loyalty</h3>
                      <p className="text-xs text-[#91A894] font-medium">Browser-based · QR instant entry</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#91A894]/15 text-[#29483D] border border-[#91A894]/30">
                    Modern Alternative
                  </span>
                </div>

                {/* Simulated Digital Card Graphic */}
                <div className="p-4 bg-gradient-to-br from-[#FAF8F3] to-[#F2EEE5] rounded-2xl border border-[#91A894]/30 relative shadow-inner">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#91A894] animate-ping" />
                      <span className="text-xs font-bold text-[#29483D]">Live Customer Profile</span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#C6A875]">6 / 10 Completed</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((slot) => (
                      <div
                        key={slot}
                        className={`h-10 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                          slot <= 6
                            ? 'bg-[#29483D] text-[#FAF8F3] shadow-sm'
                            : 'border border-dashed border-[#91A894]/40 bg-[#FAF8F3] text-[#747B73]/60'
                        }`}
                      >
                        {slot <= 6 ? <CheckCircle2 className="w-4 h-4 text-[#91A894]" /> : slot}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#E6E4DC] text-[10px] text-[#747B73]">
                    <span>Target: Free Signature Item</span>
                    <span className="text-[#29483D] font-bold">4 visits remaining</span>
                  </div>
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-3.5 pt-2">
                  {digitalAdvantages.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#91A894] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-[#29332E]">{item.title}</p>
                        <p className="text-xs text-[#747B73]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-6 mt-6 border-t border-[#E6E4DC]/80">
                <p className="text-xs text-[#29483D] font-medium">
                  Customers love the zero-app convenience; owners appreciate legitimate visit verification without fraud.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
