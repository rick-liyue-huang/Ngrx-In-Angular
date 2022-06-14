import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Observable, Subscription} from "rxjs";
import {CounterComponent} from "../counter/counter.component";
import {getCounter} from "../state/counter.selectors";
import {AppState} from "../../store";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  // @Input() counter: number = 0;

  counter: number = 0;
  counterSubscription: Subscription | undefined;
  counter$: Observable<number> | undefined;

  // constructor(private store: Store<{counter: CounterState}>) { }
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.counterSubscription = this.store
    //   .select('counter')
    //   .subscribe(data => {
    //     console.log('counter observable called')
    //   this.counter = data.counter;
    // });

    this.counterSubscription = this.store
      .select(getCounter)
      .subscribe(counter => {
        console.log('counter observable called')
        this.counter = counter;
      });


    // also can put the observable in html and add deal with it
    this.counter$ = this.store.select(getCounter);
  }

  // clear the subscription when destroy the component
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }



}
