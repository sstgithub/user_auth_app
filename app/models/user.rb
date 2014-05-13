class User < ActiveRecord::Base
	has_secure_password

	validates_presence_of :email
	# validates_uniqueness_of :email

	after_create :send_welcome_message_to_all

	def send_welcome_message_to_all
		UserMailer.welcome_message_to_group(User.all)
	end

end
