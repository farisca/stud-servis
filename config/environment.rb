# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
    :address        => 'smtp.gmail.com',
    :domain         => '',
    :port           => 587,
    :user_name      => 'test.atlant@gmail.com',
    :password       => 'Koliko12',
    :authentication => :plain
}