import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loginStart, loginSuccess} from "./auth.actions";
import {switchMap, map, exhaustMap} from "rxjs";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class AuthEffects {
	constructor(private action$: Actions, private authService: AuthService) {}

	login$ = createEffect(() => {
		return this.action$.pipe(ofType(loginStart), switchMap(action => {
			return this.authService
				.onLogin(action.email, action.password)
				.pipe(map(data => {
					return loginSuccess();
				}))
		}))
	})
}
