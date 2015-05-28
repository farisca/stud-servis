class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :edit, :update, :destroy]

  ##################################################################################################################
  # GETTERS AND SETTERS
  ##################################################################################################################
  # GET all categories
  def getAllCategories
    render json: Category.all
  end

  # GET a category
  def show
    @category = Category.find(params[:id])
    render json: @category
  end

  # CREATE a category
  def add_category
    u = Category.find_by(name: params["name"])
    if !u.nil?
      return render json: { error: "Category already exists!" } 
    else
      
    category = Category.new
    category.name = params["name"]
    category.save
    return render json: { error: "OK" }
  end
  end

  # DESTROY category
  def destroy
    @category.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  ##################################################################################################################
  # PRIVATE
  ##################################################################################################################
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def category_params
      params.require(:category).permit(:name)
    end
end
