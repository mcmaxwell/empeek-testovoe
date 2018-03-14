const initialState = [
  {
    name: 'First item with custom name',
    isActive: true,
    id: 1,
    masseges: [
      {
        avatar: 'red',
        text: 'asdasdas'
      },
      {
        avatar: 'red',
        text: 'asdasdas'
      }
    ]
  },
  {
    name: 'First item with custom name',
    isActive: false,
    id: 2,
    masseges: [
      {
        avatar: 'red',
        text: 'asdasdas'
      },
      {
        avatar: 'red',
        text: 'asdasdas'
      },
      {
        avatar: 'red',
        text: 'asdasdas'
      },
      {
        avatar: 'red',
        text: 'asdasdas'
      }
    ]
  },
  {
    name: 'First item with custom name',
    isActive: false,
    id: 3,
    masseges: [
      {
        avatar: 'red',
        text: 'asdasdas'
      },
      {
        avatar: 'red',
        text: 'asdasdas'
      },
      {
        avatar: 'red',
        text: 'asdasdas'
      }
    ]
  }
]

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
    default:
      return state
  }
}
