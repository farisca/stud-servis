class AuthToken
  def self.encode(payload, exp=24.hours.from_now)
  payload[:exp] = exp.to_i
  JWT.encode(payload, Rails.application.secrets.secret_key_base)
end
  def self.decode(token)
    payload = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
    DecodedAuthToken.new(payload)
  rescue
    nil # It will raise an error if it is not a token that was generated with our secret key or if the user changes the contents of the payload
  end
end

# We could just return the payload as a hash, but having keys with indifferent access is always nice, plus we get an expired? method that will be useful later
class DecodedAuthToken < HashWithIndifferentAccess
  def expired?
    self[:exp] <= Time.now.to_i
  end
end
class NotAuthenticatedError < StandardError
end
class AuthenticationTimeoutError < StandardError
end

class ApplicationController < ActionController::Base
  
 
    include SessionsHelper


 
  def login
  end

  def index
  end

  private

  # Based on the user_id inside the token payload, find the user.
  def set_current_user
    if decoded_auth_token
      @current_user ||= User.find(decoded_auth_token[:user_id])
    end
  end

  # Check to make sure the current user was set and the token is not expired
  def authenticate_request
    if auth_token_expired?
      fail AuthenticationTimeoutError
    elsif !@current_user
      render json: { error: "401" }, status: :unauthorized
    end
  end

  def decoded_auth_token
    @decoded_auth_token ||= AuthToken.decode(http_auth_header_content)
  end

  def auth_token_expired?
    decoded_auth_token && decoded_auth_token.expired?
  end

  # JWT's are stored in the Authorization header using this format:
  # Bearer somerandomstring.encoded-payload.anotherrandomstring
  def http_auth_header_content
    return @http_auth_header_content if defined? @http_auth_header_content
    @http_auth_header_content = begin
      if request.headers['Authorization'].present?
        request.headers['Authorization'].split(' ').last
      else
        nil
      end
    end
  end
end
