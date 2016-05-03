// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//defining variables

var message = '';

 
//print function to print the randomly selected quote
 
function print(message) {     
                var outputDiv = document.getElementById('quote-box');
                outputDiv.innerHTML = message;
}               
 
//quotes array containing objects for printQuote to print to the page
 
var viewedquotes = [];

//a function that creates a random number between 0 and 4 to randomly select an object or index of the quotes array and return the value of it.

function getRandomQuote() {
                var quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
                return quoteObject;
}


//a function that prints out the random quote selected to the page, it does this by creating strings with HTML tags.
//The function also uses if conditionals to check if the objects contain the "citation" and "year" property.
//If the objects have these properties they are also printed to the page.


function RandomColors() {
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		var colors = 'rgb(' + red + ',' + green + ',' + blue + ')'
		return colors;
		console.log(colors);
}

function getViewedquotes() {

}

//Takes the random quote function and prints the quote and source to the page.  If citation and year are undefined it does not print them.
//Resets the message variable to be '' after for a new click to generate a new quote.  Uses the getRandomColors function to change the body's background color.
//Pushes a quote to a new array if the quotes array is still longer than the viewedquotes array push the quote to the viewed quotes array.


function printQuote() {
				
                var printObject = getRandomQuote();
                message += '<p class="quote"> ' + printObject.quote + '</p>';
                message += '<p class="source"> ' + printObject.source + '</p>';
                	if (printObject.citation !== undefined) {
                		message += '<span class ="citation"> ' + printObject.citation + '</span>';
                	}
                	if (printObject.year !== undefined) {
                	message += '<span class ="year"> ' + printObject.year + '</span>';
                	}
                print(message);
                message = '';
                	if (quotes.length > viewedquotes.length) {
               		var pushQuote = viewedquotes.push(printObject);
            	}
                var getRandomColors = RandomColors();
				document.body.style.backgroundColor = getRandomColors;
            }


