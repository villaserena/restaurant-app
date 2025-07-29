Someone made updates to remote! Here's how to update local so you have the most up to date changes:

Ensure you are on master branch:
`git checkout master`

Download latest changes from remote:
`git fetch`

Update local to reflect latest changes from remote:
`git pull`

Confirm changes have been made:
`git status`


I want to make changes to remote! Here's how you do this on a new branch (remember, we never make updates to the master branch):

Checkout new branch {branch_name}:
`git checkout -b {branch-name}`

Once you're happy with your changes, you have to stage them:
`git add .`

Commit all changes:
`git commit -m "{commit-message}`

Push local branch to master branch:
`git push origin {branch-name}`

Now, navigate to the repository. Go to your branch. Compare & pull request. Create your PR. 

Oh no! The changes broke something. Let's revert the changes: