import Electronic from "../intarfaces/Electronic";

export default class ElectronicProduct implements Electronic {
    readonly id: number;
    readonly model: string;
    readonly price: number;
    readonly characteristics: string[];
    readonly image: string;
    readonly year: number;
    readonly country: string;
    readonly count: number;

  constructor(product: { id: number; model: string; price: number; characteristics: string[]; image: string; year: number; country: string; count: number; })
  {
  this.id = product.id;
  this.model = product.model;
  this.price = product.price;
  this.characteristics = product.characteristics;
  this.image = product.image;
  this.year = product.year;
  this.country = product.country;
  this.count = product.count;
  }
}
