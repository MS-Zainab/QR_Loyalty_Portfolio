export type BusinessType =
  | 'cafe'
  | 'restaurant'
  | 'salon'
  | 'retail'
  | 'other';

export type InquiryType =
  | 'demo'
  | 'trial'
  | 'question'
  | 'collaboration';

export interface ContactFormData {
  fullName: string;
  businessName: string;
  businessType: BusinessType;
  email: string;
  phone?: string;
  inquiryType: InquiryType;
  message: string;
}

export interface LoyaltyBusiness {
  id: string;
  name: string;
  category: string;
  tagline: string;
  accentColor: string;
  rewardGoal: number;
  rewardTitle: string;
  rewardDescription: string;
  customerName: string;
  memberSince: string;
  currentVisits: number;
  stampsIcon: 'coffee' | 'utensils' | 'sparkles' | 'shopping-bag';
}

export interface UserRole {
  id: 'customer' | 'staff' | 'owner' | 'admin';
  title: string;
  shortLabel: string;
  tagline: string;
  summary: string;
  capabilities: {
    title: string;
    description: string;
    isVerified: boolean;
  }[];
  mockScreenTitle: string;
  badge: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Deployment' | 'Security';
  role: string;
  description: string;
  verifiedInRepo: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'How it Works' | 'Security & Business' | 'Trial & Demo';
}
