import type { RestaurantLocations } from "@/types/RestaurantLocation";
import EmployeesList from "@/components/EmployeesList";

function RestaurantLocationsList({
	restaurantLocations,
}: { restaurantLocations: RestaurantLocations }) {
	return (
		<ol>
			{restaurantLocations?.map((restaurantLocation) => (
				<div className="pb-3">
					<li className="text-bold text-lg underline">
						{restaurantLocation.name}
					</li>
					<li>
						Employees:
						<EmployeesList employees={restaurantLocation.employees} />
					</li>
				</div>
			))}
		</ol>
	);
}

export default RestaurantLocationsList;
