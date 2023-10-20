export class LoginPage {
    elements = {
        emailInput: () => cy.get("#inputEmail1"),
        passwordInput: () => cy.get("#inputPassword2"),
        loginButton: () => cy.contains("Log In")
    }

    enterEmail(value) {
        this.elements.emailInput().type(value);
    }

    enterPassword(value) {
        this.elements.passwordInput().type(value, { sensitive: true });
    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }
}
