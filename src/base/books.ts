type Book = {
  id: number,
  name: string,
  price: number,
  author: string;
  image: string,
  year: number,
  country: string,
  ganre: string[],
}

const book: Book = {
  id: 1234,
  name: 'Страна рождества',
  author: 'Joe Hill',
  price: 500,
  image: './src/base/images/christmas-country.jpg',
  year: 2014,
  country: 'США',
  ganre: ['фантастика', 'ужасы'],
}

const book1: Book = {
  id: 1432,
  name: 'Выразительный JavaScript',
  price: 600,
  author: 'Марейн Хавербеке',
  image: './src/base/images/expressive-JavaScript.jpg',
  year: 2019,
  country: 'США',
  ganre: ['научно-познавательное', 'программирование'],
}

export {book, book1}
