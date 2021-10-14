function burgerMenu (burger__name, menu__title) {
  const burger = document.querySelector(burger__name),
        menu = document.querySelector(menu__title);

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    showMenu()
  })

  window.addEventListener('scroll', () => {
    return window.scrollY  > 500  && burger.classList.contains('active') && showMenu()
  })

  function showMenu() {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
  }
  }

export default burgerMenu;
