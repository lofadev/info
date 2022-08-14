window.onload = function () {
  const menuItems = document.querySelectorAll('.menu__items');
  const wrapper = document.querySelector('.wrapper');
  let contentWidth = wrapper.clientWidth || wrapper.offsetWidth;
  const logo = document.querySelector('#header .logo');
  const btnClose = document.querySelector('.btn--close');
  const menu = document.querySelector('.menu');
  const menuBar = document.querySelector('.menu__bar');
  const modal = document.querySelector('.modal');

  let currentIndex = 0;
  let translateValue;
  logo.onclick = () => {
    wrapper.style = `transform: translateX(0px)`;
    document.querySelector('.menu__items.active').classList.remove('active');
    menuItems[0].classList.add('active');
  };

  window.onresize = () => {
    contentWidth = wrapper.clientWidth;
    translateValue = contentWidth * currentIndex + currentIndex * 50;
    wrapper.style = `transform: translateX(-${translateValue}px)`;
  };

  menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      translateValue = contentWidth * index + index * 50;
      document.querySelector('.menu__items.active').classList.remove('active');
      item.classList.add('active');
      wrapper.style = `transform: translateX(-${translateValue}px)`;
      modal.style = 'display: none';
      menu.style = 'transform: scale(0)';
    });
  });

  btnClose.onclick = () => {
    menu.style = 'transform: scale(0)';
    modal.style = 'display: none';
  };

  menuBar.onclick = () => {
    menu.style = 'transform: scale(1)';
    modal.style = 'display: block';
  };

  modal.onclick = () => {
    menu.style = 'transform: scale(0)';
    modal.style = 'display: none';
  };
};
