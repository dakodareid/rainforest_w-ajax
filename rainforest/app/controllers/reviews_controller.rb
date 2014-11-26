class ReviewsController < ApplicationController
	
	before_filter :ensure_logged_in, only: [:create, :destroy]
	before_filter :load_product

  def show
  	@review = Review.find(params[:id])
  end

  def create
  	@review = @product.reviews.build(review_params)
  	@review.user = current_user

    respond_to do |format|
      if @review.save
        format.html { redirect_to product_path(@product.id), notice: 'Reivew added.' }
        format.js {} 
      else
        format.html { render 'products/show', alert: 'There was an error.' }
        format.js {}
      end

  	# if @review.save
  	# 	redirect_to products_path, notice: 'Review created successfully'
  	# else
  	# 	render 'products/show'
  	# end
  end

  def destroy
  	@review = Review.find(params[:id])
  	@review.destroy
  end

  private
  def review_params
  	params.require(:review).permit(:comment, :product_id)
  end

  def load_product
  	@product = Product.find(params[:product_id])
  end

end


