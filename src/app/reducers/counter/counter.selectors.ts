import {createFeatureSelector, createSelector} from "@ngrx/store";
import {counterNode, CounterState} from "./counter.reducer";

const selectCounterFeature = createFeatureSelector<CounterState>(counterNode);

export const selectCount = createSelector(
  selectCounterFeature,
  (state): number => state.count
)
export const selectUpdatedAt = createSelector(
  selectCounterFeature,
  (state): number => state.updatedAt
)
