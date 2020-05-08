// beforeEach(() => initDB());
// afterEach(() => closeDB());

beforeAll(() => initDB());
afterAll(() => closeDB());

const initDB = () => console.log('DATABASE INITIALIZED');
const closeDB = () => console.log('DATABASE CLOSED');

const nameCheck = () => console.log('CHECKING NAME...');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Joe', () => {
    const user = 'Joe';
    expect(user).toBe('Joe');
  });
});

test('0 is Falsy', () => {
  expect(0).toBeFalsy();
});

test('0 is Falsy', () => {
  expect('hello').toBeTruthy();
});
