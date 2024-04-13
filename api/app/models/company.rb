# frozen_string_literal: true

class Company
  include FileConvertible, RandomGenerator
  attr_accessor :name, :founding_year, :description, :website, :phone, :industry, :ceo,
                :is_publicly_traded, :country, :founder, :total_employees

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
    total_employees
  )
    self.name = name
    self.founding_year = founding_year
    self.description = description
    self.website = website
    self.phone = phone
    self.industry = industry
    self.ceo = ceo
    self.is_publicly_traded = is_publicly_traded
    self.country = country
    self.founder = founder
    self.total_employees = total_employees
  end

  def to_string
    "Name: #{self.name}\n
    Founding Year: #{self.founding_year}\n
    Description: #{self.description}\n
    Website: #{self.website}\n
    Phone: #{self.phone}\n
    Industry: #{self.industry}\n
    CEO: #{self.ceo}\n
    Publicly Traded: #{self.is_publicly_traded}\n
    Country: #{self.country}\n
    Founder: #{self.founder}\n
    Total Employees: #{self.total_employees}"
  end

  def to_html
    "<p>Name: #{self.name}</p>
    <p>Founding Year: #{self.founding_year}</p>
    <p>Description: #{self.description}</p>
    <p>Website: #{self.website}</p>
    <p>Phone: #{self.phone}</p>
    <p>Industry: #{self.industry}</p>
    <p>CEO: #{self.ceo}</p>
    <p>Publicly Traded: #{self.is_publicly_traded}</p>
    <p>Country: #{self.country}</p>
    <p>Founder: #{self.founder}</p>
    <p>Total Employees: #{self.total_employees}</p>"
  end

  def to_markdown
    "Name: #{self.name}\n
    Founding Year: #{self.founding_year}\n
    Description: #{self.description}\n
    Website: #{self.website}\n
    Phone: #{self.phone}\n
    Industry: #{self.industry}\n
    CEO: #{self.ceo}\n
    Publicly Traded: #{self.is_publicly_traded}\n
    Country: #{self.country}\n
    Founder: #{self.founder}\n
    Total Employees: #{self.total_employees}"
  end

  def to_array
    [self.name, self.founding_year, self.description, self.website, self.phone, self.industry,
     self.ceo, self.is_publicly_traded, self.country, self.founder, self.total_employees]
  end

  def to_hash
    {
      name: self.name,
      founding_year: self.founding_year,
      description: self.description,
      website: self.website,
      phone: self.phone,
      industry: self.industry,
      ceo: self.ceo,
      is_publicly_traded: self.is_publicly_traded,
      country: self.country,
      founder: self.founder,
      total_employees: self.total_employees
    }
  end

  class << self
    def generate(min = 1, max = 5)
      (1..rand(min..max)).map { generate_one }
    end

    private

    def generate_one
      Company.new(
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
        Faker::Number.number(digits: 4)
      )
    end
  end
end
