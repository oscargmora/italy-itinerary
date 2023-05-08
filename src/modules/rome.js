import backgroundImage from '../img/rome-background-img.jpg';
import colosseum from '../img/colosseum-img.png';
import sistineChapel from '../img/sistine-chapel-img.png';

const parent = document.querySelector('#content');

const mayTenth = [
    '6:00 AM: Trevi Fountain',
    '5:30 PM: Colosseum',
    '6:30 PM: Roman Forum',
    '7:30 PM: Club/Bar'
];
const mayEleventh = ['7:00 AM: Vatican City', '8:00 PM: Campo de Fiori'];

function createItineraryImgLeft(subContainer, date, array, img) {
    // Create List Header
    const listHeader = document.createElement('h4');
    listHeader.classList.add('list-header');
    listHeader.innerText = date;
    subContainer.appendChild(listHeader);

    // Create Unordered List
    const ul = document.createElement('ul');

    // Add Container to Unordered List
    const container = document.createElement('container');
    container.classList.add('img-ul-container');
    ul.appendChild(container);

    // Add Image to Container
    const listImg = new Image();
    listImg.src = img;
    listImg.classList.add('tab-img');
    container.appendChild(listImg);

    // Add Container to Unordered List
    const liContainer = document.createElement('container');
    liContainer.classList.add('li-container');
    container.appendChild(liContainer);

    // Affix Array to Unordered List
    array.forEach((time) => {
        const li = document.createElement('li');
        li.classList.add('li');
        li.innerText = time;
        liContainer.appendChild(li);
    });

    // Append Unordered List to List Header
    listHeader.appendChild(ul);
}

function createItineraryImgRight(subContainer, date, array, img) {
    // Create List Header
    const listHeader = document.createElement('h4');
    listHeader.classList.add('list-header');
    listHeader.innerText = date;
    subContainer.appendChild(listHeader);

    // Create Unordered List
    const ul = document.createElement('ul');

    // Add Container to Unordered List
    const container = document.createElement('container');
    container.classList.add('img-ul-container');
    ul.appendChild(container);

    // Add Container to Unordered List
    const liContainer = document.createElement('container');
    liContainer.classList.add('li-container');
    container.appendChild(liContainer);

    // Affix Array to Unordered List
    array.forEach((time) => {
        const li = document.createElement('li');
        li.classList.add('li');
        li.innerText = time;
        liContainer.appendChild(li);
    });

    // Add Image to Container
    const listImg = new Image();
    listImg.src = img;
    listImg.classList.add('tab-img');
    container.appendChild(listImg);

    // Append Unordered List to List Header
    listHeader.appendChild(ul);
}

const createRomePage = () => {
    const background = new Image();
    background.src = backgroundImage;
    document.body.style.backgroundImage = `url('${background}')`;

    const div = document.createElement('div');
    div.classList.add('div');
    div.classList.add('main-div-rome');
    div.setAttribute('id', 'main-div');
    parent.appendChild(div);

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    div.appendChild(mainContainer);

    const mainTitle = document.createElement('p');
    mainTitle.innerText = 'When in Rome';
    mainTitle.setAttribute('id', 'main-title');
    mainContainer.appendChild(mainTitle);

    const subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');
    div.appendChild(subContainer);

    createItineraryImgLeft(subContainer, 'May 10th', mayTenth, colosseum);
    createItineraryImgRight(
        subContainer,
        'May 11th',
        mayEleventh,
        sistineChapel
    );
};

export default createRomePage;
