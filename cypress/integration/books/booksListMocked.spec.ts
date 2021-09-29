describe('books page', () => {
    before(() => {
        cy.fixture("db").then((json) => {
            cy.intercept('GET', 'http://localhost:8000/books', json);
        });
    });

    it('Should render one row', () => {
        cy.visit('localhost:3000')
        cy.get('tbody').find('tr').should('have.length', 1);
    })
});
