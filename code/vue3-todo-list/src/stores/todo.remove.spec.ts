import { test, expect } from "vitest";
import { reset, useTodoStore } from "./todo.remove";
import { setActivePinia, createPinia } from "pinia";

test("remove todo", () => {
  setActivePinia(createPinia());
  const store = useTodoStore();

  // 后门操作 尽量少用
  //   const todo = {
  //     id: 1,
  //     title: "吃饭",
  //   };
  //   store.todos.push(todo);

  // round-trip  优先使用
  const todo = store.addTodo("吃饭");
  store.removeTodo(todo.id)
  expect(store.todos.length).toBe(0);
});
