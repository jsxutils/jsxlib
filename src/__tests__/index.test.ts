import { init } from '../index';
describe('jsxlib', () => {
    const logSpy = jest.spyOn(console, 'log');
    test('init', () => {
        var x = init();
        expect(x).toBe(undefined);
    });
    test('Array -> Sum', () => {
        expect([1, 2, 3, 4].jSum()).toBe(10);
    });
    // test('Array -> chunk', () => {
    //     expect([1, 2, 3, 4].jChunk(2).length).toBe(2);
    // });
});
