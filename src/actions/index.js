export const ADD = "ADD"
export const TOGGLE = "TOGGLE"
export const CLEAR = "CLEAR"
export const ON_CHANGE = "ON_CHANGE"
export const RESET_FORM = "RESET_FORM"

function addTodo(todo) {
  return { type: ADD, payload: todo }
}

function toggleTodo(id) {
  return { type: TOGGLE, payload: id }
}

function clearCompleted() {
  return { type: CLEAR }
}

function onChange(e) {
  return { type: ON_CHANGE, payload: e }
}

function resetForm() {
  return { type: RESET_FORM }
}

export default {
  addTodo,
  toggleTodo,
  clearCompleted,
  onChange,
  resetForm
}