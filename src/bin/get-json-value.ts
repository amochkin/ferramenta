#!/usr/bin/env node

/**
 * This script will parse json file and return value of the property defined by path separated by '.'
 * Usage: get-json-value <filename> <path>
 * Example: get-json-value package.json version
 */

import * as fs from 'fs';
import * as path from 'path';
import { getValueByPath } from '../jsonValueByPath';

const args = process.argv.slice(2);
const jsonFilename = args[0];
const jsonPaths = args[1].split('.');

const json = JSON.parse(fs.readFileSync(jsonFilename).toString());
const value = getValueByPath(json, jsonPaths);

value && console.log(typeof value != 'object' ? value : JSON.stringify(value));
