import type { Employees } from "./Employee";

type RestaurantLocation = {
  name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  employees: Employees;
  is_open: boolean;
  has_drive_thru: boolean;
};

type RestaurantLocations = RestaurantLocation[];

export type { RestaurantLocation, RestaurantLocations };
