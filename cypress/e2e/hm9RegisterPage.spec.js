/// <reference types="cypress" />
import { RegisterPage } from "../pages/RegisterPage";

describe("Register Page Validation", () => {
    const registerPage = new RegisterPage();

    const elementsToClick = [
        'clickFieldName',
        'clickFieldEmail',
        'clickFieldPassword',
        'clickFieldReEnterPassword',
        'clickTermsAndCondition'
      ];

      const errorTextForCehckedField = [
        'Email',
        'Password',
        'Password confirmation',
        'Name'
      ];

      const elementsToEnter = [
        'enterName',
        'enterEmail',
        'enterPassword',
        'reEnterPassword',
        'clickTermsAndCondition'
      ];

      const textToFill = [
        'John Doe',
        'johndoe@example.com',
        'password123',
        'password123'
      ];
  
    beforeEach(() => {
      cy.visit("/auth/register/");
    });

    it("Fields validation checkup if invalid", () => {

        for (let i = 0; i < elementsToClick.length; i++) {
            registerPage[elementsToClick[i]]();
          }

          for (let i = 0; i < errorTextForCehckedField.length; i++) {
            cy.contains(`${errorTextForCehckedField[i]} is required!`).should("be.visible");
          }

        // TC is failed cuz there is no error text for Name field
    });

    it("Password validation checkup if less than 4 characters", () => {
        registerPage.enterName("Tes");
        registerPage.clickFieldEmail();
        cy.contains("Full name should contains from 4 to 50 characters").should("be.visible");
    });
    
    it("Successful Registration checkup", () => {
        for (let i = 0; i < elementsToEnter.length; i++) {
            registerPage[elementsToEnter[i]](i === 4 ? '' : `${textToFill[i]}`);
          }
        registerPage.clickRegisterButton();
        cy.get('.user-picture.image.ng-star-inserted').should('be.visible');
    });

  });
  