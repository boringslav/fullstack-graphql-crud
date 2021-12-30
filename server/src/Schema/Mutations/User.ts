import { GraphQLID, GraphQLString } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { Users } from '../../Entities/Users';
import IUser from '../../interfaces/IUser';

export const CREATE_USER = {
    type: UserType,
    args:{
        name: { type: GraphQLString },
        username: {type: GraphQLString},
        password: {type: GraphQLString}
    },
    async resolve(parent: IUser, args: IUser) {
        const { name, username, password } = args;
        await Users.insert({ name, username, password });
    }
};

export const DELETE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent: IUser, args: IUser) {
        const { id } = args;
        await Users.delete({ id });
    }
};