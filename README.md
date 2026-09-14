# WheresDoc｜醫師跨院所官方入口

為跨院所執業醫師打造唯一官方入口：整合門診時間、臨時異動、掛號、電話與地圖。

專案已完成相容性最佳化，**支援直接使用 GitHub Pages 進行免費架設與網址自訂**。

---

## 快速使用 GitHub Pages 架設此網站

### 步驟 1：在 GitHub 建立 Repository
1. 登入 [GitHub](https://github.com/)。
2. 點擊右上角 **+** → **New repository**。
3. 輸入倉庫名稱（例如 `yiyiye-doctor-site`），設為 **Public**，點擊 **Create repository**。

### 步驟 2：設定 GitHub Pages 部署模式
1. 進入該 GitHub 倉庫的 **Settings** 頁籤。
2. 在左側選單點選 **Pages**。
3. 在 **Build and deployment > Source** 下拉選單中，選擇 **GitHub Actions**。

*(專案已在 `.github/workflows/deploy.yml` 內建完整部署工作流程，推上代碼即會自動編譯並上線！)*

### 步驟 3：推送本專案代碼至 GitHub
在本地終端機（Terminal）執行以下指令（請將 `<your-username>` 與 `<your-repo>` 替換為你的帳號與倉庫名稱）：

```bash
# 初始化 Git
git init

# 加入所有專案檔案
git add .
git commit -m "feat: setup WheresDoc doctor site for GitHub Pages"

# 切換至 main 主分支
git branch -M main

# 綁定 GitHub 遠端倉庫
git remote add origin https://github.com/<your-username>/<your-repo>.git

# 推送代碼
git push -u origin main
```

推送完成後，前往 GitHub 倉庫的 **Actions** 分頁即可看到自動建置流程。完成後，您的網站將於以下網址啟用：
```
https://<your-username>.github.io/<your-repo>/
```

---

## 自訂網域 (Custom Domain) 設定

若想將網址設定為自有獨立網址（如 `doctor.yiyiye.com` 或 `yiyiye.tw`）：
1. 在 GitHub 倉庫的 **Settings → Pages → Custom domain** 輸入您的網域。
2. 在您的 DNS 管理平台（如 Cloudflare, GoDaddy, Namecheap, Hinet）設定：
   - 若為子網域（如 `doctor.yiyiye.com`）：新增一筆 **CNAME** 紀錄，名稱為 `doctor`，值指向 `<your-username>.github.io`。
   - 若為頂級網域（如 `yiyiye.com`）：設定 A 紀錄指向 GitHub Pages IP (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)。
3. 勾選 **Enforce HTTPS** 即可享有免費 SSL 憑證。

---

## 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 靜態打包測試
npm run build
```
