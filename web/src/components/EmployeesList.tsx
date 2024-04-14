import type { Employees, Employee } from "@/types/Employee";

function EmployeesList({ employees }: { employees: Employees }) {
	return (
		<div className="pl-7">
			<ol>
				{employees.map((employee: Employee) => (
					<li style={{ listStyle: "square" }}>
						{employee.first_name} {employee.last_name}, {employee.job_title}
					</li>
				))}
			</ol>
		</div>
	);
}

export default EmployeesList;
