/**
 * Recursively dumps `obj` Object as comma-separated string of key=value pairs
 * Example: v({a:2,b:{c:3}}) = 'a=2, b=(c=3)
 * @param obj {any} Object to dump
 * @param ignoreProps {string[]=} (Optional) Properties to ignore, array of strings
 * @param maxKeys {number=} (Optional) Maximum amount of keys to show; _...more[N]_ will be added to replace exceeding key element
 * @param maxDepth {number=} (Optional) Maximum depth of recursion
 */

export const keyValue = <T>(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	obj: T & Record<string, any>,
	ignoreProps?: (keyof T)[] & string[],
	maxKeys: number | null = null,
	maxDepth: number | undefined = 10,
): string =>
	maxDepth > 0
		? Object.keys(obj ?? {})
				.filter((f) => !(ignoreProps || []).includes(f))
				.map((keyName: string, keyIndex: number) => {
					if ((maxKeys && keyIndex < maxKeys) || !maxKeys)
						return typeof obj[keyName] === 'object'
							? keyName + `=(${keyValue(obj[keyName], ignoreProps, maxKeys, maxDepth - 1)})`
							: keyName + '=' + obj[keyName];
					else if (maxKeys && keyIndex === maxKeys) return `...more[${Object.keys(obj).length - maxKeys}]`;
				})
				.filter((f) => f !== null)
				.join(', ') || ''
		: 'MAX_RECURSIVE_LEVELS_REACHED';
