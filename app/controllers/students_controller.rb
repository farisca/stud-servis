class StudentsController < ApplicationController
  
  before_action :set_student, only: [:edit, :update, :destroy]

  skip_before_action :verify_authenticity_token

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)
    respond_to do |format|
      if @student.save
        format.json { render json: @student, status: :created, location: @student }
        SignUpNotifier.registrated(@student).deliver
      else
        format.json { render json: @student.errors, status: :unprocessable_entity }
      end
    end
  end

  def add_student
    
    u = User.find_by(email: params["email"])
    if !u.nil?
      return render json: { error: "Korisnik već postoji!" } 
    else

      user = User.new
      user.email = params["email"]
      user.password = params["password"]
      user.password_confirmation = params["password_confirmation"]
      
      if user.save

        student = Student.new
        student.name = params["name"]
        student.surname = params["surname"]
        student.user_id = user.id

        if student.save
          
          SignUpNotifier.registrated(user).deliver
          return render json: { error: student }
        end

      end
    end

  end

  def send_to_payment
    redirect_to home_path
  end

  before_action :set_current_user, :authenticate_request, only: [:show]
  def show
    @student = Student.find_by(user_id: current_user.id)
    render json: @student
  end

  def update
    respond_to do |format|
      if @student.update(student_params)
        format.json { render :show, status: :ok, location: @student }
      else
        format.json { render json: @student.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @student.destroy
    respond_to do |format|
      format.json { head :no_content, status: :deleted }
    end
  end

  def proba
    student = Student.new
    student.name="ajdin"
    student.post
  end

  private
    def student_params
      params.require(:student).permit(:name, :surname, :location_id, :university, :faculty, :cv, :user_id)
    end

    def set_student
    @student = Student.find(params[:id])
  end 
end
