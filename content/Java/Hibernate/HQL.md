**Hibernate Query Language**, aka **HQL**, is the query language that Hibernate uses to make queries to the DB, its quite similar to **SQL** but with the particularity of using **Class** names or **Object** name instead of **Tables** and **Fields** 

>[!example] **HQL** example: 
>> SELECT **pe** FROM **Pelicula** **pe** 

Here **pe** is just and alias that references to **Pelicula** which is the Class that **Hibernate** generated when we did the [[Hibernate#Third Class| Mapping]]. In SQL looks like this:

>[!example] SQL example:
>> SELECT * FROM Pelicula

As you can see, in **SQL** we can use the asterisk to retrieve all the fields of the specified table. In **HQL** we use alias instead.

Hibernate has its own packages and a list of dependencies needed so it can run correctly. The following ``.rar file`` has all the necessary libraries and dependencies needed: 
![[lib_hibernate_7.1.rar]] 

Hibernate includes its own classes used to make the **CRUD[^1]** queries, such as:
 - **TypeQuery<{*Object*}>**
 - **Query<{*Object*}>**
 - **SelectionQuery<{*Object*}>**
 - **MutationQuery**
 
We are going to focus on 2 of these, **SelectionQuery** and **MutationQuery**.
These 2 are quite comprehensible by just their name, **SelectionQuery** is used when we wanna get information from the DB, like **SELECT** queries, by the other hand, **MutationQuery** is used when we wanna make changes in the DB, like **UPDATES**, **DELETE**, **INSERT** queries.

**SelectionQuery** works by retrieving information  and instancing and object of the given type. If the query returns just one result, like searching by id, its quite simple and you need to instance just one object and then write it on screen with the **toString()**. But, if the query returns more than 1, like for example, retrieving the movies that are ranked between a given number of stars, in this case we will use **List<>** to save em all in one list and read it after.

Join Types used in Hibernate: 
There are  2 types, **Implicit JOIN** and **Explicit JOIN**. The implicit Join uses *dot* ``.`` to navigate through the classes to the destiny, explicit join uses the ``JOIN`` word to navigate through tables and classes. Here are some examples:

 - Implicit example: ``` SELECT FROM Libro l WHERE l.escritor.nombre LIKE '{value}' ```. We are retrieving the fields of the reg **Libro** that has an author name that matches with the parameter.
- Explicit example: ``SELECT l FROM Libro l JOIN l.escritor e WHERE e.nombre LIKE '{value}' ``. Here same thing but with the well know Join statement.


>[!Important] If your program does multiple queries to the DB, the **Session** need to be closed ones the program finishes.



[^1]:  **CRUD** stands for: *Create*, *Read*, *Update* & *Delete*