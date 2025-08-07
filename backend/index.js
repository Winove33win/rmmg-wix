import { validateCpf } from '../shared/cpf.js';

const sample = '529.982.247-25';
console.log('Backend validation:', validateCpf(sample));
