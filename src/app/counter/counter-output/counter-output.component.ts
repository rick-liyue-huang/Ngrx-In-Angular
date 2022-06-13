import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Observable, Subscription} from "rxjs";
import {CounterComponent} from "../counter/counter.component";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  // @Input() counter: number = 0;

  counter: number = 0;
  counterSubscription: Subscription | undefined;
  counter$: Observable<CounterState> | undefined;

  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select('counter')
      .subscribe(data => {
      this.counter = data.counter;
    });

    // also can put the observable in html and add deal with it
    this.counter$ = this.store.select('counter');
  }

  // clear the subscription when destroy the component
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }



}
