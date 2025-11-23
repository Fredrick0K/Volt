# -*- coding: utf-8 -*-

 
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
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100

