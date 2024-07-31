import { addChar } from "../../utils/addChar";

it('given a string, addChar() should add the selected character in the decided interval', () => {
  expect(addChar('1234567899990000', 4, ' ')).toBe('1234 5678 9999 0000');
});