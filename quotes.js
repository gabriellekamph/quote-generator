// An array with all different quotes

const quotesArray = [
    {"author": "Oscar Wilde",
    "quote": "Be yourself; everyone else is already taken."},

    {"author": "Mark Twain",
    "quote": "If you tell the truth, you don't have to remember anything."},

    {"author": "Allen Saunders",
    "quote": "Life is what happens to us while we are making other plans."},

    {"author": "Thomas A. Edison",
    "quote": "I have not failed. I've just found 10,000 ways that won't work."},

    {"author": "George Eliot",
    "quote": "It is never too late to be what you might have been."},

    {"author": "Pablo Picasso",
    "quote": "Everything you can imagine is real."},

    {"author": "George Bernard Shaw",
    "quote": "Life isn't about finding yourself. Life is about creating yourself."},

    {"author": "Bob Marley",
    "quote": "One good thing about music, when it hits you, you feel no pain."},

];

console.log(quotesArray);

// Function that generate quotes when button is clicked

let btn = document.getElementById("btn");
btn.addEventListener("click", generateQuote);

function generateQuote() {
    let random = Number.parseInt(Math.random()*quotesArray.length + 1);

    document.getElementById("quote").innerHTML = "\"" + quotesArray[random].quote + "\"";
    document.getElementById("author").innerHTML = "- " + quotesArray[random].author;
}