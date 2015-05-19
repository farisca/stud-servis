@lc = Location.new
@lc.city = 'Sarajevo'
@lc.save

Location.create([{city: 'Mostar'}])
Location.create([{city: 'Tuzla'}])
Location.create([{city: 'Banja Luka'}])
@us = User.new
@us.username = 'proba'
@us.email = 'admin@etf.ba'
@us.role = 2
@us.active = 1
@us.password_digest = '$2a$10$sV5etH1BX7KoyYBeag3Sveem2Rzz2HP5Wft9r6TUUwkb9BgqSYqwa'
@us.banned = false
@us.save

@us = User.new
@us.username = 'proba'
@us.email = 'company@etf.ba'
@us.role = 1
@us.active = 1
@us.password_digest = '$2a$10$sV5etH1BX7KoyYBeag3Sveem2Rzz2HP5Wft9r6TUUwkb9BgqSYqwa'
@us.banned = false
@us.save

@cp = Company.new
@cp.user = @us
@cp.name = 'Authority Partners'
@cp.location = @lc
@cp.save

@ct = Category.new
@ct.name = "IT"
@ct.save