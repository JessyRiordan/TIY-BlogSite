## Merge Conflicts?!?

Have you ever received this message when trying to merge your fork with another fork on Github?

![Can't Merge](../img/journal-week-3/CantMerge.png)

Well here is the solution!

**Step 1: Click the big green button**

**Step 2: Name that Merge**

  * Click that green button again
   ![](img/journal-week-3/name-that-merge.png)


  * Oh no! Can't automatically merge.... however will we fix this?
   ![](img/journal-week-3/oh-no.png)

Now let's move to the Command Line to help with the rest.

**Step 3: Hub Remote Add**

  * You will need to hub remote add the repository that you want to work with.
   ![](img/journal-week-3/hub-remote-add.png)

**Step 4: Git Remote Update**

  * Now you should git remote update.
   ![](img/journal-week-3/git-remote-update.png)


  * Once enter is pressed the following should show up.
   ![](img/journal-week-3/git-remote-update-return.png)

**Step 5: Checking on our Remotes**

  * Let's check on our remotes.
   ![](img/journal-week-3/git-remote-v.png)

  * Once you hit enter it should look something like this.
   ![](img/journal-week-3/git-remote-v-return.png)

**Step 6: Fetching**

  * Let's fetch!
   ![](img/journal-week-3/git-fetch.png)

**Step 7: Branches**

 * Let's check on what branches we can use.
   ![](img/journal-week-3/git-branch-a.png)

 * Once you hit enter, it should look something like this.
   ![](img/journal-week-3/git-branch-a-return.png)

**Step 8: Merging (the start)**

 * Now let's try to merge our branches.
   ![](img/journal-week-3/merge.png)

 * Oh no! CONFLICTS!
   ![](img/journal-week-3/conflicts.png)

**Step 9: Fixing Conflicts in Atom**

 * Open the conflicts in Atom.
   ![](img/journal-week-3/atom.png)

 * Here is an example of what the conflct will look like.
 * We want to fix anything that looks like this example. You can delete part of, combine, or delete all of the conflict.
   ![](img/journal-week-3/atom-conflicts.png)

 * Here is a fixed conflict.
   ![](img/journal-week-3/atom-conflicts-fixed.png)

**Step 10: git status, git add, git commit**

 * git status - just to see if we have fixed all of our conflicts
 * git add - add all of the files that you changed
 * git commit
   ![](img/journal-week-3/git-commit.png)

 * We have a merge!
   ![](img/journal-week-3/merged.png)

**Step 11: Push it!**

 * git push that merge
   ![](img/journal-week-3/git-push.png)

 * Now check that pull request in Github... just to make sure. :smile:
   ![](img/journal-week-3/merged-github.png)

**Step 12: Removing that Remote**

 * Remove the remote from your computer.
   ![](img/journal-week-3/git-remote-rm.png)

#DONE!
