const sidebar = document.getElementById('sidebar');
const btnMenu = document.getElementById('btn-menu');
const chart = document.getElementById('line-chart');
const sidebarText = document.querySelectorAll('.sidebar-text');
const profile = document.getElementById('profile');
const profileMenu = document.getElementById('profile-menu');
const notifParent = document.querySelector('.notif-parent');
const notifBtn = document.getElementById('notif-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenu.addEventListener('change', () => {
  sidebar.classList.toggle('w-0');
  sidebar.classList.toggle('w-[300px]');
  sidebar.classList.toggle('p-0');
  sidebar.classList.toggle('p-5');
  sidebar.classList.toggle('overflow-x-hidden');
  for(i of sidebarText) {
    i.classList.toggle('scale-100');
    i.classList.toggle('scale-0');
  }
  
  if(mobileMenu.checked) {
    btnMenu.checked = false
  } else if (btnMenu.checked = false) {
    btnMenu.checked = false
  }
})

btnMenu.addEventListener('change', () => {
  sidebar.classList.toggle('lg:w-[300px]');
  sidebar.classList.toggle('lg:w-[100px]');
  for(i of sidebarText) {
    i.classList.toggle('lg:scale-100');
    i.classList.toggle('lg:scale-0');
  }
  if (window.innerWidth <= 992) {
    sidebar.classList.toggle('w-0');
    sidebar.classList.toggle('w-[300px]');
    sidebar.classList.toggle('p-0');
    sidebar.classList.toggle('p-5');
    sidebar.classList.toggle('overflow-x-hidden');
    for(i of sidebarText) {
      i.classList.toggle('scale-100');
      i.classList.toggle('scale-0');
    }
  }
});

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