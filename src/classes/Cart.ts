import Buyable from "../intarfaces/Buyable";

export default class Cart {
  protected _repository: Buyable[];

  constructor() {
    this._repository = [];
  }

  add(value: Buyable): void {
    if (this.repository.find((product) => product.id === value.id)) {
      if (value.count) {
        this.repository.forEach((product, index) => {
          if (product.id === value.id) {
            // @ts-ignore
            this.repository[index].count++;
          }
        });
      }
      return;
    }
    this._repository.push(value);
  }

  get repository() {
    return this._repository;
  }

  getSum(discount?: number): number {
    const sum: number = this.repository.reduce((sum: number, product: { price: any; }) => sum + product.price, 0);
    return (discount) ? sum - Math.round(sum / 100 * discount) : sum;
  }

  deleteProduct(id: number): void {
    this.repository.forEach((product, index) => {
      // @ts-ignore
      if (product.id === id && !product.count || product.count <= 1) {
        this.repository.splice(index, 1);
      }
      // @ts-ignore
      if (product.id === id && product.count > 1) {
        // @ts-ignore
        this.repository[index].count--;
      }
    });
  }
}
