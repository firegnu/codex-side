const vscode = require('vscode');
const path = require('path');

function activate(context) {
    let disposable = vscode.commands.registerCommand('claude-side-terminal.openTerminalWithClaude', () => {
        const activeEditor = vscode.window.activeTextEditor;

        if (!activeEditor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        const filePath = activeEditor.document.uri.fsPath;
        const fileDir = path.dirname(filePath);

        // 首先执行创建侧边终端的命令
        vscode.commands.executeCommand('workbench.action.createTerminalEditorSide').then(() => {
            // 等待一小段时间确保终端被创建
            setTimeout(() => {
                const activeTerminal = vscode.window.activeTerminal;
                if (activeTerminal) {
                    // 切换到文件所在目录并运行claude
                    activeTerminal.sendText(`cd "${fileDir}" && claude`);
                } else {
                    vscode.window.showErrorMessage('Failed to create terminal');
                }
            }, 100);
        }).catch((error) => {
            vscode.window.showErrorMessage('Failed to create side terminal: ' + error.message);
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};