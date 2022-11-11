/**
 * Returns value of an object property by path defined as array of strings, parent element comes first.
 * Example: getValueByPath({parent: {value: 1}}, ['parent', 'value']) // returns value 1
 * @param obj
 * @param paths
 */
export const getValueByPath = (obj: any, paths: string[]): any => {
	const path = paths[0];
	if (obj && obj[path] && paths.length > 1 && path) {
		return getValueByPath(obj[path] ? obj[path] : null, paths.slice(1));
	} else {
		return obj[path];
	}
};

type ValidValueType = object | string | number | boolean | null | undefined;

/**
 * Returns value of json object property by path defined as array of strings, where parent element comes first.
 * Example: getValueByPath({parent: {value: 1}}, ['parent', 'value']) // returns value 1
 * @param {object} obj
 * @param {string[]} paths
 * @param {any} value
 */
export const setValueByPath = (obj: any, paths: string[], value: ValidValueType) => {
	const path = paths[0];
	if (paths.length > 1) {
		obj[path] = setValueByPath(typeof obj[path] !== 'object' ? {} : obj[path], paths.slice(1), value);
	} else if (paths.length === 1) {
		obj[path] = value;
	}
	return obj;
};
