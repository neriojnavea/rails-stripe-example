class MainController < ApplicationController
  before_action :authenticate_user!
  def index
    @customers = Customer.all
    @documents = Document.all
    @user = current_user
  end
end
