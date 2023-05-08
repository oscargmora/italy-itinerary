const parent = document.querySelector('#content');

const mayEighth = ['3:30 PM: Departure from MIA Airport'];
const mayNinth = [
    '2:05 PM: Arrival in Naples',
    '4:30 PM: Train Ride from Napoli Centrale to Rome',
    '7:00 PM: Arrive at AirBNB',
    '8:00 PM: Arrive at Campo de Fiori'
];

function createMayEighthItinerary(subContainer) {
    const listHeader = document.createElement('h4');
    listHeader.classList.add('list-header');
    listHeader.innerText = 'May 8th';
    subContainer.appendChild(listHeader);
    const ul = document.createElement('ul');
    ul.classList.add('ul');
    mayEighth.forEach((time) => {
        const li = document.createElement('li');
        li.classList.add('li');
        li.innerText = time;
        ul.appendChild(li);
    });
    listHeader.appendChild(ul);
}

function createMayNinthItinerary(subContainer) {
    const listHeader = document.createElement('h4');
    listHeader.classList.add('list-header');
    listHeader.innerText = 'May 9th';
    subContainer.appendChild(listHeader);
    const ul = document.createElement('ul');
    ul.classList.add('ul');
    mayNinth.forEach((time) => {
        const li = document.createElement('li');
        li.classList.add('li');
        li.innerText = time;
        ul.appendChild(li);
    });
    listHeader.appendChild(ul);
}

function createAllItineraries(subContainer) {
    createMayEighthItinerary(subContainer);
    createMayNinthItinerary(subContainer);
}

const createDeparturePage = () => {
    document.body.style.backgroundImage =
        "url('/src/img/departure-background-img.jpeg')";

    const div = document.createElement('div');
    div.classList.add('div');
    div.setAttribute('id', 'main-div');
    parent.appendChild(div);

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    div.appendChild(mainContainer);

    const mainTitle = document.createElement('p');
    mainTitle.innerText = 'Departure Information';
    mainTitle.setAttribute('id', 'main-title');
    mainContainer.appendChild(mainTitle);

    const subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');
    div.appendChild(subContainer);

    createAllItineraries(subContainer);
};

export default createDeparturePage;
