(() => {
    'use strict';
    const e = document.querySelector('#content');
    (() => {
        const t = document.createElement('div');
        (t.classList = 'div'), e.appendChild(t);
        const n = document.createElement('h1');
        (n.innerText = 'Teriyaki Express'), t.appendChild(n);
        const c = document.createElement('img');
        (c.src = '/src/teriyaki.png'), t.appendChild(c);
        const i = document.createElement('p');
        (i.innerText = 'Delicious Food'), t.appendChild(i);
    })();
})();
