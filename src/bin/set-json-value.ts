#!/usr/bin/env node

/**
 * This script will parse json file and return value of the property defined by path separated by '.'
 * Usage: set-json-value.js <filename> <path> <value> [options[,options]]
 *   filename: any JSON file, example: package.json
 *   path: path within JSON, example: parent.child.value
 *   value: any value, can be string, number or object, example:
 *     string - example: 'test'
 *     number - example: 1 or '1' or 1.2345 or '1.2345'
 *     object - example: '{"a":1,"b":"2"}'
 *   options, example: tabs,number
 *     tabs - format output JSON with tabs, otherwise output will be a string JSON without formatting
 *     number - convert value to number (if fails value will be string)
 *     object - convert value to object (if fails value will be string)
 *     boolean - convert value to boolean, only 'true' or '1' converts to true
 *     delete - removes value and its key, provided value argument is ignored and can be anything
 *     null - sets null as value, provided value argument is ignored and can be anything
 * Example: set-json-value.js package.json version 1.2.3 tabs
 */

import * as fs from 'fs';
import { castValueToType, isValidType } from '../castValueToType';
import { setValueByPath } from '../jsonValueByPath';

const args = process.argv.slice(2);

if (args.length == 0) {
	console.log(`
Usage: set-json-value.js <filename> <path> <value> [options[,options]]
  filename: any JSON file, example: package.json
  path: path within JSON, example: parent.child.value
  value: any value, can be string, number or object, example:
    string - example: 'test'
    number - example: 1 or '1' or 1.2345 or '1.2345'
    object - example: '{"a":1,"b":"2"}'
  options, example: tabs,number
    tabs - format output JSON with tabs, otherwise output will be a string JSON without formatting
    number - convert value to number (if fails value will be string)
    object - convert value to object (if fails value will be string)
    boolean - convert value to boolean, only 'true' or '1' converts to true
    delete - removes value and its key, provided value argument is ignored and can be anything
    null - sets null as value, provided value argument is ignored and can be anything`);
	process.exit(1);
}

const jsonFilename = args[0];
const jsonPaths = args[1].split('.');
const jsonValue = args[2];
const jsonOpts = args[3]?.split(',') || [];

const jsonObj = JSON.parse(fs.readFileSync(jsonFilename).toString());

const json = setValueByPath(
	jsonObj,
	jsonPaths,
	castValueToType(
		jsonValue,
		jsonOpts.find((f) => isValidType(f)),
	),
);

try {
	fs.writeFileSync(jsonFilename, JSON.stringify(json, null, jsonOpts.includes('tabs') ? '\t' : ''));
	console.log('Complete');
} catch (e) {
	console.error('Error:', e);
}
