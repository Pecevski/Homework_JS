// Create OBJECT animal with 2 properties and 1 method:name,kind,speak (method) 
function Animal (name, kind){
    this.name = name;
    this.kind = kind;

    this.speak = function() {
        return `Hey bro!!!`;
    }
}

let dog = new Animal(`Rex`, `Dog`);
console.log(`${dog.name}:"${dog.speak()}"`);

let cat = new Animal (`Missy`, `Cat`);
console.log(`${cat.kind} : "${cat.speak()}"`);


// Display the reading status of some book.

function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.status = readingStatus;

    this.ifReadingStatus = function() {
        if(this.status === true) {
            return `Already read`;
        }
        if(this.status === false) {
            return `You still need to read`;
        }
    }
}

let book = new Book (`Broker`, `John Grisham`, true);
console.log(book.ifReadingStatus());

let secretBook = new Book (`The Secret`, `Rhonda Byrne`, false);
console.log(secretBook.ifReadingStatus());