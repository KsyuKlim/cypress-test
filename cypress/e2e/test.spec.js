/// <reference types="cypress" />


describe("", () => {
    it("First test", () => {
      cy.visit("/pages/layout/");
  
      const elementsToClick = [
        '[data-name="layout"]',
        '[title="Accordion"]',
        '[title="Forms"]',
        '[title="Form Layouts"]'
      ];
  
      for (const elementSelector of elementsToClick) {
        cy.get(elementSelector).click();
      }
    });
  });
  
  

