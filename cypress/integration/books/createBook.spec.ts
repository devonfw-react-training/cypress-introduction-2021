describe('Create book', () =>  {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    it('Should render form', () => {
        cy.contains('New Book').click();

        cy.contains('New Book').should('have.class', 'active');
    });
})

describe('Create book with command', () =>  {
    beforeEach(() => {
        cy.goToForm('localhost:3000');
    });

    it('Should render form', () => {
        cy.contains('New Book')
            .should('have.class', 'active');
    });

    describe('Submit form', () => {
        it('Should create new book', () => {
            cy.get('#authors').type('John Snow');
            cy.get('#title').type('Song of fire');

            cy.contains('Apply').click();
        });
    })
})