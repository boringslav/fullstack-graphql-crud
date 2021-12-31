import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../Graphql/Mutations';
function CreateUser() {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [createUser, { error }] = useMutation(CREATE_USER);

	return (
		<div className="createUser">
			<label htmlFor="name">Name:</label>
			<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
			<label htmlFor="username">Username:</label>
			<input
				type="text"
				name="username"
				id="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button
				onClick={() => {
					createUser({
						variables: { name, username, password }
					});
					setName('');
					setUsername('');
					setPassword('');
				}}
			>
				Create User
			</button>
		</div>
	);
}

export default CreateUser;
