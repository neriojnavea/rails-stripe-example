class ChargesController < ApplicationController
  before_action :authenticate_user!

  def create
    charge = Charges::Create.call(amount_cents: charge_params[:amount_cents],
                                  token: charge_params[:token],
                                  user: current_user)
    render json: charge, status: :created
  end

  private

  def charge_params
    params.require(:charge).permit(:amount_cents, :token)
  end
end
