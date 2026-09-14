import React, { useState } from 'react';
import { Check, Send, CheckCircle2, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';
import { ConsultationFormState, PricingPlan } from '../types';

export const PricingAndOrder: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormState>({
    doctorName: '',
    specialty: '',
    institutionCount: 3,
    phone: '',
    email: '',
    preferredContact: 'line',
    plan: 'professional',
    notes: '',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePlanSelect = (planId: PricingPlan['id']) => {
    setFormData((prev) => ({ ...prev, plan: planId }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.doctorName.trim()) {
      setErrorMessage('請填寫醫師姓名。');
      return;
    }
    if (!formData.specialty.trim()) {
      setErrorMessage('請填寫專科／主要服務。');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('請填寫手機或 LINE ID。');
      return;
    }
    if (!formData.consent) {
      setErrorMessage('請勾選同意條款以利進行聯絡與盤點。');
      return;
    }

    setStatus('sending');

    try {
      // Persist to localStorage
      const existing = JSON.parse(localStorage.getItem('wheresdoc_inquiries') || '[]');
      const newInquiry = {
        ...formData,
        id: 'req_' + Date.now(),
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('wheresdoc_inquiries', JSON.stringify([...existing, newInquiry]));

      // Simulated realistic network submission
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus('success');
      setSuccessMessage(
        `感謝 ${formData.doctorName} 醫師！我們已收到您的【${
          formData.plan === 'starter'
            ? '啟動版'
            : formData.plan === 'professional'
            ? '專業版'
            : '團隊版'
        }】建置諮詢需求。顧問將在 1–2 個工作天內透過 ${
          formData.preferredContact === 'line'
            ? 'LINE'
            : formData.preferredContact === 'phone'
            ? '電話'
            : 'Email'
        } 與您聯繫。`
      );
    } catch {
      setErrorMessage('送出發生錯誤，請稍後再試。');
      setStatus('idle');
    }
  };

  const handleReset = () => {
    setFormData({
      doctorName: '',
      specialty: '',
      institutionCount: 3,
      phone: '',
      email: '',
      preferredContact: 'line',
      plan: 'professional',
      notes: '',
      consent: false,
    });
    setStatus('idle');
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <section id="pricing" className="border-y border-[#174e45]/10 bg-white/70 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#174e45]">
            方案與收費
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] text-[#102420] sm:text-5xl">
            先選適合你的維護強度
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5a756f]">
            建置費包含策略、資料整理、設計與上線；月費包含主機、安全更新、門診維護與成效報告。所有價格均為未稅。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Left: Pricing Radio Plan Cards */}
          <div className="grid gap-4">
            {PRICING_PLANS.map((plan) => {
              const isSelected = formData.plan === plan.id;
              return (
                <label
                  key={plan.id}
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`relative block cursor-pointer rounded-[28px] border bg-[#f6f8f6] p-6 transition sm:p-7 ${
                    isSelected
                      ? 'border-[#174e45] shadow-[0_16px_45px_-30px_rgba(20,65,61,0.55)] ring-2 ring-[#174e45]/15'
                      : 'border-[#174e45]/10 hover:border-[#174e45]/30'
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-[#f2ba63] px-3 py-1 text-xs font-black text-[#342203]">
                      最多醫師選擇
                    </span>
                  )}

                  <div className="flex items-start gap-4">
                    <input
                      type="radio"
                      name="pricing_plan"
                      value={plan.id}
                      checked={isSelected}
                      onChange={() => handlePlanSelect(plan.id)}
                      className="mt-1.5 size-4 accent-[#174e45]"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#174e45]">{plan.eyebrow}</p>
                      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <h3 className="text-2xl font-black text-[#102420]">{plan.name}</h3>
                        <p>
                          <span className="text-2xl font-black tracking-tight text-[#102420]">
                            {plan.setup}
                          </span>
                          <span className="ml-2 text-xs text-[#5a756f]">一次性</span>
                        </p>
                      </div>

                      <p className="mt-1 text-sm font-bold text-[#174e45]">{plan.monthly}</p>
                      <p className="mt-3 text-sm leading-6 text-[#5a756f]">{plan.description}</p>

                      <div className="mt-5 grid gap-2 sm:grid-cols-2">
                        {plan.features.map((feature) => (
                          <span key={feature} className="flex gap-2 text-sm text-[#102420]">
                            <Check className="mt-0.5 size-4 shrink-0 text-[#174e45]" />
                            <span>{feature}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>

          {/* Right: Order Form Card */}
          <div
            id="order"
            className="scroll-mt-6 rounded-[30px] bg-[#174e45] p-6 text-[#f8fbf9] shadow-[0_28px_80px_-35px_rgba(20,65,61,0.5)] sm:p-8 lg:sticky lg:top-24"
          >
            {status === 'success' ? (
              <div className="py-10 text-center" role="status">
                <CheckCircle2 className="mx-auto size-14 text-[#d6eae2]" />
                <h3 className="mt-5 text-2xl font-black text-white">申請已送出</h3>
                <p className="mt-4 text-sm leading-7 text-[#f8fbf9]/80">{successMessage}</p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-7 h-11 rounded-full bg-[#d6eae2] px-6 text-sm font-bold text-[#143831] transition hover:bg-white"
                >
                  再送一筆申請
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-6 text-[#d6eae2]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6eae2]">
                      建置申請
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-white">先讓我們了解你</h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#f8fbf9]/75">
                  送出不扣款。我們會先做公開資訊盤點，再提供正式報價與合約。
                </p>

                <div className="mt-6 grid gap-4">
                  <label className="grid gap-1.5 text-sm font-bold text-white">
                    <span>醫師姓名 *</span>
                    <input
                      required
                      type="text"
                      value={formData.doctorName}
                      onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                      placeholder="例如：林予安"
                      className="h-11 rounded-xl border border-white/20 bg-white px-3.5 text-sm text-[#102420] outline-hidden placeholder:text-[#5a756f] focus:border-[#d6eae2] focus:ring-2 focus:ring-[#d6eae2]/30"
                    />
                  </label>

                  <label className="grid gap-1.5 text-sm font-bold text-white">
                    <span>專科／主要服務 *</span>
                    <input
                      required
                      type="text"
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      placeholder="例如：骨科、運動醫學"
                      className="h-11 rounded-xl border border-white/20 bg-white px-3.5 text-sm text-[#102420] outline-hidden placeholder:text-[#5a756f] focus:border-[#d6eae2] focus:ring-2 focus:ring-[#d6eae2]/30"
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1.5 text-sm font-bold text-white">
                      <span>看診院所數 *</span>
                      <input
                        required
                        type="number"
                        min={1}
                        max={30}
                        value={formData.institutionCount}
                        onChange={(e) =>
                          setFormData({ ...formData, institutionCount: Number(e.target.value) })
                        }
                        className="h-11 rounded-xl border border-white/20 bg-white px-3.5 text-sm text-[#102420] outline-hidden focus:border-[#d6eae2]"
                      />
                    </label>

                    <label className="grid gap-1.5 text-sm font-bold text-white">
                      <span>希望聯絡方式</span>
                      <select
                        value={formData.preferredContact}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredContact: e.target.value as ConsultationFormState['preferredContact'],
                          })
                        }
                        className="h-11 rounded-xl border border-white/20 bg-white px-3 text-sm text-[#102420] outline-hidden focus:border-[#d6eae2]"
                      >
                        <option value="line">LINE</option>
                        <option value="phone">電話</option>
                        <option value="email">Email</option>
                      </select>
                    </label>
                  </div>

                  <label className="grid gap-1.5 text-sm font-bold text-white">
                    <span>手機或 LINE ID *</span>
                    <input
                      required
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0900-000-000／LINE ID"
                      className="h-11 rounded-xl border border-white/20 bg-white px-3.5 text-sm text-[#102420] outline-hidden placeholder:text-[#5a756f] focus:border-[#d6eae2] focus:ring-2 focus:ring-[#d6eae2]/30"
                    />
                  </label>

                  <label className="grid gap-1.5 text-sm font-bold text-white">
                    <span>Email（選填）</span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="doctor@example.com"
                      className="h-11 rounded-xl border border-white/20 bg-white px-3.5 text-sm text-[#102420] outline-hidden placeholder:text-[#5a756f] focus:border-[#d6eae2]"
                    />
                  </label>

                  <label className="grid gap-1.5 text-sm font-bold text-white">
                    <span>想先解決的問題（選填）</span>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="例如：Google 上常出現舊門診時間…"
                      className="rounded-xl border border-white/20 bg-white p-3 text-sm text-[#102420] outline-hidden placeholder:text-[#5a756f] focus:border-[#d6eae2]"
                    />
                  </label>

                  <label className="flex cursor-pointer items-start gap-3 text-xs font-medium leading-5 text-[#f8fbf9]/80">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 size-4 rounded-sm border-white/35 accent-[#f2ba63]"
                    />
                    <span>
                      我同意 WheresDoc 使用上述資料聯絡我、進行需求與公開資訊盤點；資料不作醫療用途，也不會向第三方販售。*
                    </span>
                  </label>
                </div>

                {errorMessage && (
                  <p className="mt-4 rounded-xl bg-red-100 px-4 py-3 text-sm font-bold text-red-900" role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-6 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#d6eae2] text-base font-black text-[#143831] shadow-md transition hover:bg-white active:translate-y-px disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      <span>送出中...</span>
                    </>
                  ) : (
                    <>
                      <span>送出建置申請</span>
                      <Send className="size-4" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-[11px] leading-5 text-[#f8fbf9]/60">
                  通常於 1–2 個工作天內聯絡。送出申請不代表交易成立。
                </p>
              </>
            )}
          </div>
        </form>

        {/* Early verification program banner */}
        <div className="mt-8 rounded-2xl border border-amber-300/60 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950">
          <strong>首批醫師驗證方案：</strong>
          30 天 NT$9,800、不綁約，含最多 5 個院所、兩次代更新與一份點擊報告；若 30 天內升級正式方案，試點費可全額折抵建置費。名額 5 位。
        </div>
      </div>
    </section>
  );
};
