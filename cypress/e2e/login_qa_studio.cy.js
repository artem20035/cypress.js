describe('Автотесты для формы логина и пароля', () => {
    it('Позитивный кейс авторизации', () => {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Авторизация прошла успешно').should('be.visible');
      cy.get('#exitMessageButton').should('be.visible');
    });


    it('Проверка логики восстановления пароля', () => {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton').should('be.visible');
    });
      

    it('Негативный кейс авторизации неверный пароль', () => {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('gfdfgdg2323fgd');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет').should('be.visible');
      cy.get('#exitMessageButton').should('be.visible');
      });
            

    it('Негативный кейс авторизации неверный логин', () => {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('man@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton').should('be.visible');
        });
                    

    it('Негативный кейс валидации', () => {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('mandolnikovru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton').should('be.visible');
        });
                            

    it('Проверка на приведение к строчным буквам в логине', () => {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton').should('be.visible');
        });
  });