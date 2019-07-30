const { mutate } = require('../server.spec'),
  { createUser } = require('./graphql'),
  userFactory = require('../factories/user');

describe('users', () => {
  describe('mutations', () => {
    it('should create an user successfuly', () =>
      userFactory.attributes().then(user =>
        mutate(createUser(user)).then(res => {
          const { name, lastName, email, password, id } = res.data.createUser;
          expect(name).toEqual(user.name);
          expect(lastName).toEqual(user.lastName);
          expect(email).toEqual(user.email);
          expect(password).toEqual(user.password);
          expect(id).toBeDefined();
        })
      ));
  });
});
