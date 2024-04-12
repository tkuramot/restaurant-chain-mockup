# frozen_string_literal: true

class User
  include FileConvertible, RandomGenerator
  attr_accessor :id, :first_name, :last_name, :email, :hashed_password,
                :phone_number, :address, :birth_date, :membership_expiration_date, :role

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
    role
  )
    self.id = id
    self.first_name = first_name
    self.last_name = last_name
    self.email = email
    self.hashed_password = hashed_password
    self.phone_number = phone_number
    self.address = address
    self.birth_date = birth_date
    self.membership_expiration_date = membership_expiration_date
    self.role = role
  end

  def login(password)
    BCrypt::Password.create(password) == self.hashed_password
  end

  def renew_membership(expiration_date)
    self.membership_expiration_date = expiration_date
  end

  def has_membership_expired?
    self.membership_expiration_date < Time.now
  end

  def to_string
    "ID: #{self.id}\n
    Name: #{self.first_name} #{self.last_name}\n
    Email: #{self.email}\n
    Phone Number: #{self.phone_number}\n
    Address: #{self.address}\n
    Birth Date: #{self.birth_date}\n
    Membership Expiration Date: #{self.membership_expiration_date}\n
    Role: #{self.role}"
  end

  def to_html
    "<div class='user-card'>
        <div class='avatar'>SAMPLE</div>
        <h2>#{self.first_name} #{self.last_name}</h2>
        <p>Email: #{self.email}</p>
        <p>Phone Number: #{self.phone_number}</p>
        <p>Address: #{self.address}</p>
        <p>Birth Date: #{self.birth_date}</p>
        <p>Membership Expiration Date: #{self.membership_expiration_date}</p>
        <p>Role: #{self.role}</p>
      </div>"
  end

  def to_markdown
    "## User: #{self.first_name} #{self.last_name}
    Email: #{self.email}
    Phone Number: #{self.phone_number}
    Address: #{self.address}
    Birth Date: #{self.birth_date}
    Membership Expiration Date: #{self.membership_expiration_date}
    Role: #{self.role}"
  end

  def to_array
    [self.id, self.first_name, self.last_name, self.email,
     self.phone_number, self.address, self.birth_date, self.membership_expiration_date, self.role]
  end

  def to_json
    {
      id: self.id,
      first_name: self.first_name,
      last_name: self.last_name,
      email: self.email,
      phone_number: self.phone_number,
      address: self.address,
      birth_date: self.birth_date,
      membership_expiration_date: self.membership_expiration_date,
      role: self.role
    }.to_json
  end

  def self.generate
    User.new(
      Faker::Number.number(digits: 10),
      Faker::Name.first_name,
      Faker::Name.last_name,
      Faker::Internet.email,
      BCrypt::Password.create(Faker::Internet.password),
      Faker::PhoneNumber.cell_phone,
      Faker::Address.full_address,
      Faker::Date.birthday(min_age: 18, max_age: 65),
      Faker::Date.forward(days: 365),
      %w['admin', 'user', 'editor'].sample
    )
  end
end
