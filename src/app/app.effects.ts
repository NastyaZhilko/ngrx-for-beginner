import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {counterActionsType, CounterUpdatedAtAction} from "./reducers/counter/counter.actions";
import {map} from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
  }

  @Effect()
  updatedAt$() {
    return this.actions$.pipe(
      ofType(
        counterActionsType.clear,
        counterActionsType.decrease,
        counterActionsType.increase),
      map(() => {
        return new CounterUpdatedAtAction({
          updatedAt: Date.now()
        })
      })
    )
  }
}
