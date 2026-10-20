import { Treatment, Doctor, BeforeAfterItem, Testimonial, FAQItem } from '../types';

export const CLINIC_INFO = {
  name: "AURA Dental Studio",
  address: "740 Fifth Avenue, Suite 2800, New York, NY 10019",
  phone: "+1 (800) 555-AURA",
  emergencyPhone: "+1 (800) 999-DENT",
  whatsappNumber: "+18005552872",
  email: "vip@auradental.studio",
  googleRating: 4.96,
  totalReviews: 1284,
  hours: {
    weekdays: "8:00 AM - 8:00 PM",
    saturday: "9:00 AM - 5:00 PM",
    sunday: "Emergency Only"
  }
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'dental-implants',
    title: '3D Precision Dental Implants',
    subtitle: 'Permanent, Natural Tooth Replacement with Guided Surgical Robotics',
    category: 'Restorative & Surgical',
    tagline: 'Lifetime Structural Integrity & Aesthetic Harmony',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000',
    description: 'Using high-resolution CBCT 3D scanning and computer-guided placement, our titanium and zirconium implants fuse seamlessly with bone tissue, providing a permanent solution that looks, feels, and functions identically to natural teeth.',
    duration: '45 - 60 minutes per implant',
    recoveryTime: '1 - 3 days mild swelling',
    priceRange: '$1,800 - $3,500 / tooth',
    monthlyEstimate: '$149 / mo (0% APR)',
    successRate: '99.4%',
    features: [
      'CBCT 3D Surgical Guide Planning',
      'Grade-5 Biocompatible Titanium & Zirconia',
      'Immediate Loading Crown Option',
      'Lifetime Structural Warranty',
      'Sedation & Micro-invasive Flapless Protocol'
    ],
    procedureSteps: [
      { step: 1, title: 'Ultra-HD 3D Scan & Digital Twin', description: 'Sub-millimeter mapping of jawbone density and nerve topography.' },
      { step: 2, title: 'Virtual Surgical Simulation', description: 'Doctor plans optimal angle, depth, and aesthetics in 3D prior to procedure.' },
      { step: 3, title: 'Micro-Invasive Placement', description: 'Flapless laser guidance inserts implant post with zero sutures needed.' },
      { step: 4, title: 'Handcrafted Ceramic Crown', description: 'Custom porcelain crown shade-matched to surrounding teeth.' }
    ],
    faqs: [
      { question: 'Is the dental implant procedure painful?', answer: 'Not at all. With target local anesthesia or IV luxury sedation, you will feel zero discomfort. Post-op recovery involves minimal soreness managed by mild medication.' },
      { question: 'How long do dental implants last?', answer: 'When crafted with our Grade-5 biocompatible titanium and properly maintained, implants last a lifetime with a 99%+ survival rate.' }
    ]
  },
  {
    id: 'smile-makeover',
    title: 'Hollywood Smile Makeover',
    subtitle: 'Ultra-Thin Porcelain Veneers & Digital Smile Design',
    category: 'Cosmetic Dentistry',
    tagline: 'Custom Facial Symmetry & Natural Luminescence',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000',
    description: 'Transform your entire facial aesthetic with custom handcrafted ultra-thin E.max porcelain veneers. Using AI Digital Smile Design, preview your ideal smile in real-time before any treatment begins.',
    duration: '2 appointments across 7 days',
    recoveryTime: 'Immediate',
    priceRange: '$900 - $1,800 / veneer',
    monthlyEstimate: '$199 / mo',
    successRate: '99.8%',
    features: [
      'AI Digital Smile Simulation',
      'Handcrafted Swiss E.max Porcelain',
      'Minimal to No Tooth Reduction',
      'Stain-Proof Micro-Polished Finish',
      'Customized Translucency & Texture'
    ],
    procedureSteps: [
      { step: 1, title: 'Digital Smile Design Consultation', description: 'Facial analysis to calculate ideal tooth proportion, golden ratio, and lip line.' },
      { step: 2, title: 'Interactive 3D Preview', description: 'Try on your temporary smile trial mockup to refine shape and color.' },
      { step: 3, title: 'Micro-Preparation & Bonding', description: 'Ultra-thin veneer shells are bonded with light-cured resin.' }
    ],
    faqs: [
      { question: 'Will veneers look fake or unnaturally white?', answer: 'Never. Our master ceramists handcraft each veneer with multi-layered translucency to mimic real enamel luminescence.' }
    ]
  },
  {
    id: 'teeth-whitening',
    title: 'Laser Teeth Whitening',
    subtitle: 'Up to 8 Shades Brighter in a Single 45-Minute Spa Session',
    category: 'Cosmetic Dentistry',
    tagline: 'Zero Sensitivity, Instant Radiance',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000',
    description: 'Our proprietary cold-light laser activation formula breaks down deep intrinsic enamel stains without overheating nerve tissue or causing sensitivity.',
    duration: '45 minutes',
    recoveryTime: 'Instant',
    priceRange: '$450 - $650',
    monthlyEstimate: '$39 / mo',
    successRate: '100%',
    features: [
      'Cold Laser LED Technology',
      'Enamel Re-Mineralization Gel Included',
      'Zero Post-Treatment Sensitivity',
      'Long-lasting 2+ Year Brilliance',
      'Complementary Touch-up Pen'
    ],
    procedureSteps: [
      { step: 1, title: 'Enamel Hygiene Cleansing', description: 'Removal of superficial plaque to maximize light absorption.' },
      { step: 2, title: 'Gingival Barrier Protection', description: 'Medical liquid dam protects sensitive gums.' },
      { step: 3, title: 'Triple Laser Cycle', description: 'Three 15-minute cycles of hydrogen peroxide light activation.' }
    ],
    faqs: [
      { question: 'Will my teeth feel sensitive after laser whitening?', answer: 'Our formula incorporates potassium nitrate and hydroxyapatite, which seals enamel tubules to ensure a comfortable experience.' }
    ]
  },
  {
    id: 'invisalign',
    title: 'Invisalign & Clear Aligners',
    subtitle: 'Invisible Orthodontic Alignment powered by 3D Iterative Tracking',
    category: 'Orthodontics',
    tagline: 'Straighten Teeth 2x Faster in Complete Comfort',
    heroImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000',
    description: 'Custom 3D printed SmartTrack aligners gently shift teeth into optimal occlusion without metal wires or food restrictions. Monitor progress via our AURA Smartphone App.',
    duration: '6 - 12 months average',
    recoveryTime: 'Zero downtime',
    priceRange: '$3,200 - $5,500',
    monthlyEstimate: '$129 / mo (0% APR)',
    successRate: '98.9%',
    features: [
      'iTero Element 5D Optical Scanning',
      'Virtually Invisible Medical-Grade Polymer',
      'Removable for Dining & Hygiene',
      'Remote AI Tele-Orthodontic Checkups',
      'Includes Post-Treatment Vivera Retainers'
    ],
    procedureSteps: [
      { step: 1, title: '3D Optical Scan', description: 'No messy impressions. 6,000 photos per second generate a 3D digital model.' },
      { step: 2, title: 'ClinCheck Simulation Video', description: 'Watch step-by-step movement of your teeth before aligners are manufactured.' },
      { step: 3, title: 'Aligner Delivery & Monitoring', description: 'Receive your customized aligners with weekly tray changes.' }
    ],
    faqs: [
      { question: 'How many hours a day must I wear aligners?', answer: 'Aligners should be worn 20 to 22 hours per day, removing them only to eat, drink, brush, and floss.' }
    ]
  },
  {
    id: 'root-canal',
    title: 'Painless Laser Root Canal',
    subtitle: 'Microscopic Endodontic Therapy with Zero Discomfort',
    category: 'Endodontics',
    tagline: 'Preserve Your Natural Tooth with 3D Laser Sterilization',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000',
    description: 'Using high-power Zeiss surgical microscopes and Er:YAG laser cleaning, we remove infected pulp with pinpoint precision, saving your natural tooth in a single relaxing session.',
    duration: '60 - 90 minutes',
    recoveryTime: '24 hours',
    priceRange: '$950 - $1,500',
    monthlyEstimate: '$79 / mo',
    successRate: '98.5%',
    features: [
      'Zeiss 3D Operating Microscope (30x Zoom)',
      'Er:YAG Laser Hydro-Photonic Cleaning',
      'Bioceramic Root Sealing Technology',
      'Painless Anesthesia Wand Delivery',
      'Same-Day CAD/CAM Crown Placement'
    ],
    procedureSteps: [
      { step: 1, title: '3D Micro-CT Diagnostic', description: 'Detect anatomical root complexity and micro-fractures.' },
      { step: 2, title: 'Laser Sterilization', description: 'Photon-induced photoacoustic streaming kills 99.99% of bacteria.' },
      { step: 3, title: 'Bioceramic Sealing & Crown', description: 'Hermetic seal protects against re-infection.' }
    ],
    faqs: [
      { question: 'Is a root canal really painless at AURA?', answer: 'Yes. Thanks to computer-controlled anesthesia and laser therapy, patients report feeling no more than a standard filling.' }
    ]
  },
  {
    id: 'braces',
    title: 'Ceramic & Lingual Invisible Braces',
    subtitle: 'Advanced Orthodontic Precision for Complex Alignments',
    category: 'Orthodontics',
    tagline: 'Low-Profile Aesthetics for Flawless Structural Results',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000',
    description: 'For patients requiring structural movement unsuitable for clear aligners, our sapphire ceramic brackets and behind-the-teeth lingual braces deliver rapid correction without compromising your smile profile.',
    duration: '12 - 18 months',
    recoveryTime: '1 - 2 days adjustment',
    priceRange: '$3,800 - $6,200',
    monthlyEstimate: '$145 / mo',
    successRate: '99.5%',
    features: [
      'Translucent Sapphire Crystal Brackets',
      'Custom Incognito Lingual Placement (Behind Teeth)',
      'Memory Shape-Titanium Archwires',
      'Reduced Treatment Timeline by up to 30%'
    ],
    procedureSteps: [
      { step: 1, title: '3D Orthodontic Mapping', description: 'Digital biomechanical stress analysis.' },
      { step: 2, title: 'Precision Bonding', description: 'Custom bracket positioning via 3D printed placement tray.' },
      { step: 3, title: 'Periodic Micro-Adjustments', description: 'Ultra-gentle shape memory wire updates.' }
    ],
    faqs: [
      { question: 'Are ceramic braces stain-resistant?', answer: 'Yes. Our ceramic brackets are manufactured from pure monocrystalline sapphire which does not discolour.' }
    ]
  },
  {
    id: 'pediatric',
    title: "Children's Luxury Dental Suite",
    subtitle: 'Gentle, Fear-Free Pediatric Care in an Interactive Space',
    category: 'Pediatric Care',
    tagline: 'Fostering a Lifetime of Healthy Smiles & Confidence',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000',
    description: 'Designed specifically for young smiles, our pediatric wing combines VR entertainment headsets, gentle laser cavity prevention, and painless technique to eliminate white-coat anxiety.',
    duration: '30 - 45 minutes',
    recoveryTime: 'Immediate',
    priceRange: '$180 - $350',
    monthlyEstimate: '$25 / mo',
    successRate: '100%',
    features: [
      'VR Headsets with Kid-Friendly Games & Movies',
      'No-Drill Waterlase Cavity Treatment',
      'Fluoride Varnish & Sealant Protection',
      'Zero Pain Anesthesia Wand',
      'Child Psychology Trained Specialists'
    ],
    procedureSteps: [
      { step: 1, title: 'Fun Interactive Orientation', description: 'Child picks their favorite VR world before sitting in the chair.' },
      { step: 2, title: 'Micro-Cleansing & Assessment', description: 'Gentle air-polishing cleans plaque without vibrations.' },
      { step: 3, title: 'Protective Enamel Shield', description: 'Painless sealant application protects back molars.' }
    ],
    faqs: [
      { question: 'At what age should a child first visit the dentist?', answer: 'We recommend scheduling the first visit when the first tooth appears, or around their first birthday.' }
    ]
  },
  {
    id: 'emergency',
    title: '24/7 VIP Emergency Dental Care',
    subtitle: 'Immediate Pain Relief & Trauma Reconstruction',
    category: 'Emergency Services',
    tagline: 'On-Call Specialists Available Within 30 Minutes',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000',
    description: 'Tooth avulsion, acute swelling, broken crowns, or excruciating pain are handled immediately by our dedicated emergency surgical team with zero waiting time.',
    duration: 'Immediate Priority Entry',
    recoveryTime: 'Varies by procedure',
    priceRange: 'Emergency Evaluation $195',
    monthlyEstimate: 'Insurance & Financing Available',
    successRate: '99.9%',
    features: [
      'Guaranteed Same-Hour Appointment',
      'Instant Sedation Pain Elimination',
      'Same-Day Tooth Re-Implantation & Stabilization',
      'On-Site 3D Ceramic Milling Lab',
      'Direct Insurance Coordination'
    ],
    procedureSteps: [
      { step: 1, title: 'Instant Priority Admission', description: 'Skip all waiting areas directly to emergency suite.' },
      { step: 2, title: '3D Imaging & Immediate Anesthesia', description: 'Targeted nerve block stops pain in under 60 seconds.' },
      { step: 3, title: 'Definitive Surgical Repair', description: 'Reconstructive repair or stabilization performed on-site.' }
    ],
    faqs: [
      { question: 'What should I do if a tooth gets knocked out?', answer: 'Handle it only by the crown (not the root), rinse gently in milk or saline, and come directly to AURA within 60 minutes for highest re-implantation success.' }
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-alexander-vance',
    name: 'Dr. Alexander Vance, DDS',
    title: 'Founder & Chief Aesthetic Surgeon',
    role: 'Implantology & Digital Smile Design',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    education: [
      'Harvard School of Dental Medicine (DDS)',
      'ETH Zurich Institute of Bio-Engineering (Fellowship)',
      'International Congress of Oral Implantologists (Diplomate)'
    ],
    experienceYears: 18,
    surgeriesPerformed: '12,500+',
    specialties: ['Guided 3D Implants', 'Full Mouth Rehabilitation', 'Digital Smile Design'],
    bio: 'Pioneer in computer-guided robotic implant placement and ultra-thin porcelain veneers. Dr. Vance has trained over 500 surgeons globally and serves as aesthetic consultant for international celebrities.',
    quote: 'Artistry meets biological precision. We do not just build smiles; we restore confidence at a cellular level.',
    availability: 'Available Tue - Sat'
  },
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova, DMD, PhD',
    title: 'Director of Orthodontics & Facial Aesthetics',
    role: 'Clear Aligner Specialist & Craniofacial Expert',
    avatar: 'https://images.unsplash.com/photo-1594824813572-c51842838386?auto=format&fit=crop&q=80&w=600',
    education: [
      'King’s College London Dental Institute (DMD)',
      'University of Zurich (PhD Orthodontics)',
      'Top 1% Global Invisalign Provider'
    ],
    experienceYears: 15,
    surgeriesPerformed: '8,200+',
    specialties: ['Invisalign Diamond Elite', 'Lingual Braces', 'Facial Symmetry Alignment'],
    bio: 'Renowned for her holistic approach connecting dental alignment with facial skeletal proportion. Dr. Rostova holds 4 patents in 3D orthodontic tooth movement modeling.',
    quote: 'True beauty lies in structural balance. Every millisecond of movement is calculated for effortless elegance.',
    availability: 'Available Mon - Thu'
  },
  {
    id: 'dr-marcus-chen',
    name: 'Dr. Marcus Chen, DDS, MS',
    title: 'Master Endodontist & Microsurgeon',
    role: 'Microscopic Laser Root Canal Therapy',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
    education: [
      'Columbia University College of Dental Medicine',
      'Penn Dental Medicine Endodontic Specialty',
      'American Board of Endodontics Certified'
    ],
    experienceYears: 14,
    surgeriesPerformed: '9,800+',
    specialties: ['Painless Laser Endodontics', 'Apicoectomy', 'Micro-Reconstructive Surgery'],
    bio: 'Specializes in saving severely compromised teeth using 30x magnification Zeiss surgical microscopes. Famous for delivering completely painless root canals with 99%+ long-term retention.',
    quote: 'Nature is always superior. My sole objective is preserving your original tooth structure with laser perfection.',
    availability: 'Available Mon - Fri'
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    treatmentId: 'smile-makeover',
    treatmentName: 'Hollywood Smile Makeover (10 E.max Veneers)',
    patientAge: 32,
    doctorName: 'Dr. Alexander Vance',
    duration: '2 Sessions (7 Days)',
    beforeImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    description: 'Corrected severe enamel discoloration, worn edges, and midline asymmetry using ultra-thin translucent porcelain veneers.'
  },
  {
    id: 'ba-2',
    treatmentId: 'dental-implants',
    treatmentName: 'All-on-4 Full Arch Zirconia Implant Restoration',
    patientAge: 54,
    doctorName: 'Dr. Alexander Vance',
    duration: 'Flapless Guided Placement',
    beforeImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    description: 'Replaced failing bridge work with 4 titanium implants and an immediate fixed monolithic zirconia arch.'
  },
  {
    id: 'ba-3',
    treatmentId: 'invisalign',
    treatmentName: 'Invisalign Severe Crowding & Deep Bite Correction',
    patientAge: 28,
    doctorName: 'Dr. Elena Rostova',
    duration: '9 Months (24 Aligners)',
    beforeImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    description: 'Achieved optimal arch widening and bite alignment without extractions or traditional metal brackets.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sophia Laurent',
    location: 'Manhattan, NY',
    treatment: 'Hollywood Smile Makeover',
    rating: 5,
    date: '2 weeks ago',
    comment: 'AURA isn’t just a dental clinic—it’s a 7-star luxury resort for your smile. Dr. Vance created veneers so natural that people compliment my eyes and face, not knowing it’s my smile driving the transformation!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    verifiedBadge: true
  },
  {
    id: 't-2',
    name: 'Marcus Sterling',
    location: 'Tribeca, NY',
    treatment: '3D Precision Implants',
    rating: 5,
    date: '1 month ago',
    comment: 'I was terrified of implant surgery after a bad past experience elsewhere. At AURA, I wore a 4K VR headset listening to ocean waves during the procedure and literally fell asleep. I woke up with my new tooth in place. Mind-blowing precision!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    verifiedBadge: true
  },
  {
    id: 't-3',
    name: 'Victoria Zhang',
    location: 'Greenwich, CT',
    treatment: 'Invisalign & Laser Whitening',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The 3D preview showed me exact progress month by month. The clinic’s valet service, fresh matcha lounge, and zero waiting time make it worth every penny.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    verifiedBadge: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How does AURA differ from standard dental practices?',
    answer: 'AURA integrates 3D robotic guided dentistry, zero-pain cold lasers, micro-invasive techniques, and 5-star spa amenities including private treatment suites, VR entertainment, and custom sedation options.'
  },
  {
    id: 'faq-2',
    category: 'Treatments',
    question: 'Can I preview my new smile before any irreversible procedure begins?',
    answer: 'Yes! Using our 3D AI Digital Smile Design technology, we generate a high-definition 3D model and physical 3D-printed trial mockup so you can test your new smile in your mouth before any enamel bonding.'
  },
  {
    id: 'faq-3',
    category: 'Booking & Payment',
    question: 'Do you offer zero-interest financing or flexible payment plans?',
    answer: 'Absolutely. We offer customized 0% APR financing options through CareCredit, Compassionate Finance, and internal VIP concierge arrangements for up to 24 months.'
  },
  {
    id: 'faq-4',
    category: 'Technology & Safety',
    question: 'How do you ensure zero pain during surgical procedures?',
    answer: 'We utilize computerized anesthesia wands that deliver numbing agents at the exact pain-receptor absorption threshold, paired with laser soft-tissue scalpels that instantly seal nerve endings as they work.'
  }
];
