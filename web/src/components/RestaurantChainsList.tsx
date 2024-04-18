import type { RestaurantChains } from "@/types/RestaurantChain";
import useFetchData from "@/hooks/useFetchData";
import RestaurantLocationsList from "@/components/RestaurantLocationsList";

function RestaurantChainsList() {
	const restaurantChains = useFetchData<RestaurantChains>(
		"/api/restaurant_chains",
	);
	return (
		<div className="grid grid-cols-12 justify-center p-10">
			{restaurantChains?.map((restaurantChain) => (
				<div
					key={restaurantChain.name}
					className="col-start-2 md:col-start-3 col-span-10 md:col-span-8 py-6"
				>
					<div className="bold text-center text-4xl">
						{restaurantChain.name}
					</div>
					<div className="border-2 border-zinc-200 rounded-sm mt-3">
						<div className="border-b border-zinc-200 bg-slate-200 px-3 py-3">
							Restaurant Chain Information
						</div>
						<div className="px-4 pt-3">
							<RestaurantLocationsList
								restaurantLocations={restaurantChain.restaurant_locations}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default RestaurantChainsList;
