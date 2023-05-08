import createDeparturePage from './departure';
import createRomePage from './rome';
import createAmalfiPage from './amalfi';
import createArrivalPage from './arrival';

const departureButton = document.querySelector('#departure');
const romeButton = document.querySelector('#rome');
const amalfiButton = document.querySelector('#amalfi');
const arrivalButton = document.querySelector('#arrival');

function clearContent() {
    const content = document.querySelector('#content');
    const mainContent = document.querySelector('#main-div');
    if (mainContent) {
        content.removeChild(mainContent);
    }
}

const createNewPage = () => {
    departureButton.addEventListener('click', () => {
        clearContent();
        createDeparturePage();
    });
    romeButton.addEventListener('click', () => {
        clearContent();
        createRomePage();
    });
    amalfiButton.addEventListener('click', () => {
        clearContent();
        createAmalfiPage();
    });
    arrivalButton.addEventListener('click', () => {
        clearContent();
        createArrivalPage();
    });
};

export default createNewPage;
