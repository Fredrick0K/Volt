So, we got Hibernate installed in the eclipse IDE.
In the following order, the classes need to be created:
- [[#First class]] is the ***Hibernate Config File***
- [[#Second class]] is the ***Console Configuration***
- Third one is the Reverse Engineering File
- And finally the forth one, the ***Hibernate Code generation Configuration***

# First class
Now's configuration time. First, on our Java Project we create a new Hibernate Configuration File, the following UI will be displayed![[Pasted image 20251111201755.png]]
Here we define where the cfg File is gonna be located at. Am gonna save it in **"U3_Hibernate_MySQL" --> src**
![[Pasted image 20251111202914.png]]
In here we fill up this camps:
- **Session factory name** -> Any name you want
- **Database dialect** -> MySQL
- **Driver Class** -> the driver's class name "com.mysql...."
- **Connection URL** -> jdbc:mysql://localhost/<**YourDB**/>
- **Username** -> **root**
- **Password** -> **root**

# Second class
In this window, we need to fill the following field: 
- **Name**: we need to give a name to our file
- **Project**: this field will be filled automatically.
- **Database**: We need to specify or create a new connection.
- And finally ensure that the field **Configuration File** shows the path to the configuration file that we created before [[#First class|here.]]
![[Pasted image 20251124170639.png]]
If we dont have a database connection configured, we create a new one, click on **New**
This window will show up, select the **GENERIC JDBC** connector and down bellow name your connector as you like.
![[Pasted image 20251124171256.png]]
Now ___SPECIAL ATENTION___ this step is one of the most important ones, follow up as close as you can.
After giving the connector a name, and clicking on **Next**, this window show up, here we configure the connector, username, password and everything ***Hibernate*** needs to work.
First click on that icon called ***new driver definition***, it is also underlined in green
![[Pasted image 20251124171903.png]]
This window will appear, here we need to select the **Generic JDBC Driver** and we name it as we like. Next we move to the tab **JAR List**  
![[Pasted image 20251124172245.png]]
In this tab we will select the ```.jar``` file of the connector of the database. In this screenshot its shows better with colors.
![[Pasted image 20251124172841.png]]
Next up, is heading to **Properties tab**, beside **JAR List**, and here we need to fill the 4 fields, all of them.
So, we need to fill:
- **Connection URL**, which is --> **jdbc:mysql://localhost**.
- **Database name**, here you type your database's name.
- **Driver Class**, here we don't need to type anything, we click on the three dots, in the left window we click on **browse from class** and select the driver.
- **User ID**, here we need to specify the **user owner** of the database, in my case is __root__.
![[Pasted image 20251124181055.png]]
if we have done things good as explained, in this window we need to specify the **username and password** of the database owner, then click on **test connection**.

![[Pasted image 20251124181759.png]]

***SUCCESS!***

![[Pasted image 20251124185512.png]]
Now we click on **Finish**

![[Pasted image 20251124185651.png]]

 Click in **ok** and should be good



![[Pasted image 20251112172732.png]]
![[Pasted image 20251112172738.png]]
This ui is about setting the path where the fille is gonna be saved. The file name will be UNTOUCHED, we wont be messing around with some intern shi and break up everythang.
When we have choosed the save path of the cfg file, and after hitting Next.

 