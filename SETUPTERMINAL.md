Updated: July 29, 2025

This is a short guide on how to set up Oh My Zsh, a delightful, open source, community-driven framework for managing your Zsh configuration! This tutorial is adapted from the following [article](https://www.freecodecamp.org/news/how-to-configure-your-macos-terminal-with-zsh-like-a-pro-c0ab3f3c1156/). Oh My Zsh is especially useful for managing Git workflows in the CLI.

**Install Homebrew**

Homebrew is a free and open-source package manager that allows users to install apps and software packages on macOS. To install Homebrew, run the following terminal command:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**Install iTerm2**

iTerm2 is a replacement for terminal and comes with a variety of cool features and customisations. To install iTerm2, run the command:

```
brew install --cask iterm2
```

It should look like this:

**Install Zsh**

By default, macOS comes with zsh installed in the following location: /bin/zsh

Install Zsh using brew and make iTerm2 use it with the following command:

```
open -a iTerm.app # open iterm2
brew install zsh
```

**Install Oh My Zsh**

Install [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) with the following command:

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Your iTerm2 window should display the following:

**Change the default theme**

With Oh My Zsh, you can customise the theme. The default theme is robbyrussell but I personally like [powerlevel10k](https://github.com/romkatv/powerlevel10k#installation), so let’s change it.

First, we’ll need to clone the repository:

```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Next, select the theme in the ~/.zshrc config file.

Search for ZSH_THEME and change the name within the double quotations:

Before:

After:

Save the config file and update the changes:

```
source ~/.zshrc
```

Now your iTerm2 window should look something like this: