import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthResponseDataModel} from "../models/authResponseData.model";
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient) {}

	// it will connect with Firebase Auth REST API, and it will be used in auth effects
	onLogin(email: string, password: string): Observable<AuthResponseDataModel> {
		return this.http.post<AuthResponseDataModel>(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
			{
				email, password, returnSecureToken: true
			}
		)
	}

	formatUser(data: AuthResponseDataModel) {
		const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000)
		const user = new UserModel(data.email, data.idToken, data.localId, expirationDate);
		return user;
	}
}
