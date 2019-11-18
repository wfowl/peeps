'use strict';

import * as vscode from 'vscode';

import { TestView } from './testView';

export function activate(context: vscode.ExtensionContext) {

	

	// Test View
	var a = new TestView(context);
}