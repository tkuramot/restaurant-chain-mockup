import type { RestaurantChains } from "@/types/RestaurantChain";
import useFetchData from "@/hooks/useFetchData";
import RestaurantLocationsList from "@/components/RestaurantLocationsList";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

function RestaurantChainsList() {
	const restaurantChains = useFetchData<RestaurantChains>(
		"/api/restaurant_chains",
	);
	return (
		<Accordion type="single" collapsible>
			{restaurantChains?.map((restaurantChain) => (
				<AccordionItem value={restaurantChain.chain_id.toString()}>
					<AccordionTrigger className="text-xl text-blue-500 bg-slate-200 px-4">
						{restaurantChain.name}
					</AccordionTrigger>
					<AccordionContent>
						<ul className="text-lg p-3">
							<li>Description: {restaurantChain.description}</li>
							<li>Website: {restaurantChain.website}</li>
							<li>Phone: {restaurantChain.phone}</li>
							<li>CEO: {restaurantChain.ceo}</li>
							<li>Country: {restaurantChain.country}</li>
							<li>Total employees: {restaurantChain.total_employees}</li>
							<li>Cuisine type: {restaurantChain.cuisine_type}</li>
						</ul>
						<p className="text-lg p-3">
							<RestaurantLocationsList
								restaurantLocations={restaurantChain.restaurant_locations}
							/>
						</p>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}

export default RestaurantChainsList;
