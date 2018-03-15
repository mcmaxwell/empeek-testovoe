export default function removeItemAction(id) {
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}
