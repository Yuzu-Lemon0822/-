// 要素取得
import { data } from "./data.js"
const output = document.getElementById("output");
const randomBtn = document.getElementById("randomBtn");

// ===== ロジック（最低限） =====
const output = document.getElementById("output");
const btn = document.getElementById("randomBtn");

const randomPick = (arr) => arr[Math.floor(Math.random() * arr.length)];

btn.addEventListener("click", () => {
  const result = `
性別：${randomPick(data.性別)}
髪型：${randomPick(data.髪型)}
表情：${randomPick(data.表情)}
服装：${randomPick(data.服装)}
アクセサリ：${randomPick(data.アクセサリ)}
雰囲気：${randomPick(data.雰囲気)}
シチュエーション：${randomPick(data.シチュエーション)}
  `.trim();

  output.textContent = result;
});
