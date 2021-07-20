const cartProductsMock = [
  { id: '1', quantity: 1, price: 289, total: 289 },
  { id: '2', quantity: 1, total: 430, price: 430 },
  { id: '3', quantity: 1, total: 993, price: 993 },
];

describe('Cart', () => {
  describe('Empty', () => {
    it('Should show empty text message if theres no products on cart', () => {
      cy.clearLocalStorage();

      cy.intercept('**/api/v1/product', {
        fixture: 'products',
      }).as('products');

      cy.visit('/carrinho');

      cy.wait('@products');

      cy.get('p').should('contain.text', 'Carrinho vazio.');
      cy.get('span').should('contain.text', '0 produto(s) adicionados');
    });
  });

  describe('With Items', () => {
    beforeEach(() => {
      cy.clearLocalStorage();

      cy.intercept('**/api/v1/product', {
        fixture: 'products',
      }).as('products');

      cy.visit('/carrinho');

      cy.wait('@products');
    });

    it('Should have the correct products length on cart', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.getByDataId('cart-product').should(
        'have.length',
        cartProductsMock.length
      );
      cy.get('span').should(
        'contain.text',
        `${cartProductsMock.length} produto(s) adicionados`
      );
      cy.getByDataId('cart-products-label').should(
        'contain.text',
        cartProductsMock.length
      );
    });

    it('Should increase quantity by clicking in button', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=increase-button]:first').click();

      cy.get('span').should(
        'contain.text',
        `${cartProductsMock.length + 1} produto(s) adicionados`
      );
      cy.getByDataId('cart-products-label').should(
        'contain.text',
        cartProductsMock.length + 1
      );
    });

    it('Should decrease quantity by clicking in button', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=decrease-button]:first').click();

      cy.get('span').should(
        'contain.text',
        `${cartProductsMock.length - 1} produto(s) adicionados`
      );
      cy.getByDataId('cart-products-label').should(
        'contain.text',
        cartProductsMock.length - 1
      );
    });

    it('Should change quantity by typing on field', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=quantity-input]:first').type('{backspace}');
      cy.get('[data-cy=quantity-input]:first').type('2');

      cy.get('span').should(
        'contain.text',
        `${cartProductsMock.length + 1} produto(s) adicionados`
      );
      cy.getByDataId('cart-products-label').should(
        'contain.text',
        cartProductsMock.length + 1
      );
    });

    it('Should disable decrease button if theres no quantity', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=decrease-button]:first').click();

      cy.get('[data-cy=decrease-button]:first').should('be.disabled');
    });

    it('Should disable increase button if quantity is equal to product stock', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=decrease-button]:first').click();

      cy.fixture('products').then((products) => {
        const product = products?.find(
          (item) => item.id === cartProductsMock[0].id
        );

        cy.get('[data-cy=quantity-input]:first').type(product.stock);
      });

      cy.get('[data-cy=increase-button]:first').should('be.disabled');
    });

    it('Should show error if theres a quantity 0', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=decrease-button]:first').click();

      cy.get('[data-cy=quantity-field]:first')
        .should('have.css', 'border')
        .and('eq', '1px solid rgb(230, 57, 70)');
    });

    it('Should open confirm modal on delete click', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=delete-product-button]:first').click();

      cy.get('.react-confirm-alert').should('exist');
    });

    it('Should close confirm modal', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=delete-product-button]:first').click();

      cy.getByDataId('close-confirm').click();
      cy.getByDataId('cart-products-label').should(
        'contain.text',
        cartProductsMock.length
      );
    });

    it('Should delete cart product', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=delete-product-button]:first').click();

      cy.getByDataId('confirm-alert').click();
      cy.get('span').should(
        'contain.text',
        `${cartProductsMock.length - 1} produto(s) adicionados`
      );
      cy.getByDataId('cart-products-label').should(
        'contain.text',
        cartProductsMock.length - 1
      );
    });

    it('Should have the correct total price', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=increase-button]:first').click();

      cy.getByDataId('total-price').should('contain.text', `R$ 2.001,00`);
    });

    it('Should disable checkout button if theres error', () => {
      window.localStorage.setItem(
        'cartProducts',
        JSON.stringify(cartProductsMock)
      );
      cy.reload();
      cy.wait('@products');

      cy.get('[data-cy=decrease-button]:first').click();

      cy.getByDataId('checkout-button').should('be.disabled');
    });
  });
});
