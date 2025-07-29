This is a short guide on how to generate and configure an SSH key with GitHub, adapted from the following [article](https://www.freecodecamp.org/news/git-ssh-how-to/). This will allow you to clone CircleCI private repos to your local environment.

George Test

Open terminal and enter the following command:

$ ls -al ~/.ssh

If you’ve already generated SSH keys, the output should be something along the lines of this:

```
-rw-------  1 user_name user_name  1766 Jul  7  2018 id_rsa
-rw-r--r--  1 user_name user_name   414 Jul  7  2018 id_rsa.pub
-rw-------  1 user_name user_name 12892 Feb  5 18:39 known_hosts
```

If the keys exist, head over to the **Copy your public SSH key** section.

**Generate new SSH key**

If you don’t see an output or the directory does not exist (you might get a No such file or directory message), then run the following command in terminal:

$ mkdir $HOME/.ssh

Now you can generate a new set of SSH keys with:

$ ssh-keygen -t rsa -b 4096 -C your@email.com

When prompted to enter file in which to save the key, and passphrase, just hit enter:

Check that the keys exist with $ ls -al ~/.ssh and ensure the output is similar to the one above. Here’s what mine looks like:

![Screenshot 2025-05-27 at 11.23.25.png](attachment:3b146318-43d5-472b-8488-5ccc942079b9:Screenshot_2025-05-27_at_11.23.25.png)

**Add SSH key to ssh-agent**

ssh-agent is a program that starts when you log in and stores your private keys. For it to work properly, it needs to have a copy of your private key.

To start off, ensure ssh-agent is running with:

$ eval "$(ssh-agent -s)" # for Mac

Now add your private key to ssh-agent with:

$ ssh-add ~/.ssh/id_rsa

**Copy your public SSH key**

You’ll need to copy your public SSH key to the clipboard. To do this, print the contents of the public key with:

$ cat ~/.ssh/id_rsa.pub # for Mac

Highlight and copy the output.

**Add your public SSH key to GitHub**

Navigate to your GitHub [settings page](https://github.com/settings/keys) and select the “New SSH key”. Give it a title and paste in the public SSH key you copied to the clipboard from the previous section:

Test your authentication with:

$ ssh -T git@github.com

When prompted Are you sure you want to continue connecting (yes/no/[fingerprint])?, input yes and hit enter.

You should now see the following message, which means you’ve successfully set up SSH:

Hi philpincus! You've successfully authenticated, but GitHub does not provide shell access.

**Enable single sign on (SSO)**

Lastly, navigate to your GitHub [settings page](https://github.com/settings/keys) and ensure framer is authorised located in the Configure SSO drop down menu:

If you see the following page, then you’re good to go: