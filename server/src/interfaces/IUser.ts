export default interface IUser {
	id?: number;
	name: string;
	username: string;
	password: string;
	oldPassword?: string;
	newPassword?: string;
}
