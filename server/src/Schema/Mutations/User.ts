import { GraphQLID, GraphQLString } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { MessageType } from '../TypeDefs/Messages';
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
    type: MessageType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent: IUser, args: IUser) {
        const { id } = args;
        await Users.delete({ id });

        return {successful:true, message: 'DELETE SUCCESSFUL ✔'}
    }
};

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: {type:GraphQLString}
    },
    async resolve(parent: IUser, args: IUser) {
        const { username, oldPassword, newPassword } = args;

        const user = await Users.findOne({ username });
        const dbPassword = user?.password;

        if (!user) {
            throw new Error('USERNAME DOESNT EXIST 😥');
        }

        if (oldPassword === dbPassword) {
            await Users.update({ username }, { password: newPassword });
            return{successful:true, message: 'PASSWORD CHANGED SUCCESSFULLY ✔'}

        } else {
            throw new Error('PASSWORDS DO NOT MATCH 😥');
        }
    }
}