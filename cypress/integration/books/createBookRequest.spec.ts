describe('createBook with cy request', () => {
    it('Should send proper request', () => {
        cy.visit('http://localhost:3000/book-app/book');

        cy.intercept('POST', 'http://localhost:8000/books').as('createBook');

        const authors = 'JRR Tolkien';
        const title = 'LOTR'

        cy.get('#authors').type(`${authors}{enter}`);
        cy.get('#title').type(`${title}{enter}`);

        cy.contains('Apply').click();

        cy.wait('@createBook').its('request.body').should('deep.eq', {
            authors,
            title,
        });
    });
})