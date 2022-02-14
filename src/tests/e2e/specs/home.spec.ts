export {}
// assert errors are displayed when user submit without email and code
// add id to this p tag in App.tsx
it("assert page contains All Templates text", () => {
    cy.visit("http://localhost:3000/");  
    cy.get('body').should('contain', 'All Templates')
});