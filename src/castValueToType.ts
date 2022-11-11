type ValidTypes = number | boolean | object | string | null | undefined;
type TypeOfValidTypes = string | undefined;

export const ValidTypesArray = ['number', 'boolean', 'object', 'string', 'null', 'delete', 'undefined'];
export const isValidType = (type: string): boolean => ValidTypesArray.includes(type);

export const stringToValidTypeString = (type: string): string => {
	switch (type) {
		case 'number':
			return 'number';
		case 'boolean':
			return 'boolean';
		case 'object':
			return 'object';
		case 'string':
			return 'string';
		case 'null':
			return 'null';
		case 'delete':
		case 'undefined':
			return 'undefined';
		default:
			return 'string';
	}
};

/**
 * Casts value to type
 * @param value String value to cast
 * @param type Type to cast to as string of 'number', 'boolean', 'object', 'string', 'null', 'delete', 'undefined'
 */
export const castValueToType = (value: string, type: TypeOfValidTypes, noExceptions = false): ValidTypes => {
	switch (type) {
		case 'number':
			const number = Number(value);
			if (isNaN(number)) {
				if (noExceptions) return value;
				else throw new Error(`Value '${value}' is not a number`);
			}
			return number;
		case 'boolean':
			return value === 'true' || value === '1';
		case 'object':
			try {
				return JSON.parse(value);
			} catch (err) {
				if (noExceptions) return value;
				else throw new Error(`Value '${value}' is not a valid JSON object (${err})`);
			}
		case 'string':
		case undefined:
			return value;
		case 'null':
			return null;
		default:
			return undefined;
	}
};
