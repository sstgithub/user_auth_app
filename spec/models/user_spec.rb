require 'spec_helper'

describe User do

	it 'should send a welcome message after registration' do
		n = FactoryGirl.create(:user)
		n.save

		
	end
end