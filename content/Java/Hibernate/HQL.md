**Hibernate Query Language**, aka **HQL**, is the query language that Hibernate uses to make queries to the DB, its quite similar to **SQL** but with the particularity of using **Class** names or **Object** name instead of **Tables** and **Fields** 

>[!example] **HQL** example: 
>> SELECT **pe** FROM **Pelicula** **pe** 

Here **pe** is just and alias that references to **Pelicula** which is the Class that **Hibernate** generated when we did the [[Hibernate#Third Class| Mapping]]. In SQL looks like this:

>[!example] SQL example:
>> SELECT * FROM Pelicula

As you can see, in **SQL** we can use the asterisk to retrieve all the fields of the specified table. In **HQL** we use alias instead.

Hibernate has its own packages and a list of dependencies needed so it can run correctly. The following ``.rar file`` has all the necessary libraries and dependencies needed: 
![[lib_hibernate_7.1.rar]] 

Hibernate includes its own classes used to make the **CRUD[^1]** queries.
















[^1]:  **CRUD** stands for: *Create*, *Read*, *Update* & *Delete*