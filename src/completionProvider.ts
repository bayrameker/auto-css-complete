import { CancellationToken } from 'vscode';


import {
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  languages,
  Position,
  ProviderResult,
  Range,
  TextDocument,
  CompletionContext,
  MarkdownString,
} from 'vscode';

export class MyCompletionItemProvider implements CompletionItemProvider<CompletionItem> {


private createCompletionItem(label: string, value: string): CompletionItem {
  const item = new CompletionItem(label, CompletionItemKind.Property);
  item.insertText = label;
  item.detail = `Value: ${value}`;
  item.documentation = new MarkdownString(`Set the value of ${label} property to ${value}.`);
  return item;
}

provideCompletionItems(
  document: TextDocument,
  position: Position,
  token: CancellationToken,
  context: CompletionContext
): ProviderResult<CompletionItem[]> {
  const lineText = document.lineAt(position).text;

  if (lineText.includes('display: flex;')) {
    const completionItems: CompletionItem[] = [
      this.createCompletionItem('align-items', 'center'),
      this.createCompletionItem('justify-content', 'center'),
      // Diğer özellikleri buraya ekleyin
    ];

    return completionItems;
  }

  return undefined;
}


}
