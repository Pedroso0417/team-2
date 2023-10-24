        
(() => {
  const refs = {
    openModalBtn: document.querySelector('[buynow-data-modal-open]'),
    closeModalBtn: document.querySelector('[buynow-data-modal-close]'),
    modal: document.querySelector('[buynow-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();