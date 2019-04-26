import loginEvent from "../saucedemo/events/loginEvent";

describe('Logintest', function() {
    it('As a user I am able to login', function() {
        loginEvent.execute();
    })
})

//start with .\node_modules\.bin\cypress open