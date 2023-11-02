window.onload = function () {
  const menuItems = document.querySelectorAll('.menu__items');
  const wrapper = document.querySelector('.wrapper');
  let contentWidth = wrapper.clientWidth || wrapper.offsetWidth;
  const logo = document.querySelector('#header .logo');
  const menu = document.querySelector('.menu');
  const menuBar = document.querySelector('.menu__bar');
  const modal = document.querySelector('.modal');
  const ageElement = document.querySelector('.info-age');

  let currentIndex = 0,
    translateValue,
    isCheck = false;

  // handle event logo home
  logo.onclick = () => {
    wrapper.style = `transform: translateX(0px)`;
    document.querySelector('.menu__items.active').classList.remove('active');
    menuItems[0].classList.add('active');
  };

  // hande resize on window
  window.onresize = () => {
    contentWidth = wrapper.clientWidth;
    translateValue = contentWidth * currentIndex + currentIndex * 50;
    wrapper.style = `transform: translateX(-${translateValue}px)`;
  };

  // handle menu item click
  menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      translateValue = contentWidth * index + index * 50;
      document.querySelector('.menu__items.active').classList.remove('active');
      item.classList.add('active');
      wrapper.style = `transform: translateX(-${translateValue}px)`;
      modal.style = 'display: none';
      menu.style = 'transform: scale(0)';
      isCheck = !isCheck;
      menuBar.classList.remove('active');
    });
  });

  // handle menu bar on mobile
  menuBar.onclick = () => {
    isCheck = !isCheck;
    if (isCheck) {
      menu.style = 'transform: scale(1)';
      modal.style = 'display: block';
      menuBar.classList.add('active');
    } else {
      menu.style = 'transform: scale(0)';
      modal.style = 'display: none';
      menuBar.classList.remove('active');
    }
  };

  // handle modal background on mobile
  modal.onclick = () => {
    isCheck = !isCheck;
    menu.style = 'transform: scale(0)';
    modal.style = 'display: none';
    menuBar.classList.remove('active');
  };

  // Ngày sinh
  const birthday = new Date('2002-08-08');
  // Ngày hiện tại
  const today = new Date();

  // Tính toán tuổi
  const age = today.getFullYear() - birthday.getFullYear();

  // Kiểm tra xem đã qua sinh nhật chưa trong năm nay
  if (
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
  ) {
    age--; // Chưa qua sinh nhật năm nay
  }

  ageElement.innerText = age;
};
