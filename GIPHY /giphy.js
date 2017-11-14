
$(document).ready (function() {

var topicList =["RickandMorty","Bob's Burger's","Archer", "Spongebob", "Futurama", "Southpark", "FamilyGuy"];
var results;
var userInput;
var topic;
var topicButton;
var queryURL;
var topicSubmit;


function createButtons () {
	for (var i=0; i < topicList.length; i++) {
		// var topic= topicList.slice();
		$("<button class='givenTopic'id='b" + i + "'" + "data-search=" + topicList[i] + "></button>").appendTo(".buttons");
		$("#b" + i).text(topicList[i]);
			//call function for ajax
		}
	};

createButtons();

$(document).on("click", ".givenTopic", function() {
	event.preventDefault();
	 $(".item").empty();
	
	topicButton = $(this).data("search");
	console.log(topicButton);
	
	queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicButton + "&api_key=dc6zaTOxFJmzC&limit=9&rating=pg-13";

	$.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          results = response.data;

          for (var i = 0; i < results.length; i++) {
          	results = response.data;
            var gifDiv = $("<div class='item col-md-3'>");

            var topicImage = $("<img>");
            topicImage.addClass("gif");
            topicImage.attr("src", results[i].images.fixed_height.url);
            topicImage.attr("data-animate", results[i].images.fixed_height.url);
            topicImage.attr("data-state", "still");
            topicImage.attr("data-still", results[i].images.original_still.url);
            gifDiv.prepend(topicImage);

            $("#gifshere").prepend(gifDiv);
          }
       
        });

});

$(document).on("click", ".gif", function() {
      var state = $(this).attr("data-state");
      console.log(state);
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});

 $(".submit").on("click", function() {
 		event.preventDefault();
 		userInput = $("input").val().trim();

		topicList.push(userInput);
		
		$("<button class='givenTopic'id='b" + (topicList.length - 1) + "'" + "data-search=" + topicList[topicList.length - 1] + " ></button>").appendTo(".buttons");
		$("#b" + (topicList.length - 1)).html(userInput);
});

});	



