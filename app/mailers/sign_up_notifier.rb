class SignUpNotifier < ActionMailer::Base
  
  default from: "test.atlant@gmail.com"

  def registrated(korisnik)
  	@student = korisnik
    mail(:to => @student.email)
  end

  def password_change(korisnik, sifra)
  	@user = korisnik
  	@sifra = sifra
    mail(:to => @user.email)
  end
end
