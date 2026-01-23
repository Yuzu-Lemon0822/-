import { data } from "./data.js";

// 要素取得
const output = document.getElementById("output");
const btn = document.getElementById("randomBtn");

// ランダム1個取得
const randomPick = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

function pick() {
  let answer = `
    性別：${randomPick(data.性別)}
    髪型：${randomPick(data.髪型)}
    表情：${randomPick(data.表情)}
    アクセサリ：${randomPick(data.アクセサリ)}
  `
  answer += `服装(上)：${randomPick(data["服装(上)"])}`
  if (Math.random < 0.5) {
    answer += `服装(上)(重ね着)：${randomPick(data["服装(上)(重ね着)"])}`
  }
  answer += `服装(下)：${randomPick(data["服装(下)"])}`
  if (Math.random < 0.5) {
    answer += `服装(下)(重ね着)：${randomPick(data["服装(下)(重ね着)"])}`
  }

  return answer;
}

btn.addEventListener("click", () => {
  const result = pick().trim();
  output.textContent = result;
});
