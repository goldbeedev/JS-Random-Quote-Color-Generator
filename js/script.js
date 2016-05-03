// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//defining variables we will need in the functions as placeholders
 

var message = '';

 
//setting up the print function to print the randomly selected quote
 
function print(message) {     
                var outputDiv = document.getElementById('quote-box');
                outputDiv.innerHTML = message;
}               
 
//quotes array containing objects for printQuote to print to the page

var quotes = [
{
                quote: "Some people don't like change, but you need to embrace change if the alternative is disaster.",
                source: "Elon Musk",           
},
{
                quote: "Knowledge, like air, is vital to life. Like air, no one should be denied it.",
                source: "Alan Moore",
                citation: "V for Vendetta",
                year: "1982"
                
},
{
                quote: "Reality is Wrong. Dreams are for real.",
                source: "Tupac Shakur",
},                
{
                quote: "Push yourself again and again.  Don't give an inch until the final buzzer sounds.",
                source: "Larry Bird",
                
},
{
                quote: "Believing takes practice.",
                source: "Madeleine L'engle",
                citation: "A Wrinkle In Time",
                year: "1963"
}                
];
 

//a function that creates a random number between 0 and 4 to randomly select an object or index of the quotes array and return the value of it.

function getRandomQuote() {
                var quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
                return quoteObject;
}

/*a function that prints out the random quote selected to the page, it does this by creating strings with HTML tags.
The function also uses if conditionals to check if the objects contain the "citation" and "year" property.
If the objects have these properties they are also printed to the page.
*/

function RandomColors() {
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		var colors = 'rgb(' + red + ',' + green + ',' + blue + ')'
		return colors;
		console.log(colors);
}

function printQuote() {
				var getRandomColors = RandomColors();
				document.body.style.backgroundColor = getRandomColors;
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
            }




//pop an object off the array to no longer have it show up, once the array has 0 objects restart the cycle!