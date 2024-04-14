import type { Company } from "./Company";
import type { RestaurantLocations } from "./RestaurantLocation";

type RestaurantChain = Company & {
	chain_id: number;
	restaurant_locations: RestaurantLocations;
	cuisine_type: string;
	number_of_locations: number;
	parent_company: string;
};

type RestaurantChains = RestaurantChain[];

export type { RestaurantChain, RestaurantChains };
