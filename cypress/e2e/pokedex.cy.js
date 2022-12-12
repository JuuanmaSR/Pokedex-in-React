describe('Pokedex app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Header exist', () => {
    cy.get('header').should('exist')
  })

  it('Search form exist', () => {
    cy.get('input').should('exist')
  });

  it('List of minicards exist', () => {
    cy.get('.list-of-pokemons').find('>div').should('have.length', 20)
  });

  it('Button list exist', () => {
    cy.get('.button-list').find('button').should('have.length', 2)
  });

  it('Next and previous list charge correctly', () => {
    cy.get('.list-of-pokemons').find('>div').first().find('>div').should('contain', 'bulbasaur')
    cy.get('button').contains('Next').click()
    cy.get('.list-of-pokemons').find('>div').first().find('>div').should('contain', 'spearow')
    cy.get('button').contains('Previous').click()
    cy.get('.list-of-pokemons').find('>div').first().find('>div').should('contain', 'bulbasaur')
  });

  it('Search form works correctly', () => {
    cy.get('input[placeholder = "Pokemon name..."]').type('squirtle')
    cy.get('form').submit()
    cy.get('.Card-container').should('exist')
    cy.get('.Card-container').should('contain', 'squirtle')
  });

  it('Minicard more info button works correctly', () => {
    cy.get('.img-lupa').first().click()
    cy.get('.Card-container').should('contain', 'bulbasaur')
  });

  it('Search form show error page when pokemon name not exist and we can go back to homepage ', () => {
    cy.get('input[placeholder = "Pokemon name..."]').type('This pokemon name not exist')
    cy.get('form').submit()
    cy.get('.error-page-container').should('exist').should('contain', 'Pokemon not found')
    cy.get('a').click()
    cy.url().should('equal' ,'http://localhost:3000/')
  });

})