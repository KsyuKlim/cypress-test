/// <reference types="cypress" />
import { NavMenuComponent } from "../pages/components/NavToMenuBar";

describe("Register Page Validation", () => {
    const menuItem = new NavMenuComponent();
    beforeEach(() => {
        cy.visit("/");
        menuItem.openAuthTab();
    });

    it("Email validation checkup if invalid", () => {
        const loginPage = menuItem.openLoginTab();
        loginPage.enterEmail("invalid-email");
        loginPage.enterPassword("password");
        cy.contains("Email should be the real one!").should("be.visible");
    });

    it("Password validation checkup if empty", () => {
        const loginPage = menuItem.openLoginTab();
        loginPage.enterEmail("valid-email@example.com");
        cy.contains("Log In").should('be.disabled');
    });

    it("Password validation checkup if less than 4 characters", () => {
        const loginPage = menuItem.openLoginTab();
        loginPage.enterPassword("123");
        loginPage.enterEmail("valid-email@example.com");
        cy.contains("Password should contain from 4 to 50 characters").should("be.visible");
    });

    it("Successful Login", () => {
        const loginPage = menuItem.openLoginTab();
        loginPage.enterEmail("valid-email@example.com");
        loginPage.enterPassword("password");
        loginPage.clickLoginButton();
        cy.get('.user-picture.image.ng-star-inserted').should('be.visible');
    });

  });
  