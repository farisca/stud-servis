class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :edit, :update, :destroy]

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

  private
    def student_params
      params.require(:student).permit(:name, :surname, :location_id, :university, :faculty, :cv, :user_id)
    end

    def set_student
    @student = Student.find(params[:id])
  end 
end
