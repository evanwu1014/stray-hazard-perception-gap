import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { execSync } from 'child_process'

// 獲取最新 Git Commit Hash 與 Commit 時間，若出錯則降級為當前系統時間
let buildInfo = '';
try {
  const commitHash = execSync('git rev-parse --short HEAD').toString().trim();
  const commitDateStr = execSync('git log -1 --format=%cd --date=iso').toString().trim();
  const commitDate = new Date(commitDateStr).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
  buildInfo = `${commitDate} (${commitHash})`;
} catch (e) {
  buildInfo = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    viteSingleFile(),
    {
      name: 'html-transform-build-info',
      transformIndexHtml(html) {
        return html.replace('</head>', `<meta name="build-info" content="${buildInfo}">\n</head>`);
      }
    }
  ],
  base: './'
})
