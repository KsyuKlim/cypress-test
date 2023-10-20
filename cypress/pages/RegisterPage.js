
export class RegisterPage {
    elements = {
        emailInput: () => cy.get("#inputEmail"), 
        passwordInput: () => cy.get("#inputPassword"), 
        registerButton: () => cy.contains("Register") 
    }

    enterEmail(value) {
        this.elements.emailInput().type(value);
    }

    enterPassword(value) {
        this.elements.passwordInput().type(value, { sensitive: true });
    }

    clickRegisterButton() {
        this.elements.registerButton().click();
    }
}
