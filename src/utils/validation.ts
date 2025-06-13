import { VALID_AMINO_ACIDS } from './constants';

export const validateSequence = (value: string) => {
  return VALID_AMINO_ACIDS.test(value) || "Contains invalid characters";
};

export const validateLength = (value1: string, value2: string) => {
  return value1.length === value2.length || "Sequences must be of equal length";
};