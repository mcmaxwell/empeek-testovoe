export default function itemsList (state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          name: action.payload,
          isActive: false,
          id: action.id,
          masseges: []
        }
      ]
    case 'CHOICE_ITEM':
      return state.map(item =>
        (item.id === action.payload)
          ? {...item, isActive: !item.isActive} : {...item, isActive: false}
        )
    case 'REMOVE_ITEM':
      state.splice(state.findIndex(val => val.id === action.payload), 1);
      return state;
    case 'ADD_COMMENT':
      return state.map(item =>
          (item.id === action.idItem)
            ? {...item, masseges: [...item.masseges, action.payload]} : {...item}
          )
    default:
      return state
  }
}
