// https://docs.cypress.io/api/introduction/api.html

describe('Teste App Pokemon', () => {
  it('Visitar a url base do app', () => {
    cy.visit('/')
    cy.get('.v-toolbar__title').should('contain', 'Pokémon TCG')
    cy.get('.v-btn__content').click({ force: true }) 
  })
  it('Visitar pagina do desenvolvedor', () => {
    cy.visit('/#/about')
    cy.get('.v-card__subtitle').should('contain', 'Paulo Henrique Gomes da Costa')
  })
})
