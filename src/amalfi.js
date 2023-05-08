const parent = document.querySelector('#content');

const mayTwelfth = [
    '6:30 AM - 8:30 AM: Train from Rome Termini to Napoli Centrale',
    '9:00 AM - 10:30 AM: Bus from Napoli Centrale to Sorrento Enjoy Traveling Office',
    '11:00 AM: Freeway Scooter Pickup',
    '11:30 AM: 7 Hostel Check-In',
    '12:30 AM: Bagni Regina Giovanna'
];
const mayThirteenth = [
    '9:30 AM: Capri Boat Tour',
    '9:00 PM: Music on the Rocks'
];

const mayFourteenth = [
    '11:00 AM: Furore Di Fiordo',
    '5:30 PM: Cooking Class',
    '10:00 PM: Wine on the Beach'
];

const mayFifteenth = [
    '11:00 AM: Spiaggia Grande',
    "4:00 PM: Franco's Bar",
    '9:00 PM: La Tagliata'
];

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
    const listImg = document.createElement('img');
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
    const listImg = document.createElement('img');
    listImg.src = img;
    listImg.classList.add('tab-img');
    container.appendChild(listImg);

    // Append Unordered List to List Header
    listHeader.appendChild(ul);
}

const createAmalfiPage = () => {
    document.body.style.backgroundImage =
        "url('./img/amalfi-background-img.png')";

    const div = document.createElement('div');
    div.classList.add('div');
    div.classList.add('main-div-amalfi');
    div.setAttribute('id', 'main-div');
    parent.appendChild(div);

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    div.appendChild(mainContainer);

    const mainTitle = document.createElement('p');
    mainTitle.innerText = 'Welcome to Amalfi!';
    mainTitle.setAttribute('id', 'main-title');
    mainContainer.appendChild(mainTitle);

    const subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');
    div.appendChild(subContainer);

    createItineraryImgLeft(
        subContainer,
        'May 12th',
        mayTwelfth,
        './img/moped-img.png'
    );
    createItineraryImgRight(
        subContainer,
        'May 13th',
        mayThirteenth,
        './img/boat-img.png'
    );
    createItineraryImgLeft(
        subContainer,
        'May 14th',
        mayFourteenth,
        './img/food-img.png'
    );
    createItineraryImgRight(
        subContainer,
        'May 15th',
        mayFifteenth,
        './img/restaurant-img.png'
    );
};

export default createAmalfiPage;
