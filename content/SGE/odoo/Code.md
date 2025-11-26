***Index:***
- [[#QWEB| QWEB ]]
- [[#Tree| Tree View]]
- [[#Form|Form View]]
- [[#Custom Addons Models|Custom Models]]
- [[#Code Custom Views|Custom Views]]
- [[#Security CSV|CSV]]
- [[#Custom Demo Data|Demo Data]]

This page holds all the code used in [[SGE/odoo/odoo/Odoo|Odoo]], if anyone wants the code.

---

#  QWEB
```
<t t-name="informe_alumno">
    <div class="page">
        <p><h1>Informe Del Alumno</h1></p>
        <table class="table table-condensed">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Pais</th>
                    <th>Estudios</th>
                </tr>
            </thead>
            <tr>
                <td><span t-field="docs.x_id"/></td>
                <td><span t-field="docs.x_name"/></td>
                <td><span t-field="docs.x_pais"/></td>
                <td><span t-field="docs.x_estudios"/></td>
            </tr>
        </table>
    </div>
```

```
<t t-name="informe_libro">
	<style>
		table, th, td {
			  border:1px solid black;
		}  
	</style>
    <div class="page">
        <p><h1>Informe Del Libro</h1></p>
        <table class="table table-condensed" style="width:80%">
            <thead>
                <tr>
                    <th><strong>Id</strong></th>
                    <th>Id Autor</th>
                    <th>Titulo</th>
                    <th>Anyo Edicion</th>
                    <th>Numero Paginas</th>
                </tr>
            </thead>
            <tr>
                <td><span t-field="docs.x_codigo_libro"/></td>
                <td><span t-field="docs.x_codigo_autor"/></td>
                <td><span t-field="docs.x_name"/></td>
                <td><span t-field="docs.x_anyo_edicion"/></td>
                <td><span t-field="docs.x_numero_paginas"/></td>
            </tr>
        </table>
    </div>
    </t>
```

___ 
# Tree 

````
<tree>
    <field name="x_codigo_libro"/>
    <field name="x_codigo_autor"/>
    <field name="x_name"/>
    <field name="x_anyo_edicion" optional="hide"/>
    <field name="x_numero_paginas" optional="show"/> 
</tree>
````

___
# Form 

````
<form>
    <group>
        <field name="x_codigo_libro"/>
        <field name="x_codigo_autor"/>
        <field name="x_name"/>
        <field name="x_anyo_edicion"/>
        <field name="x_numero_paginas"/>
    </group> 
</form>
````

___
# Custom Addons Models: 

````
from odoo import models, fields, api
class ies(models.Model):
     _name = 'ies.curso'
     _description = 'Cursos del instituto'
     name = fields.Char(String="Nombre del curso", required=True, help="Introduce el nombre del curso", size=40)
     description = fields.Text(String="Descripcion del curso")
     activo = fields.Boolean(String="Activo")
     alumno = fields.Integer(String="Max.Alumnos")
     categoria = fields.Selection(
               [('01', 'Informatica'), ('02', 'Filosifia'), ('03', 'Manualidades')],
               default='01',
               String="Categoria del curso")
     lengua = fields.Many2one('res.lang', string="idioma en que imparte", required=True, help="Selecciona el idioma")
     profesor = fields.Many2one('sh.profesores', string="Profesor que lo imparte", required=True, help="Selecciona el profesor")
     
class ies(models.Model):
     _name = 'ies.profesores'
     _description = 'Profesores en el IES'
     name = fields.Char(String="Nombre del profesor", required=True, help="Introduce el nombre del curso", size=40)
     activo = fields.Boolean(String="Activo")
     cargo = fields.Selection(
               [('01', 'Jefe de estudios'), ('02', 'Direccion'), ('03', 'Profesor titular')],
               default='03',
               String="Cargo docente")   
````

___
# Code Custom Views

```
<odoo>
  <data>
    <!-- explicit list view definition -->
    <!-- View For Cursos Tree-->
    <record model="ir.ui.view" id="xwd.curso_tree">
      <field name="name">xwd Cursos Tree</field>
      <field name="model">xwd.curso</field>
      <field name="arch" type="xml">
        <tree>
          <field name="name" />
          <field name="activo" />
          <field name="alumno" />
          <field name="categoria" />
        </tree>
      </field>
    </record>

    <!-- View For Curso Form-->
    <record model="ir.ui.view" id="xwd.curso_form">
      <field name="name">xwd Cursos Form</field>
      <field name="model">xwd.curso</field>
      <field name="arch" type="xml">
        <form>
          <group>
            <field name="name" />
            <field name="activo" />
            <field name="alumno" />
            <field name="categoria" />
          </group>
        </form>
      </field>
    </record>

    <!-- View For Search Fun-->
    <record model="ir.ui.view" id="xwd.cursos_search">
      <field name="name">xwd Cursos Search</field>
      <field name="model">xwd.curso</field>
      <field name="arch" type="xml">
        <search>
          <field name="name"/>
          <field name="categoria"/>
        </search>
      </field>
    </record>


    <!-- View For class Turbo Tree-->
    <record model="ir.ui.view" id="xwd.turbo_tree">
      <field name="name">xwd turbo Tree</field>
      <field name="model">xwd.turbo</field>
      <field name="arch" type="xml">
        <tree>
          <field name="name" />
          <field name="activo" />
          <field name="alumno" />
          <field name="categoria"/>
        </tree>
      </field>
    </record>

    <!-- View For Class Turbo Form -->
    <record model="ir.ui.view" id="xwd.turbo_form">
      <field name="name">xwd turbo Form</field>
      <field name="model">xwd.turbo</field>
      <field name="arch" type="xml">
        <form>
          <group>
            <field name="name" />
            <field name="activo" />
            <field name="alumno" />
            <field name="categoria" />
          </group>
        </form>
      </field>
    </record>


    <!-- actions opening views on models -->
    <!-- Action Windows For Class Curso-->
    <record model="ir.actions.act_window" id="xwd.curso_action_window">
      <field name="name">Gestion Cursos</field>
      <field name="res_model">xwd.curso</field>
      <field name="view_mode">tree,form</field>
    </record>

    <!-- Action Window For Class Turbo-->
    <record model="ir.actions.act_window" id="xwd.turbo_action_window">
      <field name="name">Gestion Turbo</field>
      <field name="res_model">xwd.turbo</field>
      <field name="view_mode">tree,form</field>
    </record>
    <!-- server action to the one above -->
    <!--
    <record model="ir.actions.server" id="xwd.action_server">
      <field name="name">xwd server</field>
      <field name="model_id" ref="model_xwd_xwd"/>
      <field name="state">code</field>
      <field name="code">
        action = {
          "type": "ir.actions.act_window",
          "view_mode": "tree,form",
          "res_model": model._name,
        }
      </field>
    </record>
-->

    <!-- Top menu item -->
    
    <menuitem name="XWD" id="xwd.menu_root"/>

    <!-- menu categories -->
    
    <menuitem name="Docent" id="xwd.menu_1" parent="xwd.menu_root"/>

    <!-- actions -->
    
    <menuitem name="Cursos" id="xwd.menu_1_list" parent="xwd.menu_1" action="xwd.curso_action_window"/>
    <menuitem name="Turbo" id="xwd.menu_2_list" parent="xwd.menu_1" action="xwd.turbo_action_window"/>

  </data>
</odoo>
```

___
# Security CSV

```
id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
perm,Permissions,model_xwd_curso,,1,1,1,1
permTurbo,TPermissions,model_xwd_turbo,,1,1,1,1
```

___
# Custom Demo Data

```

<odoo>
  <data>
    <!-- Demo Data Load For Alumno-->
    <record id="alumno_1" model="xwd.alumnado">
      <field name="name">Eva</field>
      <field name="apellido">Torres Herrero</field>
      <field name="direccion">C San Martin</field>
    </record>
  
    <record id="alumno_2" model="xwd.alumnado">
      <field name="name">Alexander</field>
      <field name="apellido">Scjundiel</field>
      <field name="direccion">Avd Madrid</field>
   </record>
  

   <record id="alumno_3" model="xwd.alumnado">
      <field name="name">Marco</field>
      <field name="apellido">Hernandez Polo</field>
      <field name="direccion">Plaza Roma</field>
    </record>
  
    <!-- Demo Data Load For Turbo-->
  
    <record id="turbo_1" model="xwd.turbo">
      <field name="name">Javier Gallo</field>
      <field name="activo">true</field>
      <field name="alumno">20</field>
      <field name="categoria">03</field>
      <field name="owner"> Williams </field>
    </record>
  
    <record id="turbo_2" model="xwd.turbo">
      <field name="name">Rocio Gargallo </field>
      <field name="activo">true</field>
      <field name="alumno">10</field>
      <field name="categoria">02</field>
      <field name="owner">Richards</field>
    </record>
  
    <record id="turbo_3" model="xwd.turbo">
      <field name="name">Sergei Rotimerr</field>
      <field name="activo">true</field>
      <field name="alumno">14</field>
      <field name="categoria">01</field>
      <field name="owner">McLaren Willy</field>
    </record>
  
    <!-- Demo Data Load For Curso-->
  
    <record id="curso_1" model="xwd.curso">
      <field name="name">IT</field>
      <field name="activo">true</field>
      <field name="alumno">12</field>
      <field name="categoria">02</field>
      <field name="lengua" ref="base.lang_es"/>
      <field name="profesor" ref="turbo_1"/>
      <field name="alumno_cursos" eval="[(6, 0, [ref('alumno_3'), ref('alumno_2')] )]"/>
    </record>
  
    <record id="curso_2" model="xwd.curso">
      <field name="name">DAM</field>
      <field name="activo">true</field>
      <field name="alumno">30</field>
      <field name="categoria">04</field>
      <field name="lengua" ref="base.lang_es"/>
      <field name="profesor" ref="turbo_2"/>
      <field name="alumno_cursos" eval="[(6, 0, [ref('alumno_2'), ref('alumno_1')] )]"/>
    </record>
  
    <record id="curso_3" model="xwd.curso">
      <field name="name">Mecanica</field>
      <field name="activo">true</field>
      <field name="alumno">13</field>
      <field name="categoria">01</field>
      <field name="lengua" ref="base.lang_es"/>
      <field name="profesor" ref="turbo_3"/>
      <field name="alumno_cursos" eval="[(6, 0, [ref('alumno_1'), ref('alumno_2')] )]"/>

    </record>
  </data>
</odoo>

```

