// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//defining variables we will need in the functions as placeholders
 
var quoteObject;
var message;
var printObject;
 
//setting up the print function to print the randomly selected quote
 
function print(message) {     
                var outputDiv = document.getElementById('quote-box').innerHTML
                outputDiv.innerHTML = message;
               
 
 
var quotes = [
{
                quote: "Some people don't like change, but you need to embrace change if the alternative is disaster.",
                source: "Elon Musk"
},
{
                quote: "It's always wonderful to get to know women, with the mystery and the joy and the depth.  If you can make a woman laugh you're seeing the most beautiful thing on God's earth.",
                source: "Keanu Reeves"
},
{
                quote: "Reality is Wrong. Dreams are for real.",
                source: "Tupac Shakur"
},
{
                quote: "Push yourself again and again.  Don't give an inch until the final buzzer sounds.",
                source: "Larry Bird"
},
{
                quote: "I tend to think you're fearless when you recognize why you should be scared of things, but do them anyway.",
                source: "Christian Bale"
}
];
 
function getRandomQuote() {
                quoteObject = quotes[math.floor(Math.random() * quotes.length)];
                return quoteObject;
 
function printQuote() {
                printObject = getRandomQuote();
                console.log(printObject);
 
print(message);