
// define the model based on the login payload
export interface AuthResponseDataModel {
	displayName?: string;
	email: string;
	expiresIn: string;
	idToken: string;
	kind?: string;
	localId: string;
	refreshToken: string;
	registered: boolean
}
