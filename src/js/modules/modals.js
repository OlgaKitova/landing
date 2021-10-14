function modals (form__title, form__content, button) {

   const modal = document.querySelector(form__title),
        modalClose = document.querySelector(form__content),
        btnModal = document.querySelector(button);

  btnModal.addEventListener('click', showModal)

  modalClose.addEventListener('click', hideModal)

  modal.addEventListener('click', (e) => {
    if (e.target == modal) {
      hideModal()
    }
  })

  function showModal() {
    modal.classList.add('show')
   setTimeout(()=> {
    document.body.classList.add('overbody')
   }, 300)
  }

  function hideModal() {
   modal.classList.remove('show');
  document.body.classList.remove('overbody');
  }
}

export default modals;
