class BookingSerializer < ActiveModel::Serializer
  attributes :id, :user, :date, :babysitter
end
