import React from 'react';
import { 
  Coffee, 
  Utensils, 
  Scissors, 
  ShoppingBag, 
  Sparkles, 
  ArrowRight,
  Check
} from 'lucide-react';
import { BusinessType } from '../types';

interface IndustryShowcaseProps {
  onSelectIndustry: (type: BusinessType) => void;
}

export const IndustryShowcase: React.FC<IndustryShowcaseProps> = ({ onSelectIndustry }) => {
  const industries = [
    {
      type: 'cafe' as BusinessType,
      name: 'Cafes & Coffee Bars',
      tagline: 'Morning rituals & afternoon pick-me-ups',
      icon: Coffee,
      accent: '#91A894',
      accentBg: 'bg-[#91A894]/15 text-[#29483D]',
      exampleReward: '10th Pour-Over or Latte Free',
      cadence: '1–4 visits / week',
      perks: [
        'Instant counter camera scan during morning rush',
        'Replace frayed paper punchcards',
        'Seasonal specials reward milestones'
      ],
      sampleCustomer: 'Liam · 8 / 10 stamps'
    },
    {
      type: 'restaurant' as BusinessType,
      name: 'Restaurants & Bistros',
      tagline: 'Neighborhood dining & weekend tables',
      icon: Utensils,
      accent: '#C6A875',
      accentBg: 'bg-[#C6A875]/20 text-[#29483D]',
      exampleReward: 'Complimentary Chef Starter or Dessert',
      cadence: '1–3 visits / month',
      perks: [
        'Staff PIN check at bill presentation',
        'Encourage repeat family dinners',
        'Recognize regular diners without plastic VIP cards'
      ],
      sampleCustomer: 'Elena · 4 / 6 stamps'
    },
    {
      type: 'salon' as BusinessType,
      name: 'Salons, Spas & Beauty',
      tagline: 'Personal care & grooming appointments',
      icon: Scissors,
      accent: '#E8C8B8',
      accentBg: 'bg-[#E8C8B8]/30 text-[#29483D]',
      exampleReward: '15% Off Treatment or Scalp Therapy',
      cadence: 'Every 3–6 weeks',
      perks: [
        'Checked out right at salon reception',
        'Build long-term stylist loyalty',
        'Higher basket size incentives'
      ],
      sampleCustomer: 'Sophia · 5 / 6 stamps'
    },
    {
      type: 'retail' as BusinessType,
      name: 'Local Bakeries & Boutiques',
      tagline: 'Neighborhood bakeries, books & specialty goods',
      icon: ShoppingBag,
      accent: '#29483D',
      accentBg: 'bg-[#29483D] text-[#FAF8F3]',
      exampleReward: 'Free Sourdough Loaf or Store Credit',
      cadence: 'Weekly grocery or gift shoppers',
      perks: [
        'Simple QR acrylic stand on cash register',
        'No phone app storage taken up',
        'Fosters true community connection'
      ],
      sampleCustomer: 'Marcus · 7 / 8 stamps'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F2EEE5]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E6E4DC] text-xs font-semibold text-[#29483D]">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A875]" />
            <span>Target Verticals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29332E] tracking-tight">
            Made for the places <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#29483D]">people come back to.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#747B73] font-normal leading-relaxed">
            Tailored for local merchants where authentic customer relationships drive sustainable repeat business.
          </p>
        </div>

        {/* 4 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.type}
                className="bg-[#FFFFFF] rounded-3xl border border-[#E6E4DC] p-6 flex flex-col justify-between hover:border-[#91A894] transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${ind.accentBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#747B73]">
                      {ind.cadence}
                    </span>
                  </div>

                  {/* Header */}
                  <div>
                    <h3 className="text-base font-bold text-[#29332E]">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-[#747B73] mt-0.5">
                      {ind.tagline}
                    </p>
                  </div>

                  {/* Simulated Perk Badge */}
                  <div className="p-3 bg-[#FAF8F3] rounded-2xl border border-[#E6E4DC] space-y-1">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#C6A875]">
                      Example Loyalty Reward
                    </p>
                    <p className="text-xs font-bold text-[#29332E]">
                      {ind.exampleReward}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2 pt-1">
                    {ind.perks.map((perk, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#747B73]">
                        <Check className="w-3.5 h-3.5 text-[#91A894] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Action */}
                <div className="pt-5 mt-5 border-t border-[#F2EEE5]">
                  <button
                    onClick={() => onSelectIndustry(ind.type)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FAF8F3] hover:bg-[#29483D] text-[#29483D] hover:text-[#FAF8F3] border border-[#E6E4DC] hover:border-[#29483D] text-xs font-semibold transition-all cursor-pointer group-hover:shadow-xs"
                  >
                    <span>Inquire for {ind.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Use-case note */}
        <p className="text-xs text-center text-[#747B73] mt-8 italic">
          Illustrative vertical applications. Inquire to discuss custom loyalty thresholds for your venue.
        </p>

      </div>
    </section>
  );
};
