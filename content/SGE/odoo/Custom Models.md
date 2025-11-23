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
- If its a String: **{field_Name} = fields.Char(String="Nombre del profesor", required=True, help="Introduce el nombre del curso", size=40)**
- If its a Boolean: **{Field_Name} = fields.Boolean(String="Activo")**
- If its a Selection: {Field_Name} = fields.Selection( 
	[('01', '{Values}'), ('02', '{Value}'), ('03', '{Value}')],
	default='03', <-- This is the default **KEY**, nothing more needed.
	String="{Description of the field}")
- If its a Many2one:  {Field_Name} = fields.Many2one('{Model, example: res.lang}', string="{description of the field}", required=True, help="{Help box information}")
