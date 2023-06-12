var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  menuLinks.forEach(link=> {
    console.log(link.text, link.href);
  });

  const link1 = document.createElement('a');

link1.setAttribute("href", '/about'); 

link1.textContent = 'About';

const link2 = document.createElement('a');
link2.setAttribute("href", '/catalog'); 
link2.textContent = 'Catalog';

const link3 = document.createElement('a');
link3.setAttribute("href", '/orders'); 
link3.textContent = 'Orders';

const link4 = document.createElement('a');
link4.setAttribute("href", '/account'); 
link4.textContent = 'Account';


const mainEl = document.querySelector('main');

const mainBgColor = getComputedStyle(mainEl).getPropertyValue('--main-bg');

mainEl.style.backgroundColor = mainBgColor;

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

const topMenuBgColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');

topMenuEl.style.setProperty('background-color', topMenuBgColor);

topMenuEl.classList.add('flex-around');

topMenuEl.appendChild(link1);

topMenuEl.appendChild(link2);

topMenuEl.appendChild(link3);

topMenuEl.appendChild(link4);