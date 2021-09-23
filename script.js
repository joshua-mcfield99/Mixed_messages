import{quotes, authors, dates} from "./object.js";




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

console.log(selector(quotes));
console.log(selector(dates));
console.log(selector(authors));