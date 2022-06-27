class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :babysitter
    belongs_to :kid
end
