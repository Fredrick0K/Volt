So, we got Hibernate installed in the eclipse IDE.
In the following order, the classes need to be created:
- First class is the ***Hibernate Config File***
- Second class is the ***Console Configuration***
- Third one is the Reverse Engineering File
- And finally the forth one, the ***Hibernate Code generation Configuration***

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

![[Pasted image 20251112170757.png]] 

![[Pasted image 20251112170820.png]]

![[Pasted image 20251112172732.png]]
![[Pasted image 20251112172738.png]]
This ui is about setting the path where the fille is gonna be saved. The file name will be UNTOUCHED, we wont be messing around with some intern shi and break up everythang.
When we have choosed the save path of the cfg file, and after hitting Next.

 