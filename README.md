# Ferramenta

[![Release & Publish](https://github.com/xorde-labs/ferramenta/actions/workflows/publish.yml/badge.svg)](https://github.com/xorde-labs/ferramenta/actions/workflows/publish.yml)
[![Tests](https://github.com/xorde-labs/ferramenta/actions/workflows/tests.yml/badge.svg)](https://github.com/xorde-labs/ferramenta/actions/workflows/tests.yml)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

NodeJS/Typescript collections of utility functions

## Installation

```shell
npm i @xorde-labs/ferramenta
```

```shell
yarn add @xorde-labs/ferramenta
```

## Usage

### Function `getValueByPath`

<TODO>

Example:

```typescript
// TODO
```

### Function `setValueByPath`

<TODO>

Example:

```typescript
// TODO
```

### Function `castValueToType`

<TODO>

Example:

```typescript
// TODO
```

## CLI Wrappers

### get-json-value

This script will parse json file and return value of the property defined by path separated by '.'

Usage: get-json-value <filename> <path>

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
