import {Action} from "@ngrx/store";

export enum counterActionsType {
  increase = `[COUNTER] increase`,
  decrease = `[COUNTER] decrease`,
  clear = `[COUNTER] clear`,
  updatedAt = `[COUNTER] updated at`
}

export class CounterIncreaseAction implements Action {
  readonly type = counterActionsType.increase
}

export class CounterDecreaseAction implements Action {
  readonly type = counterActionsType.decrease
}

export class CounterClearAction implements Action {
  readonly type = counterActionsType.clear
}

export class CounterUpdatedAtAction implements Action {
  readonly type = counterActionsType.updatedAt
  constructor(public payload: {
    updatedAt: number
  }) {}
}

export type CounterActions = CounterIncreaseAction
  | CounterDecreaseAction
  | CounterClearAction
  | CounterUpdatedAtAction
