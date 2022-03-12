import PostsByUserId from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
	const { user, error, isLoading } = useUser();

	/* console.log({ data, error }); */

	if (isLoading) {
		return <div>ローディング中</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	return (
		<div>
			<h1>Name：{user?.name}</h1>
			<h2>ユーザーの詳細</h2>
			<p>ID：{user?.id}</p>
			<p>UserName：{user?.username}</p>
			<table>
				<tr>
					<caption>address</caption>
				</tr>
				<tr>
					<th>street</th>
					<td>{user?.address.street}</td>
				</tr>
				<tr>
					<th>suite</th>
					<td>{user?.address.suite}</td>
				</tr>
				<tr>
					<th>city</th>
					<td>{user?.address.city}</td>
				</tr>
				<tr>
					<th>zipcode</th>
					<td>{user?.address.zipcode}</td>
				</tr>
				<tr>
					<caption>geo</caption>
					<tr>
						<th>lat</th>
						<td>{user?.address.geo.lat}</td>
					</tr>
					<tr>
						<th>lng</th>
						<td>{user?.address.geo.lng}</td>
					</tr>
				</tr>
			</table>
			<p>phone：{user?.phone}</p>
			<p>website：{user?.website}</p>
			<table>
				<tr>
					<caption>company</caption>
					<tr>
						<th>name</th>
						<td>{user?.company.name}</td>
					</tr>
					<tr>
						<th>catchPhrase</th>
						<td>{user?.company.catchPhrase}</td>
					</tr>
					<tr>
						<th>bs</th>
						<td>{user?.company.bs}</td>
					</tr>
				</tr>
			</table>
			<p>{user?.name ? <div>Created by {user?.name}</div> : null}</p>
			<h2>投稿</h2>
			<PostsByUserId id={user.id} />
			<h2>コメント</h2>
		</div>
	);
};

export default User;
