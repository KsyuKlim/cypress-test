/// <reference types="cypress" />
import moment from 'moment';
import { DatePickerPage } from "../pages/DatePicker";

describe("Datepicker Test", () => {
    it("Перевірка вибору сьогоднішньої дати", () => {
        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Datepicker").click();
        const dateTab = new DatePickerPage();
        dateTab.openCommonDatepicker();
        dateTab.selectToday(); 
        cy.contains("nb-card", "Common Datepicker").find('input[placeholder="Form Picker"]').invoke('val').then((fieldText) => {
            const dateFromField = moment(fieldText, 'MMM DD, YYYY');
            const today = moment();
            expect(dateFromField.isSame(today, 'day')).to.be.true;
          });
    });
  });
  