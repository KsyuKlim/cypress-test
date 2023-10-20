// export class NavMenuComponent {
//     elements = {
//       menuItem: (menuTitleName) => cy.get(`[title='${menuTitleName}']`),
//     };
  
//     openMenuItemByValue(menuTitleName) {
//       this.elements.menuItem(menuTitleName).click();
//     }
//   }

export class NavSubMenuComponent {

  elements = {
      menuElement: (value) => cy.get(`[title='${value}']`)
  }

  openSubMenuByValue(value) {
      this.elements.menuElement(value).click();
  }
}