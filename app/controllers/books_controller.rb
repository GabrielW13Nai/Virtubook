class BooksController < ApplicationController
  def index
    book = Books.all
    if book
      render json: book, status: :ok
    else
      error_books
    end
  end

  def show
    book.find_by(id: params[:id])
  end

  private

  def book_params
    params.permit(:name, :author, :year_published)
  end

  def error_books
    render json: { error:"Book not found" }, status: :not_found
  end
end
