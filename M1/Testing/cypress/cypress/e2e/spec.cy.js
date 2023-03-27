describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('My First Test', () => {
  it('Does much!', () => {
    expect(true).to.equal(true)
  })
})


describe('Get title of nowledgeable', () => {
  it('visits some pages', () => {
    cy.visit('https://nowledgeable.com')
    cy.get('h1').contains('Practice, assess, learn.')
  })
})

describe('Login', () =>{
  it('Login to nowledgeable', () => {
    cy.visit('https://nowledgeable.com/login')
    cy.get('#username').type('alkhatib.m804@gmail.com')
    cy.get('#password').type('B9Q9wX^PC*vVN9T$Exs&')
    cy.get('button[type="submit"]').click()
    cy.get('h1').contains('Bonjour mohamad416')
  })
})