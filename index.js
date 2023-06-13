var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

 var topMenuEl = document.getElementById('top-menu');

menuLinks.forEach(function(link) {
  var linkEl = document.createElement('a');
  linkEl.setAttribute('href', link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});




const mainEl = document.querySelector('main');

const mainBgColor = getComputedStyle(mainEl).getPropertyValue('--main-bg');

mainEl.style.backgroundColor = mainBgColor;

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

mainEl.classList.add('flex-ctr');



topMenuEl.style.height = '100%';

const topMenuBgColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');

topMenuEl.style.setProperty('background-color', topMenuBgColor);

topMenuEl.classList.add('flex-around');

topMenuEl.appendChild(link1);

topMenuEl.appendChild(link2);

topMenuEl.appendChild(link3);

topMenuEl.appendChild(link4);