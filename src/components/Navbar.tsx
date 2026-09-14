import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#174e45]/10 bg-[#f6f8f6]/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 transition hover:opacity-90" aria-label="WheresDoc 首頁">
          <span className="grid size-10 place-items-center rounded-[14px] bg-[#174e45] text-lg font-black text-[#f8fbf9] shadow-sm">
            W
          </span>
          <span>
            <span className="block text-base font-black tracking-tight text-[#102420]">WheresDoc</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5a756f]">
              One doctor, one verified link
            </span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-7 text-sm font-bold text-[#5a756f] md:flex">
          <a href="#case" className="transition hover:text-[#174e45]">真實案例</a>
          <a href="#why" className="transition hover:text-[#174e45]">市場數據</a>
          <a href="#business" className="transition hover:text-[#174e45]">商業模式</a>
          <a href="#pricing" className="transition hover:text-[#174e45]">方案價格</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="#order"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#174e45] px-5 text-sm font-bold text-[#f8fbf9] shadow-sm transition hover:bg-[#123e37] active:translate-y-px"
          >
            立即申請
          </a>

          {/* Mobile menu hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid size-10 place-items-center rounded-xl border border-[#174e45]/15 text-[#174e45] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#174e45]/10 bg-white px-6 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4 text-base font-bold text-[#102420]">
            <a
              href="#case"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#174e45]"
            >
              真實案例
            </a>
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#174e45]"
            >
              市場數據
            </a>
            <a
              href="#business"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#174e45]"
            >
              商業模式
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#174e45]"
            >
              方案價格
            </a>
            <hr className="border-[#174e45]/10" />
            <a
              href="#order"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-xl bg-[#174e45] p-3 text-sm font-bold text-white shadow-sm"
            >
              立即申請建置建議
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
