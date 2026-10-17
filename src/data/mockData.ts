import { LoyaltyBusiness, UserRole, TechItem, FAQItem } from '../types';

export const SAMPLE_BUSINESSES: LoyaltyBusiness[] = [
  {
    id: 'cafe-demo',
    name: 'ZFH Demo Cafe',
    category: 'Specialty Coffee & Bakery',
    tagline: 'Artisanal roasts & slow sips',
    accentColor: '#91A894',
    rewardGoal: 10,
    rewardTitle: 'Free Signature Coffee',
    rewardDescription: 'Any 12oz pour-over or barista special on your 10th visit',
    customerName: 'Ayesha',
    memberSince: 'March 2025',
    currentVisits: 6,
    stampsIcon: 'coffee'
  },
  {
    id: 'bistro-demo',
    name: 'Olive & Sage Trattoria',
    category: 'Casual Italian Dining',
    tagline: 'Woodfired sourdough & fresh pasta',
    accentColor: '#C6A875',
    rewardGoal: 8,
    rewardTitle: 'Complimentary Antipasto',
    rewardDescription: 'Chef’s selection bruschetta platter on visit 8',
    customerName: 'Liam',
    memberSince: 'February 2025',
    currentVisits: 4,
    stampsIcon: 'utensils'
  },
  {
    id: 'salon-demo',
    name: 'Botanical Hair & Beauty',
    category: 'Eco-conscious Salon',
    tagline: 'Clean treatments & restorative care',
    accentColor: '#E8C8B8',
    rewardGoal: 6,
    rewardTitle: 'Deep Conditioning Treatment',
    rewardDescription: 'Complimentary botanical scalp treatment on visit 6',
    customerName: 'Sophia',
    memberSince: 'January 2025',
    currentVisits: 5,
    stampsIcon: 'sparkles'
  }
];

export const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Scan QR Code',
    shortTitle: 'Scan',
    subtitle: 'Point phone camera at counter display',
    description: 'The customer points their phone camera at the unique QR stand placed on the shop counter. No app download needed; it opens instantly in any mobile browser.',
    icon: 'qr-code',
    accent: '#91A894',
    badge: 'Customer Action',
    duration: '< 3 seconds'
  },
  {
    number: '02',
    title: 'Identify Customer',
    shortTitle: 'Identify',
    subtitle: 'Fast name & phone lookup',
    description: 'The customer enters their name and phone number on the lightweight web portal. The system instantly fetches their business-specific loyalty card.',
    icon: 'user-check',
    accent: '#C6A875',
    badge: 'Customer Action',
    duration: '< 5 seconds'
  },
  {
    number: '03',
    title: 'Verify Visit',
    shortTitle: 'Verify',
    subtitle: 'Staff enters authorized venue PIN',
    description: 'To prevent fraudulent stamps, counter staff confirms the customer order and inputs the quick temporary staff verification PIN.',
    icon: 'shield-check',
    accent: '#29483D',
    badge: 'Staff Action',
    duration: '< 4 seconds'
  },
  {
    number: '04',
    title: 'Earn & Celebrate',
    shortTitle: 'Earn',
    subtitle: 'Live stamp added & reward unlocked',
    description: 'The digital loyalty card refreshes immediately with the new stamp. When the target milestone is reached, the reward becomes ready to claim.',
    icon: 'gift',
    accent: '#E8C8B8',
    badge: 'System Update',
    duration: 'Instant'
  }
];

