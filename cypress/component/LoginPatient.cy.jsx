import LoginPatient from "../../src/admin/LoginPatient";
import HomeAdmin from "../../src/admin/HomeAdmin";
import { MemoryRouter } from "react-router-dom";

describe("LoginPatient", () => {
  it("logs in with valid credentials", () => {
    cy.intercept("POST", "/src/patient/login", {
      statusCode: 200,
    }).as("login");

    cy.mount(
      <MemoryRouter>
        <LoginAdmin />
      </MemoryRouter>
    );
   it("hd",()=>{
    cy.get('.username-input').type("admin123");



    cy.get('input[type=password]').type('pas');


    cy.get('button[type="submit"]').click();

      // Check if the user is redirected to the home page
      cy.url().should("include", "/admin/home");
      cy.contains("Welcome to the Admin Dashboard").should("be.visible");
      cy.get(".logout-button").should("be.visible");
    });
  });
});

