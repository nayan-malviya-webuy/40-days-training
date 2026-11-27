import { fetchCategories } from "./service.js";

export async function loadComponent(selecter, componentPath) {
    try {
        const container = document.getElementById(selecter);
        if (!container) throw new Error(`Element ${selecter} Not Found`);

        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);

        container.innerHTML = await response.text();
    } catch (e) {
        console.error("Component Error : " + e);
    }
}

export function initHeader() {
    const sidebar = document.querySelector("#leftSidebar");
    const openBtn = document.querySelector("#toggleSidebar");
    const closeBtn = document.querySelector("#closeSidebar");
    const leftCatBox = document.querySelector("#cx-leftsidebar-catbox");

    if (sidebar && openBtn && closeBtn) {
        openBtn.addEventListener("click", () => sidebar.classList.toggle("open"));
        closeBtn.addEventListener("click", () => sidebar.classList.remove("open"));

        document.addEventListener("click", (event) => {
            const isOutsideClick = !sidebar.contains(event.target);
            const isOpenButton = openBtn.contains(event.target);
            if (isOutsideClick && !isOpenButton) sidebar.classList.remove("open");
        });
    } else {
        console.error("Sidebar elements header.html mein nahi mile.");
    }

    // left sidebar categories
    if (leftCatBox) {
        fetchCategories().then(result => {
            if (!result) return;
            leftCatBox.innerHTML = result
                .map(el => `<button>${el} <i class="fa-solid fa-chevron-right"></i></button>`)
                .join("\n");
        });
    }
}