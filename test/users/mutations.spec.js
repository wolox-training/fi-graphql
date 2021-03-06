const { mutate } = require('../server.spec'),
  { createUser, logIn } = require('./graphql'),
  userFactory = require('../factories/user');

describe('users', () => {
  describe('mutations', () => {
    it('should create an user successfuly', () =>
      userFactory.attributes().then(user =>
        mutate(createUser(user)).then(res => {
          const { email, password, id } = res.data.createUser;
          expect(email).toEqual(user.email);
          expect(password).toEqual(user.password);
          expect(id).toBeDefined();
        })
      ));
    it('should login successfuly', () =>
      userFactory.attributes().then(user =>
        mutate(createUser(user)).then(() =>
          mutate(logIn(user)).then(res => {
            const { accessToken } = res.data.login;
            expect(accessToken).toEqual('34343428403');
          })
        )
      ));
  });
});
