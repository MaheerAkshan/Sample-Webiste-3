import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TreatmentsGrid from './components/TreatmentsGrid';
import TreatmentDetailModal from './components/TreatmentDetailModal';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import DoctorsSection from './components/DoctorsSection';
import PricingCalculator from './components/PricingCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import InteractiveMap from './components/InteractiveMap';
import BookingModal from './components/BookingModal';
import AIChatbot from './components/AIChatbot';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';
import { TreatmentId } from './types';
import { CLINIC_INFO } from './data/dentalData';

export default function App() {
  const [selectedTreatmentModalId, setSelectedTreatmentModalId] = useState<TreatmentId | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingTreatmentId, setBookingTreatmentId] = useState<TreatmentId | ''>('');
  const [bookingDoctorId, setBookingDoctorId] = useState<string>('');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const handleOpenBooking = (treatmentId?: TreatmentId, doctorId?: string) => {
    if (treatmentId) setBookingTreatmentId(treatmentId);
    else setBookingTreatmentId('');

    if (doctorId) setBookingDoctorId(doctorId);
    else setBookingDoctorId('');

    setIsBookingOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent("Hello AURA VIP Concierge, I would like to inquire about booking a 3D Dental Consultation.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onSelectTreatmentView={(tId) => setSelectedTreatmentModalId(tId)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenWhatsApp={handleOpenWhatsApp}
          onToggleChat={() => setIsChatOpen(!isChatOpen)}
          onExploreTreatments={() => handleNavigate('treatments')}
        />

        <AboutSection />

        <TreatmentsGrid
          onSelectTreatment={(tId) => setSelectedTreatmentModalId(tId)}
          onBookTreatment={(tId) => handleOpenBooking(tId)}
        />

        <BeforeAfterSlider />

        <DoctorsSection
          onBookDoctor={(docId) => handleOpenBooking(undefined, docId)}
        />

        <PricingCalculator
          onOpenBookingWithTreatment={(tId) => handleOpenBooking(tId)}
        />

        <TestimonialsSection />

        <FAQSection />

        <InteractiveMap />
      </main>

      {/* Footer */}
      <Footer
        onSelectTreatment={(tId) => setSelectedTreatmentModalId(tId)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals & Floating Widgets */}
      <TreatmentDetailModal
        treatmentId={selectedTreatmentModalId}
        onClose={() => setSelectedTreatmentModalId(null)}
        onBookTreatment={(tId) => handleOpenBooking(tId)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTreatmentId={bookingTreatmentId}
        initialDoctorId={bookingDoctorId}
      />

      <AIChatbot
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        onOpenBooking={() => {
          setIsChatOpen(false);
          handleOpenBooking();
        }}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      <WhatsAppWidget
        onDirectClick={handleOpenWhatsApp}
      />

    </div>
  );
}
