(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-about]'),
    closeModalBtn: document.querySelector('[data-close-about]'),
    modal: document.querySelector('[data-about]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
