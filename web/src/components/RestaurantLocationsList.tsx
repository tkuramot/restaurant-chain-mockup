import type { RestaurantLocations } from "@/types/RestaurantLocation";
import EmployeesList from "@/components/EmployeesList";

function RestaurantLocationsList({
	restaurantLocations,
}: { restaurantLocations: RestaurantLocations }) {
	return (
		<div>
			{restaurantLocations?.map((restaurantLocation) => (
				<div key={restaurantLocation.name}>
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
				</div>
			))}
		</div>
	);
}

export default RestaurantLocationsList;
