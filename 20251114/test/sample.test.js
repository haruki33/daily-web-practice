import { JSDOM } from "jsdom";
import { describe, it, expect, beforeEach } from "vitest";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(
  path.resolve(__dirname, "../correct/index.html"),
  "utf8"
);
const script = fs.readFileSync(
  path.resolve(__dirname, "../correct/script.js"),
  "utf8"
);

describe("Todo List", () => {
  let dom;
  let window;
  let document;
  let todoInput;
  let addBtn;
  let todoList;

  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    window = dom.window;
    document = window.document;

    // Execute the script in the JSDOM context
    const scriptEl = document.createElement("script");
    scriptEl.textContent = script;
    document.body.appendChild(scriptEl);

    todoInput = document.getElementById("todo-input");
    addBtn = document.getElementById("add-btn");
    todoList = document.getElementById("todo-list");
  });

  it("should add a new todo item", () => {
    todoInput.value = "新しいTodo";
    addBtn.click();
    expect(todoList.children.length).toBe(1);
    expect(todoList.children[0].querySelector("span").textContent).toBe(
      "新しいTodo"
    );
  });

  it("should delete a todo item", () => {
    todoInput.value = "削除されるTodo";
    addBtn.click();
    expect(todoList.children.length).toBe(1);

    const deleteBtn = todoList.querySelector(".delete-btn");
    deleteBtn.click();
    expect(todoList.children.length).toBe(0);
  });

  it("should toggle a todo item's completed status", () => {
    todoInput.value = "完了するTodo";
    addBtn.click();
    const todoItem = todoList.children[0];
    const todoText = todoItem.querySelector("span");

    expect(todoItem.classList.contains("completed")).toBe(false);
    todoText.click();
    expect(todoItem.classList.contains("completed")).toBe(true);
    todoText.click();
    expect(todoItem.classList.contains("completed")).toBe(false);
  });

  it("should not add an empty todo", () => {
    todoInput.value = "   ";
    addBtn.click();
    expect(todoList.children.length).toBe(0);
  });
});
