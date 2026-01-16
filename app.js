const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const button = document.querySelector(".generate-btn");

let quotes = [];

async function fetchQuotes() {
    try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        quotes = data.quotes; 
        generateQuote();
    } catch(error) {
        console.error(error);
        quoteText.textContent = "Failed to load quotes. Please try again.";
        quoteAuthor.textContent = "";
    }
}

function generateQuote() {
    if(quotes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteText.textContent = `"${quote.quote}"`; 
    quoteAuthor.textContent = quote.author ? `— ${quote.author}` : "— Unknown";
}

button.addEventListener("click", generateQuote);
fetchQuotes();