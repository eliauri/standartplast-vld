(function(){
  const filter = document?.querySelector('[data-filter]');
  const filterMenu = document?.querySelector('[data-filter-menu]');
  const filterClose = document?.querySelector('[data-filter-close]');
  const body = document?.querySelector("body");

  filter?.addEventListener('click', (e) => {
    filter?.classList.toggle('filer--active');
    filterMenu?.classList.toggle('filter__menu--active');
    body.classList.toggle('stop-scroll');
  });
  filterClose?.addEventListener('click', (e) => {
    filter?.classList.toggle('filer--active');
    filterMenu?.classList.toggle('filter__menu--active');
    body.classList.toggle('stop-scroll');
  })
})();
