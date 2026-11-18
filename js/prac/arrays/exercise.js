import { onlyTitleList, expensiveProducts, totalPrice, FindProduct, productsWithDicscount, arrangeProductsListCategoryWise, categoryWithCount, findIndexOfProduct, hasAtleastProductsInAnyStock } from "./solutions.js";




// fetching data from dummy api - using once function for it
let data = null;
async function fetchData() {

    if (data === null) {
        const resp = await fetch("https://dummyjson.com/products?limit=15");

        if (!resp.ok) {
            throw new Error(`HTTP Error: ${resp.status}`);
        }

        const json = await resp.json();

        data = json.products;
    }

    return data;
}






fetchData().then((products) => {

    // Task 1 - Create a new array containing only the names (title) of all products using map().
    const namesOfAllProducts = onlyTitleList(products)
    // console.log(namesOfAllProducts)
    // console.log("#####################")




    // Task 2 - Return all products whose price is greater than $100 using filter().
    const expansiveProduct = expensiveProducts(products)
    // console.log(expansiveProduct)




    //  Task 3 - Calculate Total Products Value
    // console.log("Total Price : " + totalPrice(products))




    // Task 4 - Find a Product
    // console.log( FindProduct(10, products))


    // Task 5 - Create a new array containing product names and their prices after applying a 15% discount.
    // console.log(productsWithDicscount(15, products))


    // Task 6 - Find all products belonging to the beauty category.


    // task 6.1   filter product categorywise
    // console.log(arrangeProductsListCategoryWise(products))




    // task 7 : Find all products whose stock is greater than 0 and rating is above 4.
    // console.log(categoryWithCount(products))


    // task 8 - Create an object containing the number of products in each category.



    // task 9 - Sort all products from highest price to lowest price.


    // task 10 - Find the index of the product whose ID is 20.
    // console.log(findIndexOfProduct(4 , products))

    // task 11 - Check whether at least one product has stock greater than 100.
    console.log(hasAtleastProductsInAnyStock(4, products))



    // Task 12 - Check whether every product has a rating >= 3
    console.log(checkEveryProductRating(products));


    // Task 13 - Return products from page 2 (10 products per page)
    console.log(getProductsPage2(products));


    // Task 14 - Print information of every product
    printProductInformation(products);



    // Task 15 - Product Search Engine
    console.log(searchProducts(products, "beauty"));


    // Task 16 - Top 5 Most Expensive Products
    console.log(getTopFiveExpensiveProducts(products));


    // Task 17 - Category Revenue Report
    console.log(getCategoryRevenueReport(products));


    // Task 18 - Second Most Expensive Product
    console.log(getSecondMostExpensiveProduct(products));


    // Task 19 - Remove Out-of-Stock Products
    // Create a new array containing only available products.
    // Then remove the first two products from that new array.
    console.log(removeOutOfStockProducts(products));


    // Task 20 - Create a report containing:
    // - Product title.
    // - Original price.
    // - Discounted price.
    // - Discount amount.
    // - Final price rounded to two decimal places
    console.log(getProductDiscountReport(products));


    // Task 21 - Most Popular Category
    // Find which category has the highest number of products.
    // Return the category name and its product count.
    console.log(getMostPopularCategory(products));


    // Task 22 - Product Rating Analysis
    // Calculate:
    // - Highest-rated product.
    // - Lowest-rated product.
    // - Average product rating.
    // - Number of products rated above 4.5.
    console.log(getProductRatingAnalysis(products));


    // Task 23 - Extract all unique brand names from the products array.
    // Requirements:
    // - Remove duplicate brands.
    // - Ignore missing or empty brand values.
    // - Return an array of unique brand names.
    console.log(getUniqueBrands(products));


    // Task 24 - Build a function called generateProductDashboard() that returns:
    console.log(generateProductDashboard(products));
})


