describe('books page', () => {

    beforeEach(() => {
        cy.visit('localhost:3000');
    });

    it('Should render default page with table', () => {
        cy.get('th').should('include.text', 'Authors');
        cy.get('th').should('include.text', 'Title');
        cy.get('th').should('not.include.text', 'Cars');
    });

    it('Should render tabs', () => {
        cy.get('div').should('include.text', 'Book Overview').and('be.visible');
        cy.get('div').should('include.text', 'New Book').and('be.visible');
    });

    it('Should render some rows in the table', () => {
        cy.get('table').find('tbody').children().should('have.length', 2);
    });

    describe('Selectors', () => {
        describe('CSS selectors', () => {
            it('Should render nav', () => {
                cy.get('.nav').should('be.visible')

                // starts with
                cy.get('[class^=na]').should('be.visible')
            });
        });

        describe('Test id attributes', () => {
            it('Should render table', () => {
                cy.get('[data-testid=books-table]').should('be.visible');
            });
        });
    })
});
