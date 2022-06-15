
// return the user model after login
export class UserModel {
	constructor(
		private email: string,
		private localId: string,
		private token: string,
		private expirationDate: Date,
	) {}

}
