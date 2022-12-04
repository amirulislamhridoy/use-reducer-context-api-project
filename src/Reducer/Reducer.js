import { CARD, ERROR, LOADING, REMOVE, SUCCESS } from "./ReducerTypes"

export const reducer = (state, action) => {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          loading: true,
          error: false,
          data: []
        }
      case ERROR:
        return {
          ...state,
          loading: true,
          error: action.payload.message,
          data: []
        }
      case SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          data: action.payload
        }
      case CARD:
        return {
          ...state,
          card: [...state.card, action.payload]
        }
      case REMOVE:
        return {
          ...state,
          card: [...state.card.filter(d => d !== action.payload)]
        }
      default:
        return state
    }
  }