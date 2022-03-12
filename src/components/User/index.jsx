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
			<h1 className="font-bold text-3xl">{user?.name}</h1>
			<h2 className="text-xl font-bold mt-10">ユーザーの詳細</h2>
			<ul className="list-inside list-disc mt-2 text-lg">
				<li>メール：{user?.email}</li>
				<li>アカウント名：{user?.username}</li>
				<li>住所：{user?.address.city}</li>
				<li>電話番号：{user?.phone}</li>
				<li>Webサイト{user?.website}</li>
				<li>勤務先：{user?.company.name}</li>
			</ul>
			<h2 className="text-xl font-bold mt-10">投稿</h2>
			<div className="mt-2"></div>
			<PostsByUserId id={user.id} />
		</div>
	);
};

export default User;
