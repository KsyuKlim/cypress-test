/// <reference types="cypress" />
import { LoginPage } from "../pages/loginPage";

describe("Login Page Validation", () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        cy.visit("/pages/forms/layouts/");
    });

    it("Email validation checkup if invalid", () => {
        loginPage.enterEmail("invalid-email");
        loginPage.enterPassword("password");
        loginPage.clickLoginButton();
        cy.contains("Email should be a valid one!").should("be.visible");
    });

    it("Password validation checkup if empty", () => {
        loginPage.enterEmail("valid-email@example.com");
        loginPage.enterPassword("");
        loginPage.clickLoginButton();
        cy.contains("Password is required!").should("be.visible");
    });

    it("Successful Login", () => {
        loginPage.enterEmail("valid-email@example.com");
        loginPage.enterPassword("password");
        loginPage.clickLoginButton();
        // Додайте перевірку на наявність аватара на домашній сторінці
        cy.get(".avatar").should("be.visible");
    });

    it("Password validation checkup if less than 6 characters", () => {
        loginPage.enterEmail("valid-email@example.com");
        loginPage.enterPassword("12345"); // Пароль менше 6 символів
        loginPage.clickLoginButton();
        cy.contains("Password must be at least 6 characters long!").should("be.visible");
    });

    // Додайте інші кейси за аналогією до кейсів 1 та 2

    it("Forgot Password Link Test", () => {
        loginPage.clickForgotPasswordLink();
        // Додайте перевірку, що ви перейшли на сторінку відновлення паролю (наприклад, за URL)
        cy.url().should("include", "/auth/forgot-password");
    });
});

  
  

