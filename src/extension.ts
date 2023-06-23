import * as vscode from 'vscode';

let disposable: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {
    console.log('Eklenti etkinleştirildi.');

    const onChangeDisposable = vscode.workspace.onDidChangeTextDocument(onChangeHandler);
    const onOpenDisposable = vscode.workspace.onDidOpenTextDocument(onOpenHandler);
    const onActivateDisposable = vscode.window.onDidChangeActiveTextEditor(onActivateHandler);

    disposable = vscode.Disposable.from(onChangeDisposable, onOpenDisposable, onActivateDisposable);
    context.subscriptions.push(disposable);
}

function onChangeHandler(event: vscode.TextDocumentChangeEvent) {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor || activeEditor.document !== event.document) {
        return;
    }

    const contentChanges = event.contentChanges;
    const lastChange = contentChanges[contentChanges.length - 1];
    const changedLine = lastChange.range.start.line;
    const changedText = lastChange.text;

    if (changedText.includes('aranan-kelime')) {
        const insertLine = changedLine + 1;
        const insertPosition = new vscode.Position(insertLine, 0);

        const edit = new vscode.WorkspaceEdit();
        edit.insert(activeEditor.document.uri, insertPosition, 'Otomatik olarak eklenecek kod');
        vscode.workspace.applyEdit(edit).then(() => {
            activeEditor.selection = new vscode.Selection(insertPosition, insertPosition);
        });
    }
}

function onOpenHandler(document: vscode.TextDocument) {
    if (document.languageId === 'css') {
        triggerAutocomplete();
    }
}

function onActivateHandler(editor: vscode.TextEditor | undefined) {
    if (editor?.document.languageId === 'css') {
        triggerAutocomplete();
    }
}

function triggerAutocomplete() {
    vscode.commands.executeCommand('editor.action.triggerSuggest');
}

export function deactivate() {
    console.log('Eklenti devre dışı bırakıldı.');
}
