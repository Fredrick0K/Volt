In [[Odoo|Odoo]] we can create customs [[Model|Models]] for our custom [[Addons]]. So in order to create a new model we need to navegate to the [[Addons|Custom addon]] following this route: Odoo 17.0 > server > odoo > customAddons > {Your [[Model]]} > models > models.py
This file contains all the models that this addons have associated to, so if i wanna create a new model, i need to modify this file. 
This file contains all we need to create the [[Model|models]] for our addon. ![[models.py]]The code is also [[Code|Here!]]

We have 2 classes called the same "ies", but they are different, the first one creates a model called "ies.curso" which "ies" is the model and "curso" is the model's name.
The second class is called "ies.profesores", "ies" is the model and "profesores" is the model's name.
The attributes of both classes are nearly the same, we got:
- ### _name :  this variable holds the name of the module, this name is **UNIQUE**
- ### _description : this variable holds the description of the module, like information about the module.
this 2 are a must to have in the code, or else, odoo can't build the module correctly or it will throw a big error._
Now its time to code the fields, its simple, we create a variable with he name we want and then we initialize it like this: 
- If its a String:  ```{field_Name} = fields.Char(String="Nombre del profesor", required=True, help="Introduce el nombre del curso", size=40)```
- If its a Boolean: ```{Field_Name} = fields.Boolean(String="Activo")```
- If its a Selection: ```{Field_Name} = fields.Selection( 
	[('01', '{Values}'), ('02', '{Value}'), ('03', '{Value}')],
	default='03', <-- This is the default **KEY**, nothing more needed.
	String="{Description of the field}")```
- If its a Many2one:  ```{Field_Name} = fields.Many2one('{Model, example: res.lang}', string="{description of the field}", required=True, help="{Help box information}")```


Now we save the file > restart the odoo service > head to Odoo > Aplication > and update aplication.
![[Pasted image 20251123130023.png]]
Search for our module, and "Activar"
![[Pasted image 20251123130148.png]]
To see if we done things right, we need to check the Models in odoo.
![[Pasted image 20251123130418.png]]
Here we see the modules that we created, i have more than 2 cuz i was testing. 

Good, now its time to make the views, the code is [[Code|Here!]]
Lets break down the code, we got:
- The XML to create the ___Tree___ view of **Cursos**
- The XML to create the ___Form___ view of **Cursos**
- The XML to create the ___Tree___ view of **Profesores**, in my case i changed "**Profesores**" to "**Turbo**"
- The XML to create the ___Form___ view of **Turbo**
- The XML of the ___Action Window___ for **Cursos**
- The XML of the ___Action window___ for **Turbo**
- The XML for the ___Menu Items___, which are created like this:
	- A parent manu called whatever you want with the following id: "```{model_name}.menu_root```"
	- A submenu called whatever you want with the following id: "```{model_name}.menu_1```" and with a extra tribute that referes to the parent ```parent="{model_name}_menu_root"```
	- Submenus that extends from the submenu "```{model_name}.menu_1```" with attributes like:
		- "```<menuitem name="{name}" id="{model_name}.menu_1_list" parent="{model_name}.menu_1" action="{model_name}.curso_action_window"/>```"
		- "```<menuitem name="{name}" id="{model_name}.menu_2_list" parent="{model_name}.menu_1" action="{model_name}.turbo_action_window"/>```"
You can see my code is you have any doubts about it [[Code|here.]]

Now the most important thing, well they're all important but this one is important if we wanna see the menus, we need to go to security folder of our [[Addons|Custom Addon]] and modify the CSV file in order to create Permissions. 
So [[Code|Here]] you have the CSV with permission created for both Models. The structure of the CSV is like the following:

<table class="obsidian-table">
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>model_id_id</th>
            <th>group_id_id</th>
            <th>perm_read</th>
            <th>perm_write</th>
            <th>perm_create</th>
            <th>perm_unlink</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>perm</td>
            <td>CPermissions</td>
            <td>model_xwd_curso</td>
            <td>---</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>permTurbo</td>
            <td>TPermissions</td>
            <td>model_xwd_turbo</td>
            <td>---</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </tbody>
</table>

Here i've made a table to visualize it better.

