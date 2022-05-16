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
   // console.log(book.genre)
   // console.log(shelf.shelves.fantasy)
   }
 
 function checkoutBook(shelf, title, genre) {
   var shelveLength = shelf.shelves[genre].length
   console.log(shelveLength)
   shelf.shelves[genre] = shelf.shelves[genre].filter((function (book) {
     // console.log(book.title)
     return book.title !== title
   })) 
   if (shelveLength > shelf.shelves[genre].length) {
     return `You have now checked out ${title} from the Denver Public Library`
   } else {
     return `Sorry, there are currently no copies of ${title} available at the Denver Public Library`
   }
 }
 
 // function checkoutBook(shelf, title, genre) {
 //   console.log(genre)
 //   for (var i = 0; i < shelf.shelves[genre].length; i++) {
 //     if (shelf.shelves[genre][i].title === title) {
 //       shelf.shelves[genre].splice(i, 1)
 //       return `You have now checked out ${title} from the ${shelf.name}`
 //     }
 //   }
 //       return `Sorry, there are currently no copies of ${title} available at the ${shelf.name}`
 // }
 

 
 
 module.exports = {
   createLibrary,
   addBook,
   checkoutBook
 };
 