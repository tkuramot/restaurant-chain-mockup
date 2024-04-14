import type { RestaurantChains } from '../types/RestaurantChain'
import useFetchData from '../hooks/useFetchData'
import RestaurantLocationsList from './RestaurantLocationsList'

function RestaurantChainsList() {
  const restaurantChains = useFetchData<RestaurantChains>('/api/restaurant_chains')
  return (
    <div>
      {restaurantChains?.map((restaurantChain) => (
        <div key={restaurantChain.chain_id}>
          <h2>{restaurantChain.name}</h2>
          <p>Founding year: {restaurantChain.founding_year}</p>
          <p>Description: {restaurantChain.description}</p>
          <p>Website: {restaurantChain.website}</p>
          <p>Phone: {restaurantChain.phone}</p>
          <p>Industry: {restaurantChain.industry}</p>
          <p>CEO: {restaurantChain.ceo}</p>
          <p>Is publicly traded: {restaurantChain.is_publicly_traded ? 'Yes' : 'No'}</p>
          <p>Country: {restaurantChain.country}</p>
          <p>Founder: {restaurantChain.founder}</p>
          <p>Total employees: {restaurantChain.total_employees}</p>
          <p>Chain ID: {restaurantChain.chain_id}</p>
          <RestaurantLocationsList restaurantLocations={restaurantChain.restaurant_locations} />
          <p>Cuisine type: {restaurantChain.cuisine_type}</p>
          <p>Number of locations: {restaurantChain.number_of_locations}</p>
          <p>Parent company: {restaurantChain.parent_company}</p>
        </div>
      ))}
    </div>
  )
}

export default RestaurantChainsList
