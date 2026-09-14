import React from 'react';
import { WheresDocLogo } from './WheresDocLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#174e45]/10 bg-white py-14 text-sm text-[#5a756f]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-md">
            <WheresDocLogo size={40} withText />
            <p className="mt-4 text-xs leading-6 text-[#5a756f]">
              為跨院所執業醫師打造唯一官方入口。免責聲明：本服務僅提供醫師公開門診資訊整理與官方掛號連結導流，不提供醫療診斷、不代收病歷資料、不經手掛號費，亦非醫療機構。
            </p>
          </div>

          <div className="flex flex-wrap gap-10 text-sm font-bold text-[#102420]">
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#174e45]">
                網站導覽
              </span>
              <a href="#case" className="text-[#5a756f] transition hover:text-[#174e45]">
                真實案例
              </a>
              <a href="#why" className="text-[#5a756f] transition hover:text-[#174e45]">
                市場數據
              </a>
              <a href="#business" className="text-[#5a756f] transition hover:text-[#174e45]">
                商業模式
              </a>
              <a href="#pricing" className="text-[#5a756f] transition hover:text-[#174e45]">
                方案價格
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#174e45]">
                服務與支援
              </span>
              <a href="#service" className="text-[#5a756f] transition hover:text-[#174e45]">
                交付項目
              </a>
              <a href="#faq" className="text-[#5a756f] transition hover:text-[#174e45]">
                常見問題
              </a>
              <a href="#order" className="text-[#5a756f] transition hover:text-[#174e45]">
                立即預約諮詢
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-[#174e45]/10 pt-6 text-xs text-[#5a756f]/80 sm:flex-row">
          <p>© {new Date().getFullYear()} WheresDoc. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">專業醫師個人官方入口建置服務</p>
        </div>
      </div>
    </footer>
  );
};
