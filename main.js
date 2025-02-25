//products data
const productsData = [
  {
    id: 45878,
    name: "Samsung Galaxy S25 Ultra S938B/DS 5G 12/256GB Titanium White Silver",
    price: 3599,
    barCode: "ZOOM-035522",
    description: null,
    categoryName: "Samsung",
    imageUrl:
      "https://s3.zoommer.ge/site/2b9cb41b-e6b4-41bf-a41f-7953ae9e54b0_Thumb.jpeg",
  },
  {
    id: 45877,
    name: "Samsung Galaxy S25 Ultra S938B/DS 5G 12/256GB Titanium Silver Blue",
    price: 3599,
    barCode: "ZOOM-035522",
    description: null,
    categoryName: "Samsung",
    imageUrl:
      "https://s3.zoommer.ge/site/308ba422-7391-4b61-8e54-d187f56c18c8_Thumb.jpeg",
  },
  {
    id: 45876,
    name: "Samsung Galaxy S25 Ultra S938B/DS 5G 12/256GB Titanium Grey",
    price: 3599,
    barCode: "ZOOM-035522",
    description: null,
    categoryName: "Samsung",
    imageUrl:
      "https://s3.zoommer.ge/site/437c5f16-0e6c-45e5-9d9c-3f0bc314425e_Thumb.jpeg",
  },
  {
    id: 45875,
    name: "Samsung Galaxy S25 Ultra S938B/DS 5G 12/256GB Titanium Black",
    price: 3599,
    barCode: "ZOOM-035522",
    description: null,
    categoryName: "Samsung",
    imageUrl:
      "https://s3.zoommer.ge/site/b9e74de9-df2f-4e6b-936d-132960634200_Thumb.jpeg",
  },
  {
    id: 43112,
    name: "Samsung Galaxy A35 A356E/DS 5G 6/128GB Lemon",
    price: 729,
    barCode: "ZOOM-034003",
    description: null,
    categoryName: "Samsung",
    imageUrl:
      "https://s3.zoommer.ge/site/fd1d679b-531e-4efa-bb73-5d2998056556_Thumb.jpeg",
  },
];
// Task 1:
function isMultipleOfTen(num) {
  return num % 10 === 0;
}

// ტესტი
console.log(isMultipleOfTen(20));
console.log(isMultipleOfTen(15));
console.log(isMultipleOfTen(100));

// Task 2:

function calculateDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

// ტესტი
console.log(calculateDiscountedPrice(1000, 10));
console.log(calculateDiscountedPrice(200, 25));
console.log(calculateDiscountedPrice(500, 0));

// Task 3:

function getCurrencySymbolFromCode(currencyCode) {
  if (currencyCode === "USD") {
    return "$";
  } else if (currencyCode === "EUR") {
    return "€";
  } else if (currencyCode === "GEL") {
    return "₾";
  } else {
    return "Currency code not recognized";
  }
}

// ტესტი:
console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("GEL"));
console.log(getCurrencySymbolFromCode("RMB"));

// Task 4:
function toLowerCaseString(str) {
  return str.toLowerCase();
}

// ტესტი:
console.log(toLowerCaseString("MY NAME IS JANE"));
console.log(toLowerCaseString("HELLO WORLD"));

// Task 5:
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// ტესტი:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([7, 8, 9, 10]));
console.log(filterEvenNumbers([1, 3, 5, 7]));

// Task 6:
function getCheapestProduct(products) {
  return products.reduce((cheapest, currentProduct) => {
    return currentProduct.price < cheapest.price ? currentProduct : cheapest;
  });
}

//ტესტი

console.log("Task 6: Cheapest product:", getCheapestProduct(productsData));

// Task 7:
function findProductByTitle(products, title) {
  return products.find((product) => product.name === title);
}

// ტესტი

console.log(
  "Task 7: Find product by title:",
  findProductByTitle(
    productsData,
    "Samsung Galaxy A35 A356E/DS 5G 6/128GB Lemon"
  )
);
