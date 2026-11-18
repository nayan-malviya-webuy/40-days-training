import { createProduct } from "./exercise.js";


const product = new createProduct("my Product", 888);


// 1. object.keys method
// console.log(Object.keys(product))

// 2. object.values
// console.log(Object.values(product));


// 3. entries method
// console.log(Object.entries(product));


// 4. fromEntries method
// const objEntries = Object.entries(product)
// const newObject = Object.fromEntries(objEntries)
// console.log(product === newObject) // false means it created new obj using fromEntries method
// console.log(newObject)


// 5. assign method for object
// const product1 = {category : "Buety"}
// const product2 = Object.assign({}, product, product1)
// console.log(product2)


// 6. hasown method
// console.log(Object.hasOwn(product, "price"));
// console.log(Object.hasOwn(product, 'category'));


// 7. cannot assign value again to this object
// Object.freeze(product)
// product.price = 444
// console.log(product);


// 8. is methods compare two obj
// console.log(Object.is(product, {'name':'abc'}));


// prototype metho
