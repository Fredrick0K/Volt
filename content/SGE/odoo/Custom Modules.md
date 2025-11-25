For adding custom [[Addons]], my own shi, a Folder must be created in Odoo17->Server -> odoo -> {customaddons}![[Pasted image 20251110191503.png]]
Now, we navigate to *[[Odoo.conf]]* and we add a new path to our custom folder. On key **addons_path** we add a coma and add our path.
![[Pasted image 20251110191725.png]]
In every single addon folder, subFolder like the followings, must be created: 
 <li> data/ </li>
 <li> models/ </li>
 <li> controllers/ </li>
 <li> views/ </li>
 <li> static/ </li>

If any changes are commited in these folders, or these 2 py files __init__.py , __manifest__.py, Odoo service must be reinitialized.
Now in order to create a new **Module**, we use **CMD** as ***ADMINISTRATOR***, and we navigate to **> Odoo 17\server**. Then we execute this commando:

***C:\Program Files\Odoo 17.0\server> ..\python\python.exe odoo-bin scaffold xwd odoo\custom_addons*** as:

- **C:\Program Files\Odoo 17.0\server>** Prompt
-  **..\python\python.exe** Path to .exe file of Python
- **odoo-bin** Calls [[Odoo-bin]] file.
- **scaffold** Builder, this will build and configure our [[Addons]]
- **XWD** Name that the new module will receive
- **odoo\custom_addons** Path where the new module will be located

This command calls ***python.exe***, we send python ***[[Odoo-bin]]*** file, and we use the parameter **_scaffold_** followed by the name of our new module, and then the path where the module is gonna be created.  

