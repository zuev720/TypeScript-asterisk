import Buyable from "../intarfaces/Buyable";

export default class Books {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly author: number;
    readonly image: string;
    readonly year: number;
    readonly country: string;
    readonly janre: string[];

  constructor(book: { id: number; name: string; price: number; author: string; image: string; year: number; country: string; ganre: string[]; }) {
  this.id = book.id;
  this.name = book.name;
  this.price = book.price;
  this.author = book.price;
  this.image = book.image;
  this.year = book.year;
  this.country = book.country;
  this.janre = book.ganre;
  }
}
