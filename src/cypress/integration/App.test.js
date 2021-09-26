
import {mount} from 'cypress-react-unit-test';
import App from '../../App';

describe('App', () => {
    it('opens up the screen with a search bar', () => {
        mount(<App/>);
        cy.visit('http://localhost:3000/')
    });
});

