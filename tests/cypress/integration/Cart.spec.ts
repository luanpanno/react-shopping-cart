const cartProductsMock = [
  { id: '1', quantity: 1, price: 289, total: 289 },
  { id: '2', quantity: 1, total: 430, price: 430 },
  { id: '3', quantity: 1, total: 993, price: 993 },
];

describe('Cart', () => {
  context('Empty Cart', () => {
    it('Should show empty text message if theres no products on cart', () => {
      cy.clearLocalStorage();

      cy.intercept('**/api/v1/product', {
        fixture: 'products',
      }).as('products');

      cy.visit('/carrinho');

      cy.wait('@products');

      cy.getByDataCy('no-content-text').should(
        'contain.text',
        'Carrinho vazio.'
      );
      cy.getByDataCy('header-count-text').should(
        'contain.text',
        '0 produto(s) adicionados'
      );
    });
  });

  context('Cart with products', () => {
    before(() => {
      cy.clearLocalStorage();

      cy.intercept('**/api/v1/product', {
        fixture: 'products',
      }).as('products');

      cy.visit('/carrinho');

      cy.wait('@products');
    });

    beforeEach(() => {
      cy.intercept('**/api/v1/product', {
        fixture: 'products',
      }).as('products');

      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );

      cy.reload();

      cy.wait('@products');
    });

    it('Should have the correct products length on cart', () => {
      const cartLength = cartProductsMock.length;

      cy.getByDataCy('cart-product').should('have.length', cartLength);
      cy.getByDataCy('header-count-text').should(
        'contain.text',
        `${cartLength} produto(s) adicionados`
      );
      cy.getByDataCy('cart-products-label').should('contain.text', cartLength);
    });

    it('Should increase quantity by clicking in button', () => {
      const cartLength = cartProductsMock.length + 1;

      cy.getByDataCy('increase-button', ':first').click();

      cy.getByDataCy('header-count-text').should(
        'contain.text',
        `${cartLength} produto(s) adicionados`
      );
      cy.getByDataCy('cart-products-label').should('contain.text', cartLength);
    });

    it('Should decrease quantity by clicking in button', () => {
      const cartLength = cartProductsMock.length - 1;

      cy.getByDataCy('decrease-button', ':first').click();

      cy.getByDataCy('header-count-text').should(
        'contain.text',
        `${cartLength} produto(s) adicionados`
      );
      cy.getByDataCy('cart-products-label').should('contain.text', cartLength);
    });

    it('Should change quantity by typing on field', () => {
      const cartLength = cartProductsMock.length + 1;

      cy.getByDataCy('quantity-input', ':first').type('{backspace}').type('2');

      cy.getByDataCy('header-count-text').should(
        'contain.text',
        `${cartLength} produto(s) adicionados`
      );
      cy.getByDataCy('cart-products-label').should('contain.text', cartLength);
    });

    it('Should disable decrease button if theres no quantity', () => {
      cy.getByDataCy('decrease-button', ':first').click().should('be.disabled');
    });

    it('Should disable increase button if quantity is equal to product stock', () => {
      cy.getByDataCy('decrease-button', ':first').click();

      cy.fixture('products').then((products) => {
        const product = products?.find(
          (item) => item.id === cartProductsMock[0].id
        );

        cy.getByDataCy('quantity-input', ':first').type(product.stock);
      });

      cy.getByDataCy('increase-button', ':first').should('be.disabled');
    });

    it('Should open confirm modal on delete click', () => {
      cy.getByDataCy('delete-product-button', ':first').click();

      cy.get('.react-confirm-alert').should('exist');
    });

    it('Should close confirm modal', () => {
      cy.getByDataCy('delete-product-button', ':first').click();

      cy.getByDataCy('close-confirm').click();
      cy.getByDataCy('cart-products-label').should(
        'contain.text',
        cartProductsMock.length
      );
    });

    it('Should delete cart product', () => {
      const cartLength = cartProductsMock.length - 1;

      cy.getByDataCy('delete-product-button', ':first').click();

      cy.getByDataCy('confirm-alert').click();

      cy.getByDataCy('header-count-text').should(
        'contain.text',
        `${cartLength} produto(s) adicionados`
      );
      cy.getByDataCy('cart-products-label').should('contain.text', cartLength);
    });

    it('Should have the correct total price', () => {
      cy.getByDataCy('increase-button', ':first').click();

      cy.getByDataCy('total-price').should('contain.text', `R$ 2.001,00`);
    });

    it('Should disable checkout button if theres error', () => {
      cy.getByDataCy('decrease-button', ':first').click();

      cy.getByDataCy('checkout-button').should('be.disabled');
    });
  });
});
