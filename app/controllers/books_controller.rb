class BooksController < ApplicationController

  def index
    render json: Book.all, status: :ok
  end

  def create
    book = Book.create(book_params)
    render json: book, status: :created
  end

  def destroy
    book = find_book
    book.destroy
    head :no_content
  end

  def show
    book = find_book
    render json: book, status: :ok
  end

  private

  def book_params
    params.permit(:title, :author, :publisher, :year_published, :category, :image_url)
  end

  def find_book
    Book.find_by(id: params[:id])
  end

end
