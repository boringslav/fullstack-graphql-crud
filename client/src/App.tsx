import './App.css';
import CreateUser from './components/CreateUser';
import UsersList from './components/UsersList';

export default function App() {
	return (
		<>
			<CreateUser />
			<br></br>
			<UsersList />
		</>
	);
}
