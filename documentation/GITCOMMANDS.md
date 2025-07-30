## Someone made updates to remote! Here's how to update local so you have the most up to date changes:

Ensure you are on main branch:
`git checkout main`

Download latest changes from remote (does not modify local files):
`git fetch`

Merge latest changes into your local branch:
`git pull`

Confirm changes have been made:
`git status`


## I want to make changes to remote! Do this on a new branch (never commit directly to main):

Create and switch to a new branch:
`git checkout -b <branch-name>`

Make your changes, then stage all of them:
`git add .`

Commit your changes with a message:
`git commit -m "{commit-message}"`

Push your new branch to the remote repository:
`git push origin <branch-name>`

Once pushed, open a pull request in Github to merge <branch-name> into main branch.

## I made changes to my branch, but someone else has just merged to main. How do I pull in the latest changes to my branch?

`git checkout main`

`git fetch`

`git pull`

`git checkout <branch-name>`

`git rebase master`

`git push -f origin <branch-name>`

## I need to reset my branch to an earlier commit! I don't care about the changes I made after this commit:

`git checkout <branch-name>`

`git reset --hard <commit-id>`

`git push -f origin <branch-name>`

## How do I see all branches and delete the ones I no longer need?

See all branches:
`git branch -a`

Switch to another branch:
`git checkout <branch-name>`

Delete a local branch:
`git branch -d <branch-name>`

test