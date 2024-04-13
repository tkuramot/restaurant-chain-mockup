import { useEffect, useState } from "react";
import axios, { type AxiosResponse } from "axios";
import type { Users, User } from "../types/User";

function UsersList() {
	const [users, setUsers] = useState<Users>([]);
	useEffect(() => {
		axios
			.get("/api/users")
			.then((response: AxiosResponse<Users>) => {
				setUsers(response.data);
			})
			.catch((error) => {
				console.error("Error fetching users: ", error);
			});
	}, []);

	return (
		<div>
			{users.map((user: User) => (
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
