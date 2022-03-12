import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

export const Users = () => {
	const { data, error, isLoading, isEnpty } = useUsers();

	/* console.log({ data, error }); */

	if (isLoading) {
		return <div>ローディング中</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	if (isEnpty) {
		return <div>データは空です</div>;
	}

	return (
		<ul className="grid grid-cols-2 gap-4">
			{data.map((user) => {
				return (
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a className="block truncate p-2 shadow rounded hover:bg-gray-100">
								<h1 className="font-bold text-xl truncate">
									{user.name}
								</h1>
								<div className="text-lg truncate">
									{user.email}
								</div>
							</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Users;
