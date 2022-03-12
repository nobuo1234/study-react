import { Header } from "src/components/Header";
import { Users as UsersCompornent } from "src/components/Users";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
	const USERS_API_URL = `https://jsonplaceholder.typicode.com/users`;
	const users = await fetch(USERS_API_URL);
	const usersData = await users.json();

	return {
		props: {
			fallback: {
				[USERS_API_URL]: usersData,
			},
		},
	};
};

const Users = (props) => {
	const { fallback } = props;
	return (
		<div>
			<Header />
			<SWRConfig value={{ fallback }}>
				<UsersCompornent />
			</SWRConfig>
		</div>
	);
};

export default Users;
