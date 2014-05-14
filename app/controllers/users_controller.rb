class UsersController < ApplicationController

	def index
	end

	def new
		@new_user = User.new
	end

	def create
		@new_user = User.new(user_params)
		if @new_user.save
			redirect_to sessions_path, error: "You signed up!"
		else
			render :new, error: "Change something!"
		end
	end

	def show
		@user = User.find(params[:id])
	end

	private

	def user_params
		params.require(:user).permit!
	end
end
