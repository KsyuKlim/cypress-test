import { LoginPage } from "../pages/LoginPage";

// export class NavMenuComponent {
//     elements = {
//       menuItem: (menuTitleName) => cy.get(`[title='${menuTitleName}']`),
//     };
  
//     openMenuItemByValue(menuTitleName) {
//       this.elements.menuItem(menuTitleName).click();
//     }
//   }


export class NavMenuComponent {
    elements = {
      menuLogin: () => cy.get("[title='Login']"),
    };
  
    openMenuItemByValue() {
      this.elements.menuLogin().click();
      return new LoginPage();
    }
  }
