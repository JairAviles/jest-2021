const { randomString } = require('../index');

describe('Random String Functionality', () => {
  test('Should return a random String', () => {
    expect(typeof (randomString())).toBe('string');
  });
  test('Should not match city', () => {
    expect(randomString()).not.toMatch(/Montreal/);
  });
})
