class SignUpNotifier < ActionMailer::Base
  
  default from: "test.atlant@gmail.com"

  def registrated(korisnik)
    mail to: studkorisnik.user.email
  end
end
