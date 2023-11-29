import React from 'react';

import HomeAdmin from '../../src/admin/Homeadmin';
import { MemoryRouter } from 'react-router-dom';

describe('HomeAdmin', () => {
  it('displays the menu with two items', () => {
    mount(
      <MemoryRouter>
        <HomeAdmin />
      </MemoryRouter>
    );

    cy.get('.ant-menu-item').should('have.length', 2);
    cy.get('.ant-menu-item').eq(0).should('contain', 'Doctors');
    cy.get('.ant-menu-item').eq(1).should('contain', 'Announcements');
  });

  it('displays the Manage component by default', () => {
    mount(
      <MemoryRouter>
        <HomeAdmin />
      </MemoryRouter>
    );

    cy.get('.site-layout').should('contain', 'Manage');
  });

  it('switches to the Announcements component when clicked', () => {
    mount(
      <MemoryRouter>
        <HomeAdmin />
      </MemoryRouter>
    );

    cy.get('.ant-menu-item').eq(1).click();
    cy.get('.site-layout').should('contain', 'Announcements');
  });
});
