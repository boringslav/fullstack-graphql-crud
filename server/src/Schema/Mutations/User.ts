import { GraphQLString } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { Users } from '../../Entities/Users';
import User from '../../interfaces/IUser';

export const CREATE_USER = {
    type: UserType,
    args:{
        name: { type: GraphQLString },
        username: {type: GraphQLString},
        password: {type: GraphQLString}
    },
    async resolve(parent: User, args: User) {
        const { name, username, password } = args;
        await Users.insert({ name, username, password });
    }
};