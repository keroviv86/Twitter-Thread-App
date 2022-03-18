
class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  before_action :authorize

  # current_user allows current user to persist when page reloads
  def current_user
    User.find_by(id: session[:current_user])
  end

  def authorize
    @current_user = User.find_by(id: session[:current_user])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  private



  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found(error)
    render json: {error: "#{error.model} not Found"}, status: :not_found
  end

end