export interface PricingPlan {
  id: 'starter' | 'professional' | 'team';
  eyebrow: string;
  name: string;
  setup: string;
  monthly: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ConsultationFormState {
  doctorName: string;
  specialty: string;
  institutionCount: number;
  phone: string;
  email: string;
  preferredContact: 'line' | 'phone' | 'email';
  plan: 'starter' | 'professional' | 'team';
  notes: string;
  consent: boolean;
}

export interface ClinicSchedule {
  id: string;
  name: string;
  day: string;
  hours: string;
  district: string;
  isNext?: boolean;
}

export interface CaseClinic {
  id: string;
  number: string;
  name: string;
  district: string;
  linkText: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  title: string;
  description: string;
  sourceText: string;
  sourceUrl: string;
}
