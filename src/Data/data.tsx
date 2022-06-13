const allBooks = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
    readTime: "15",
    readersCount: "2.1k",
    status: "reading",
  },
  {
    author: "Samuel Beckett",
    country: "Republic of Ireland",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "French, English",
    link: "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    pages: 256,
    title: "Molloy, Malone Dies",
    year: 1952,
    readTime: "15",
    readersCount: "2.1k",
    status: "myLibrary",
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
    readTime: "15",
    readersCount: "2.1k",
    status: "reading",
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
    readTime: "15",
    readersCount: "2.1k",
    status: "reading",
  },
  {
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: 1970,
    readTime: "15",
    readersCount: "2.1k",
    status: "myLibrary",
  },
  {
    author: "Unknown",
    country: "Achaemenid Empire",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
    pages: 176,
    title: "The Book Of Job",
    year: -600,
    readTime: "15",
    readersCount: "2.1k",
    status: "myLibrary",
  },
  {
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: 1970,
    readTime: "15",
    readersCount: "2.1k",
    status: "myLibrary",
  },
  {
    author: "Unknown",
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    pages: 288,
    title: "One Thousand and One Nights",
    year: 1200,
    readTime: "15",
    readersCount: "2.1k",
    status: "reading",
  },
  {
    author: "Unknown",
    country: "Iceland",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "Old Norse",
    link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    pages: 384,
    title: "Nj\u00e1l's Saga",
    year: 1350,
    readTime: "15",
    readersCount: "2.1k",
    status: "finished",
  },
  {
    author: "Jane Austen",
    country: "United Kingdom",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813,
    readTime: "15",
    readersCount: "2.1k",
    status: "reading",
  },
  {
    author: "Honor\u00e9 de Balzac",
    country: "France",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    pages: 443,
    title: "Le P\u00e8re Goriot",
    year: 1835,
    readTime: "15",
    readersCount: "2.1k",
    status: "reading",
  },

  {
    author: "Giovanni Boccaccio",
    country: "Italy",
    imageLink: "https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/The_Decameron\n",
    pages: 1024,
    title: "The Decameron",
    year: 1351,
    readTime: "15",
    readersCount: "2.1k",
    status: "reading",
  },
];

export const getBooks = () => allBooks