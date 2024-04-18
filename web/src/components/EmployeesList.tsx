import type { Employees, Employee } from "@/types/Employee";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

function EmployeesList({ employees }: { employees: Employees }) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Employee Name</TableHead>
					<TableHead>Job Title</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{employees.map((employee: Employee) => (
					<TableRow key={employee.id}>
						<TableCell>
							{employee.first_name} {employee.last_name}
						</TableCell>
						<TableCell>{employee.job_title}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default EmployeesList;
