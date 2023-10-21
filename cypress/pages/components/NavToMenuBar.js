import { LoginPage } from "../loginPage";
import { RegisterPage } from "../RegisterPage";

export class NavMenuComponent {
    elements = {
      menuAuth: () => cy.contains("Auth"),
      menuLogin: () => cy.contains("Login"),
      menuRegister: () => cy.contains("Register")
    };
  
    openAuthTab() {
      this.elements.menuAuth().click();
    }

    openLoginTab() {
        this.elements.menuLogin().click();
        return new LoginPage();
      }

    openRegisterTab() {
        this.elements.menuRegister().click();
        return new RegisterPage();
      }  

  }