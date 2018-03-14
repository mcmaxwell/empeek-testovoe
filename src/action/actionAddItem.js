let nextTodoId = 0

export default function addItemAction(name) {
  return {
    type: 'ADD_ITEM',
    id: nextTodoId++,
    payload: name
  }
}
