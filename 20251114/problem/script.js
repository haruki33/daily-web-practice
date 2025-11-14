// --- 要素の取得 ---
const todoInput = // ここに 'todo-input' の要素を取得するコードを書いてください
const addBtn = // ここに 'add-btn' の要素を取得するコードを書いてください
const todoList = // ここに 'todo-list' の要素を取得するコードを書いてください

// --- データ ---
// Todoリストのデータを格納する配列
let todos = [];

// --- 初期化処理 ---
// ページ読み込み時にlocalStorageからデータを読み込む
document.addEventListener('DOMContentLoaded', () => {
  // ここにlocalStorageからデータを読み込む処理を実装する
  // ヒント: localStorage.getItem() を使って 'todos' というキーで保存されたデータを取得する
  // ヒント: 取得したデータはJSON形式なので、JSON.parse() を使ってJavaScriptのオブジェクトに変換する
  // ヒント: 読み込んだデータを使って renderTodos() を呼び出す
});

// --- 関数 ---

// Todoリストを画面に描画する関数
const renderTodos = () => {
  // ここにTodoリストを描画する処理を実装する
  // ヒント: todoListの中身を一度空にする
  // ヒント: todos配列をループで処理する (forEach)
  // ヒント: 各Todoアイテムに対して、li要素を作成する
  // ヒント: li要素に 'todo-item' クラスを追加する
  // ヒント: Todoが完了状態 (completed: true) の場合は、'completed' クラスも追加する
  // ヒント: span要素を作成し、Todoのテキスト (todo.text) を設定する
  // ヒント: span要素にクリックイベントを追加し、toggleComplete() を呼び出す
  // ヒント: button要素を作成し、'削除'というテキストを設定する
  // ヒント: button要素に 'delete-btn' クラスを追加する
  // ヒント: button要素にクリックイベントを追加し、deleteTodo() を呼び出す
  // ヒント: li要素にspan要素とbutton要素を追加する
  // ヒント: todoListにli要素を追加する
};

// localStorageにTodoリストを保存する関数
const saveTodos = () => {
  // ここにlocalStorageにTodoリストを保存する処理を実装する
  // ヒント: localStorage.setItem() を使って 'todos' というキーでtodos配列を保存する
  // ヒント: 保存するデータはJSON形式にする必要があるので、JSON.stringify() を使う
};

// Todoを追加する関数
const addTodo = () => {
  // ここにTodoを追加する処理を実装する
  // ヒント: todoInputから入力された値を取得する (trim()で前後の空白を削除)
  // ヒント: 入力値が空の場合は何もしない
  // ヒント: todos配列に新しいTodoオブジェクトを追加する (例: { text: todoText, completed: false })
  // ヒント: todoInputを空にする
  // ヒント: renderTodos() を呼び出して画面を更新する
  // ヒント: saveTodos() を呼び出してデータを保存する
};

// Todoを削除する関数
const deleteTodo = (index) => {
  // ここにTodoを削除する処理を実装する
  // ヒント: todos配列から指定されたindexの要素を削除する (splice)
  // ヒント: renderTodos() を呼び出して画面を更新する
  // ヒント: saveTodos() を呼び出してデータを保存する
};

// Todoの完了状態を切り替える関数
const toggleComplete = (index) => {
    // ここにTodoの完了状態を切り替える処理を実装する
    // ヒント: todos配列の指定されたindexの要素のcompletedプロパティを反転させる
    // ヒント: renderTodos() を呼び出して画面を更新する
    // ヒント: saveTodos() を呼び出してデータを保存する
}


// --- イベントリスナー ---
// '追加'ボタンをクリックした時の処理
// ここに '追加'ボタンのクリックイベントリスナーを追加する
// ヒント: addBtn.addEventListener('click', ...)

// EnterキーでもTodoを追加できるようにする
// ここに 'todo-input' のキープレスイベントリスナーを追加する
// ヒント: todoInput.addEventListener('keypress', ...)
// ヒント: イベントオブジェクトの key プロパティが 'Enter' の場合のみ addTodo() を呼び出す
