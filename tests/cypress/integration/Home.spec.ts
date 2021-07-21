describe('Home', () => {
  context('Empty Products', () => {
    it('Should show empty message if theres no product', () => {
      cy.intercept('**/api/v1/product', {
        body: [],
      }).as('emptyProducts');

      cy.visit('/');

      cy.wait('@emptyProducts');

      cy.getByDataCy('no-content-text').should(
        'contain.text',
        'Nenhum produto encontrado.'
      );
      cy.getByDataCy('header-count-text').should(
        'contain.text',
        '0 resultado(s)'
      );
    });
  });

  context('Products', () => {
    beforeEach(() => {
      cy.intercept('**/api/v1/product', {
        fixture: 'products',
      }).as('products');

      cy.visit('/');

      cy.wait('@products');
    });

    it('Should cards length be equal to products length', () => {
      cy.fixture('products').then((products) => {
        cy.getByDataCy('product-card').should('have.length', products.length);
        cy.getByDataCy('header-count-text').should(
          'contain.text',
          `${products.length} resultado(s)`
        );
      });
    });

    it('Should add product to cart', () => {
      cy.getByDataCy('add-cart-button').eq(1).click();
      cy.getByDataCy('cart-products-label').should('contain.text', 1);
    });

    it('Should remove product from cart', () => {
      cy.getByDataCy('add-cart-button').eq(1).click();
      cy.getByDataCy('cart-products-label').should('contain.text', 1);

      cy.getByDataCy('add-cart-button').eq(1).click();
      cy.getByDataCy('cart-button').children().should('have.length', 1);
    });

    it('Should like product', () => {
      cy.getByDataCy('like-button').eq(1).click();
      cy.getByDataCy('liked-products-label').should('contain.text', 1);
    });

    it('Should remove liked product', () => {
      cy.getByDataCy('like-button').eq(1).click();
      cy.getByDataCy('liked-products-label').should('contain.text', 1);

      cy.getByDataCy('like-button').eq(1).click();
      cy.getByDataCy('liked-products-button')
        .children()
        .should('have.length', 1);
    });

    it('Should show empty text message on liked products list', () => {
      cy.getByDataCy('liked-products-button').click();
      cy.getByDataCy('no-content-text').should(
        'contain.text',
        'Nenhum produto favoritado.'
      );
    });

    it('Should have correct items length on liked products list', () => {
      cy.getByDataCy('like-button').eq(1).click();

      cy.getByDataCy('liked-products-button').click();

      cy.getByDataCy('liked-products-label').should('contain.text', 1);
      cy.getByDataCy('liked-product').should('have.length', 1);
    });

    it('Should remove liked product on liked products list', () => {
      cy.getByDataCy('like-button').eq(1).click();

      cy.getByDataCy('liked-products-button').click();

      cy.getByDataCy('liked-products-label').should('contain.text', 1);
      cy.getByDataCy('liked-product').should('have.length', 1);

      cy.getByDataCy('remove-liked-product').click();
      cy.getByDataCy('liked-product').should('not.have.length');
    });

    it('Should search a product', () => {
      cy.getByDataCy('search-input').type('Rustic');
      cy.getByDataCy('search-button').click();

      cy.getByDataCy('product-card').should('have.length', 3);
      cy.getByDataCy('header-count-text').should(
        'contain.text',
        '3 resultado(s)'
      );
    });

    it('Should clear search', () => {
      cy.getByDataCy('search-input').type('Rustic');
      cy.getByDataCy('search-button').click();

      cy.getByDataCy('product-card').should('have.length', 3);
      cy.getByDataCy('header-count-text').should(
        'contain.text',
        '3 resultado(s)'
      );

      cy.getByDataCy('clear-search').click();

      cy.fixture('products').then((products) => {
        cy.getByDataCy('product-card').should('have.length', products.length);
        cy.getByDataCy('header-count-text').should(
          'contain.text',
          `${products.length} resultado(s)`
        );
      });
    });
  });
});
