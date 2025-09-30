# Claude Side Terminal

一个 VSCode 扩展，可以在侧边快速打开终端并在当前文件目录下运行 Claude。

## 功能

- 在编辑器标题栏添加 Claude 图标按钮
- 点击按钮在侧边打开终端
- 自动切换到当前文件所在目录
- 自动执行 `claude` 命令

## 使用方法

1. 打开任意文件
2. 点击编辑器右上角的 Claude 图标
3. 侧边终端会自动打开并运行 `claude`

## 安装

### 从 VSIX 文件安装

1. 在 VSCode 中按 `Cmd+Shift+P` (macOS) 或 `Ctrl+Shift+P` (Windows/Linux)
2. 输入 "Extensions: Install from VSIX..."
3. 选择 `claude-side-terminal-0.0.1.vsix` 文件
4. 重启 VSCode

### 命令行安装

```bash
code --install-extension claude-side-terminal-0.0.1.vsix
```

## 要求

- VSCode 1.64.0 或更高版本
- 系统已安装 `claude` 命令行工具

## 版本历史

### 0.0.1
- 初始版本
- 支持在侧边终端运行 Claude