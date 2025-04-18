import { expect, it, beforeEach, describe } from 'vitest'
import { useTodoStore } from './todo'
import { setActivePinia, createPinia } from 'pinia'


describe('todo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('add todo', async () => {
    const todoStore = useTodoStore()
    todoStore.addTodo('heihei')
    expect(todoStore.todos[0].title).toBe('heihei')
  })

  it('add todo with reverse command', async () => {
    const todoStore = useTodoStore()
    todoStore.addTodo('reverse:hello')
    expect(todoStore.todos[0].title).toBe('olleh')
  })

  it('remove todo', async () => {
    const todoStore = useTodoStore()
    const todo = todoStore.addTodo('heihei')
    todoStore.removeTodo(todo!.id)
    expect(todoStore.todos.length).toBe(0)
  })

})
