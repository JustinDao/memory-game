// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .

$(document).ready(function(){
  $(".number").hide();

  var turnedCard = false;;
  var firstCard = 0;
  var secondCard = 0;
  var firstClass;
  var clickedSecond = false;

  $(".card").click(function(){
    if(!clickedSecond)
    {
      if(!turnedCard && !$(this).hasClass("found"))
      {
        $(this).children().show();
        firstCard = $(this).children().html().trim();
        firstClass = $(this);
        turnedCard = true;
      }
      else if($(this).attr("data-index") != firstClass.attr("data-index") 
        && !$(this).hasClass("found"))
      {
        $(this).children().show();

        secondCard = $(this).children().html().trim();

        if(firstCard == secondCard)
        {
          $(this).children().addClass("found");
          firstClass.children().addClass("found");
          turnedCard = false;
        }
        else
        {
          var firstChild = firstClass.children();
          var secondClass = $(this).children();
          clickedSecond = true;
          setTimeout(function(){hideCards(firstChild, secondClass)}, 2000);
          
          turnedCard = false;
        }
      }
    }  
      
  });


  function hideCards(firstCard, secondCard)
  {
    firstCard.hide();
    secondCard.hide();
    clickedSecond = false;
  }
});