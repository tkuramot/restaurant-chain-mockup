# frozen_string_literal: true

class RestaurantLocation
  include FileConvertible, RandomGenerator
  attr_accessor :name, :address, :city, :zip_code, :employees, :is_open, :has_drive_thru

  def initialize(name, address, city, zip_code, employees, is_open, has_drive_thru)
    self.name = name
    self.address = address
    self.city = city
    self.zip_code = zip_code
    self.employees = employees
    self.is_open = is_open
    self.has_drive_thru = has_drive_thru
  end

  def to_string
    "#{self.name} - #{self.address}, #{self.city}, #{self.zip_code}\n
    Employees: #{self.employees}\n
    Open: #{self.is_open}\n
    Drive Thru: #{self.has_drive_thru}"
  end

  def to_html
    "<h3>#{self.name}</h3>
    <p>#{self.address}, #{self.city}, #{self.zip_code}</p>
    <p>Employees: #{self.employees}</p>
    <p>Open: #{self.is_open}</p>
    <p>Drive Thru: #{self.has_drive_thru}</p>"
  end

  def to_markdown
    "### #{self.name}
    #{self.address}, #{self.city}, #{self.zip_code}
    Employees: #{self.employees}
    Open: #{self.is_open}
    Drive Thru: #{self.has_drive_thru}"
  end

  def to_array
    [self.name, self.address, self.city, self.zip_code, self.employees, self.is_open, self.has_drive_thru]
  end

  def to_hash
    {
      name: self.name,
      address: self.address,
      city: self.city,
      zip_code: self.zip_code,
      employees: self.employees.map(&:to_hash),
      is_open: self.is_open,
      has_drive_thru: self.has_drive_thru
    }
  end

  class << self
    def generate(min = 1, max = 5)
      (1..rand(min..max)).map { generate_one }
    end

    private

    def generate_one
      RestaurantLocation.new(
        Faker::Company.name,
        Faker::Address.street_address,
        Faker::Address.city,
        Faker::Address.zip_code,
        Employee.generate(1, 10),
        [true, false].sample,
        [true, false].sample
      )
    end
  end
end
