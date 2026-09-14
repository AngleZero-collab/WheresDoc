import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
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
import { GithubDeployGuide } from './components/GithubDeployGuide';

export default function App() {
  const [isGithubGuideOpen, setIsGithubGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f8f6] font-sans text-[#102420] antialiased">
      {/* Navigation */}
      <Navbar onOpenGithubGuide={() => setIsGithubGuideOpen(true)} />

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
      <Footer onOpenGithubGuide={() => setIsGithubGuideOpen(true)} />

      {/* Floating GitHub Pages Helper Chip */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          type="button"
          onClick={() => setIsGithubGuideOpen(true)}
          className="group flex cursor-pointer items-center gap-2.5 rounded-full border border-[#174e45]/20 bg-[#174e45] px-4 py-2.5 text-xs font-bold text-white shadow-xl transition hover:bg-[#123e37] hover:scale-105 active:scale-95"
          title="開啟 GitHub Pages 架設教學"
        >
          <Github className="size-4 text-[#d6eae2] transition-transform group-hover:rotate-12" />
          <span>GitHub 架設與網址指引</span>
        </button>
      </div>

      {/* Interactive GitHub Deployment Guide Modal */}
      <GithubDeployGuide
        isOpen={isGithubGuideOpen}
        onClose={() => setIsGithubGuideOpen(false)}
      />
    </div>
  );
}
