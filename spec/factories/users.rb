FactoryGirl.define do

	factory :user do |u|
		u.user_name "Test User"
		u.email "sstantia@gmail.com"
		u.password_digest "password"
	end
end