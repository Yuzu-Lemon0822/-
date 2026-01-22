import { data } from "./data.js";

// 要素取得
const output = document.getElementById("output");
const btn = document.getElementById("randomBtn");

// ランダム1個取得
const randomPick = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

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
