// --- 要素の取得 ---
// id="count" のp要素を取得
const countElement = document.getElementById('count');
// id="increment-btn" のbutton要素を取得
const incrementBtn = document.getElementById('increment-btn');
// id="decrement-btn" のbutton要素を取得
const decrementBtn = document.getElementById('decrement-btn');
// id="reset-btn" のbutton要素を取得
const resetBtn = document.getElementById('reset-btn');

// --- カウンター変数 ---
let count = 0;

// --- イベントリスナーの設定 ---

// incrementBtnがクリックされたときの処理
incrementBtn.addEventListener('click', () => {
  // countを1増やす
  count++;
  // countElementのテキストを更新する
  countElement.textContent = count;
});

// decrementBtnがクリックされたときの処理
decrementBtn.addEventListener('click', () => {
  // countを1減らす
  count--;
  // countElementのテキストを更新する
  countElement.textContent = count;
});

// resetBtnがクリックされたときの処理
resetBtn.addEventListener('click', () => {
  // countを0にリセットする
  count = 0;
  // countElementのテキストを更新する
  countElement.textContent = count;
});
