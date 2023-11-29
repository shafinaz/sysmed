import LoginAdmin from "../../src/admin/LoginAdmin";
import HomeAdmin from "../../src/admin/HomeAdmin";
import { MemoryRouter } from "react-router-dom";
import { mount } from "@cypress/react";

describe("LoginAdmin", () => {
  beforeEach(() => {
    mount(
      <MemoryRouter>
        <LoginAdmin />
      </MemoryRouter>
    );
  });

  it("should redirect to home page after successful login", () => {
    // Enter incorrect credentials to stay on the login page
    // cy.get('.username-input').type("admin123");
    // cy.get('input[type=password]').type('password');
    // cy.get('button[type="submit"]').click();

    // cy.location().should((location) => {
    //   expect(location.pathname).to.eq('/login/admin')
    // })
    

    // Enter correct credentials to login
    cy.get('.username-input').clear().type("admin123");
    cy.get('input[type=password]').clear().type('admin123');
    cy.get('button[type="submit"]').click();

    // Check if the user is redirected to the home page
    console.log(cy.url());
    cy.url().should("include", "/admin/home");
    cy.contains("Welcome to the Admin Dashboard").should("be.visible");
    cy.get(".logout-button").should("be.visible");
  });
});
