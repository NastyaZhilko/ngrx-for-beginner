import {Component} from '@angular/core';
import {CounterState} from "./reducers/counter/counter.reducer";
import {select, Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {selectCount, selectUpdatedAt} from "./reducers/counter/counter.selectors";
import {CounterClearAction, CounterDecreaseAction, CounterIncreaseAction} from "./reducers/counter/counter.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  count$: Observable<number> = this.store$.pipe(select(selectCount))
  updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt))
  disableDecreaseButton$: Observable<boolean> = this.count$.pipe(map(count => count<=0));
  disableClearButton$: Observable<boolean> = this.count$.pipe(map(count=>!count))

  constructor(private store$: Store<CounterState>) {
  }


  increase(): void {
    this.store$.dispatch( new CounterIncreaseAction())
  }

  decrease(): void {
    this.store$.dispatch(new CounterDecreaseAction())
  }

  clear() {
    this.store$.dispatch(new CounterClearAction())
  }
}
