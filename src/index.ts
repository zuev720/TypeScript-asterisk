import Cart from "./classes/Cart";
import Films from "./classes/Films";
import Books from "./classes/Books";
import ElectronicProduct from "./classes/ElectronicProduct";
import {book, book1} from "./base/books";
import {film, film1} from "./base/films";
import {iphone, macBook1, macBook, galaxy} from "./base/electronic";

const basket = new Cart();

basket.add(new Films(film));
basket.add(new Films(film1));
basket.add(new ElectronicProduct(iphone));
basket.add(new ElectronicProduct(iphone));
basket.add(new ElectronicProduct(macBook));
basket.add(new ElectronicProduct(galaxy));
basket.add(new ElectronicProduct(galaxy));
basket.add(new ElectronicProduct(macBook1));
basket.add(new ElectronicProduct(iphone));

basket.add(new Books(book1));
basket.add(new Books(book1));
basket.add(new Books(book));

console.log(basket.repository)

