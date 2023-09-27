/// <reference types="cypress" />


describe("", () => {
    it("First test color checkup", () => {
      cy.visit("/pages/layout/");
  
      const elementsToClick = [
        '[ng-reflect-value ="default"]',
        '[ng-reflect-value ="dark"]',
        '[ng-reflect-value ="cosmic"]',
        '[ng-reflect-value ="corporate"]'
      ];

      const colorBox = [ 
        "255, 255, 255", 
        "34, 43, 69", 
        "50, 50, 89", 
        "255, 255, 255" 
      ];
  
      for (let i = 0; i < elementsToClick.length; i++) {
        cy.get('[class="select-button"]').click();
        cy.get(elementsToClick[i]).click()
        cy.get('nb-layout-header nav').should('have.css', 'background-color', `rgb(${colorBox[i]})`);
      }
    });


    it("Second test text location checkup", () => {
        cy.visit("/pages/layout/accordion");

        const textForSearch = " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. "
        
        cy.contains(textForSearch).should("not.be.visible");         
        cy.contains("Toggle First Item").click();
        cy.contains(textForSearch).should("be.visible");
      });


      it("Third test validation of popover text", () => {
        cy.visit("/pages/modal-overlays/popover");
        
        cy.contains("Right").trigger("mouseenter");      
        cy.get("nb-popover").should("be.visible");
        cy.get("nb-popover").should("contain", "Hello, how are you today?");
      });


      it("Fourth test verification of the entered name", () => {
        cy.visit("/pages/modal-overlays/dialog");

        cy.contains("Enter Name").click();

        const randomName = "Kim Taehyung";

        cy.get('[placeholder="Name"]').type(randomName);
        cy.contains("Submit").click();
        cy.get('[class="ng-star-inserted"]').should("contain", randomName);

      });
    
  });
  
  

