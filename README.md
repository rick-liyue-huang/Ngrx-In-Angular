# NgrxProject

Ngrx Effects library

library manages side effects to keep components clean
side effects means calling to the external state like API
using HTTP to get data from backend server is nothing but a side effect
having this logic in the components we can manage this code in the ngrx effects architecture


we cannot call the http and the store in the components as we want to keep them clean
we cannot also call the http in the reducer as the reducer functions are pure functions
we cannot inject the postsService into the reducers as they are pure function
so the best place to manage these side effects are the ngrx effects


what ngrx effects does?

effects take the action, does some work and again dispatches new action
this could be success or the fail action
lets see the ngrx diagram with effects taking into consideration


Defining an effects

effect is nothing but creating a service, in fact it is just like any other angular service class defined with @injectable decorator at the top of class

```typescript
import {Injectable} from "@angular/core";
import {Actions, createEffect} from "@angular/effects"
import {ofType} from 'rxjs/operators';

@Injectable()
export class AuthEffects {
	constructor(private actions$: Actions, private loginService: LoginService) {
	}

	loadPosts$ = createEffect(() => {
		return this.actions$.pipe(ofType(loginAction))
	});
}
```

Create Variable that will create an effect
actions$ -> injected actions from ngrx effects
ofType -> to filter all the actions with the loginAction

when ever the login action is dispatched, this effect will execute by passing through this filter

Whenever the login action is dispatched then it is passed through the mergeMap operator, mergeMap maps over each emitted action and calls the angular while returns the observable and then merge this observable into single observable or stream.

```typescript
mergeMap((action) => {
	return this.logginService.login().pipe(map((data) => posts.loadPostsSuccess({data})))
})
```
