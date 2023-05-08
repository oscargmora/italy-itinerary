import backgroundImage from '../img/background-img.jpeg';
import postcardImg from '../img/postcard-img.png';

const parent = document.querySelector('#content');

const createHomePage = () => {
    document.body.style.backgroundImage = `url('${backgroundImage}')`;

    const div = document.createElement('div');
    div.classList.add('div');
    div.setAttribute('id', 'main-div');
    parent.appendChild(div);

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    div.appendChild(mainContainer);

    const mainTitle = document.createElement('p');
    mainTitle.innerText = "Bella Ciao! Pronto per l'italia?";
    mainTitle.setAttribute('id', 'main-title');
    mainContainer.appendChild(mainTitle);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    div.appendChild(imgContainer);

    const img = document.createElement('img');
    img.src = postcardImg;
    img.setAttribute('id', 'main-img');
    imgContainer.appendChild(img);

    const subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');
    div.appendChild(subContainer);

    const subTitle = document.createElement('p');
    subTitle.innerText = 'Choose a Selection Above!';
    subTitle.setAttribute('id', 'sub-title');
    subContainer.appendChild(subTitle);
};

export default createHomePage;
