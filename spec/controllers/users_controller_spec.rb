require 'spec_helper'

describe UsersController do
	describe 'get show' do
		it 'should assign user to @user' do
			user = FactoryGirl.create(:user)
			get :show, id: user.id
			assigns(:user).should eq(user)
		end
	end

	describe 'post create' do
		it 'should create a new user' do
		end
	end
end