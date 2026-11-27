import { fetchAndRender } from "./home.js";

export function initSearch() {
    const query = new URLSearchParams(window.location.search).get('q');

    if (!query) {
        window.location.href = '/html/index.html'
        return;
    }

    const cxSearchBar = document.querySelector("#cx-middle-search-bar");
    if (!cxSearchBar) return;

    cxSearchBar.value = query
    document.querySelector("#cx-search-cards-container").innerHTML = "";
        fetchAndRender("cx-search-cards-container", `products/search?q=${query}`);


    cxSearchBar.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;

        const searchText = cxSearchBar.value.trim();
        if (!searchText) return;

        const encodedQuery = encodeURIComponent(searchText);
        window.history.pushState({}, "", `${window.location.pathname}?q=${encodedQuery}`);

        document.querySelector("#cx-search-cards-container").innerHTML = "";
        fetchAndRender("cx-search-cards-container", `products/search?q=${encodedQuery}`);

    });
}