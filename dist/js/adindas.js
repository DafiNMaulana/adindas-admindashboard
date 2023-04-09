const sidebar = document.getElementById('sidebar');
const sidebarText = [...document.querySelectorAll('.sidebar-text')];
const btnMenu = document.getElementById('btn-menu');
const menuClose = document.querySelector('.menu-open');
const menuOpen = document.querySelector('.menu-close');
const btnDots = document.getElementById('btn-sub-menu');
const subMenu = document.querySelectorAll('.sub-menu-item');
const profile = document.getElementById('profile');
const profileMenu = document.getElementById('profile-menu');
const notifParent = document.querySelector('.notif-parent');
const notifBtn = document.getElementById('notif-btn');

sidebarText.forEach(st => st.classList.add('transition-all', 'duration-300'));

profile.addEventListener('click', () => {
  profileMenu.classList.toggle('invisible');
  profileMenu.classList.toggle('visible');
  profileMenu.classList.toggle('top-[70px]');
  profileMenu.classList.toggle('opacity-0');
  profileMenu.classList.toggle('opacity-100');
})

notifBtn.addEventListener('click', () => {
  notifParent.classList.toggle('invisible');
  notifParent.classList.toggle('visible');
  notifParent.classList.toggle('opacity-0');
  notifParent.classList.toggle('opacity-100');
})

const toggleSidebar = () => {
  sidebar.classList.toggle('w-[250px]');
  sidebar.classList.toggle('w-[100px]');
  sidebarText.forEach(st => {
    st.classList.toggle('opacity-0');
    st.classList.toggle('opacity-100');
  });
}


btnMenu.addEventListener('change', toggleSidebar);

if (btnDots) {
  btnDots.addEventListener('change', () => {
    subMenu.forEach(item => {
      item.classList.toggle('opacity-0', !btnDots.checked);
      item.classList.toggle('opacity-100', btnDots.checked);
      item.classList.toggle('translate-y-[999px]', !btnDots.checked);
      item.classList.toggle('translate-y-0', btnDots.checked);
    });
  });
}