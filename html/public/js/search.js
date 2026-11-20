// import { fetchAndRender } from "./home.js";
function initSearch() {
    const cxSearchBar = document.querySelector("#cx-middle-search-bar");

    if (!cxSearchBar) return;

    const params = new URLSearchParams(window.location.search);
    cxSearchBar.value = params.get('q') || '';

    cxSearchBar.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;

        const searchText = cxSearchBar.value.trim();

        if (!searchText) return;

        const encodedQuery = encodeURIComponent(searchText);

        if (!window.location.pathname.includes('search.html')) {
            window.location.href = `/html/search.html?q=${encodedQuery}`;
            fetchAndRender(
                'cx-search-cards-container',
                `/products/search?q=${encodedQuery}`
            );
        } else {
            const newUrl = `${window.location.pathname}?q=${encodedQuery}`;

            window.history.pushState({}, '', newUrl);


            document.querySelector("#cx-search-cards-container").innerHTML = '';
            fetchAndRender(
                'cx-search-cards-container',
                `/products/search?q=${encodedQuery}`
            );
        }
    });
}