import useFetchData from "@/hooks/useFetchData";
import type { Users, User } from "@/types/User";

function UsersList() {
	const users = useFetchData<Users>("/api/users");

	return (
		<div>
			{users?.map((user: User) => (
				<div key={user.id}>
					<h2>
						{user.first_name} {user.last_name}
					</h2>
					<p>Email: {user.email}</p>
					<p>Phone number: {user.phone_number}</p>
					<p>Address: {user.address}</p>
					<p>Birth date: {user.birth_date}</p>
					<p>Membership expiration date: {user.membership_expiration_date}</p>
					<p>Role: {user.role}</p>
				</div>
			))}
		</div>
	);
}

export default UsersList;
