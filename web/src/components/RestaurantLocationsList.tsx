import type { RestaurantLocations } from "@/types/RestaurantLocation";
import EmployeesList from "@/components/EmployeesList";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

function RestaurantLocationsList({
	restaurantLocations,
}: { restaurantLocations: RestaurantLocations }) {
	return (
		<Accordion type="single" collapsible className="px-4">
			{restaurantLocations?.map((restaurantLocation) => (
				<AccordionItem
					value={restaurantLocation.name}
					key={restaurantLocation.name}
				>
					<div className="pb-3" key={restaurantLocation.name}>
						<AccordionTrigger>
							{restaurantLocation.name}
						</AccordionTrigger>
						<AccordionContent className="px-4">
							<EmployeesList employees={restaurantLocation.employees} />
						</AccordionContent>
					</div>
				</AccordionItem>
			))}
		</Accordion>
	);
}

export default RestaurantLocationsList;
