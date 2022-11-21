/**
 * Matches a string against a wildcard pattern.
 * @param str String to match
 * @param pattern Wildcard pattern
 * @example
 * matchRule('foo123', 'foo*') // true
 * matchRule('123foo123', '*foo*') // true
 */
export const matchWildcard = (str: string, pattern: string): boolean => {
	//eslint-disable-next-line no-useless-escape
	const escapeRegex = (str: string) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
	return new RegExp('^' + pattern.split('*').map(escapeRegex).join('.*') + '$').test(str);
};
