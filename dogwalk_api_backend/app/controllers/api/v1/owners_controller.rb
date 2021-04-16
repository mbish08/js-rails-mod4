class Api::V1::OwnersController < ApplicationController

    def index
        owners = Owner.all
        render json: OwnerSerializer.new(owners, {include: [:dogs]})
    end

    def create
        owner = Owner.new(owner_params)
        if owner.save
            render json: owner, status: :accepted
        else
            render json: { errors: owner.errors.full_messages }
        end
    end

    def destroy
        owner = Owner.find(params[:id])
        owner.destroy
        render json: {message: "#{owner.name} has been deleted."}
    end

    private

    def owner_params
        params.require(:owner).permit(:name)
    end

end
