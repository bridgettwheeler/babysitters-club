class Kid < ApplicationRecord
    belongs_to :parent
    
def bookings
    self.parent.bookings
end
    
end
