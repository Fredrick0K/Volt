
Now we have done the [[Installing Git|Git installation]] and [[Setting Up Git on Eclipse|preparing Eclipse]], next thing is actually syncing the project with GitHub. Lets do this!

First, we do right click on our project that we want to upload to GitHub, we search for 
"**Team**" -> **"Share Project"** 
![[Pasted image 20251223174120.png]]

A window like this will pop up, here we select our previously cloned repo and we click on **Finish**. 
![[Pasted image 20251223174340.png]]

And like that we have our project linked to the repo. You can see the right text its says the actual connected **repo** and the working **Branch**
![[Pasted image 20251223174504.png]]

Now we need to commit and push in order to save our project on that repo. 
So first we do right click on our repo -> **"Team"** -> **"Commit"**
![[Pasted image 20251223174743.png]] 

Beside the **"Git Repositories View"** a new view is gonna open, called **"Git Staging"**, it looks like this.
![[Pasted image 20251223175141.png]]

Here we click on **"Add all Files..."** to **Stage the Changes**, in the left red box is the **Commit Message**. When we are done, click on **Commit And Push** in the left bottom corner.

A window like this will pop up, we need to log in again with the [[Setting Up Git on Eclipse#Token Generation|Token]]. 
![[Pasted image 20251223175341.png]]

When you **"Log In"**  this window will show telling us the changes are **committed** and **Pushed** successfully
![[Pasted image 20251223175651.png]]

We can see the project uploaded by going to the repo on GitHub.
![[Pasted image 20251223180030.png]]

>[!SUCCESS] Congrats! Now your project is on *GitHub*!! 



