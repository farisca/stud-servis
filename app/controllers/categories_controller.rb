class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :edit, :update, :destroy]

  # GET /categories/1
  # GET /categories/1.json
  def getAllCategories
    render json: Category.all
  end
  def show
    @category = Category.find(params[:id])
    render json: @category
  end

  # POST /categories
  # POST /categories.json
  def add_category
     u = Category.find_by(name: params["name"])
    if !u.nil?
      return render json: { error: "Category already exists!" } 
    else
      
    category = Category.new
    category.name=params["name"]
    category.save
    return render json: { error: "OK" }
  end
  end

  # PATCH/PUT /categories/1
  # PATCH/PUT /categories/1.json
  def update
    respond_to do |format|
      if @category.update(category_params)
        format.json { render :show, status: :ok, location: @category }
      else
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /categories/1
  # DELETE /categories/1.json
  def destroy
    @category.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

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
