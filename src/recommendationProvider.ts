import * as vscode from 'vscode';

export class CSSRecommendationItemProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {

        const recommendationItems: vscode.CompletionItem[] = [];

        // Önerilen CSS özellikleri oluşturun
        const recommendation1 = new vscode.CompletionItem('background-color');
        recommendation1.kind = vscode.CompletionItemKind.Property;
        recommendation1.detail = 'Background Color Property';
        recommendation1.documentation = new vscode.MarkdownString('Specifies the background color.');

        const recommendation2 = new vscode.CompletionItem('border');
        recommendation2.kind = vscode.CompletionItemKind.Property;
        recommendation2.detail = 'Border Property';
        recommendation2.documentation = new vscode.MarkdownString('Specifies the border.');

        recommendationItems.push(recommendation1, recommendation2);

        return recommendationItems;
    }
}
