const { reverseString, reverseString2 } = require('../index');

const text = 'Hello world';
const fruits = ['🍎', '🍈', '🍌'];


test('Should contain text', () => {
  expect(text).toMatch(/world/);
});

test('Should have a 🍌', () => {
  expect(fruits).toContain('🍌');
});

test('Greater than', () => {
  expect(10).toBeGreaterThan(9);
});

test('Truthy', () => {
  expect(true).toBeTruthy();
});

test('Should execute callback', () => {
  reverseString('Hello', (str) => {
    expect(str).toBe('olleH');
  });
});

test('Should execute Promise', () => {
  return reverseString2('Hello')
    .then(result => {
      expect(result).toBe('olleH')
    });
});

test('Should async/await Promise', async () => {
  const result = await reverseString2('Hello');
  expect(result).toBe('olleH')
});