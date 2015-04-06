class StudentsController < ApplicationController
  
  before_action :set_student, only: [:show, :edit, :update, :destroy]

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
    @st = Student.new
    
    is_added = @st.create_student(params["name"], params["surname"], params["email"], params["password"], params["password_confirmation"])
    
    if is_added==false
      log_in @user
      return render json: { error: is_added }
    else 
      
      @student = User.find_by(email: params["email"])
      SignUpNotifier.registrated(@student).deliver

      return render json: { error: "OK" }
    end
  end

  def send_to_payment
    redirect_to home_path
  end


  def show
    @student = Student.find(params[:id])
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
