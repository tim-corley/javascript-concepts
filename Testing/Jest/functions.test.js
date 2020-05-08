const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be John Smith object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'John',
    lastName: 'Smith',
  });
});

test('Should be under 900', () => {
  expect(functions.combine(300, 200, 200)).toBeLessThan(900);
});

test('Should be under or equal to 700', () => {
  expect(functions.combine(300, 200, 200)).toBeLessThanOrEqual(700);
});

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
  usernames = ['mac', 'charlie', 'dee', 'frank', 'dennis', 'admin'];
  expect(usernames).toContain('admin');
});

// ASYNC DATA (PROMISE)
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// ASYNC AWAIT
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
