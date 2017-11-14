$(document).ready (function() {

var topicList =["Hello","cats","Seeya"];
var results;
var userInput;
var topic;
var topicButton;
var queryURL;
var topicSubmit;
// var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonTopic + "&api_key=dc6zaTOxFJmzC&limit=10";
//create buttons using for loop of topic array

function createButtons () {
	for (var i=0; i < topicList.length; i++) {
		// var topic= topicList.slice();
		$("<button class='givenTopic'id='b" + i + "'" + "data-search=" + topicList[i] + " ></button>").appendTo(".buttons");
		$("#b" + i).text(topicList[i]);
			//call function for ajax
		}
	};

createButtons();

$(document).on("click", ".givenTopic", function() {
	event.preventDefault();
	
	topicButton = $(this).data("search");
	console.log(topicButton);
	
	queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicButton + "&api_key=dc6zaTOxFJmzC&limit=6";

	$.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item col-md-2'>");

            var topicImage = $("<img>");
            topicImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(topicImage);

            $("#gifshere").prepend(gifDiv);
          }
       
        });

});

 $(".submit").on("click", function() {
 		event.preventDefault();
 		userInput = $("input").val();
		console.log("userinput:" + userInput);

		topicList.push(userInput);
		console.log(topicList[0]);
		
		$("<button class='givenTopic'id='b" + (topicList.length - 1) + "'" + "data-search=" + topicList[topicList.length - 1] + " ></button>").appendTo(".buttons");
		$("#b" + (topicList.length - 1)).html(userInput);
});

	// $.ajax({
 //          	url: queryURL,
 //          	method: "GET"
 //       	 })
 //          .done(function(response) {


	// 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=dc6zaTOxFJmzC&limit=5";

 //        	// $("<button id='b" + (topicList.length - 1) + "'" + "data-search=" + topicList[topicList.length - 1] + " ></button>").appendTo(".buttons");
          
 //          	results = response.data;

 //          	console.log(results);

 //          for (var i = 0; i < results.length -5; i++) {
 //            var gifDiv = $("<div class='item'>");

 //            var topicImage = $("<img>");
 //            topicImage.attr("src", results[i].images.fixed_height.url);

 //            gifDiv.prepend(topicImage);

 //            $("#gifshere").prepend(gifDiv)
 //          }
       
 //        });

 });	



