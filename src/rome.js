const parent = document.querySelector('#content');

const mayTenth = [
    '6:00 AM: Trevi Fountain',
    '5:30 PM: Colosseum',
    '6:30 PM: Roman Forum',
    '7:30 PM: Club/Bar'
];
const mayEleventh = ['7:00 AM: Vatican City', '8:00 PM: Campo de Fiori'];

function createMayTenthItinerary(subContainer) {
    // Create List Header
    const listHeader = document.createElement('h4');
    listHeader.classList.add('list-header');
    listHeader.innerText = 'May 10th';
    subContainer.appendChild(listHeader);

    // Create Unordered List
    const ul = document.createElement('ul');

    // Add Container to Unordered List
    const container = document.createElement('container');
    container.classList.add('img-ul-container');
    ul.appendChild(container);

    // Add Image to Container
    const mayTenthImg = document.createElement('img');
    mayTenthImg.src = '/src/img/colosseum-img.png';
    mayTenthImg.classList.add('tab-img');
    container.appendChild(mayTenthImg);

    // Add Container to Unordered List
    const liContainer = document.createElement('container');
    liContainer.classList.add('li-container');
    container.appendChild(liContainer);

    // Affix Array to Unordered List
    mayTenth.forEach((time) => {
        const li = document.createElement('li');
        li.classList.add('li');
        li.innerText = time;
        liContainer.appendChild(li);
    });

    // Append Unordered List to List Header
    listHeader.appendChild(ul);
}

function createMayEleventhItinerary(subContainer) {
    // Create List Header
    const listHeader = document.createElement('h4');
    listHeader.classList.add('list-header');
    listHeader.innerText = 'May 11th';
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
    mayEleventh.forEach((time) => {
        const li = document.createElement('li');
        li.classList.add('li');
        li.innerText = time;
        liContainer.appendChild(li);
    });

    // Add Image to Container
    const mayEleventhImg = document.createElement('img');
    mayEleventhImg.src = '/src/img/sistine-chapel-img.png';
    mayEleventhImg.classList.add('tab-img');
    container.appendChild(mayEleventhImg);

    // Append Unordered List to List Header
    listHeader.appendChild(ul);
}

function createAllItineraries(subContainer) {
    createMayTenthItinerary(subContainer);
    createMayEleventhItinerary(subContainer);
}

const createRomePage = () => {
    document.body.style.backgroundImage =
        "url('/src/img/rome-background-img.jpg')";

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

    createAllItineraries(subContainer);
};

export default createRomePage;