export const USER_ROLES: UserRole[] = [
  {
    id: 'customer',
    title: 'Customer Experience',
    shortLabel: 'Customer',
    tagline: 'Instant web access. No app store friction.',
    summary: 'Customers scan the counter QR code, view their active stamp progress in real-time, and clearly see how close they are to their next perk.',
    badge: 'Frictionless Web View',
    mockScreenTitle: 'Customer Loyalty Card Screen',
    capabilities: [
      {
        title: 'Zero App Installation',
        description: 'Opens immediately in Safari, Chrome, or any mobile browser via QR scan.',
        isVerified: true
      },
      {
        title: 'Real-time Stamp Grid',
        description: 'Visual progress bar and interactive stamp badges show clear visit history.',
        isVerified: true
      },
      {
        title: 'Instant Reward Eligibility',
        description: 'Dynamic banner activates when milestone (e.g. 10/10 visits) is unlocked.',
        isVerified: true
      },
      {
        title: 'Multi-business Passports (Planned)',
        description: 'Single interface to view loyalty cards across different participating merchants.',
        isVerified: false
      }
    ]
  },
  {
    id: 'staff',
    title: 'Counter Staff Terminal',
    shortLabel: 'Staff',
    tagline: 'Fast verification without slowing the checkout queue.',
    summary: 'Front-of-house staff can authorize visit stamps in seconds using the venue PIN workflow, ensuring legitimate in-store transactions.',
    badge: 'PIN-Protected Verification',
    mockScreenTitle: 'Staff Verification Keypad',
    capabilities: [
      {
        title: 'Staff Verification PIN',
        description: 'Secure, lightweight 4-digit PIN verification to authenticate counter visits.',
        isVerified: true
      },
      {
        title: 'Single-Tap Stamp Granting',
        description: 'Adds visit stamp directly to customer account upon PIN validation.',
        isVerified: true
      },
      {
        title: 'Reward Redemption Log',
        description: 'Allows staff to mark claimed rewards as redeemed so they cannot be reused.',
        isVerified: true
      },
      {
        title: 'Daily Verification Audit (Planned)',
        description: 'End-of-shift summary of total stamps issued and rewards handed out.',
        isVerified: false
      }
    ]
  },
  {
    id: 'owner',
    title: 'Business Owner Console',
    shortLabel: 'Business Owner',
    tagline: 'Complete control over rewards, rules, and staff access.',
    summary: 'Merchants configure their visit goals, customize reward descriptions, generate their dedicated QR stands, and monitor visit cadence.',
    badge: 'Tenant Management Console',
    mockScreenTitle: 'Owner Program Settings & Insights',
    capabilities: [
      {
        title: 'Customizable Loyalty Goal',
        description: 'Set required visit thresholds (e.g., 6, 8, 10 visits) per business requirements.',
        isVerified: true
      },
      {
        title: 'Staff PIN Management',
        description: 'Update and cycle venue verification PINs to maintain operational control.',
        isVerified: true
      },
      {
        title: 'Printable QR Asset Generation',
        description: 'Export high-resolution venue QR codes ready for counter display stands.',
        isVerified: true
      },
      {
        title: 'Customer Retention Analytics (Planned)',
        description: 'Repeat visit frequency charts and average days between customer visits.',
        isVerified: false
      }
    ]
  },
  {
    id: 'admin',
    title: 'ZFH Platform Administrator',
    shortLabel: 'ZFH Admin',
    tagline: 'Tenant lifecycle and cross-system orchestration.',
    summary: 'Zenith Forge Hub platform operators can onboard new merchant tenants, manage database partitions, and monitor platform health.',
    badge: 'Platform Orchestration',
    mockScreenTitle: 'ZFH Multi-Tenant Dashboard',
    capabilities: [
      {
        title: 'Multi-Tenant Provisioning',
        description: 'Initialize isolated business workspaces with dedicated tenant IDs.',
        isVerified: true
      },
      {
        title: 'System Health & Error Monitoring',
        description: 'Track API latency, auth attempts, and database transaction consistency.',
        isVerified: true
      },
      {
        title: 'Tenant Access Controls',
        description: 'Suspend or activate merchant accounts based on trial status and agreements.',
        isVerified: true
      },
      {
        title: 'Automated Merchant Self-Onboarding (Planned)',
        description: 'Self-service sign-up flow with automated QR stand template generator.',
        isVerified: false
      }
    ]
  }
];

