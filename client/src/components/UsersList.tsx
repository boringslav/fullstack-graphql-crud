import { GET_ALL_USERS } from '../Graphql/Queries';
import { DELETE_USER } from '../Graphql/Mutations';
import { useMutation, useQuery } from '@apollo/client';

export default function UsersList() {
	const { data } = useQuery(GET_ALL_USERS);
	if (data) console.log(data);

	const [deleteUser, { error }] = useMutation(DELETE_USER);
	const executeDelete = (id: any) => {
		deleteUser(id);
	};

	return (
		<div>
			{data &&
				data.getAllUsers.map((user: any) => {
					return (
						<div key={user.id}>
							{user.name} / {user.username}
							<button onClick={() => executeDelete({ variables: { id: user.id } })}>Delete User</button>
						</div>
					);
				})}
		</div>
	);
}
