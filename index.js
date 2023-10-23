class Book {
  #title;
  #author;
  #publishYear;
  constructor(title, author = "brak", publishYear = "brak") {
    this.#title = title;
    this.#author = author;
    this.#publishYear = publishYear;
  }
  showDetails() {
    return `Tytuł: ${this.#title}, Autor: ${this.#author}, Data wydania: ${
      this.#publishYear
    }`;
  }
}

class Library {
  #bookCollection;
  constructor() {
    this.#bookCollection = new Map();
    this.init();
  }
  init() {
    document
      .getElementById("addBtn")
      .addEventListener("click", () => this.#addBook());
    document
      .getElementById("searchBtn")
      .addEventListener("click", () => this.#searchBook());
  }

  #addBook() {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const publishYearInput = document.getElementById("date");

    const title = titleInput.value;
    const author = authorInput.value;
    const publishYear = publishYearInput.value;

    const book = new Book(title, author, publishYear);
    this.#bookCollection.set(title, book);

    titleInput.value = "";
    authorInput.value = "";
    publishYearInput.value = "";
  }

  #searchBook() {
    const title = document.getElementById("searchTitle").value;

    if (!title) {
      alert("Wpisz tytuł książki");
      return;
    }

    const book = this.#bookCollection.get(title);
    const resultElement = document.getElementById("searchResult");
    if (book) {
      resultElement.textContent = book.showDetails();
    } else {
      resultElement.textContent = "Nie znaleziono książki";
    }
  }
}
const library = new Library();
