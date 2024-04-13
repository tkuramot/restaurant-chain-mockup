# frozen_string_literal: true

class RestaurantChain < Company
  attr_accessor :chain_id, :restaurant_locations, :cuisine_type, :number_of_locations, :parent_company

  def initialize(
    name,
    founding_year,
    description,
    website,
    phone,
    industry,
    ceo,
    is_publicly_traded,
    country,
    founder,
    total_employees,
    chain_id,
    restaurant_locations,
    cuisine_type,
    number_of_locations,
    parent_company
  )
    super(
      name,
      founding_year,
      description,
      website,
      phone,
      industry,
      ceo,
      is_publicly_traded,
      country,
      founder,
      total_employees
    )
    self.chain_id = chain_id
    self.restaurant_locations = restaurant_locations
    self.cuisine_type = cuisine_type
    self.number_of_locations = number_of_locations
    self.parent_company = parent_company
  end

  def to_string
    super + "\n
    Chain ID: #{self.chain_id}\n
    Restaurant Locations: #{self.restaurant_locations}\n
    Cuisine Type: #{self.cuisine_type}\n
    Number of Locations: #{self.number_of_locations}\n
    Parent Company: #{self.parent_company}"
  end

  def to_html
    super + "<p>Chain ID: #{self.chain_id}</p>
    <p>Restaurant Locations: #{self.restaurant_locations}</p>
    <p>Cuisine Type: #{self.cuisine_type}</p>
    <p>Number of Locations: #{self.number_of_locations}</p>
    <p>Parent Company: #{self.parent_company}</p>"
  end

  def to_markdown
    super + "\n
    Chain ID: #{self.chain_id}\n
    Restaurant Locations: #{self.restaurant_locations}\n
    Cuisine Type: #{self.cuisine_type}\n
    Number of Locations: #{self.number_of_locations}\n
    Parent Company: #{self.parent_company}"
  end

  def to_array
    super.to_array + [
      self.chain_id,
      self.restaurant_locations,
      self.cuisine_type,
      self.number_of_locations,
      self.parent_company
    ]
  end

  def to_hash
    super.to_hash.merge(
      chain_id: self.chain_id,
      restaurant_locations: self.restaurant_locations,
      cuisine_type: self.cuisine_type,
      number_of_locations: self.number_of_locations,
      parent_company: self.parent_company
    )
  end

  class << self
    def generate(min = 1, max = 5)
      (1..rand(min..max)).map { generate_one }
    end

    private

    def generate_one
      RestaurantChain.new(
        Faker::Company.name,
        Faker::Number.number(digits: 4),
        Faker::Company.bs,
        Faker::Internet.url,
        Faker::PhoneNumber.phone_number,
        Faker::Company.industry,
        Faker::Name.name,
        Faker::Boolean.boolean,
        Faker::Address.country,
        Faker::Name.name,
        Faker::Number.number(digits: 4),
        Faker::Address.country,
        RestaurantLocation.generate(1, 5),
        Faker::Number.number(digits: 4),
        Faker::Restaurant.type,
        Faker::Boolean.boolean,
      )
    end
  end
end
