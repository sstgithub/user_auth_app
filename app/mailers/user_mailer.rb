class UserMailer < ActionMailer::Base
	default from: "tiyappmailer@gmail.com"

	def welcome_message(user)
		@user = user

		mail(to: user.email, subject: "Welcome to our Awesome Site!")
	end

	def self.welcome_message_to_group(group)
		group.each do |user|
			UserMailer.welcome_message(user).deliver
		end
	end
end