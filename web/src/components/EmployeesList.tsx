import type { Employees, Employee } from "@/types/Employee";
import {
	Accordion,
	AccordionTrigger,
	AccordionContent,
	AccordionItem,
} from "@/components/ui/accordion";

function EmployeesList({ employees }: { employees: Employees }) {
	return (
		<Accordion type="single" collapsible>
			{employees.map((employee: Employee) => (
				<AccordionItem value={employee.id}>
					<AccordionTrigger>
						{employee.first_name} {employee.last_name}
					</AccordionTrigger>
					<AccordionContent>
						<h3>
							{employee.first_name} {employee.last_name}
						</h3>
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
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}

export default EmployeesList;
