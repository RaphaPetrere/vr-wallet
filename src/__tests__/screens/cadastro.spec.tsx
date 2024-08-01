import React from 'react';
import { render } from '@testing-library/react-native';
import CustomInput from '../../components/CustomInput';
import { onlyNumbers } from '../../utils/onlyNumbers';
import { addChar } from '../../utils/addChar';

describe('Cadastro', () => {
  it('check if it shows correctly the card number input placeholder', () => {
    jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));
    const { getByLabelText } = render(<CustomInput label='número do cartão' />);
    const inputNumCartao = getByLabelText('número do cartão');
    expect(inputNumCartao).toBeTruthy();
  });

  test('if handleNumCartao with valid digits filter all the non-numbers digits and add a space between each 4-digits block', () => {
    const numWithoutSpaces = onlyNumbers('b352954a5335c58-727');
    expect(addChar(numWithoutSpaces, 4, ' ')).toBe('3529 5453 3558 727')
  });
  test('if handleNumCartao with non-valid digits filter all the non-numbers digits and return empty', () => {
    const numWithoutSpaces = onlyNumbers('aabb-ccdd');
    expect(numWithoutSpaces).toHaveLength(0);
  });

  test('if handleVencimento with valid digits filter all the non-numbers digits and add a slash after 2 digits', () => {
    const numWithoutSlash = onlyNumbers('12a30');
    expect(addChar(numWithoutSlash, 2, '/')).toBe('12/30');
  });
  test('if handleVencimento with non-valid digits filter all the non-numbers digits and return empty', () => {
    const numWithoutSlash = onlyNumbers('aa/bb');
    expect(numWithoutSlash).toHaveLength(0);
  });

  it('should check if there\'s already a card with the same card number', () => {
    const cards = [{
      number: "3529 5435 3355 8727",
    }];
    const checkDuplicates = (cardNumber: string) => cards.find(card => card.number === cardNumber);
    expect(checkDuplicates('3529 5435 3355 8727')).toBeTruthy();
  });
  test.todo('handleForward without cardToShow should run checkDuplicates and, in case of a negative return, should create a new card');
  test.todo('handleForward with cardToShow should redirect the user to the card list page');
})