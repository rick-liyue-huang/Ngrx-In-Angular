import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient) {}

	// it will connect with Firebase Auth REST API, and it will be used in auth effects
	onLogin(email: string, password: string) {
		return this.http.post(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
			{
				email, password, returnSecureToken: true
			}
		)
	}
}