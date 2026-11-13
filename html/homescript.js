const bas_URL = 'https://dummyjson.com';


function renderProduct(cid, thumburl, title, rating, category, price) {

    try {
        const container = document.getElementById(cid);

        if (!container) {
            throw new Error(`Container "${cid}" not found!`);
        }

        const productHTML = `
            <div class="cx-product-card">

                <div class="pcard-img-box">
                <img src="public/images/image.png" alt="5 Year Warranty" class="product-card-badge">
                    <img 
                        class="product-img"
                        src="${thumburl}"
                        alt="${title}"
                    >

                    <i class="fa-regular fa-heart product-card-wish-btn"></i>

                </div>

                <div class="product-card-info">

                    <div class="product-card-rating">
                        <i class="fa-solid fa-star"></i>
                        <span>${rating}</span>
                    </div>

                    <p class="product-card-category">
                        ${category}
                    </p>

                    <h3 class="product-card-title">
                        ${title}
                    </h3>

                    <div class="product-card-footer">

                        <h2 class="product-card-price">
                            $${price}
                        </h2>

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
        alert(error.message);
    }
}

async function loadRecommendedProducts() {
    try {
        const rProducts = await fetchData(
            bas_URL + '/products?limit=7&skip=0'
        );

        if (!rProducts || !rProducts.products) return;

        console.log(rProducts)

    } catch (error) {
        console.error("Recommended Products Error:", error);
    }
}

loadRecommendedProducts();

// renderProduct(
//     "cx-recommended-boxid",
//     "https://uk.static.webuy.com/product_images/Gaming/Xbox%20Series%20Consoles/SXSS512GBW002_l.jpg",
//     "Xbox Series S Console, 512GB, White, Unboxed",
//     4.8,
//     "Xbox Series Consoles",
//     320.00
// );