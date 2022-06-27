class Babysitter < ApplicationRecord
    has_many :bookings
    has_many :users, through: :bookings
    has_many :kids, through: :bookings

    validates :name, presence: true
end
