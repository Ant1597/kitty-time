'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import KittyPanel from './KittyPanel';
import KittyBar from './KittyBar';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    //console.log('Congratulations, your extension "kitty-time" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('kittyTime.run', () => {
        KittyPanel.createOrShow(context.extensionPath);
    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(new KittyBar());
}

// this method is called when your extension is deactivated
export function deactivate() {
}