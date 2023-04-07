const sidebar = document.getElementById('sidebar');
const sidebarText = Array.from(document.querySelectorAll('.sidebar-text'));
const btnMenu = document.getElementById('btn-menu');

sidebarText.forEach(st => {
  st.classList.add('transition-all', 'duration-300')
});

btnMenu.addEventListener('change', () => {
  sidebar.classList.toggle('w-[300px]');
  sidebar.classList.toggle('w-[100px]');
  sidebarText.forEach(st => {
    st.classList.toggle('opacity-0');
    st.classList.toggle('opacity-100');
  });
});
