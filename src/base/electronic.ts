type Product = {
  id: number,
  model: string,
  price: number,
  characteristics: string[],
  image: string,
  year: number,
  country: string,
  count: number,
}

const iphone: Product = {
  id: 12,
  model: 'Iphone-12',
  price: 80000,
  image: './src/base/images/Iphone-12.jpg',
  year: 2020,
  country: 'США',
  characteristics: [
    'processor:	Apple A14 Bionic',
    'platform: IOS',
    'camera: yes',
  ],
  count: 1,
}

const galaxy: Product = {
  id: 21,
  model: 'Galaxy-10',
  price: 75000,
  image: './src/base/images/Galaxy-10.jpg',
  year: 2020,
  country: 'Коррея',
  characteristics: [
    'processor:	Exynos 990, 8-ми ядерный',
    'platform: Android',
    'camera: yes',
  ],
  count: 1,
}

const macBook: Product = {
  id: 210,
  model: 'Apple MacBook Pro 16',
  price: 200000,
  image: './src/base/images/MacBook.jpg',
  year: 2021,
  country: 'США',
  characteristics: [
    'processor:	Core i7 2,6 ГГц',
    'RAM: 512 ГБ',
    'videoCard: AMD Radeon Pro',
  ],
  count: 1,
}

const macBook1: Product = {
  id: 210,
  model: 'Apple MacBook Pro 16',
  price: 200000,
  image: './src/base/images/MacBook.jpg',
  year: 2021,
  country: 'США',
  characteristics: [
    'processor:	Core i7 2,6 ГГц',
    'RAM: 512 ГБ',
    'videoCard: AMD Radeon Pro',
  ],
  count: 1,
}

export {iphone, galaxy, macBook, macBook1}
