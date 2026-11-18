// creating javascript object in different ways

// 1. Object literals
const product = {
    name : 'Product Name',
    price : 999
}



// using new object
const product1 = new Object()
product1.price = 98
product1.name = 'Product One'



// Using Constructure Function
export function createProduct(name, price){
    this.name = name
    this.price = price
}

// let product2 = createProduct("Product 2", 220)



// using Class
class MyProduct{
    constructor(name, price){
        this.name = name
        this.price = price
    }
}

const product3 = new MyProduct('Product two', 330)




// normal product jo obj return krta ho
function returnProd(){
    return {name : "fxn's Product", price : 444}
}




// Objects from entries method
const entries = [
    ["name", "iPhone"],
    ["price", 50000]
];

const product4 = Object.fromEntries(entries)




// using Json Parsing
const productJSON = '{"name":"iPhone","price":50000}';
const product5 = JSON.parse(productJSON);