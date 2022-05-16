function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(bookName, bookAge, bookPronouns) {
  var charObj = {
    name: bookName,
    age: bookAge,
    pronouns: bookPronouns
  }
  return charObj;
}

function saveReview(reviews, array) {
  if (array.includes(reviews)) {
    return array
  } else {
    return array.push(reviews)
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
}

function editBook(bookTitle) {
  console.log(bookTitle.pageCount * .75)
  bookTitle.pageCount = bookTitle.pageCount * .75
  return bookTitle.pageCount
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}