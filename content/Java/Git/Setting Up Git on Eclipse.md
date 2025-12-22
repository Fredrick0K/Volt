So in order to be able to push and save our [[Java]] projects on GitHub, follow up closely.

First we gonna open the **"Git Repositories"** view by going to **"Window"** -> **"Show View"** 
-> **"Other"** 
![[Pasted image 20251222001119.png]]
**"Git"** -> **"Git Repositories"** , then we open it
![[Pasted image 20251222001258.png]]
A window like this will be shown beside console view, there we clock on the **"Clone Git Repo"** icon which looks like a cloud and a cylinder with a green arrow, 
![[Pasted image 20251222001706.png]]
This window will pop up, giving you the choice of cloning your repo by 2 different ways.
![[Pasted image 20251222002322.png]]
These options are: 
1. Clone URL: This option will clone your repository via URL, then it will ask you to authenticate yourself and then you need to choose which branch you gonna sync with.
	![[Pasted image 20251222002711.png]] 
	Here you need to fill up just the undermarked fields because some fields are gonna be auto-filled when you input the URL.

2. GitHub: This option is viable only if your repository is Public, else, it will not work. Its as simple as choosing the language of your project in GitHub and then searching for it by name, like this:
	 ![[Pasted image 20251222002942.png]]
	 Here you can see that i did searched for my repository. The repositories found will be named first by the owners name, then the name of the repo itself then between parenthesis the language used in the project.
>[!Caution] The project needs to be *PUBLIC* if you wanna work with this option, else, nothing will be displayed when you search for the repo.

Here am going to use the **URL Cloning** because my repo is *Private*. So first step is copying our GitHub repo URL,
![[Pasted image 20251222003812.png]]
Then we paste the URL in the right field and automatically almost everything gonna be auto-completed 
![[Pasted image 20251222003945.png]]![[VERT_2025-12-22 00-48-40.gif]]

If you have 2FA (2 Factor Authentication) logging in by just the password may not work, so you need to use a token instead, its quite simple, watch closely:
1. We go to GitHub -> **Settings** 
	![[Pasted image 20251222005511.png]]
2. Scroll down to **Developer Settings** 
	![[Pasted image 20251222005603.png]]
3. Click on **Personal access Tokens** -> **tokens (classic)** -> **Generate new token** 
	![[Pasted image 20251222005804.png]]
4. We are gonna create a classic token
	![[Pasted image 20251222005850.png]]
	