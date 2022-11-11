# Ferramenta

[![Release & Publish](https://github.com/xorde-labs/ferramenta/actions/workflows/publish.yml/badge.svg)](https://github.com/xorde-labs/ferramenta/actions/workflows/publish.yml)
[![Tests](https://github.com/xorde-labs/ferramenta/actions/workflows/tests.yml/badge.svg)](https://github.com/xorde-labs/ferramenta/actions/workflows/tests.yml)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

NodeJS/Typescript library of utility functions, and their CLI wrappers.

## Installation

```shell
npm i @xorde-labs/ferramenta
```

```shell
yarn add @xorde-labs/ferramenta
```

## Usage

### Function `getValueByPath`

Returns a value of an object property by path defined as array of strings, parent element comes first.

Arguments:
- obj: any - Object to get value from;
- path: string[] - An array of strings, parent element comes first;

Example:

```typescript
getValueByPath({parent: {value: 1}}, ['parent', 'value']);
// returns value 1
```

### Function `setValueByPath`

Modifies object in place by setting a value for a property by path defined as array of strings, parent element comes first.

Arguments:
- obj: any - Object to set value in;
- path: string[] - An array of strings, parent element comes first;
- value: any - Value to set;

Example:

```typescript
setValueByPath({parent: {value: 1}}, ['parent', 'value'], 2); 
// returns object {parent: {value: 2}}
```

### Function `castValueToType`

Casts value to type defined as string argument.

Arguments:
- value: string - String value to cast;
- type: string - Type to cast to as string of `number`, `boolean`, `object`, `string`, `null`, `delete`, `undefined`;
- suppressExceptions: boolean (default - false) - If true, do not throw exceptions, just return value as string. Only works for `object` and `number` types;

Examples:

```typescript
castValueToType('1', 'number');
// returns 1

castValueToType('1-2', 'number');
// throws an error

castValueToType('1-2', 'number', true);
// returns '1-2'

castValueToType('1', 'boolean');
// returns true

castValueToType('2', 'boolean');
// returns false
```

## CLI Wrappers

### get-json-value

This script will parse json file and return value of the property defined by path separated by '.'

Usage: get-json-value <filename> <path>

Arguments:
- filename: any JSON file, example: `package.json`
- path: a property key path within JSON file, example: `parent.child.value`

Example:

```shell
% get-json-value package.json version
> 1.0.0
```

### set-json-value

This script will parse json file and return value of the property defined by path separated by '.'

Usage: set-json-value.js <filename> <path> <value> [options[,options]]

Arguments:
- filename: any JSON file, example: `package.json`
- path: a property key path within JSON file, example: `parent.child.value`
- options:
  - tabs: format output JSON with tabs, otherwise output will be a string JSON without formatting
  - no-except: if conversion fails, do not exit with error, just use string value
  - number: convert value to number (by default, if fails exit with error)
  - object: convert value to object (by default, if fails exit with error)
  - boolean: convert value to boolean, only 'true' or '1' converts to true
  - delete: removes value and its key, provided value argument is ignored and can be anything
  - null: sets null as value, provided value argument is ignored and can be anything

Example:

```shell
% set-json-value.js package.json version 1.2.3 tabs
> Complete
```
