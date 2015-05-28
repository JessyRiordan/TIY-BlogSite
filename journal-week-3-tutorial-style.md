## Merge Conflicts?!?

Have you ever received this message when trying to merge your fork with another fork on Github?

![Can't Merge](img/CantMerge.png)

Well here is the solution!

**Step 1: Click the big green button**

**Step 2: Name that Merge**

  * Click that green button again
   ![](img/name-that-merge.png)


  * Oh no! Can't automatically merge.... however will we fix this?
   ![](img/oh-no.png)

Now let's move to the Command Line to help with the rest.

**Step 3: Hub Remote Add**

  * You will need to hub remote add the repository that you want to work with. 
   ![](img/hub-remote-add.png)

**Step 4: Git Remote Update**

  * Now you should git remote update.
   ![](img/git-remote-update.png)


  * Once enter is pressed the following should show up. 
   ![](img/git-remote-update-return.png)

**Step 5: Checking on our Remotes** 

  * Let's check on our remotes.
   ![](img/git-remote-v.png)
   
  * Once you hit enter it should look something like this.
   ![](img/git-remote-v-return.png)

**Step 6: Fetching**

  * Let's fetch!
   ![](img/git-fetch.png)

**Step 7: Branches**

 * Let's check on what branches we can use.
   ![](img/git-branch-a.png)

 * Once you hit enter, it should look something like this.
   ![](img/git-branch-a-return.png)

**Step 8: Merging (the start)**

 * Now let's try to merge our branches.
   ![](img/merge.png)

 * Oh no! CONFLICTS!
   ![](img/conflicts.png)

**Step 9: Fixing Conflicts in Atom**

 * Open the conflicts in Atom.
   ![](img/atom.png)
 
 * Here is an example of what the conflct will look like.
 * We want to fix anything that looks like this example. You can delete part of, combine, or delete all of the conflict.
   ![](img/atom-conflicts.png)

 * Here is a fixed conflict.
   ![](img/atom-conflicts-fixed.png)

**Step 10: git status, git add, git commit**

 * git status - just to see if we have fixed all of our conflicts
 * git add - add all of the files that you changed
 * git commit
   ![](img/git-commit.png)

 * We have a merge!
   ![](img/merged.png)

**Step 11: Push it!**

 * git push that merge
   ![](img/git-push.png)

 * Now check that pull request in Github... just to make sure. :smile:
   ![](img/merged-github.png)

**Step 12: Removing that Remote**

 * Remove the remote from your computer. 
   ![](img/git-remote-rm.png)

#DONE!

