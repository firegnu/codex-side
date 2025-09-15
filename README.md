# Codex Side Terminal

A VS Code extension that adds a button to the editor title bar to open a side terminal and automatically run `codex` in the current file's directory.

## Features

- Adds a custom icon button to the editor title bar
- Opens a side terminal when clicked
- Automatically navigates to the current file's directory
- Runs the `codex` command

## Installation

1. Open VS Code
2. Go to the Extensions view (Ctrl+Shift+X)
3. Click "Install from VSIX..." in the menu
4. Select the generated `.vsix` file

## Usage

1. Open any file in VS Code
2. Click the custom icon in the editor title bar (right side)
3. A side terminal will open and automatically run `codex` in the file's directory

## Development

To package the extension:

```bash
npm install -g vsce
vsce package
```

This will create a `.vsix` file that can be installed in VS Code.