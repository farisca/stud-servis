class StudentsController < ApplicationController
  	
  def new
  	@student = Student.new
  end

  def create
  	@student = Student.new(student_params)
  	@student.post
  end

  def show
  	@student = Student.find(params[:id])
  end

  def update
  	is_updated = @student.put(user_params)
  	render json: { error: is_updated }
  end

  def destroy
  	is_deleted = @student.delete(@student.id)
  	render json: { error: is_deleted } 
  end

  private
    def student_params
      params.require(:student).permit(:student_id, :name, :surname, :location, :university, :faculty, :cv, :user)
    end

end
