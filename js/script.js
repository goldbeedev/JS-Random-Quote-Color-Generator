// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//defining variables

var message = '';

 
//print function to print the randomly selected quote to the page
 
function print(message) {     
        var outputDiv = document.getElementById('quote-box');
        outputDiv.innerHTML = message;
}               
 
//a function that creates a random number between 0 and the length of quotes to randomly select an object or index of the quotes array and return the value of it.

function getRandomQuote() {
        var quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
        return quoteObject;
}


//RandomColors function to generate random RGB values and return the values


function RandomColors() {
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		var colors = 'rgb(' + red + ',' + green + ',' + blue + ')';
		return colors;
}


//Takes the random quote function stores it into var printObject and adds them to message variable as a string of paragraphs and spans.
//If citation and year are undefined it does not print them.
//Resets the message variable to be '' after for a new click to generate a new quote.  
//Uses the getRandomColors function to change the body's background color each time the button is clicked.

function printQuote() {
		var printObject = getRandomQuote();
        message += '<p class="quote">' + printObject.quote + '</p>';
        message += '<p class="source">' + printObject.source + '';
        if (printObject.citation !== undefined) {
                message += '<span class ="citation">' + printObject.citation + '</span>';
            }
        if (printObject.year !== undefined) {
                message += '<span class ="year">' + printObject.year + '</span>';
            }
        message += '</p>';
        print(message);
        message = '';
        var getRandomColors = RandomColors();
	    document.body.style.backgroundColor = getRandomColors;
}


 