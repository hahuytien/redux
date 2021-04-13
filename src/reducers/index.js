import Task from './../mocks/Task';

const initialState = {
  items: Task,
  showToggle: false,
  isSearch: ''
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'search':
      initialState.isSearch = action.text;
      initialState.items = action.items;

      return state;
    case 'showForm':
      initialState.showToggle = !action.showForm;

      return state;
    case 'add':
      initialState.items = action.items;

      return state;
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}