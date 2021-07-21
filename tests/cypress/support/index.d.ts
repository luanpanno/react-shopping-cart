declare namespace Cypress {
  interface Chainable {
    getByDataCy(
      id: string,
      helpers?: string
    ): Cypress.Chainable<JQuery<HTMLElement>>;
  }
}
