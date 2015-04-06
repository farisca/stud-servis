class SignUpNotifier < ActionMailer::Base
  
  default from: "test.atlant@gmail.com"

  def registrated(korisnik)
  	@student = korisnik
    mail(:to => @student.email)
  end
end
