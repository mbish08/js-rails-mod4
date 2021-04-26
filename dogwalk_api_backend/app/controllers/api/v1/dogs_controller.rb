class Api::V1::DogsController < ApplicationController

    def index
        dogs = Dog.all
        render json: DogSerializer.new(dogs)
    end

    def create
        dog = Dog.new(dog_params)
        if dog.save
            render json: dog, status: :accepted
        else
            render json: { errors: dog.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        dog = Dog.find(params[:id])
        dog.destroy
        render json: {message: "#{dog.name} has been deleted."}
    end

    private 

    def dog_params
        params.require(:dog).permit(:name, :breed, :weight, :allergies, :behaviors, :meds, :vet_info, :age, :owner_id)
    end

end