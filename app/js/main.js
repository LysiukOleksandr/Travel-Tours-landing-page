function menuBurger(){
  let icon = document.querySelector('.header__nav-burger');
  let menu = document.querySelector('.header__nav-menu')
  icon.onclick = function(){
    this.classList.toggle('header__nav-burger--active')
    menu.classList.toggle('header__nav-menu--open')
  }
}

menuBurger()


