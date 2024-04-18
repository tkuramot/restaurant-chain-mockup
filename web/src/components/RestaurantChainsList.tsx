import type { RestaurantChains } from "@/types/RestaurantChain";
import useFetchData from "@/hooks/useFetchData";
import RestaurantLocationsList from "@/components/RestaurantLocationsList";
import {
	Card,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

function RestaurantChainsList() {
	const restaurantChains = useFetchData<RestaurantChains>(
		"/api/restaurant_chains",
	);
	return (
		<div className="grid grid-cols-12 items-center p-10">
			{restaurantChains?.map((restaurantChain) => (
				<div key={restaurantChain.name} className="col-span-10 md:col-span-8 py-6">
					<div className="bold text-center text-4xl">
						{restaurantChain.name}
					</div>
					<Card key={restaurantChain.name} className="mt-3">
						<CardHeader>
							<CardTitle>Restaurant Chain Information</CardTitle>
						</CardHeader>
						<RestaurantLocationsList
							restaurantLocations={restaurantChain.restaurant_locations}
						/>
					</Card>
				</div>
			))}
		</div>
	);
}

export default RestaurantChainsList;
