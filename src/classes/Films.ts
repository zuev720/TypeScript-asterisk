import Buyable from "../intarfaces/Buyable";

export default class Films implements Buyable{
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly translateName: string;
    readonly image: string;
    readonly year: number;
    readonly slogan: string;
    readonly country: string;
    readonly janre: string[];
    readonly time: string[];

  constructor(film: { id: number; name: string; price: number; translateName: string; image: string; year: number; slogan: string; country: string; ganre: string[]; time: string[];}) {
      this.id = film.id;
      this.name = film.name;
      this.price = film.price;
      this.translateName = film.translateName;
      this.image = film.image;
      this.year = film.year;
      this.slogan = film.slogan;
      this.country = film.country;
      this.janre = film.ganre;
      this.time = film.time;
  }
}
