import type { RestaurantLocations } from "@/types/RestaurantLocation";
import EmployeesList from "@/components/EmployeesList";
import {
	Accordion,
	AccordionTrigger,
	AccordionContent,
	AccordionItem,
} from "@/components/ui/accordion";

function RestaurantLocationsList({
	restaurantLocations,
}: { restaurantLocations: RestaurantLocations }) {
	return (
		<Accordion type="single" collapsible>
			{restaurantLocations?.map((restaurantLocation) => (
				<AccordionItem value={restaurantLocation.name}>
					<AccordionTrigger>{restaurantLocation.name}</AccordionTrigger>
					<AccordionContent>
						<h2>{restaurantLocation.name}</h2>
						<p>Address: {restaurantLocation.address}</p>
						<p>City: {restaurantLocation.city}</p>
						<p>State: {restaurantLocation.state}</p>
						<p>Zip Code: {restaurantLocation.zip_code}</p>
						<p>Is Open: {restaurantLocation.is_open ? "Yes" : "No"}</p>
						<p>
							Has Drive Thru: {restaurantLocation.has_drive_thru ? "Yes" : "No"}
						</p>
						<h2>Employees</h2>
						<EmployeesList employees={restaurantLocation.employees} />
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}

export default RestaurantLocationsList;
