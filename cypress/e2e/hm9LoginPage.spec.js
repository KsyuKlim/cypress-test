/// <reference types="cypress" />
import { LoginPage } from "../pages/loginPage";


describe("Login Page Validation", () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        cy.visit("/auth/login/");
    });

    it("Email validation checkup if invalid", () => {
        loginPage.enterEmail("invalid-email");
        loginPage.enterPassword("password");
        cy.contains("Email should be the real one!").should("be.visible");
    });

    it("Password validation checkup if empty", () => {
        loginPage.enterEmail("valid-email@example.com");
        cy.contains("Log In").should('be.disabled');
    });

    it("Password validation checkup if less than 4 characters", () => {
        loginPage.enterPassword("123");
        loginPage.enterEmail("valid-email@example.com");
        cy.contains("Password should contain from 4 to 50 characters").should("be.visible");
    });
    
    it("Successful Login", () => {
        loginPage.enterEmail("valid-email@example.com");
        loginPage.enterPassword("password");
        loginPage.clickLoginButton();
        cy.get('.user-picture.image.ng-star-inserted').should('be.visible');
;
    })
});