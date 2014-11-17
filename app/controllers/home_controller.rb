class HomeController < ApplicationController

  def game

    @cards = ("A".."Z").to_a.sample(6)
    @cards = @cards.dup + @cards.dup
    @shuffled = @cards.shuffle
    @first_half = @shuffled[0..5]
    @last_half = @shuffled[6..11]






  end
end
