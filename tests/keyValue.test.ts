import { keyValue } from '../src';
import { simpleNestedObject } from './data/testObjects';

/**
 *
 */
test('simple', () => {
	expect(keyValue(simpleNestedObject)).toBe('n=1, b=true, o=(s=2, n=3, b=false)');
});

/**
 *
 */
test('with_max', () => {
	expect(keyValue(simpleNestedObject, [], 2)).toBe('n=1, b=true, ...more[1]');
});

/**
 *
 */
test('with_levels', () => {
	expect(keyValue(simpleNestedObject, [], null, 1)).toBe('n=1, b=true, o=(MAX_RECURSIVE_LEVELS_REACHED)');
});

/**
 *
 */
test('empty_object', () => {
	expect(keyValue({}, [], null, 1)).toBe('');
});

/**
 *
 */
test('undefined_object', () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	expect(keyValue(<any>undefined, [], null, 1)).toBe('');
});
