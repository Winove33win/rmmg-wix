function validateCNPJ(cnpj) {
  if (typeof cnpj !== 'string') return false;
  // remove non-digit characters
  cnpj = cnpj.replace(/\D/g, '');
  if (cnpj.length !== 14) return false;
  if (/^(\d)\1+$/.test(cnpj)) return false;

  const calc = (cnpj, length) => {
    let sum = 0;
    let pos = length - 7;
    for (let i = 0; i < length; i++) {
      sum += parseInt(cnpj.charAt(i), 10) * pos--;
      if (pos < 2) pos = 9;
    }
    const result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return result;
  };

  const digits = cnpj.slice(12);
  const firstDigit = calc(cnpj, 12);
  if (firstDigit !== parseInt(digits.charAt(0), 10)) return false;
  const secondDigit = calc(cnpj, 13);
  if (secondDigit !== parseInt(digits.charAt(1), 10)) return false;
  return true;
}

module.exports = { validateCNPJ };
