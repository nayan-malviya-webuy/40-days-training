import { fetchProducts } from "./service.js";

export function renderProduct(cid, { thumburl, title, rating, category, price }) {
    try {
        const container = document.getElementById(cid);
        if (!container) throw new Error(`Container "${cid}" not found!`);

        const productHTML = `
            <div class="cx-product-card">
                <div class="pcard-img-box">
                    <img src="public/images/5_year_badge.png" alt="5 Year Warranty" class="product-card-badge">
                    <img class="product-img" src="${thumburl}" alt="${title}">
                    <i class="fa-regular fa-heart product-card-wish-btn"></i>
                </div>

                <div class="product-card-info">
                    <div class="product-card-rating">
                        <i class="fa-solid fa-star"></i>
                        <span>${rating}</span>
                    </div>
                    <p class="product-card-category">${category}</p>
                    <h3 class="product-card-title">${title}</h3>
                    <div class="product-card-footer">
                        <h2 class="product-card-price">$${price}</h2>
                        <button class="product-card-cart-btn">
                            <i class="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML("beforeend", productHTML);
    } catch (error) {
        console.error("Product Rendering Error:", error);
    }
}

export function renderCat(cid, { name, image }) {
    try {
        const container = document.getElementById(cid);
        if (!container) throw new Error(`Container "${cid}" not found!`);

        const catHTML = `
            <div class="cx-cat-card">
                <img src="${image}" alt="Cat Image">
                <span>${name}</span>
            </div>
        `;
        container.insertAdjacentHTML("beforeend", catHTML);
    } catch (error) {
        console.error("Category Rendering Error:", error);
    }
}

export async function fetchAndRender(contId, url) {
    const container = document.getElementById(contId);
    if (!container) return console.error(`Container "${contId}" not found!`);

    const result = await fetchProducts(url);

    if (!result || !result.products || result.products.length === 0) {
        container.innerHTML = "<span>Products not found</span>";
        return;
    }

    result.products.forEach(product => {
        renderProduct(contId, {
            thumburl: product.thumbnail,
            title: product.title,
            rating: product.rating,
            category: product.category,
            price: product.price
        });
    });
}