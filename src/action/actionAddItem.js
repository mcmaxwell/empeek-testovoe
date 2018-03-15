import { v4 } from 'node-uuid'

export default function addItemAction(name) {
  return {
    type: 'ADD_ITEM',
    id: v4(),
    payload: name
  }
}
