/// <reference types="cypress" />

describe("Datepicker Test", () => {
    it("Перевірка вибору сьогоднішньої дати", () => {
      // Відвідайте сторінку Datepicker
      cy.visit("/pages/forms/datepicker");
      cy.get('input[formcontrolname="commonDatepicker"]').click();
      const today = Cypress.moment().format("DD/MM/YYYY");
      cy.contains(today).click();
      cy.get('input[formcontrolname="commonDatepicker"]').should("have.value", today);
    });
  });
  