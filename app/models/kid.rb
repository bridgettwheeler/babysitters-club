class Kid < ApplicationRecord
    has_many :bookings
    belongs_to :parent
    has_many :babysitters, through: :bookings
end
