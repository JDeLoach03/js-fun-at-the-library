function shelfBook(books, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(books)
  } else {
    return books;
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  return `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`
  // for (var i =  0; i < shelf.length; i++) {
  //   if (shelf[i].titl)
  }

function searchShelf(shelf, title) {
  // console.log(shelf)
  // console.log(title)
  var onShelf = false
  for (var i = 0; i < shelf.length; i++) {
    // console.log(shelf[i].title)
    // console.log(title)
    if (shelf[i].title === title) {
      onShelf = true
    } else {
      onShelf = false
    }
  }
  return onShelf
}










module.exports = {
shelfBook,
unshelfBook,
listTitles,
searchShelf
};
