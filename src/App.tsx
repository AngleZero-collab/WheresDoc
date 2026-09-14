import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CaseStudy } from './components/CaseStudy';
import { PatientDropoff } from './components/PatientDropoff';
import { MarketData } from './components/MarketData';
import { ComparisonTable } from './components/ComparisonTable';
import { Deliverables } from './components/Deliverables';
import { Workflow } from './components/Workflow';
import { BusinessModel } from './components/BusinessModel';
import { MonthlyReport } from './components/MonthlyReport';
import { PricingAndOrder } from './components/PricingAndOrder';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f8f6] font-sans text-[#102420] antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <CaseStudy />
        <PatientDropoff />
        <MarketData />
        <ComparisonTable />
        <Deliverables />
        <Workflow />
        <BusinessModel />
        <MonthlyReport />
        <PricingAndOrder />
        <FaqSection />
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
