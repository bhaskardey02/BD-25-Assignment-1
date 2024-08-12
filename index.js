let express = require('express');
let cors = require('cors');
let app = express();
let port = 3000;

app.use(cors());

let products = [
  { name: "iPhone 13", brand: "Apple", ram: 4, rom: 64, os: "iOS", price: 69999, rating: 4.8 },
  { name: "Samsung Galaxy S21", brand: "Samsung", ram: 8, rom: 128, os: "Android", price: 64999, rating: 4.7 },
  { name: "OnePlus 9", brand: "OnePlus", ram: 12, rom: 256, os: "Android", price: 54999, rating: 4.5 },
  { name: "Xiaomi Mi 11X", brand: "Xiaomi", ram: 6, rom: 128, os: "Android", price: 29999, rating: 4.4 },
  { name: "Google Pixel 5", brand: "Google", ram: 8, rom: 128, os: "Android", price: 59999, rating: 4.6 }
];

//Endpoint 1:

function sortProductsByPopularity(products1, products2) {
  return products2.rating - products1.rating;
}
  app.get('/products/sort/popularity', (req , res) => {
    let productsCopy = products.slice();
    productsCopy.sort(sortProductsByPopularity);
    res.json(productsCopy);
  })

// Endpoint 2:

function sortProductsByPriceHighToLow(products1, products2) {
  return products2.price - products1.price
}

app.get('/products/sort/price-high-to-low', (req , res) => {
  let productsCopy = products.slice();
  productsCopy.sort(sortProductsByPriceHighToLow);
  res.json(productsCopy);
})

// Endpoint 3:

function sortProductsByPriceLowToHigh(products1, products2) {
  return products1.price - products2.price
}

app.get('/products/sort/price-low-to-high' , (req , res) => {
  let productsCopy = products.slice();
  productsCopy.sort(sortProductsByPriceLowToHigh);
  res.json(productsCopy);
})

//Endpoint :4

function filterByRam(products, ram) {
  return products.ram ===ram;
}

app.get('/products/filter/ram' , (req , res) => {
  let ram = parseInt(req.query.ram);
  let result = products.filter(product =>filterByRam(product, ram));
  res.json(result);
})

//Endpoint 5:

function filterByRom(products, rom) {
  return products.rom ===rom;
}

app.get('/products/filter/rom' , (req , res) => {
  let rom = parseInt(req.query.rom);
  let result = products.filter(product =>filterByRom(product, rom));
  res.json(result);
})

//Endpoint 6:

function filterByBrand(products, brand) {
  return products.brand.toLowerCase() === brand;
}

app.get('/products/filter/brand' , (req , res) => {
  let brand = req.query.brand.toLowerCase();
  let result = products.filter(product =>filterByBrand(product, brand));
  res.json(result);
})

//Endpoint 7:

function filterByOs(products, os) {
  return products.os.toLowerCase() === os;
}

app.get('/products/filter/os' , (req , res) => {
  let os = req.query.os.toLowerCase();
  let result = products.filter(product =>filterByOs(product, os));
  res.json(result);
})

//Endpoint 8:

function filterByPrice(product,price){
  return product.price <= price;
}

app.get('/products/filter/price', (req,res) => {
  let price = parseInt(req.query.price);
  let result = products.filter(product=>filterByPrice(product,price));
  res.json(result);
})


//Endpoint 9:

app.get('/products', (req,res) =>{
  res.json(products);
}) 

app.listen(port,() =>{
  console.log(`Server is running on http://localhost:${port}`);
})