class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :edit, :update, :destroy]

  # GET /locations/1
  # GET /locations/1.json


  def getAllLocations
    render json: Location.all
  end
  # POST /locations
  # POST /locations.json
  def add_location
    
     u = Location.find_by(city: params["city"])
    if !u.nil?
      return render json: { error: "Location already exists!" } 
    else
      
    location = Location.new
    location.city=params["city"]
    location.save
    return render json: { error: "OK" }
  end
  end

  # PATCH/PUT /locations/1
  # PATCH/PUT /locations/1.json
  def update
    respond_to do |format|
      if @location.update(location_params)
        format.json { render :show, status: :ok, location: @location }
      else
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /locations/1
  # DELETE /locations/1.json
  def destroy
    @location.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def location_params
      params.require(:location).permit(:city)
    end
end
