const { validateCNPJ } = require('../src/validateCnpj');

describe('validateCNPJ', () => {
  test('returns true for a valid CNPJ', () => {
    expect(validateCNPJ('04.252.011/0001-10')).toBe(true);
  });

  test('returns false for an invalid CNPJ', () => {
    expect(validateCNPJ('11.111.111/1111-11')).toBe(false);
  });
});
