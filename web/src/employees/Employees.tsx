import { useEffect, useState } from "react";
import axios, { type AxiosResponse } from "axios";
import type { Employees, Employee } from "../types/Employee";

function EmployeesList() {
	const [employees, setEmployees] = useState<Employees>([]);
	useEffect(() => {
		axios
			.get("/api/employees")
			.then((response: AxiosResponse<Employees>) => {
				setEmployees(response.data);
			})
			.catch((error) => {
				console.error("Error fetching users: ", error);
			});
	}, []);

	return (
		<div>
			{employees.map((employee: Employee) => (
				<div key={employee.id}>
					<h2>
						{employee.first_name} {employee.last_name}
					</h2>
					<p>Email: {employee.email}</p>
					<p>Phone number: {employee.phone_number}</p>
					<p>Address: {employee.address}</p>
					<p>Birth date: {employee.birth_date}</p>
					<p>
						Membership expiration date: {employee.membership_expiration_date}
					</p>
					<p>Role: {employee.role}</p>
					<p>Job Title: {employee.job_title}</p>
					<p>Salary: {employee.salary}</p>
					<p>Start Date: {employee.start_date}</p>
					<p>Awards: {employee.awards.join(", ")}</p>
				</div>
			))}
		</div>
	);
}

export default EmployeesList;
