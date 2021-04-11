import Cart from "../classes/Cart";
import Films from "../classes/Films";
import Books from "../classes/Books";
import ElectronicProduct from "../classes/ElectronicProduct";
import {book, book1} from "../base/books";
import {film, film1} from "../base/films";
import {iphone, macBook1, macBook, galaxy} from "../base/electronic";


it('Метод add() должен корректно работать', () => {
  const cart = new Cart();
  cart.add(new Films(film));
  cart.add(new Films(film1));
  cart.add(new ElectronicProduct(iphone));
  cart.add(new ElectronicProduct(iphone));
  cart.add(new ElectronicProduct(macBook));
  cart.add(new ElectronicProduct(galaxy));
  cart.add(new ElectronicProduct(galaxy));
  cart.add(new ElectronicProduct(macBook1));
  cart.add(new ElectronicProduct(iphone));
  cart.add(new Books(book1));
  cart.add(new Books(book1));
  cart.add(new Books(book));
  expect(cart.repository).toEqual([
    {
      id: 1527,
      name: 'Мстители',
      price: 300,
      translateName: 'The Avengers',
      image: './src/base/images/avengers.jpg',
      year: 2012,
      slogan: 'Avengers Assemble!',
      country: 'США',
      janre: [ 'фантастика', 'боевик', 'приключения', 'фентези' ],
      time: [ './src/base/images/time.jpg', '137 мин/02:17' ]
    },
    {
      id: 1538,
      name: 'Люди x',
      price: 250,
      translateName: 'The X-man',
      image: './src/base/images/x-man.jpg',
      year: 2011,
      slogan: 'Super-puper',
      country: 'США',
      janre: [ 'фантастика', 'боевик', 'приключения', 'фентези' ],
      time: [ './src/base/images/time.jpg', '120 мин/02:00' ]
    },
    {
      id: 12,
      model: 'Iphone-12',
      price: 80000,
      characteristics: [ 'processor:\tApple A14 Bionic', 'platform: IOS', 'camera: yes' ],
      image: './src/base/images/Iphone-12.jpg',
      year: 2020,
      country: 'США',
      count: 3
    },
    {
      id: 210,
      model: 'Apple MacBook Pro 16',
      price: 200000,
      characteristics: [
        'processor:\tCore i7 2,6 ГГц',
        'RAM: 512 ГБ',
        'videoCard: AMD Radeon Pro'
      ],
      image: './src/base/images/MacBook.jpg',
      year: 2021,
      country: 'США',
      count: 2
    },
    {
      id: 21,
      model: 'Galaxy-10',
      price: 75000,
      characteristics: [
        'processor:\tExynos 990, 8-ми ядерный',
        'platform: Android',
        'camera: yes'
      ],
      image: './src/base/images/Galaxy-10.jpg',
      year: 2020,
      country: 'Коррея',
      count: 2
    },
    {
      id: 1432,
      name: 'Выразительный JavaScript',
      price: 600,
      author: 600,
      image: './src/base/images/expressive-JavaScript.jpg',
      year: 2019,
      country: 'США',
      janre: [ 'научно-познавательное', 'программирование' ]
    },
    {
      id: 1234,
      name: 'Страна рождества',
      price: 500,
      author: 500,
      image: './src/base/images/christmas-country.jpg',
      year: 2014,
      country: 'США',
      janre: [ 'фантастика', 'ужасы' ]
    }
    ])
});

it('Метод getSum() должен возвращать корректное число', () => {
  const cart = new Cart();
  cart.add(new ElectronicProduct(galaxy));
  cart.add(new ElectronicProduct(macBook1));
  cart.add(new ElectronicProduct(iphone));
  expect(cart.getSum()).toBe(355000);
  expect(cart.getSum(5)).toBe(337250);
});

it('Метот deleteProduct() должен правильно отрабатывать', () => {
  const cart = new Cart();
  cart.add(new ElectronicProduct(galaxy));
  cart.add(new ElectronicProduct(macBook1));
  cart.add(new ElectronicProduct(iphone));
  cart.add(new ElectronicProduct(iphone));
  cart.deleteProduct(21)
  cart.deleteProduct(210)
  cart.deleteProduct(12)
  expect(cart.repository).toEqual([
    {
      id: 12,
      model: 'Iphone-12',
      price: 80000,
      characteristics: [ 'processor:\tApple A14 Bionic', 'platform: IOS', 'camera: yes' ],
      image: './src/base/images/Iphone-12.jpg',
      year: 2020,
      country: 'США',
      count: 1
    }
  ])
});
