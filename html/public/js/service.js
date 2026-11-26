const base_URL = 'https://dummyjson.com/';


// Fetch Products
export async function fetchProducts(endPoint) {
    try {
        const resp = await fetch(base_URL + endPoint);

        if (!resp.ok) {
            throw new Error(`Request failed with status: ${resp.status}`);
        }

        const data = await resp.json();

        return data;

    } catch (e) {
        console.error("Something Went Wrong:", e);
        return null;
    }
}

// /products/category-list
export async function fetchCategories(endPoint = 'products/category-list') {
    try {
        const resp = await fetch(base_URL + endPoint);

        if (!resp.ok) {
            throw new Error(`Request failed with status: ${resp.status}`);
        }

        const data = await resp.json();

        return data;

    } catch (e) {
        console.error("Something Went Wrong:", e);
        return null;
    }
}