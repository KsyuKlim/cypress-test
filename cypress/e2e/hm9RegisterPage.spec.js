/// <reference types="cypress" />
import { NavMenuComponent } from "../pages/components/NavToMenuBar";

describe("Register Page Validation", () => {
    const menuItem = new NavMenuComponent();
    beforeEach(() => {
        cy.visit("/");
        menuItem.openAuthTab();
    });

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

    it("Fields validation checkup if invalid", () => {
        const registerPage = menuItem.openRegisterTab();

        for (let i = 0; i < elementsToClick.length; i++) {
            registerPage[elementsToClick[i]]();
          }

          for (let i = 0; i < errorTextForCehckedField.length; i++) {
            cy.contains(`${errorTextForCehckedField[i]} is required!`).should("be.visible");
          }

        // TC is failed cuz there is no error text for Name field
    });

    it("Password validation checkup if less than 4 characters", () => {
        const registerPage = menuItem.openRegisterTab();
        registerPage.enterName("Tes");
        registerPage.clickFieldEmail();
        cy.contains("Full name should contains from 4 to 50 characters").should("be.visible");
    });
    
    it("Successful Registration checkup", () => {
        const registerPage = menuItem.openRegisterTab();
        for (let i = 0; i < elementsToEnter.length; i++) {
            registerPage[elementsToEnter[i]](i === 4 ? '' : `${textToFill[i]}`);
          }
        registerPage.clickRegisterButton();
        cy.get('.user-picture.image.ng-star-inserted').should('be.visible');
    });

  });
  