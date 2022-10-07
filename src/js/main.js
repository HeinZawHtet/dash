import * as bootstrap from 'bootstrap'

const subNavs = document.querySelectorAll('.has-sub');

subNavs.forEach(function(nav) {
  const randomId = (Math.floor((Math.random() * 100) + 1));
  const className = 'sub-nav-' + randomId
  const navLink = nav.querySelector('.nav-link');
  navLink.dataset.bsTarget = '.' + className;
  navLink.dataset.bsToggle = 'collapse';
  nav.querySelector('.nav').classList.add('collapse', className);
})

const collapseElementList = document.querySelectorAll('.nav-link .nav')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))