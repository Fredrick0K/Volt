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