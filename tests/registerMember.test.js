const { registerMember } = require('../src/registerMember');

describe('registerMember', () => {
  test('returns member data when CNPJ is valid', () => {
    const data = { name: 'Empresa X', cnpj: '04.252.011/0001-10' };
    expect(registerMember(data)).toEqual(data);
  });

  test('throws error when CNPJ is invalid', () => {
    const data = { name: 'Empresa X', cnpj: '11.111.111/1111-11' };
    expect(() => registerMember(data)).toThrow('Invalid CNPJ');
  });
});
