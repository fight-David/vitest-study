interface Todo {
  title: string;
  content: string;
  state:State
}

export enum State {
  active,
  completed,
  removed,
}

export const todos: Todo[] = [];
export function addTodo(todo: Todo) {}

export function fighting() {}

// 1. 内联：逻辑数据，简单
// 2. 委托：逻辑数据，复杂
// 3. 隐式：数据要的都一样