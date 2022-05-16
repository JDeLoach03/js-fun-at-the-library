class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  
  greetPatron(name, boolean) {
    if (boolean === true) {
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`
    }
  }

  findBook(title) {
    console.log(title)
    if (title) {
      return `Yes, we have ${title}`
    } else {
      return `Sorry, we do not have ${title}`
    }
  }
}

module.exports = Librarian;