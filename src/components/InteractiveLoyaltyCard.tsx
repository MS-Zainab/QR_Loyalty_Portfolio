import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  RotateCcw, 
  Sparkles, 
  Plus, 
  Coffee, 
  Utensils, 
  Store,
  Info,
  Gift,
  Check
} from 'lucide-react';
import { SAMPLE_BUSINESSES } from '../data/mockData';
import { LoyaltyBusiness } from '../types';

export const InteractiveLoyaltyCard: React.FC = () => {
  const [selectedBusiness, setSelectedBusiness] = useState<LoyaltyBusiness>(SAMPLE_BUSINESSES[0]);
  const [currentVisits, setCurrentVisits] = useState<number>(6);
  const [isRedeemed, setIsRedeemed] = useState<boolean>(false);
  const [justUnlocked, setJustUnlocked] = useState<boolean>(false);

  const goal = selectedBusiness.rewardGoal;
  const isGoalReached = currentVisits >= goal;
  const remaining = Math.max(0, goal - currentVisits);

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#C6A875', '#91A894', '#29483D', '#E8C8B8', '#FAF8F3']
    });
  };

  const handleSelectBusiness = (biz: LoyaltyBusiness) => {
    setSelectedBusiness(biz);
    setCurrentVisits(Math.min(biz.currentVisits, biz.rewardGoal));
    setIsRedeemed(false);
    setJustUnlocked(false);
  };

  const handleSetProgress = (count: number) => {
    const newCount = Math.min(Math.max(0, count), goal);
    setCurrentVisits(newCount);
    setIsRedeemed(false);
    if (newCount === goal) {
      setJustUnlocked(true);
      triggerConfetti();
    } else {
      setJustUnlocked(false);
    }
  };

  const handleAddStamp = () => {
    if (currentVisits < goal) {
      const next = currentVisits + 1;
      setCurrentVisits(next);
      if (next === goal) {
        setJustUnlocked(true);
        triggerConfetti();
      }
    }
  };

  const handleRedeem = () => {
    if (isGoalReached) {
      setIsRedeemed(true);
      setJustUnlocked(false);
    }
  };

  const handleReset = () => {
    setCurrentVisits(1);
    setIsRedeemed(false);
    setJustUnlocked(false);
  };

  const getStampIcon = () => {
    switch (selectedBusiness.stampsIcon) {
      case 'coffee':
        return <Coffee className="w-4 h-4" />;
      case 'utensils':
        return <Utensils className="w-4 h-4" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4" />;
      default:
        return <Store className="w-4 h-4" />;
    }
  };

  return (
    <section id="interactive-demo" className="py-20 lg:py-28 bg-[#F2EEE5]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E6E4DC] text-xs font-semibold text-[#29483D]">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>Live Interactive Demonstration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            A little progress. <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#29483D]">A reason to return.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            Test how customers interact with their digital loyalty card. Toggle sample states or tap to add stamps and unlock reward milestones.
          </p>

          {/* Business Preset Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {SAMPLE_BUSINESSES.map((biz) => {
              const active = selectedBusiness.id === biz.id;
              return (
                <button
                  key={biz.id}
                  onClick={() => handleSelectBusiness(biz)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                    active
                      ? 'bg-[#29483D] text-[#FAF8F3] border-[#29483D] shadow-sm'
                      : 'bg-[#FAF8F3] text-[#747B73] border-[#E6E4DC] hover:border-[#91A894]'
                  }`}
                >
                  {biz.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Demo Stage: Left Controls, Right Loyalty Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Simulation Controls */}
          <div className="lg:col-span-5 space-y-6 bg-[#FFFFFF] p-6 sm:p-7 rounded-3xl border border-[#E6E4DC] shadow-sm order-2 lg:order-1">
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-[#29332E] flex items-center gap-2">
                <span>Progress Simulator</span>
                <span className="text-[10px] font-semibold bg-[#91A894]/20 text-[#29483D] px-2 py-0.5 rounded-full">
                  Interactive
                </span>
              </h3>
              <p className="text-xs text-[#747B73]">
                Jump to specific customer visit milestones to test the reward milestone trigger.
              </p>
            </div>

            {/* Quick Preset Buttons */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-[#747B73] uppercase tracking-wider block">
                Quick Milestone Presets
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleSetProgress(2)}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-colors cursor-pointer ${
                    currentVisits === 2
                      ? 'bg-[#FAF8F3] border-[#29483D] text-[#29483D]'
                      : 'bg-[#FAF8F3] border-[#E6E4DC] text-[#747B73] hover:border-[#91A894]'
                  }`}
                >
                  2 Visits (Early)
                </button>
                <button
                  onClick={() => handleSetProgress(Math.floor(goal * 0.6))}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-colors cursor-pointer ${
                    currentVisits === Math.floor(goal * 0.6)
                      ? 'bg-[#FAF8F3] border-[#29483D] text-[#29483D]'
                      : 'bg-[#FAF8F3] border-[#E6E4DC] text-[#747B73] hover:border-[#91A894]'
                  }`}
                >
                  {Math.floor(goal * 0.6)} Visits (Midway)
                </button>
                <button
                  onClick={() => handleSetProgress(goal - 1)}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-colors cursor-pointer ${
                    currentVisits === goal - 1
                      ? 'bg-[#FAF8F3] border-[#29483D] text-[#29483D]'
                      : 'bg-[#FAF8F3] border-[#E6E4DC] text-[#747B73] hover:border-[#91A894]'
                  }`}
                >
                  {goal - 1} Visits (1 Away!)
                </button>
                <button
                  onClick={() => handleSetProgress(goal)}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-colors cursor-pointer ${
                    currentVisits === goal
                      ? 'bg-[#29483D] text-[#FAF8F3] border-[#29483D]'
                      : 'bg-[#FAF8F3] border-[#C6A875] text-[#29483D] hover:bg-[#C6A875]/10'
                  }`}
                >
                  {goal} Visits (Unlocked 🎉)
                </button>
              </div>
            </div>

            {/* Step-by-step counter action */}
            <div className="space-y-3 pt-2 border-t border-[#F2EEE5]">
              <label className="text-[11px] font-bold text-[#747B73] uppercase tracking-wider block">
                Manual Counter Verification
              </label>
              
              <div className="flex gap-2.5">
                <button
                  onClick={handleAddStamp}
                  disabled={isGoalReached}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                    isGoalReached
                      ? 'bg-[#F2EEE5] text-[#747B73] cursor-not-allowed opacity-60'
                      : 'bg-[#29483D] text-[#FAF8F3] hover:bg-[#1E372E] active:scale-[0.98] shadow-sm cursor-pointer'
                  }`}
                >
                  <Plus className="w-4 h-4 text-[#C6A875]" />
                  <span>Simulate +1 Stamp</span>
                </button>

                <button
                  onClick={handleReset}
                  className="p-2.5 rounded-xl border border-[#E6E4DC] bg-[#FAF8F3] hover:bg-[#F2EEE5] text-[#747B73] hover:text-[#29483D] transition-colors cursor-pointer"
                  title="Reset demo visits"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {isGoalReached && !isRedeemed && (
                <button
                  onClick={handleRedeem}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#29483D] bg-[#C6A875]/25 hover:bg-[#C6A875]/35 border border-[#C6A875] transition-all cursor-pointer animate-pulse"
                >
                  <Gift className="w-4 h-4 text-[#29483D]" />
                  <span>Simulate Staff Redeeming Reward</span>
                </button>
              )}

              {isRedeemed && (
                <div className="p-3 bg-[#91A894]/20 rounded-xl border border-[#91A894] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#29483D]">Perk Redeemed!</span>
                  <button
                    onClick={handleReset}
                    className="text-[11px] underline font-bold text-[#29483D]"
                  >
                    Start new loyalty card
                  </button>
                </div>
              )}
            </div>

            {/* Explanatory note */}
            <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#E6E4DC] flex items-start gap-2 text-[11px] text-[#747B73]">
              <Info className="w-3.5 h-3.5 text-[#C6A875] shrink-0 mt-0.5" />
              <span>
                Demonstration values update only in your browser. Live customer data is securely scoped in production.
              </span>
            </div>

          </div>

          {/* Right Column: Realistic Digital Loyalty Card */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
            <div className={`w-full max-w-[400px] bg-gradient-to-b from-[#FFFFFF] to-[#FAF8F3] rounded-3xl border ${
              isGoalReached ? 'border-[#C6A875] shadow-2xl shadow-[#C6A875]/20 ring-2 ring-[#C6A875]/30' : 'border-[#E6E4DC] shadow-xl'
            } p-6 sm:p-7 space-y-6 transition-all duration-300 relative overflow-hidden`}>
              
              {/* Confetti or Milestone Glow Banner */}
              {isGoalReached && !isRedeemed && (
                <div className={`absolute top-0 left-0 right-0 bg-[#C6A875] text-[#29483D] text-[11px] font-bold py-1.5 px-3 text-center tracking-wide flex items-center justify-center gap-1.5 shadow-sm transition-all ${
                  justUnlocked ? 'animate-bounce bg-[#E8C8B8]' : ''
                }`}>
                  <Sparkles className="w-3.5 h-3.5 text-[#29483D]" />
                  <span>{justUnlocked ? '🎉 Target Milestone Unlocked Just Now!' : 'Reward Ready to Redeem! Show Counter Staff'}</span>
                </div>
              )}

              {/* Card Header */}
              <div className={`flex items-start justify-between pb-4 border-b border-[#F2EEE5] ${
                isGoalReached && !isRedeemed ? 'pt-4' : ''
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#29483D] flex items-center justify-center text-[#C6A875] shadow-sm">
                    {getStampIcon()}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#29332E]">
                      {selectedBusiness.name}
                    </h4>
                    <p className="text-xs text-[#747B73]">
                      Customer: {selectedBusiness.customerName}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF8F3] text-[#29483D] border border-[#E6E4DC]">
                    Active Card
                  </span>
                  <p className="text-[10px] text-[#747B73] mt-1">Since {selectedBusiness.memberSince}</p>
                </div>
              </div>

              {/* Progress Count & Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-extrabold text-[#29483D] font-serif">
                      {currentVisits}
                    </span>
                    <span className="text-sm font-medium text-[#747B73]"> / {goal} visits</span>
                  </div>
                  <div className="text-right">
                    {isRedeemed ? (
                      <span className="text-xs font-bold text-[#91A894]">Redeemed on counter</span>
                    ) : isGoalReached ? (
                      <span className="text-xs font-bold text-[#C6A875] animate-bounce">
                        🎉 Milestone Reached!
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-[#747B73]">
                        {remaining} more {remaining === 1 ? 'visit' : 'visits'} to reward
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-[#F2EEE5] rounded-full overflow-hidden p-0.5 border border-[#E6E4DC]">
                  <div
                    className="h-full bg-gradient-to-r from-[#91A894] via-[#C6A875] to-[#29483D] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(currentVisits / goal) * 100}%` }}
                  />
                </div>
              </div>

              {/* Stamp Grid */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#747B73]">
                  <span className="font-medium">Stamps Matrix</span>
                  <span className="text-[11px] text-[#29483D] font-semibold">
                    {Math.round((currentVisits / goal) * 100)}% complete
                  </span>
                </div>

                <div className={`grid gap-2 ${
                  goal <= 6 ? 'grid-cols-3' : goal <= 8 ? 'grid-cols-4' : 'grid-cols-5'
                }`}>
                  {Array.from({ length: goal }).map((_, idx) => {
                    const isEarned = idx < currentVisits;
                    const isFinal = idx === goal - 1;

                    return (
                      <div
                        key={idx}
                        className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative ${
                          isEarned
                            ? 'bg-[#29483D] text-[#FAF8F3] shadow-sm shadow-[#29483D]/25'
                            : 'bg-[#FAF8F3] border border-dashed border-[#E6E4DC] text-[#747B73]/60'
                        }`}
                      >
                        {isFinal ? (
                          <Award className={`w-5 h-5 ${isEarned ? 'text-[#C6A875]' : 'text-[#747B73]/60'}`} />
                        ) : isEarned ? (
                          <Check className="w-4 h-4 text-[#91A894]" />
                        ) : (
                          <span className="text-xs font-bold">{idx + 1}</span>
                        )}

                        {isFinal && !isEarned && (
                          <span className="text-[9px] uppercase font-bold text-[#C6A875] absolute bottom-1">
                            Perk
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Reward Details Box */}
              <div className={`p-4 rounded-2xl border transition-all ${
                isGoalReached
                  ? 'bg-[#C6A875]/15 border-[#C6A875] text-[#29332E]'
                  : 'bg-[#F2EEE5] border-[#E6E4DC]'
              }`}>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F3] border border-[#E6E4DC] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#C6A875]" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h5 className="text-xs font-bold text-[#29332E]">
                        {selectedBusiness.rewardTitle}
                      </h5>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#FAF8F3] text-[#29483D]">
                        Milestone Perk
                      </span>
                    </div>
                    <p className="text-[11px] text-[#747B73] leading-relaxed">
                      {selectedBusiness.rewardDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-[11px] text-center text-[#747B73]/70 italic pt-1">
                Explore an illustrative loyalty card experience.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
