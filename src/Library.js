function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
 }
 
 function addBook(library, book) {
    library.shelves[book.genre].push(book)
   }
 
 function checkoutBook(shelf, title, genre) {
   var shelveLength = shelf.shelves[genre].length
   console.log(shelveLength)
   shelf.shelves[genre] = shelf.shelves[genre].filter((function (book) {
     return book.title !== title
   })) 
   if (shelveLength > shelf.shelves[genre].length) {
     return `You have now checked out ${title} from the Denver Public Library`
   } else {
     return `Sorry, there are currently no copies of ${title} available at the Denver Public Library`
   }
 }

 module.exports = {
   createLibrary,
   addBook,
   checkoutBook
 };
 