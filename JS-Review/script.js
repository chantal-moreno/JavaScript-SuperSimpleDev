const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// DESTRUCTURING OBJECTS AND ARRAYS
const book = getBook(1);
console.log(book);
// Object
// const title = book.title;
// const author = book.author;
// Best Way
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title);
// Array
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// Best Way
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

// REST/SPREAD OPERATOR
// Rest - we can only use this at the end, to get the other genres of the array.
const [primaryGenres, secondaryGenres, ...otherGenres] = genres;
console.log(otherGenres);
// Spread - create a new array with the previous array and the values that we want to include. Tha place where we add tha new value is where will be added in the new array (beginning/end).
const newGenres1 = ['epic fantasy', ...genres];
console.log(newGenres1);
const newGenres2 = [...genres, 'epic fantasy'];
console.log(newGenres2);
// In objects the Spread operator always have to go first or it will overwrite other propertys that we want to change.
const updateBook = {
  ...book,
  // Adding new property
  moviePublicationDate: '2001-12-19',
  // Overwriting an existing property
  pages: 1210,
};
console.log(updateBook);

// TEMPLATE LITERALS
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split('-')[0]
}`;
console.log(summary);

// TERNARIES INSTEAD OF IF/ELSE STATEMENTS
// condition ? condition = true : condition = false;
const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
console.log(pagesRange);

// ARROW FUNCTIONS
const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));

// SHORT-CIRCUITING AND LOGICAL OPERATORS: &&, ||, ??
// AND &&: If the first value is true the && operator ALWAYS will return the second value. If is false the short-circuiting occurs and the operator will not even look the second value and returns the first value.
console.log(true && 'Some string');
console.log(false && 'Some string');
// OR ||: If the frist value is true the short-circuiting occurs and we will get the first value. If is false we get the second value.
console.log(true || 'Some string');
console.log(false || 'Some string');
// NULLISH COALESCING ??: This will only return the second value when the first value is null or undefined.
console.log(false ?? 'Some string');
console.log(0 ?? 'Some string');
console.log('' ?? 'Some string');
console.log(null ?? 'Some string');
console.log(undefined ?? 'Some string');

// OPTIONAL CHAINING
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  // If this book.reviews.librarything? is undefined then js wont try to read reviewsCount. In this cases we can use nullish coalescing ?? to change the undefined to 0.
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  book;
  return goodread + librarything;
}
console.log(getTotalReviewCount(getBook(3)));

// THE ARRAY MAP METHOD
// this method create a new array based on the original array with some operation applied to each element of the original array.
const x = [1, 2, 3, 4, 5].map((element) => element * 2);
console.log(x);
// Other example
const books = getBooks();
const titles = books.map((book) => book.title);
console.log(titles);

// THE ARRAY FILTER METHOD
// We need to return a condition which will either be true or false, if the result of that condition is true, then the current element will go into the filtered array but if it's false, then it will get filtered out basically.
const y = [1, 2, 3, 4, 5].filter((el) => el > 3);
console.log(y);
// Other examples
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);
const adventurBooks = books
  .filter((book) => book.genres.includes('adventure'))
  .map((book) => book.title);
console.log(adventurBooks);

// THE ARRAY REDUCE METHOD
// The goal of this method is to reduce the array to just one value. acc = accumulator, 0 = starter value of the accumulator
const z = [1, 2, 3, 4, 5].reduce((acc, el) => acc + el, 0);
console.log(z);
// Other example
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);

// THE ARRAY SORT METHOD
// a-b  ascending way [1,2,3,...,9]
// b-a  descending way [9,8,7,...,1]
// This method change the original array, so we use slice() to avoid that from happening.
const a = [4, 9, 1, 6, 2, 3];
const sorted = a.slice().sort((a, b) => a - b);
console.log(sorted);
console.log(a);
// Other example
const sortedByPages = books
  .slice()
  .sort((a, b) => a.pages - b.pages)
  .map((el) => el.title);
console.log(sortedByPages);

// WORKING WITH IMMUTABLE ARRAYS
// ADD elements without changing the original one
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling',
};
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);
// DELETE elements without changing the original one
const bookAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(bookAfterDelete);
// UPDATE elements without changing the original one
const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
console.log(bookAfterUpdate);

// ASYNCHRONOUS JAVASCRIPT: PROMISES
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log('chent');

// ASYNCHRONOUS JAVASCRIPT ASYNC/AWAIT
async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  console.log(data);
}
console.log(getTodos);
