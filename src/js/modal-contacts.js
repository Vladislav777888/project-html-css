(() => {
  const refs = {
    openModalBtn1: document.querySelector("[data-modal-open1]"),
    closeModalBtn1: document.querySelector("[data-modal-close1]"),
    modal1: document.querySelector("[data-modal1]"),
  };

  refs.openModalBtn1.addEventListener("click", toggleModal1);
  refs.closeModalBtn1.addEventListener("click", toggleModal1);

  function toggleModal1() {
    document.body.classList.toggle("modal-open")
    refs.modal1.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn2: document.querySelector("[data-modal-open2]"),
    closeModalBtn2: document.querySelector("[data-modal-close2]"),
    modal2: document.querySelector("[data-modal2]"),
  };

  refs.openModalBtn2.addEventListener("click", toggleModal2);
  refs.closeModalBtn2.addEventListener("click", toggleModal2);

  function toggleModal2() {
    document.body.classList.toggle("modal-open")
    refs.modal2.classList.toggle("is-hidden");
  }
})();
