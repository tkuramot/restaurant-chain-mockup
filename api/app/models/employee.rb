# frozen_string_literal: true

class Employee < User
  include FileConvertible, RandomGenerator
  attr_accessor :job_title, :salary, :start_date, :awards

  def initialize(
    id,
    first_name,
    last_name,
    email,
    hashed_password,
    phone_number,
    address,
    birth_date,
    membership_expiration_date,
    role,
    job_title,
    salary,
    start_date,
    awards
  )
    super(id, first_name, last_name, email, hashed_password, phone_number,
          address, birth_date, membership_expiration_date, role)
    self.job_title = job_title
    self.salary = salary
    self.start_date = start_date
    self.awards = awards
  end

  def to_string
    super +
      "Job Title: #{self.job_title}\n
    Salary: #{self.salary}\n
    Start Date: #{self.start_date}\n
    Awards: #{self.awards}"
  end

  def to_html
    super + "<p>Job Title: #{self.job_title}</p>
    <p>Salary: #{self.salary}</p>
    <p>Start Date: #{self.start_date}</p>
    <p>Awards: #{self.awards}</p>"
  end

  def to_markdown
    super +
      "Job Title: #{self.job_title}\n
      Salary: #{self.salary}\n
      Start Date: #{self.start_date}\n
      Awards: #{self.awards}"
  end

  def to_array
    super.to_array + [self.job_title, self.salary, self.start_date, self.awards]
  end

  def to_hash
    super.to_hash.merge(
      job_title: self.job_title,
      salary: self.salary,
      start_date: self.start_date,
      awards: self.awards
    )
  end

  class << self
    def generate(min = 1, max = 5)
      (1..rand(min..max)).map {  generate_one }
    end

    private

    def generate_one
      Employee.new(
        Faker::Number.number(digits: 10),
        Faker::Name.first_name,
        Faker::Name.last_name,
        Faker::Internet.email,
        Faker::Internet.password,
        Faker::PhoneNumber.cell_phone,
        Faker::Address.full_address,
        Faker::Date.birthday(min_age: 18, max_age: 65),
        Faker::Date.forward(days: 365),
        'Employee',
        Faker::Company.profession,
        Faker::Number.number(digits: 5),
        Faker::Date.backward(days: 365),
        rand(1..4).times.map { ['Employee of the Month', 'Top Performer', 'Most Improved', 'Best Team Player'].sample }
      )
    end
  end
end
