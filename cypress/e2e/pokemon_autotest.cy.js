
describe('Экран ввода номера карты', () => {
    
    it('Неверный номер карты', () => {
        cy.visit('https://pokemonbattle.me/shop');
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
        cy.get('#password').type('Xfiles123');
        cy.get('#root > div > main > section > div.login__content > form > button').click();
        cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
        cy.get('#root > div > main > section.shop > ul > li:nth-child(10) > button').click();
        cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 43343 43434 0008');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1224');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125');
        cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
        cy.get('#root > div > main > form > div > div:nth-child(2)').contains('Неверный номер карты');
    });
    




    it('Неверный срок карты', () => {
        cy.visit('https://pokemonbattle.me/shop');
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
        cy.get('#password').type('Xfiles123');
        cy.get('#root > div > main > section > div.login__content > form > button').click();
        cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
        cy.get('#root > div > main > section.shop > ul > li:nth-child(10) > button').click();
        cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 0000 0000 0008');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1324');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125');
        cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1)').contains('Неверный срок');
    });
            




    it('Неверный код', () => {
        cy.visit('https://pokemonbattle.me/shop');
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
        cy.get('#password').type('Xfiles123');
        cy.get('#root > div > main > section > div.login__content > form > button').click();
        cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
        cy.get('#root > div > main > section.shop > ul > li:nth-child(10) > button').click();
        cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 0000 0000 0008');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1224');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('200');
        cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
        cy.get('#root > div > main > form > div > button').click();
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2)').contains('Неверный код');
    });
            




    it('Проверка описания заказа', () => {
        cy.visit('https://pokemonbattle.me/shop');
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
        cy.get('#password').type('Xfiles123');
        cy.get('#root > div > main > section > div.login__content > form > button').click();
        cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
        cy.get('#root > div > main > section.shop > ul > li:nth-child(10) > button').click();
        cy.get('#root > div > main > div.payment__sublock-wrapper-v2 > div.pay__select-block > button').click();
        cy.get('#root > div > main > div.payment__sublock-wrapper-v2.payment__height > div.payment__subblock').contains('Описание');
    });





    it('Ввод букв в поле номера карты', () => {
        cy.visit('https://pokemonbattle.me/shop');
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
        cy.get('#password').type('Xfiles123');
        cy.get('#root > div > main > section > div.login__content > form > button').click();
        cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
        cy.get('#root > div > main > section.shop > ul > li:nth-child(10) > button').click();
        cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('gffgfgfgfg');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1224');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125');
        cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
        cy.get('#root > div > main > form > div > div:nth-child(2)').contains('Неверный номер карты');
    });
    




    it('Ввод букв в поле срока карты', () => {
        cy.visit('https://pokemonbattle.me/shop');
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
        cy.get('#password').type('Xfiles123');
        cy.get('#root > div > main > section > div.login__content > form > button').click();
        cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
        cy.get('#root > div > main > section.shop > ul > li:nth-child(10) > button').click();
        cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 0000 0000 0008');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('fdfdfd');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125');
        cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1)').contains('Неверный срок');
    });
        




    it('Ввод букв в поле кода карты', () => {
        cy.visit('https://pokemonbattle.me/shop');
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
        cy.get('#password').type('Xfiles123');
        cy.get('#root > div > main > section > div.login__content > form > button').click();
        cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
        cy.get('#root > div > main > section.shop > ul > li:nth-child(10) > button').click();
        cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 0000 0000 0008');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1224');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('fdfdfd');
        cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2)').contains('Неверный код');
    });
            




    it('4 цифры в коде карты', () => {
        cy.visit('https://pokemonbattle.me/shop');
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
        cy.get('#password').type('Xfiles123');
        cy.get('#root > div > main > section > div.login__content > form > button').click();
        cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
        cy.get('#root > div > main > section.shop > ul > li:nth-child(10) > button').click();
        cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 0000 0000 0008');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1224');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('1323');
        cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
        cy.get('#root > div > main > form > div > button').click();
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2)').contains('Неверный код');
    });
                




    it('Проверка возврата назад в магазин', () => {
        cy.visit('https://pokemonbattle.me/shop');
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
        cy.get('#password').type('Xfiles123');
        cy.get('#root > div > main > section > div.login__content > form > button').click();
        cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
        cy.get('#root > div > main > section.shop > ul > li:nth-child(10) > button').click();
        cy.get('#root > div > main > form > a').click();
        cy.get('#root > div > main > section.pokemon > div').contains('Магазин');
    });
 })
 
 describe('Успешная покупка', () => {
    it('Успешная покупка', () => {
            cy.visit('https://pokemonbattle.me/shop');
            cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
            cy.get('#password').type('Xfiles123');
            cy.get('#root > div > main > section > div.login__content > form > button').click();
            cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
            cy.get('#root > div > main > section.shop > ul > li:nth-child(8) > button').click();
            cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 0000 0000 0008');
            cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1224');
            cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125');
            cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
            cy.get('#root > div > main > form > div > button').click();
            cy.get('#cardnumber').type('56456');
            cy.get('#root > div > main > form > div > div > button').click();
            cy.contains('Покупка прошла успешно').should('be.visible');
        });
 })


 describe('Экран ввода смски', () => {
    it('Некорректный ввод', () => {
            cy.visit('https://pokemonbattle.me/shop');
            cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
            cy.get('#password').type('Xfiles123');
            cy.get('#root > div > main > section > div.login__content > form > button').click();
            cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
            cy.get('#root > div > main > section.shop > ul > li:nth-child(12) > button').click();
            cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 0000 0000 0008');
            cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1224');
            cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125');
            cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
            cy.get('#root > div > main > form > div > button').click();
            cy.get('#cardnumber').type('45545454');
            cy.get('#root > div > main > form > div > div > button').click();
            cy.get('#root > div > main > form > div > div > fieldset').contains('Не совпадает с отправленным кодом');
        });


        it('Проверка кнопки "Отменить"', () => {
            cy.visit('https://pokemonbattle.me/shop');
            cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
            cy.get('#password').type('Xfiles123');
            cy.get('#root > div > main > section > div.login__content > form > button').click();
            cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
            cy.get('#root > div > main > section.shop > ul > li:nth-child(12) > button').click();
            cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 0000 0000 0008');
            cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1224');
            cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125');
            cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
            cy.get('#root > div > main > form > div > button').click();
            cy.get('#root > div > main > form > div > div > fieldset > button.payment__defolt-decline').click();
            cy.get('#root > div > main > form').contains('Карта');

    });

        it('Проверка шапки', () => {
            cy.visit('https://pokemonbattle.me/shop');
            cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
            cy.get('#password').type('Xfiles123');
            cy.get('#root > div > main > section > div.login__content > form > button').click();
            cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
            cy.get('#root > div > main > section.shop > ul > li:nth-child(9) > button').click();
            cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 0000 0000 0008');
            cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1224');
            cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125');
            cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
            cy.get('#root > div > main > form > div > button').click();
            cy.get('#root > div > main > div > div.pay__select-block > button').click();
            cy.get('#root > div > main > div > div.payment__subblock').contains('Номер карты');

    });
 })


 describe('Экран успеха', () => {

    it('Кнопка "Вернуться в магазин"', () => {
            cy.visit('https://pokemonbattle.me/shop');
            cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input').type('savinykhartem@yandex.ru');
            cy.get('#password').type('Xfiles123');
            cy.get('#root > div > main > section > div.login__content > form > button').click();
            cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3)').click();
            cy.get('#root > div > main > section.shop > ul > li:nth-child(12) > button').click();
            cy.get('#root > div > main > form > div > div:nth-child(2) > input').type('5100 0000 0000 0008');
            cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input').type('1224');
            cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input').type('125');
            cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input').type('Artem');
            cy.get('#root > div > main > form > div > button').click();
            cy.get('#cardnumber').type('56456');
            cy.get('#root > div > main > form > div > div > button').click();
            cy.get('#root > div > main > div.payment__form-container-defolt > form > div > button > p').click();

        });
 })