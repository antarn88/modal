const showModalBtn = document.querySelector(".show-modal-btn");
const modal = document.querySelector(".modal");
const modalPopup = document.querySelector(".modal__popup");
const modalCloseBtn = document.querySelector(".modal__close-btn");
const okeyBtn = document.querySelector(".okey-btn");
const cancelBtn = document.querySelector(".cancel-btn");

const showModal = () => {
    modal.style.display = "block";
    modalPopup.style.display = "block";
}

const hideModal = () => {
    modal.style.animation = "fade-out .3s";

    setTimeout(() => {
        modal.style.display = "none";
        modalPopup.style.display = "none";
        modal.style.animation = "fade-in .3s";
    }, 250);
}

showModalBtn.addEventListener("click", () => {
    showModal();
});

okeyBtn.addEventListener("click", () => {
    console.log("OK");
    hideModal();
});

cancelBtn.addEventListener("click", () => {
    console.log("Cancel");
    hideModal();
});

modalCloseBtn.addEventListener("click", () => {
    hideModal();
});

window.onclick = (event) => {
    if (event.target == modal) {
        hideModal();
    }
}
