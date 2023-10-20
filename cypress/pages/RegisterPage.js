
export class RegisterPage {
    elements = {
        nameInput: () => cy.get("#input-name"), 
        emailInput: () => cy.get("#input-email"), 
        passwordInput: () => cy.get("#input-password"), 
        passwordRepeatInput: () => cy.get("#input-re-password"), 
        termsAndCondition: () => cy.get(".custom-checkbox"),
        registerButton: () => cy.get('.appearance-filled.full-width.size-large.status-primary.shape-rectangle.transitions')

    }

    enterName(value) {
        this.elements.nameInput().type(value);
    }

    clickFieldName() {
        this.elements.nameInput().click();
    }

    enterEmail(value) {
        this.elements.emailInput().type(value);
    }

    clickFieldEmail() {
        this.elements.emailInput().click();
    }

    enterPassword(value) {
        this.elements.passwordInput().type(value, { sensitive: true });
    }

    clickFieldPassword() {
        this.elements.passwordInput().click();
    }

    reEnterPassword(value) {
        this.elements.passwordRepeatInput().type(value, { sensitive: true });
    }

    clickFieldReEnterPassword() {
        this.elements.passwordRepeatInput().click();
    }

    clickTermsAndCondition() {
        this.elements.termsAndCondition().click();
    }

    clickRegisterButton() {
        this.elements.registerButton().wait(5000).click();
    }
}
