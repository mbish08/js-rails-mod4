class Api::V1::DogsController < ApplicationController

    def index
        dogs = Dog.all
        render json :dogs
    end

    def create
        dog = Dog.new(dog_params)
    end

    private 

    def dog_params
        params.require(:dog).permit(:name, :breed, :weight, :allergies, :behaviors, :meds, :vet_info, :age, :owner_id)
    end
    
end