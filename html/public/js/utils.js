export function getCategoryPageBanner() {
    return `
        <section class="cx-home-section home-top-banners-section" style="height: 300px;">
            <div class="buy-banner" style="width: 100%;">
                <div class="buy-banner-inner">
                    <!-- <img src="" alt="" "> -->
                    <div class="cx-home-innner-banner-slide-box">
                        <i class=" fa-solid fa-chevron-left cx-slide-btn"></i>
                        <i class="fa-solid fa-chevron-right cx-slide-btn"></i>
                    </div>
                </div>
            </div>
        </section>
    `
}


export function CatPageSection(section, index){
    return `
        <section class="cx-home-section" >
            <h2 class="cx-section-heading">${section.title}</h2>

            <div class="section-products-box slide-product-cont" id="${'cat-sec-' + index}">

            </div>

        </section>
    `
}

export function catPageCategoriesSec(){
    return `<div class="cx-sell-category-container" id="cx-catpage-cat-section">
        </div>`
}