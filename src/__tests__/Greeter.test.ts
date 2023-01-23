import { getGreet } from '../index';
test('My Greeter', () => {
  expect(getGreet('Carl')).toBe('Hello Carl');
});
test('Array -> Sum', () => {
  expect([1, 2, 3, 4].sum()).toBe(10);
});
