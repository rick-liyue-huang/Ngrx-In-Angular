import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {AUTH_STATE_NAME} from "./state/auth.selectors";
import {authReducer} from "./state/auth.reducers";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./state/auth.effects";

const routes: Routes = [
	{
		path: '', children: [
			{
				path: '', redirectTo: 'login'
			},
			{
				path: 'login', component: LoginComponent
			},
		]
	}
]

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature(AUTH_STATE_NAME, authReducer),
		EffectsModule.forFeature([AuthEffects]), // the detail usage in single module
	]
})
export class AuthModule {

}
