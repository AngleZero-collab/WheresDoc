import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Github, Terminal, Globe, CheckCircle2, FileCode2 } from 'lucide-react';

interface GithubDeployGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GithubDeployGuide: React.FC<GithubDeployGuideProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('clee09195');
  const [repoName, setRepoName] = useState('yiyiye-doctor-site');
  const [copiedStep, setCopiedStep] = useState<string | null>(null);
  const [customDomain, setCustomDomain] = useState('');

  if (!isOpen) return null;

  const cleanUser = username.trim() || 'your-username';
  const cleanRepo = repoName.trim() || 'doctor-site';
  const githubPagesUrl = `https://${cleanUser}.github.io/${cleanRepo}/`;
  const gitRemoteUrl = `https://github.com/${cleanUser}/${cleanRepo}.git`;

  const bashCommands = `# 1. 初始化本地 Git 儲存庫
git init

# 2. 加入所有檔案並提交
git add .
git commit -m "feat: setup WheresDoc doctor site for GitHub Pages"

# 3. 切換至 main 主分支
git branch -M main

# 4. 綁定你的 GitHub 倉庫
git remote add origin ${gitRemoteUrl}

# 5. 推送至 GitHub（自動觸發 GitHub Actions 部署）
git push -u origin main`;

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStep(label);
      setTimeout(() => setCopiedStep(null), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-[#174e45]/15 bg-white p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 grid size-9 cursor-pointer place-items-center rounded-full bg-[#f6f8f6] text-[#5a756f] transition hover:bg-[#e7efe9] hover:text-[#102420]"
          aria-label="Close dialog"
        >
          <X className="size-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-2xl bg-[#174e45] text-white">
            <Github className="size-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#174e45]">
              GitHub Pages 架設指南
            </span>
            <h2 className="text-2xl font-black text-[#102420]">
              將網站網址改為 GitHub 架設
            </h2>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#5a756f]">
          目前網站已完成純靜態最佳化與 GitHub Actions 自動建置設定，只要將本專案代碼推送到你的 GitHub 倉庫，即可擁有專屬的免費 GitHub Pages 網址，並可自由綁定自訂獨立網域名稱！
        </p>

        {/* Dynamic Calculator Box */}
        <div className="mt-6 rounded-2xl border border-[#174e45]/15 bg-[#d6eae2]/30 p-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#174e45]">
            設定你的 GitHub 帳號與倉庫名稱
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-[#102420]">GitHub 使用者帳號 (Username)</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="例如：clee09195"
                className="mt-1 h-10 w-full rounded-xl border border-[#174e45]/20 bg-white px-3 text-sm font-semibold text-[#102420] outline-hidden focus:border-[#174e45]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#102420]">GitHub 倉庫名稱 (Repo Name)</label>
              <input
                type="text"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                placeholder="例如：yiyiye-doctor-site"
                className="mt-1 h-10 w-full rounded-xl border border-[#174e45]/20 bg-white px-3 text-sm font-semibold text-[#102420] outline-hidden focus:border-[#174e45]"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col items-start justify-between gap-3 rounded-xl bg-white p-3.5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold text-[#5a756f]">你的 GitHub Pages 上線預計網址：</p>
              <p className="mt-0.5 font-mono text-sm font-black text-[#174e45] break-all">
                {githubPagesUrl}
              </p>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard(githubPagesUrl, 'url')}
              className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-[#174e45] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-[#123e37]"
            >
              {copiedStep === 'url' ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              <span>{copiedStep === 'url' ? '已複製網址' : '複製網址'}</span>
            </button>
          </div>
        </div>

        {/* Steps List */}
        <div className="mt-6 space-y-5">
          {/* Step 1 */}
          <div className="flex gap-3.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#174e45] text-xs font-black text-white">
              1
            </span>
            <div>
              <h3 className="text-sm font-black text-[#102420]">在 GitHub 上建立新倉庫</h3>
              <p className="mt-1 text-xs leading-5 text-[#5a756f]">
                登入 GitHub，點擊「New Repository」，倉庫名稱輸入 <code className="rounded bg-[#f6f8f6] px-1 py-0.5 font-bold text-[#174e45]">{cleanRepo}</code>，設為 Public。
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-3.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#174e45] text-xs font-black text-white">
              2
            </span>
            <div>
              <h3 className="text-sm font-black text-[#102420]">啟用 GitHub Actions 部署</h3>
              <p className="mt-1 text-xs leading-5 text-[#5a756f]">
                進入該倉庫的 <strong>Settings → Pages</strong>，將 <strong>Build and deployment &gt; Source</strong> 切換為 <strong>GitHub Actions</strong> 即可。專案內已內建標準 <code className="rounded bg-[#f6f8f6] px-1 py-0.5 font-bold text-[#174e45]">.github/workflows/deploy.yml</code> 自動打包發布檔。
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-3.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#174e45] text-xs font-black text-white">
              3
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-[#102420]">執行 Git 指令推送代碼</h3>
                <button
                  type="button"
                  onClick={() => copyToClipboard(bashCommands, 'commands')}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-[#f6f8f6] px-2.5 py-1 text-xs font-bold text-[#174e45] hover:bg-[#d6eae2]"
                >
                  {copiedStep === 'commands' ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
                  <span>{copiedStep === 'commands' ? '已複製全部指令' : '一鍵複製指令'}</span>
                </button>
              </div>

              <div className="mt-2 overflow-x-auto rounded-xl bg-[#102420] p-4 text-xs font-mono text-[#d6eae2]">
                <pre className="whitespace-pre">{bashCommands}</pre>
              </div>
            </div>
          </div>

          {/* Step 4: Custom Domain */}
          <div className="flex gap-3.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#174e45] text-xs font-black text-white">
              4
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-black text-[#102420]">自訂網域名稱 (可選 Custom Domain)</h3>
              <p className="mt-1 text-xs leading-5 text-[#5a756f]">
                若您希望使用如 <code className="rounded bg-[#f6f8f6] px-1 py-0.5 font-bold text-[#174e45]">dr.yiyiye.com</code> 或個人專屬網域：可在 GitHub 倉庫的 <strong>Settings → Pages → Custom domain</strong> 輸入您的網址，並至您的 DNS 供應商加入 CNAME 記錄指向 <code className="rounded bg-[#f6f8f6] px-1 py-0.5 font-bold text-[#174e45]">{cleanUser}.github.io</code>。
              </p>
            </div>
          </div>
        </div>

        {/* Compatibility Assurance Box */}
        <div className="mt-6 rounded-2xl bg-[#f6f8f6] p-4 text-xs text-[#5a756f]">
          <div className="flex items-center gap-2 font-black text-[#102420]">
            <CheckCircle2 className="size-4 text-emerald-600" />
            <span>已為您完成的 GitHub Pages 最佳化項目：</span>
          </div>
          <ul className="mt-2 space-y-1.5 pl-6 list-disc">
            <li><code className="text-[#174e45] font-bold">base: './'</code> 相對路徑設定：確保在 GitHub Pages 的子目錄（如 <code className="text-[#174e45]">/{cleanRepo}/</code>）載入 JavaScript 與 CSS 時不發生 404 資源錯誤。</li>
            <li>表單本地持久化：即使在純靜態主機環境下，諮詢申請仍能完整保存與提示反饋。</li>
            <li>單一指令 <code className="text-[#174e45] font-bold">npm run build</code> 產出即可直通 GitHub Actions，無需繁複伺服器設定。</li>
          </ul>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-full bg-[#174e45] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#123e37]"
          >
            完成並關閉
          </button>
        </div>
      </div>
    </div>
  );
};
