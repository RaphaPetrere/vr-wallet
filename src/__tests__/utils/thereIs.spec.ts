import { thereIs } from "../../utils/thereIs";

it('given a value, thereIs() should check if the type of the value is not undefined', () => {
  expect(thereIs(undefined)).toBe(false);
});