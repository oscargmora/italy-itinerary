const parent = document.querySelector('#content');

const maySixteenth = [
    '10:00 AM: Ferry to Naples',
    '2:00 PM: Bed & Fly Check-In'
];
const maySeventeenth = [
    '7:40 AM: Departure from Naples',
    '3:30 PM: Land in MIA'
];

function createMaySixteenthItinerary(subContainer) {
    const listHeader = document.createElement('h4');
    listHeader.classList.add('list-header');
    listHeader.innerText = 'May 8th';
    subContainer.appendChild(listHeader);
    const ul = document.createElement('ul');
    ul.classList.add('ul');
    maySixteenth.forEach((time) => {
        const li = document.createElement('li');
        li.classList.add('li');
        li.innerText = time;
        ul.appendChild(li);
    });
    listHeader.appendChild(ul);
}

function createMaySeventeenthItinerary(subContainer) {
    const listHeader = document.createElement('h4');
    listHeader.classList.add('list-header');
    listHeader.innerText = 'May 9th';
    subContainer.appendChild(listHeader);
    const ul = document.createElement('ul');
    ul.classList.add('ul');
    maySeventeenth.forEach((time) => {
        const li = document.createElement('li');
        li.classList.add('li');
        li.innerText = time;
        ul.appendChild(li);
    });
    listHeader.appendChild(ul);
}

function createAllItineraries(subContainer) {
    createMaySixteenthItinerary(subContainer);
    createMaySeventeenthItinerary(subContainer);
}

const createArrivalPage = () => {
    document.body.style.backgroundImage =
        "url('/src/img/arrival-background-img.jpeg')";

    const div = document.createElement('div');
    div.classList.add('div');
    div.setAttribute('id', 'main-div');
    parent.appendChild(div);

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    div.appendChild(mainContainer);

    const mainTitle = document.createElement('p');
    mainTitle.innerText = 'Arrival Information';
    mainTitle.setAttribute('id', 'main-title');
    mainContainer.appendChild(mainTitle);

    const subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');
    div.appendChild(subContainer);

    createAllItineraries(subContainer);
};

export default createArrivalPage;
