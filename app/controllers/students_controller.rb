class StudentsController < ApplicationController
  	
  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)
    respond_to do |format|
      if @student.save
        format.json { render json: @student, status: :created, location: @student }
      else
        format.json { render json: @student.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
    @student = Student.find(params[:id])
    render json: @student
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
      params.require(:student).permit(:name, :surname, :location, :university, :faculty, :cv, :user)
    end

end
