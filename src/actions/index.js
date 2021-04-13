
export const searchTodo = (text, items) => {
  return {
    type: 'search',
    text,
    items
  }
}