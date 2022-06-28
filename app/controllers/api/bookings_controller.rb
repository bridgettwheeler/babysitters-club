class Api::BookingsController < ApplicationController
    def index
      if params[:user_id]
        user = User.find(params[:user_id])
        bookings = user.bookings
      else
        bookings = Booking.all
      end
      render json: bookings, include: :user
      end
    
      def create
        kid = @current_user.created_kids.find_or_create_by!(first_name: params[:kid][:first_name]) do |kid| 
          kid.last_name = params[:kid][:last_name]
          kid.age = params[:kid][:age]
        end
        booking = @current_user.bookings.create!(kid:kid, date: params[:booking][:date])
        render json: booking, include: :kid, status: :created
      end

      def show
        booking = Booking.find_by(id:params[:id])
        if booking
        render json: booking
        else
          render json: "No booking found"
        end
      end

      def update
        booking = Booking.find_by(id:params[:id])
        if booking&.update(booking_params)
        render json: booking
        else
          render json: {errors: booking.errors.full_messages.to_sentence}
        end
      end

      def destroy
        booking = Booking.find_by(id: params[:id])
        booking.destroy
        head :no_content
      end

    
      private
    
      def booking_params
        params.require(:booking).permit(:kid_id, :date)

      end

      def kid_params
        params.require(:kid).permit(:first_name, :last_name, :age)
      end

      
end


end
