declare namespace Cypress {
  interface Chainable {
    getByDataId(id: string): Cypress.Chainable<JQuery<HTMLElement>>;
  }
}
