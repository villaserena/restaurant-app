## Set up terminal:

**Install Homebrew**

[Homebrew](https://brew.sh/) is a free and open-source package manager that allows users to install apps and software packages on macOS. To install Homebrew, run the following terminal command:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

**Install iTerm2**

iTerm2 is a replacement for terminal and comes with a variety of cool features and customisations. To install iTerm2, run the command:

`brew install --cask iterm2`

**Install Zsh**

Install Zsh using brew and make iTerm2 use it with the following command:

`open -a iTerm.app`

`brew install zsh`

**Install Oh My Zsh**

Install [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) with the following command:

`sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`

**Change the default theme**

With Oh My Zsh, you can customise the theme. The default theme is robbyrussell but I personally like [powerlevel10k](https://github.com/romkatv/powerlevel10k#installation), so let’s change it.

First, we’ll need to clone the repository:

```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```

Next, select the theme in the ~/.zshrc config file.

Search for ZSH_THEME and change the name within the double quotations. Save the config file and update the changes:

`source ~/.zshrc`

## Set up git

**Install homebrew:**
https://brew.sh/

**Install git:**
brew install git

**Check for an existing SSH key**

Open terminal and enter the following command:

`ls -al ~/.ssh`

If you’ve already generated SSH keys, the output should be something along the lines of this:

```
-rw-------  1 user_name user_name  1766 Jul  7  2018 id_rsa
-rw-r--r--  1 user_name user_name   414 Jul  7  2018 id_rsa.pub
-rw-------  1 user_name user_name 12892 Feb  5 18:39 known_hosts
```

If the keys exist, head over to the **Copy your public SSH key** section.

**Generate new SSH key**

If you don’t see an output or the directory does not exist (you might get a No such file or directory message), then run the following command in terminal:

`mkdir $HOME/.ssh`

Now you can generate a new set of SSH keys with:

`ssh-keygen -t rsa -b 4096 -C <your@email.com>`

When prompted to enter file in which to save the key, and passphrase, just hit enter:

Check that the keys exist with `ls -al ~/.ssh` and ensure the output is similar to the one above.

**Add SSH key to ssh-agent**

ssh-agent is a program that starts when you log in and stores your private keys. For it to work properly, it needs to have a copy of your private key.

To start off, ensure ssh-agent is running with:

`eval "$(ssh-agent -s)"`

Now add your private key to ssh-agent with:

`ssh-add ~/.ssh/id_rsa`

**Copy your public SSH key**

You’ll need to copy your public SSH key to the clipboard. To do this, print the contents of the public key with:

`cat ~/.ssh/id_rsa.pub`

Highlight and copy the output.

**Add your public SSH key to GitHub**

Navigate to your GitHub [settings page](https://github.com/settings/keys) and select the “New SSH key”. Give it a title and paste in the public SSH key you copied to the clipboard from the previous section:

Test your authentication with:

`ssh -T git@github.com`

When prompted Are you sure you want to continue connecting (yes/no/[fingerprint])?, input yes and hit enter.

You should now see the following message, which means you’ve successfully set up SSH:

Hi philpincus! You've successfully authenticated, but GitHub does not provide shell access.

## Set up environment:

**Install Node.js:**
brew install node

**Install Expo CLI:**
npm install -g expo-cli

**If you see permission errors, try:**
sudo npm install -g expo-cli