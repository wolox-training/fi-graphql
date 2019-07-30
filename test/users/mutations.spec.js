const { mutate } = require('../server.spec'),
  { createUser } = require('./graphql'),
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
  });
});
