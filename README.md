# For Coding

## setting

<details>
 <summary>setting</summary>

```shell
#nvm
brew install nvm
# z
brew install z
#tree
brew install tree
# curl
brew install curl
# oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# zsh plugin
cd ~/.oh-my-zsh/plugins
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
git clone https://github.com/zsh-users/zsh-autosuggestions.git

code ~/.zshrc
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

</details>

<br /><br />

## alias

<details>
 <summary>alias</summary>

```shell
# git alias 등록
vim ~/.gitconfig
--
[alias]
	l = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -n5
	s = status -s
	co = checkout
	ci = commit
	br = branch
```

```shell
# command alias등록
vim ~/.commands

# git_new_branch origin/main_에서_시작할_브랜치명
git_new_branch() {
    git fetch origin main
    git checkout -b $1 origin/main
}
```

</details>

<br /><br />

## VS Code

<details>
 <summary>extentios</summary>

1. Auto Close Tag
2. Auto Import
3. Auto Rename Tag
4. Live Server
5. Highlight Matching Tag
6. HTML CSS Support
7. HTML Snippets

8. IntelliSense for CSS class names in HTML
9. Path Intellisense

10. JavaScript (ES6) code snippets
11. Reactjs code snippets

12. Community Material Theme
13. Material Icon Theme

14. ESLint
15. Prettier - Code formatter

16. TODO Highlight
17. Turbo Console Log
	
18. Jest
19. Jest Runner

</details>

<br />

<details>
 <summary>Keyboard Shortcuts</summary>

custom shortcuts          
Preferences: Open Keyboard Shortcuts JSON
	
```json
[
  {
    "key": "cmd+e",
    "command": "workbench.action.togglePanel"
  },
  {
    "key": "cmd+r",
    "command": "editor.action.triggerSuggest",
    "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly"
  },
  {
    "key": "cmd+1",
    "command": "workbench.action.terminal.focusAtIndex1"
  },
  {
    "key": "cmd+2",
    "command": "workbench.action.terminal.focusAtIndex2"
  },
  {
    "key": "cmd+3",
    "command": "workbench.action.terminal.focusAtIndex3"
  },
  {
    "key": "cmd+4",
    "command": "workbench.action.terminal.focusAtIndex4"
  },
  {
    "key": "cmd+5",
    "command": "workbench.action.terminal.focusAtIndex5"
  },
  {
    "key": "cmd+6",
    "command": "workbench.action.terminal.focusAtIndex6"
  }
  {
    "key": "shift+cmd+r",
    "command": "extension.runJest"
  },
  {
    "key": "shift+cmd+g",
    "command": "workbench.view.scm",
    "when": "workbench.scm.active"
  },
  {
    "key": "cmd+t",
    "command": "workbench.action.terminal.new",
    "when": "terminalProcessSupported || terminalWebExtensionContributedProfile"
  },
]	
```

</details>
