export function calculateCpfCheckDigits(base) {
  let factor = base.length + 1;
  let sum = 0;
  for (const char of base) {
    sum += parseInt(char, 10) * factor--;
  }
  let result = (sum * 10) % 11;
  return result === 10 ? 0 : result;
}

export function validateCpf(cpf) {
  const digits = cpf.replace(/\D/g, '');
  if (digits.length !== 11) return false;
  if (digits.split('').every((d) => d === digits[0])) return false;
  const first = calculateCpfCheckDigits(digits.slice(0, 9));
  const second = calculateCpfCheckDigits(digits.slice(0, 10));
  return digits.endsWith(`${first}${second}`);
}
