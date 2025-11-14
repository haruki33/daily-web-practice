// --- 要素の取得 ---
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// --- データ ---
// Todoリストのデータを格納する配列
let todos = [];

// --- 初期化処理 ---
// ページ読み込み時にlocalStorageからデータを読み込む
document.addEventListener('DOMContentLoaded', () => {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
    renderTodos();
  }
});

// --- 関数 ---

// Todoリストを画面に描画する関数
const renderTodos = () => {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    if (todo.completed) {
      todoItem.classList.add('completed');
    }

    const todoText = document.createElement('span');
    todoText.textContent = todo.text;

    // Todoテキストをクリックしたら完了状態を切り替える
    todoText.addEventListener('click', () => {
        toggleComplete(index);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.classList.add('delete-btn');

    // 削除ボタンをクリックしたらTodoを削除する
    deleteBtn.addEventListener('click', () => {
        deleteTodo(index);
    });

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
  });
};

// localStorageにTodoリストを保存する関数
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Todoを追加する関数
const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText === '') return;

  todos.push({ text: todoText, completed: false });

  todoInput.value = '';
  renderTodos();
  saveTodos();
};

// Todoを削除する関数
const deleteTodo = (index) => {
  todos.splice(index, 1);
  renderTodos();
  saveTodos();
};

// Todoの完了状態を切り替える関数
const toggleComplete = (index) => {
    todos[index].completed = !todos[index].completed;
    renderTodos();
    saveTodos();
}


// --- イベントリスナー ---
addBtn.addEventListener('click', addTodo);

// EnterキーでもTodoを追加できるようにする
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});
