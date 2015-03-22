
class User < ActiveRecord::Base

  def get(id_user)
  	user = User.find_by(id: id_user)

  	user
  end

  def post
  	self.save
  end

  def put (id_user, username, email, role, active) 
  	user = User.find_by(id: id_user)
  	if !username.nil?
  		user.username = username
  	end
  	if !email.nil?
  		user.email = email
  	end
  	if !active.nil?
  		user.active = active
  	end
  	if user.save
      return true
    end

    false
  end

  def delete (id_user) #brisanje po user id
  	user = User.find_by(id: id_user)
  	if user.destroy
      return true
    end

    false
  end

end
