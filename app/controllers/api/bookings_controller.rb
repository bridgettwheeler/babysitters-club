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

    #   I want this to post the selected babysitter id, the current user's id, their associated kids id, and the appointment date to the booking table.
   
    def create
        booking = @current_user.bookings.create!(booking_params)
        render json: booking, status: :created
      end
    
    #   def create
    #     kid = @current_user.created_kids.find_or_create_by!(first_name: params[:kid][:first_name], last_name: params[:kid][:last_name]) do |kid| 
    #       kid.age = params[:kid][:age]
    #     end
    #     booking = @current_user.bookings.create!(kid:kid, date: params[:booking][:date])
    #     render json: booking, include: :kid, status: :created
    #   end

      def show
        booking = Booking.find_by!(id:params[:id])
        render json: booking
      end

      def update
        booking = Booking.find_by!(id:params[:id])
        booking.update!(booking_params)
        render json: booking
      end

      def destroy
        booking = Booking.find_by(id: params[:id])
        booking.destroy
        head :no_content
      end

    
      private
    
      def booking_params
        params.require(:booking).permit(:babysitter_id, :user_id, :date)

      end

    #   def kid_params
    #     params.require(:kid).permit(:first_name, :last_name, :age)
    #   end

      
end


end
