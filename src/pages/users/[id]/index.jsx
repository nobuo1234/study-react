import { Header } from "src/components/Header";
import User from "src/components/User";
import { useUser } from "src/hooks/useUser";

const UsersId = () => {
	const { post, error, isLoading } = useUser();
	console.log({ post, error, isLoading });

	return (
		<div>
			<Header />
			<User />
		</div>
	);
};

export default UsersId;
