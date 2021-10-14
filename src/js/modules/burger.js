function burgerMenu (burger__name, menu__title) {
  const burger = document.querySelector(burger__name),
        menu = document.querySelector(menu__title);

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    showMenu()
  })

  function showMenu() {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
  }
  }

export default burgerMenu;
