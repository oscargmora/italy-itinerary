import createHomePage from './homePage';
import createNewPage from './tabs';

const initialLoad = () => {
    createHomePage();
    createNewPage();
};

export default initialLoad;
