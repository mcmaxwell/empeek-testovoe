export default function addCommentAction(comment, idItem) {
  return {
    type: 'ADD_COMMENT',
    idItem: idItem,
    payload: comment
  }
}
