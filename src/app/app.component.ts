import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "./store";
import {getErrorMessage, getLoading} from "./store/shared/shared.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrx-project';
  showLoading: Observable<boolean>;
  errorMsg: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.errorMsg = this.store.select(getErrorMessage);
  }
}
