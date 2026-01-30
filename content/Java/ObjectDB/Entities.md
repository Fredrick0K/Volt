# Context
In order to store objects in a database using **JPA**, an *entity class* must be defined. An *entity class* an ordinary Java class that is marked to indicate that it can represent objects in the database.

# Entities
Here we will see just some few entities to make simple apps, we are not gonna see em' all because there are plenty.

So, the entities we gonna see are:
### Entity Classes
- **Entity classes**: An entity class is an user defined Java class with the ability to store its instances in the database. 
	To declare an entity class is to mark it with the annotation `@Entity`, like this:
	```java
	import javax.persistence.Entity;
	@Entity
	public class EntityClass{
	}
	```
	JPA queries use class name to navigate or extract data from. Because its an Object-Oriented Database it follows this rule. If you want to give another name so use it in queries aside from the class name, you can add arguments to the `@Entity` definition like this:
	```java
	@Entity (name = "NewName")
	//code...
	``` 
- **Embeddable classes**: Embeddable classes are also user-defined classes that functions as value types.  Instances from this classes can only be stored as embedded objects of another instance, as part of a containing entity. Embeddable class instances cannot be stored directly in the database. 
	It can be declared by marking it with `@Embeddable` annotation, like this:
	```java
	@Embeddable
	public class Address{
		String street;
		int streetNumber;
		String state;
		String postalCode;
	}
	```
	Instances of an embeddable class is always embedded in another entity class.

### Entity Fields
- **Transient fields**: Transient entities are fields that don't participate in persistence, so they aren't stored in the database. Its like disabling a field so it doesn't persist in the database, like switching it off in the storing process so it doesn't store in the database.
	the annotation is `@Transient`, **this effects only the persistence**.
	```java
	@Entity
	public class EntityWithTransientField{
		String phoneModel;
		@Transient int phoneNum;
	}
	```
	For example, the code shown above only stores the `phoneModel` object, the `phoneNum` is ignored.
- **References**: The reference annotation is used to create relations between table, `@OneToOne`, `@ManyToOne`, `@OneToMany`, `@ManyToMany` are the annotations supported by ObjectDB in order to create relations or references. 
	```java
	@Entity
	public class EntityWithReferencedFields{
		String street;
		@OneToMany State entityState;
	}
	```
	Here above, you can see that `entityState` is a referenced field. It references the `State` class to create a relation of *1:M* **(1 State -> Many streets)**.
### Primary Key

- **Primary key**: Every entity in the database is uniquely identified and can be retrieved by its unique identifier (*Primary Key*). The ID needs to be marked  with the `@Id` annotation.
	```java
	public class App{
		@Id long id;
	}
	```
	The primary key can be automatically generated with the annotation `@GeneratedValue`. This marks that the primary key is automatically allocated by **ObjectDB**.
	```java
	public class App{
		@Id @GeneratedValue long id;
	}
	```
	An application primary key field can be declared with the following types: `boolean`, `byte`, `short`, `char`, `int`, `long`, `float`, `double`
