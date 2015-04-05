class SignUpNotifier < ActionMailer::Base
  include SessionsHelper

  default from: "test.atlant@gmail.com"

  def registrated(user)
    mail to: user.email
  end
end
