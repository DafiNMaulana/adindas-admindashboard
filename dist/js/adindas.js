const sidebar = document.getElementById('sidebar');
const btnMenu = document.getElementById('btn-menu');
const chart = document.getElementById('line-chart');
const sidebarText = document.querySelectorAll('.sidebar-text');
const profile = document.getElementById('profile');
const profileMenu = document.getElementById('profile-menu');
const notifParent = document.querySelector('.notif-parent');
const notifBtn = document.getElementById('notif-btn');
const mobileMenu = document.getElementById('mobile-menu');

let modalBtns = document.querySelectorAll('.modal-btn');

for (let modalBtn of modalBtns) {
  modalBtn.onclick = () => {
    let targetModalId = modalBtn.dataset.target;
    let targetModal = document.getElementById(targetModalId);
    
    if (targetModal) {
      const modalBox = targetModal.querySelector('.modalBox');
      // toggle class untuk menampilkan atau menyembunyikan modal
      targetModal.classList.toggle('invisible');
      targetModal.classList.toggle('visible');
      targetModal.classList.toggle('opacity-100');
      modalBox.classList.toggle('-translate-y-28');
      
      // menambahkan event listener untuk tombol cancel
      let cancelBtn = targetModal.querySelector('.btn-cancel');
      if (cancelBtn) {
        cancelBtn.onclick = () => {
          targetModal.classList.toggle('invisible');
          targetModal.classList.toggle('visible');
          targetModal.classList.toggle('opacity-100');
          modalBox.classList.toggle('-translate-y-28');
        };
      }
    }
  };
}



mobileMenu.onchange = () => {
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
}

btnMenu.onchange = () => {
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
};

profile.onclick = () => {
  profileMenu.classList.toggle('invisible');
  profileMenu.classList.toggle('visible');
  profileMenu.classList.toggle('top-[70px]');
  profileMenu.classList.toggle('opacity-0');
  profileMenu.classList.toggle('opacity-100');
}

notifBtn.onclick = () => {
  notifParent.classList.toggle('invisible');
  notifParent.classList.toggle('visible');
  notifParent.classList.toggle('opacity-0');
  notifParent.classList.toggle('opacity-100');
}