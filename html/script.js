const sidebar = document.querySelector("#leftSidebar");
const openBtn = document.querySelector("#toggleSidebar");
const closeBtn = document.querySelector("#closeSidebar");

openBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});


document.addEventListener("click", (event) => {
    const isOutsideClick = !sidebar.contains(event.target);
    const isOpenButton = openBtn.contains(event.target);

    if (isOutsideClick && !isOpenButton) {
        sidebar.classList.remove("open");
    }
});







const authModal = document.querySelector("#cxauthmodal")
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");


openModal.addEventListener("click", () => {
    authModal.classList.add("open");
})

closeModal.addEventListener("click", () => {
    authModal.classList.remove("open")
})


// bahar touch krne per
authModal.addEventListener("click", (event) => {
    if(event.target === authModal){
        authModal.classList.remove('open')
    }
})