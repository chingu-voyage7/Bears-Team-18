### Bears Team 18 Git Style
A simple lexicon for our version control is handled.

### Branch naming convention
Use the format below when naming a new branch
> storyType-2To3WordsSummary

Story type includes:
- ft ==> feature eg ft-implement-login-page
- fx ==> bug fix eg fx-login-broken-link
- ch ==> chore eg ch-update-readme

### Workflow for Pull Requests

In order to contribute to this repository:
- fork off the develop branch
- create a new branch from the develop branch. Please follow the branch naming convention described above
- implement new feature your new branch
- do a `git rebase` to resolve potential merge conflict
- make a pull request to the develop branch

