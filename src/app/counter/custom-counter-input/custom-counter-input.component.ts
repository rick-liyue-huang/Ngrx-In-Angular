import { Component, OnInit } from '@angular/core';
import {CounterState} from "../state/counter.state";
import {Store} from "@ngrx/store";
import {changeTextChanel, customIncrement} from "../state/counter.actions";
import {getChannelName, getCounter} from "../state/counter.selectors";
import {Observable} from "rxjs";
import {AppState} from "../../store";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value: number = 0;
  channelName: string = '';
  channelName$: Observable<string> | undefined;

  // constructor(private store: Store<{counter: CounterState}>) { }
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('counter').subscribe(data => {
    //   console.log('channel name observable called')
    //   this.channelName = data.channelName;
    // })
    this.store.select(getChannelName).subscribe(channelName => {
      console.log('channel name observable called')
      this.channelName = channelName;
    });

    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd() {
    // transfer to number type
    this.store.dispatch(customIncrement({count: +this.value}))
    console.log(this.value)
  }

  onChangeTextChanel() {
    this.store.dispatch(changeTextChanel());
  }
}
