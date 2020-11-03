import { v4 as uuid } from 'uuid';
import Moment from 'moment';

import {
  ADD,
  GENERATE_ID,
  TOGGLE,
  CLEAR,
  ON_CHANGE,
  RESET_FORM
} from './../actions';

export const initialState = {
  todos: [],
  form: {
    todo: '',
    timeCompleted: '',
    completeBy: '',
    completed: false,
    id: uuid()
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case GENERATE_ID:
      return {
        ...state,
        form: {
          ...state.form,
          id: uuid()
        }
      }
    case TOGGLE:
      return {
        ...state,
        // todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed, timeCompleted: Moment(Date.now()).format('LLL')} : todo)
        todos: state.todos.map(todo => {
          if (todo.id === action.payload && !todo.completed) {
            return {...todo, completed: !todo.completed, timeCompleted: Moment(Date.now()).format('LLL')}
          } else if (todo.id === action.payload && todo.completed) {
            return {...todo, completed: !todo.completed, timeCompleted: ''}
          } else {
            return todo
          }
        })
      }
    case CLEAR:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }
    case ON_CHANGE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.target.name]: action.payload.target.value
        }
      }
    case RESET_FORM:
      return {
        ...state,
        form: initialState.form
      }
     default:
      return state;
  }
}

export default reducer;