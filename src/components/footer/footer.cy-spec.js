/// <reference types="cypress" />
import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Footer } from './footer';
// import app's style so the footer looks real
import 'todomvc-app-css/index.css';

describe('footer component', () => {
  it('calls onClearCompleted if there are completed items', () => {
    mount(
      <section className="todoapp">
        <Footer itemsLeft={10} completedCount={2} onClearCompleted={cy.stub().as('clear')} />
      </section>
    );
    // component is running like a mini web app
    // we can interact with it using normal Cypress commands
    // https://on.cypress.io/api
    cy.contains('Clear completed').click();
    cy.get('@clear').should('have.been.calledOnce');
  });
});
