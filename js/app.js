"use strict";

const showModalBtn = document.querySelector(".show-modal-btn");
const overlay = document.querySelector(".overlay");
const modalPopup = document.querySelector(".modal__popup");
const modalCloseBtn = document.querySelector(".modal__close-btn");
const okeyBtn = document.querySelector(".okey-btn");
const cancelBtn = document.querySelector(".cancel-btn");

const showModal = () => {
    overlay.classList.remove("overlay__hide", "hide-modal-animation");
    modalPopup.classList.remove("modal__hide", "hide-modal-animation");
    modalPopup.classList.add("show-modal-animation", "modal__show");
    overlay.classList.add("show-modal-animation", "overlay__show");
};

const hideModal = () => {
    overlay.classList.remove("overlay__show", "show-modal-animation");
    modalPopup.classList.remove("modal__show", "show-modal-animation");
    modalPopup.classList.add("hide-modal-animation");
    overlay.classList.add("hide-modal-animation");
    modalPopup.addEventListener("animationend", function () {
        if (this.classList.contains("hide-modal-animation")) {
            overlay.classList.add("overlay__hide");
            modalPopup.classList.add("modal__hide");
        }
    });
};

showModalBtn.addEventListener("click", () => {
    showModal();
});

okeyBtn.addEventListener("click", () => {
    hideModal();
    console.log(true);
});

cancelBtn.addEventListener("click", () => {
    hideModal();
    console.log(false);
});

modalCloseBtn.addEventListener("click", () => {
    hideModal();
});

window.onclick = (event) => {
    if (event.target == overlay) {
        hideModal();
    }
}
