const axios = require('axios');

const functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'John' };
    user['lastName'] = 'Smith';
    return user;
  },
  combine: (a, b, c) => a + b + c,
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.data)
      .catch((err) => 'ERROR'),
};

module.exports = functions;
