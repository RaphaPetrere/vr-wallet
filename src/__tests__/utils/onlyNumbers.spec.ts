import { onlyNumbers } from "../../utils/onlyNumbers";

it('given a string, onlyNumbers() returns only the numbers, without spaces or letters', () => {
  expect(onlyNumbers('2000-10-20')).toBe('20001020');
});