export type TreatmentId = 
  | 'dental-implants'
  | 'root-canal'
  | 'teeth-whitening'
  | 'smile-makeover'
  | 'invisalign'
  | 'braces'
  | 'pediatric'
  | 'emergency';

export interface Treatment {
  id: TreatmentId;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  heroImage: string;
  description: string;
  duration: string;
  recoveryTime: string;
  priceRange: string;
  monthlyEstimate: string;
  successRate: string;
  features: string[];
  procedureSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: string;
  avatar: string;
  education: string[];
  experienceYears: number;
  surgeriesPerformed: string;
  specialties: string[];
  bio: string;
  quote: string;
  availability: string;
}

export interface BeforeAfterItem {
  id: string;
  treatmentId: TreatmentId;
  treatmentName: string;
  patientAge: number;
  doctorName: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  videoUrl?: string;
  verifiedBadge: boolean;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Treatments' | 'Booking & Payment' | 'Technology & Safety';
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  treatmentId: TreatmentId | '';
  preferredDoctorId: string;
  date: string;
  timeSlot: string;
  notes: string;
  isEmergency: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  actionButtons?: {
    label: string;
    action: string;
    payload?: any;
  }[];
}
