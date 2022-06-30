class Api::BabysittersController < ApplicationController
    def index
        render json: Babysitter.all 
    end
end
