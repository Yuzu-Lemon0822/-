const VERSION = "ver β 0.1.0";

const versionEl = document.getElementById("version");
versionEl.textContent = VERSION;

//要素取得
import { data } from "./data.js";
const output = document.getElementById("output");
const btn = document.getElementById("randomBtn");

// ランダム1個取得
const randomPick = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

function pick() {
  let answer = `
    見た目：${randomPick(data.見た目)}
    髪型：${randomPick(data.髪型)}
    表情：${randomPick(data.表情)}
    アクセサリ：${randomPick(data.アクセサリ)}
  `
  answer += `服装(上)：${randomPick(data["服装(上)"])}`
  if (Math.random() < 0.5) {
    answer += `服装(上)(重ね着)：${randomPick(data["服装(上)(重ね着)"])}`
  }
  answer += `服装(下)：${randomPick(data["服装(下)"])}`
  if (Math.random() < 0.5) {
    answer += `服装(下)(重ね着)：${randomPick(data["服装(下)(重ね着)"])}`
  }

  return answer;
}

btn.addEventListener("click", () => {
  const result = pick().trim();
  output.textContent = result;
});
