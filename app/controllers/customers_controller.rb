class CustomersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    customer = Customer.create!(customer_params)
    render json: { customer: customer }, status: :created
  end

  def update
    customer = Customer.find(params[:id])
    if customer.update(customer_params)
      render json: { customer: customer }, status: :ok
    else
      render json: { error: 'Error editando el cliente' }, status: 422
    end
  end

  def destroy
    Customer.find(params[:id]).destroy
  end

  private

  def customer_params
    params.require(:customer).permit(%i(rif name address email phone))
  end
end
