import React from 'react';
import { render } from '@testing-library/react-native';
import CustomInput from '../../components/CustomInput';

describe('Cadastro', () => {
  it('check if it shows correctly the card number input placeholder', () => {
    jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));
    const { getByLabelText } = render(<CustomInput label='número do cartão' />);
    const inputNumCartao = getByLabelText('número do cartão');
    expect(inputNumCartao).toBeTruthy();
  });
})