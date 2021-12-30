import { GraphQLList } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { Users } from '../../Entities/Users';
import User from '../../interfaces/IUser';

export const GET_ALL_USERS = {
	type: new GraphQLList(UserType),
	resolve(): Promise<User[]>  {
		return Users.find();
	}
};
