
const object = {
    "quotes": [
     "If you can't explain it simply, you don't understand it well enough.", "Every child is an artist. The problem is how to remain an artist once we grow up.", "If you can dream it you can do it!", "There are people who have money and people who are rich.", "Since everything is in our heads, we had better not lose them.", "The two most important days in your life are the day you were born and the day you figure out why.", "The ones who are crazy enough to think that they can change the world, are the ones who do.", "Everything will be okay in the end. If it's not okay, it's not the end.", "Reserve your right to think, for even to think wrongly is better than not to think at all.", "Strong minds discuss ideas, average minds discuss events, weak minds discuss people.", "The best way to find out if you can trust somebody is to trust them.", "Imagination is the only weapon in the war against reality.", "We build too many walls and not enough bridges.", "Everyone thinks of changing the world, but no one thinks of changing himself.", "I have not failed. I've just found 10,000 ways that won't work.", "The greatest invention in the world is the mind of a child.", "I think it is possible for ordinary people to choose to be extraordinary.", "The time for action is now. It's never too late to do something.", "All qrown-ups were once children... but only few of them remember it.", "I know but one freedom and that is the freedom of the mind.", "Continuous efforts - not strength or intelligence - is the key to unlocking our potential.", "Attitude is a little thing that makes a big difference.", "Being powerful is like being a lady. If you have to tell people you are, you aren't.", "A friend is a present you give to yourself.", "You can give without loving, but you can never love without giving.", "Dark times always reveal good people.", "The man who thinks he can and the man who thinks he can't are both right." 
     ],
 
     "authors": [
     "Albert Einstein", "Pablo Picasso", "Walt Disney", "Coco Chanel", "Mark Twain", "Steve Jobs", "John Lennon", "Hypatia", "Socrates", "Ernest Hemingway", "Lewis Carroll", "Joshua Mcfield", "Kubiti samuel", "Isaac Newton", "Leo Tolstoy", "Thomas Edison", "Elon Musk", "Antoine de Saint-Exupery", "Winston Churchill", "Margaret Thatcher", "Robert Louis Stevenson", "Erich Maria Remarque", "Confucius"
 
     ],
 
     "dates":  [
     "1879-1955", "1881-1973", "1901-1966", "1883-1971", "1835-1910", "1976-2011", "1940-1980", "350AD-415AD", "399BCE-469BCE", "1899-1961", "1832-1898", "1999-Current", "2000-Current", "1643-1727", "1847-1910", "1847-1931", "1971-Current", "1900-1944", "1874-1965", "1925-2013", "1850-1894", "1898-1970", "551BCE-479BCE"
     ],
    
    "links": [
        "https://en.wikipedia.org/wiki/Albert_Einstein", "https://en.wikipedia.org/wiki/Pablo_Picasso", "https://en.wikipedia.org/wiki/Walt_Disney", "https://en.wikipedia.org/wiki/Coco_Chanel", "https://en.wikipedia.org/wiki/Mark_Twain", "https://en.wikipedia.org/wiki/Steve_Jobs", "https://en.wikipedia.org/wiki/John_Lennon", "https://en.wikipedia.org/wiki/Hypatia", "https://en.wikipedia.org/wiki/Socrates", "https://en.wikipedia.org/wiki/Ernest_Hemingway", "https://en.wikipedia.org/wiki/Lewis_Carroll", "https://github.com/joshua-mcfield99", "https://github.com/Kubiti", "https://en.wikipedia.org/wiki/Isaac_Newton", "https://en.wikipedia.org/wiki/Leo_Tolstoy", "https://en.wikipedia.org/wiki/Thomas_Edison", "https://en.wikipedia.org/wiki/Elon_Musk", "https://en.wikipedia.org/wiki/Antoine_de_Saint-Exupéry", "https://en.wikipedia.org/wiki/Winston_Churchill", "https://en.wikipedia.org/wiki/Margaret_Thatcher", "https://en.wikipedia.org/wiki/Robert_Louis_Stevenson", "https://en.wikipedia.org/wiki/Erich_Maria_Remarque", "https://en.wikipedia.org/wiki/Confucius"
    ]
 };
const authorQuote = document.getElementById("author-quote");
const authorName = document.getElementById("author-name");
const authorDate = document.getElementById("author-date");
const authorLink = document.getElementById("author-link");
const button = document.getElementById("btn");


const selector = (arr) =>{
    const index = Math.floor(Math.random()*arr.length);
    let quote = "", author = "", date="";
    if(arr === object.quotes) {
        quote = arr[index];
        return quote;
    } else if (arr === object.authors) {
        author = arr[index];
        return author;
    } else if (arr === object.dates){
        date = arr[index];
        return date;
    } else if (arr === object.links){
        link = arr[index];
        return link;
    } else {
        return 'Try again';
    };
    
}



button.addEventListener("click", function(){
    const quote = selector(object.quotes), date = selector(object.dates), author = selector(object.authors), link = selector(object.links);
    authorQuote.innerHTML = "\"" + quote + "\"";
    authorDate.innerHTML = date;
    authorName.innerHTML = author;
    authorLink.setAttribute("href", link);
});

// console.log(selector(object.quotes));
// console.log(selector(object.dates));
// console.log(selector(object.authors));