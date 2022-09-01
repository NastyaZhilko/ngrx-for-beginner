import {CounterActions, counterActionsType} from "./counter.actions";

export const counterNode = 'counter'

export interface CounterState {
  count: number;
  updatedAt: number;
}

const initialState: CounterState = {
  count: 0,
  updatedAt: Date.now()
}


export const counterReducer = (state = initialState, action: CounterActions): CounterState => {
  switch (action.type) {
    case counterActionsType.increase:
      return {
        ...state,
        count: state.count + 1
      };
    case counterActionsType.decrease:
      return {
        ...state,
        count: state.count - 1
      };
    case counterActionsType.clear:
      return {
        ...state,
        count: 0
      };
    case counterActionsType.updatedAt:
      return {
        ...state,
        updatedAt: action.payload.updatedAt
      }
    default:
      return state
  }
}
