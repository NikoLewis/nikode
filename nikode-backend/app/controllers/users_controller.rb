class UsersController < ApplicationController


  def gen_token(user_id)
    payload = {id: user_id}
    JWT.encode(payload, Rails.application.secrets.secret_key_base) 
  end

  def create
    username = params[:username]
    password = params[:password]

    new_user = User.new({
      password: password,
      username: username
    })


    if new_user.valid?
      new_user.save!
      render json: {user: new_user, token: gen_token(new_user.id)}
    else
      render nothing: true, status: 401
    end
  end

  def index
    @users = User.all
  end

  def is_logged_in
    if current_user
      render json: current_user
    else render nothing: true, status: 401
    end
  end

  def login
    username = params[:username]
    password = params[:password]

    user = User.find_from_credentials username, password
    if user.nil?
      render nothing: true, status: 401
    else 
      render json: {user: user, token: gen_token(user.id)}
    end
  end
end