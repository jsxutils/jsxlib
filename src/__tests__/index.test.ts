import { jsxlib } from '../index';
describe('jsxlib', () => {
  test('init', () => {
    expect(typeof jsxlib).toBe('object');
  });
  test('Array -> Sum', () => {
    expect([1, 2, 3, 4].jSum()).toBe(10);
  });
  test('Array -> chunk', () => {
    expect([1, 2, 3, 4].jChunk(2).length).toBe(2);
  });
});
