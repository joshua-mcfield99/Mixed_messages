import{quotes, authors, dates} from "./object.js";

const authorQuote = document.getElementById("author-quote");
const authorName = document.getElementById("author-name");
const authorDate = document.getElementById("author-date");
const button = document.getElementById("btn");


const selector = (arr) =>{
    const index = Math.floor(Math.random()*arr.length);
    let quote = "", author = "", date="";
    if(arr === quotes) {
        quote = arr[index];
        return quote;
    } else if (arr === authors) {
        author = arr[index];
        return author;
    } else if (arr === dates){
        date = arr[index];
        return date;
    } else {
        return 'Try again';
    };
    
}

const quote = selector(quotes), date = selector(dates), authour = selector(authors);

button.addEventListener("click") = function(){
    authorQuote.innerHTML = quote;
}
console.log(selector(quotes));
console.log(selector(dates));
console.log(selector(authors));