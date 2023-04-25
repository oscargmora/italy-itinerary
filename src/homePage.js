const parent = document.querySelector('#content');

const createHomePage = () => {
    const div = document.createElement('div');
    div.classList = 'div';
    parent.appendChild(div);

    const detail = document.createElement('p');
    detail.innerText = 'Delicious Food';
    div.appendChild(detail);
};

export default createHomePage;
