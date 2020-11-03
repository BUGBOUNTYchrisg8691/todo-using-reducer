import {
  ADD,
  TOGGLE,
  CLEAR,
  ON_CHANGE,
  RESET_FORM
} from "./../actions"

export const initialState = {
  todos: [],
  form: {
    todo: '',
    completed: false,
    id: ''
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
    case TOGGLE:
      return state;
    case CLEAR:
      return state;
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