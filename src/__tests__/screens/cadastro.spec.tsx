import React from 'react';
import { render } from '@testing-library/react-native';
import Cadastro from '../../app/cadastro';

describe('Cadastro', () => {
  it('check if it shows correctly the card number input placeholder', () => {
    jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));
    const { getByLabelText } = render(<Cadastro />);
    const inputNumCartao = getByLabelText('número do cartão');
    expect(inputNumCartao).toBeTruthy();
  });
})