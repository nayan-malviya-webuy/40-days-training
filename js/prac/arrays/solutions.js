export function onlyTitleList(products){
    return products.map(product => {
        return  product.title
        
    })
}


export function expensiveProducts(minPrice, products){
    return products.filter(product => product.price > minPrice).map(product => {
        return {
            name : product.title,
            price : product.price
        }
    })
}

export function totalPrice(products){
    return products.reduce((total, product) => {
        return total+product.price
    }, 0)
}

export function FindProduct(productId, products){
    // const prod = products.filter(product => product.id === productId);
    // return prod.length > 0 ? products[0] : null;


    return products.find(product => product.id === productId)
}

export function productsWithDicscount(dPercent, products){
    return products.map(product => {
        return {name : product.title, discountedPrice : product.price*0.85}
    })
}


export function filterbyCategory(category, products){
    return products.filter(product => product.category === category);
}


export function arrangeProductsListCategoryWise(products) {
    return products.reduce((acc, product) => {
        const category = product.category;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(product);

        return acc;
    }, {});
}


export function productInStockwithRating(rating , products){
    return products.filter(product => product.stock > 0 && product.rating > rating);
}


export function categoryWithCount(products){
    return products.reduce((obj, product) => {
        const cat = product.category;

        if(!obj[cat]){
            obj[cat] = 1;
        }else{
            obj[cat]++;
        }

        return obj
    }, {})
}

export function sortByPriceAsc(products){
    return products.sort((a, b) => a.price - b.price);
}


export function findIndexOfProduct(productId, products){
    return products.findIndex(product => product.id === productId);
}


export function hasAtleastProductsInAnyStock(limit, products){
    return products.some((product) => product.stock > limit);
}


export function checkEveryProductRating(products) {
    return products.every(product => product.rating >= 3);
}


export function getPaginatedProducts(limit, page, products) {

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return products.slice(startIndex, endIndex);
}


export function printProductInformation(products) {
    products.forEach(product => {
        console.log(`Product: ${product.title}`);
        console.log(`Price: ${product.price}`);
        console.log(`Stock: ${product.stock}`);
        console.log("-------------------");
    });
}



export function searchProducts(products, keyword) {
    const search = keyword.trim().toLowerCase();

    return products.filter(product =>
        product.title.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
    );
}


export function getTopFiveExpensiveProducts(products) {
    return [...products]
        .sort((a, b) => b.price - a.price)
        .slice(0, 5);
}


export function getCategoryRevenueReport(products) {
    return products.reduce((result, product) => {
        const category = product.category;

        result[category] = (result[category] || 0) +
            (product.price * product.stock);

        return result;
    }, {});
}


export function getSecondMostExpensiveProduct(products) {
    return [...products]
        .sort((a, b) => b.price - a.price)[1] ?? null;
}


export function removeOutOfStockProducts(products) {
    const availableProducts = products.filter(product => product.stock > 0);

    availableProducts.splice(0, 2);

    return availableProducts;
}


export function getProductDiscountReport(products) {
    return products.map(product => {
        const originalPrice = product.price;
        const discountAmount = originalPrice * (product.discountPercentage / 100);
        const finalPrice = originalPrice - discountAmount;

        return {
            title: product.title,
            originalPrice: Number(originalPrice.toFixed(2)),
            discountedPrice: Number(discountAmount.toFixed(2)),
            discountAmount: Number(discountAmount.toFixed(2)),
            finalPrice: Number(finalPrice.toFixed(2))
        };
    });
}


export function getMostPopularCategory(products) {
    const categoryCounts = products.reduce((result, product) => {
        result[product.category] = (result[product.category] || 0) + 1;
        return result;
    }, {});

    return Object.entries(categoryCounts).reduce((highest, current) =>
        current[1] > highest[1] ? current : highest
    , ["", 0]);
}

const filterProductsByMinRating = (products, minRating = 4.5) => products.filter(product => product.rating > minRating);

export function getProductRatingAnalysis(products) {
    if (products.length === 0) {
        return {
            highestRatedProduct: null,
            lowestRatedProduct: null,
            averageRating: 0,
            productsAbove45: 0
        };
    }

    const ratings = products.reduce((result, product) => {
        result.total += product.rating;
        result.highest = Math.max(result.highest, product.rating);
        result.lowest = Math.min(result.lowest, product.rating);
        return result;
    }, {
        total: 0,
        highest: -Infinity,
        lowest: Infinity
    });

    const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);


    return {
        highestRatedProduct: sortedProducts[0],
        lowestRatedProduct: sortedProducts[sortedProducts.length - 1],
        averageRating: Number((ratings.total / products.length).toFixed(2)),
        productsAbove45: filterProductsByMinRating(products)
    };
}


export function getUniqueBrands(products) {
    return [...new Set(
        products
            .map(product => product.brand)
            .filter(brand => typeof brand === "string" && brand.trim() !== "")
    )];
}


export function generateProductDashboard(products) {
    const totalInventoryValue = products.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );

    return {
        totalProducts: products.length,

        totalInventoryValue: Number(totalInventoryValue.toFixed(2)),

        averagePrice: products.length
            ? Number((products.reduce((total, product) => total + product.price, 0) / products.length).toFixed(2))
            : 0,

        availableProducts: products.filter(product => product.stock > 0),

        outOfStockProducts: products.filter(product => product.stock === 0),

        topRatedProducts: [...products]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5),

        expensiveProducts: products.filter(product => product.price > 500),

        categorySummary: functionCategoryWithCount(products),

        uniqueBrands: getUniqueBrands(products)
    };
}