const { validateCNPJ } = require('./validateCnpj');

function registerMember({ name, cnpj }) {
  if (!name) {
    throw new Error('Name is required');
  }
  if (!validateCNPJ(cnpj)) {
    throw new Error('Invalid CNPJ');
  }
  return { name, cnpj };
}

module.exports = { registerMember };
