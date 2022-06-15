import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loginStart, loginSuccess} from "./auth.actions";
import {switchMap, map, exhaustMap} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {AuthResponseDataModel} from "../../models/authResponseData.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {setLoadingSpinner} from "../../store/shared/shared.action";

@Injectable()
export class AuthEffects {
	constructor(
		private action$: Actions,
		private authService: AuthService,
		private store: Store<AppState>
	) {}

	login$ = createEffect(() => {
		return this.action$.pipe(ofType(loginStart), switchMap(action => {
			return this.authService
				.onLogin(action.email, action.password)
				.pipe(map((data: AuthResponseDataModel) => {
					// after login, hide the loading spinner
					this.store.dispatch(setLoadingSpinner({status: false}))
					const user = this.authService.formatUser(data);
					return loginSuccess({user});
				}))
		}))
	})
}