export const TECH_STACK: TechItem[] = [
  {
    name: 'React 19 & TypeScript',
    category: 'Frontend',
    role: 'Component Architecture & Type Safety',
    description: 'Clean reactive UI with strict TypeScript types for reliable customer and staff interactions.',
    verifiedInRepo: true
  },
  {
    name: 'Vite',
    category: 'Frontend',
    role: 'Lightning-fast Build Tooling',
    description: 'Optimized bundler providing instant HMR and tiny single-bundle assets for fast mobile loading.',
    verifiedInRepo: true
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    role: 'Design System & Utility Engine',
    description: 'Custom soft sage and champagne color tokens, fluid typography, and responsive layouts.',
    verifiedInRepo: true
  },
  {
    name: 'Node.js & Express',
    category: 'Backend',
    role: 'RESTful API & Verification Routing',
    description: 'High-throughput visit authorization endpoints and business configuration handlers.',
    verifiedInRepo: true
  },
  {
    name: 'Supabase / PostgreSQL',
    category: 'Database',
    role: 'Multi-Tenant Relational Storage',
    description: 'Relational data model with tenant_id foreign keys, visit logs, and staff credentials.',
    verifiedInRepo: true
  },
  {
    name: 'Vercel Deployment',
    category: 'Deployment',
    role: 'Global Edge Network Hosting',
    description: 'Automatic Git-based builds, fast edge caching, and zero-downtime deployment pipelines.',
    verifiedInRepo: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is the QR Digital Loyalty System?',
    answer: 'QR Digital Loyalty System is a modern web application developed by Zenith Forge Hub (ZFH) that replaces paper stamp cards with a seamless QR-based digital loyalty experience. Customers scan an in-store QR code to track their visits and earn rewards.'
  },
  {
    id: 'faq-2',
    category: 'How it Works',
    question: 'Does the customer need to download an app from the App Store or Google Play?',
    answer: 'No app download is required. The customer simply points their phone camera at the counter QR code. The loyalty card opens immediately in their default mobile browser (Safari, Chrome, etc.), eliminating app store friction.'
  },
  {
    id: 'faq-3',
    category: 'How it Works',
    question: 'How are customer visits verified so people cannot fake stamps?',
    answer: 'Visits require authorized counter staff verification. When a customer presents their loyalty screen at checkout, staff enters a quick 4-digit venue PIN on the terminal to validate the purchase and award the stamp.'
  },
  {
    id: 'faq-4',
    category: 'Security & Business',
    question: 'How are different business records kept separate?',
    answer: 'The system uses a multi-tenant relational architecture where all customer visits, staff credentials, and reward rules are strictly scoped by a unique tenant identifier (tenant_id). Business A cannot access or view data belonging to Business B.'
  },
  {
    id: 'faq-5',
    category: 'Security & Business',
    question: 'Can businesses configure their own stamp goals and reward types?',
    answer: 'Yes. Business owners can configure their required visit count (e.g. 6, 8, or 10 visits), specify the reward title and description, and update their counter staff verification PIN at any time.'
  },
  {
    id: 'faq-6',
    category: 'Trial & Demo',
    question: 'Is a free trial available for interested merchants?',
    answer: 'Yes, the ZFH team has planned an introductory 15-day free trial for qualifying local businesses. Availability is subject to confirmation and onboarding arrangements. You can inquire directly using our contact form.'
  },
  {
    id: 'faq-7',
    category: 'Trial & Demo',
    question: 'How can I request a live demonstration?',
    answer: 'You can request a demonstration using the form on this page or by emailing zenithforgehub@gmail.com. The ZFH team will arrange a guided walkthrough tailored to your business.'
  },
  {
    id: 'faq-8',
    category: 'General',
    question: 'Who developed this product?',
    answer: 'QR Digital Loyalty System is engineered by Zenith Forge Hub (ZFH), a software development team focused on practical, high-utility digital products for local businesses.'
  }
];

export const PROJECT_STAGES = [
  {
    number: '01',
    title: 'Understand',
    tagline: 'Identifying everyday loyalty friction',
    points: [
      'Discovered that 70%+ of paper stamp cards get lost or forgotten at home.',
      'Recognized that native app downloads cause excessive drop-off at checkout.',
      'Defined the need for a frictionless browser-first QR loyalty experience.'
    ]
  },
  {
    number: '02',
    title: 'Design',
    tagline: 'Crafting customer, staff & owner workflows',
    points: [
      'Prototyped a clean mobile loyalty card with tangible visual stamp milestones.',
      'Designed a rapid 4-second staff PIN verification to prevent counter bottlenecks.',
      'Established the warm sage, forest green, and champagne design system.'
    ]
  },
  {
    number: '03',
    title: 'Build',
    tagline: 'Multi-tenant architecture & core logic',
    points: [
      'Engineered React + TypeScript frontend with responsive, touch-friendly UI.',
      'Implemented multi-tenant data scoping to isolate merchant records securely.',
      'Constructed visit verification, stamp progression, and reward unlock engines.'
    ]
  },
  {
    number: '04',
    title: 'Refine',
    tagline: 'Usability testing & merchant preparation',
    points: [
      'Simulated counter queue scenarios to optimize PIN entry speed.',
      'Packaged printable QR stand templates for merchant pilot testing.',
      'Prepared documentation and introductory 15-day onboarding workflows.'
    ]
  }
];
