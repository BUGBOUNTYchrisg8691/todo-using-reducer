import { v4 as uuid } from 'uuid';

export const ADD = 'ADD';
export const GENERATE_ID = 'GENERATE_ID';
export const TOGGLE = 'TOGGLE';
export const CLEAR = 'CLEAR';
export const ON_CHANGE = 'ON_CHANGE';
export const RESET_FORM = 'RESET_FORM';

function addTodo(todo) {
  return { type: ADD, payload: todo }
};

function generateID() {
  return { type: GENERATE_ID, payload: uuid() }
};

function toggleTodo(id) {
  return { type: TOGGLE, payload: id }
};

function clearCompleted() {
  return { type: CLEAR }
};

function onChange(e) {
  return { type: ON_CHANGE, payload: e }
};

function resetForm() {
  return { type: RESET_FORM }
};

const actions = {
  addTodo,
  generateID,
  toggleTodo,
  clearCompleted,
  onChange,
  resetForm
};

export default actions;