import {Action, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {counterNode, counterReducer, CounterState} from "./counter/counter.reducer";
import {CounterActions} from "./counter/counter.actions";

export interface State {
  [counterNode]: CounterState
}

export const reducers: ActionReducerMap<State, CounterActions> = {
  [counterNode]: counterReducer
};


export const metaReducers: MetaReducer<State, CounterActions>[] = !environment.production ? [] : [];
