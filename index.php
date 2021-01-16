<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./estilos.css">
</head>
<body>
    <table>
        <tr>
            <td>
                <form onsubmit="event.preventDefault();onFormSubmit();" autocomplete="off">
                    <input type="hidden" name="id" id="id">
                    <div>
                        <label>Tipo ID</label>
                        <input type="text" name="tipo_id" id="tipo_id">
                    </div>
                    <div>
                        <label>Nombres</label>
                        <input type="text" name="nombre" id="nombre">
                    </div>
                    <div>
                        <label>Apellidos</label>
                        <input type="text" name="apellido" id="apellido">
                    </div>
                    <div>
                        <label>Catégoria</label>
                        <select name="cat" id="cat">
                            <option value="">Seleccione</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                    <div>
                        <label>Edad</label>
                        <input type="text" name="edad" id="edad">
                    </div>
                    <div>
                        <label>Cargo</label>
                        <select name="cargo" id="cargo">
                            <option value="">Seleccione</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Gerente">Gerente</option>
                            <option value="Analista">Analista</option>
                            <option value="Asesor">Asesor</option>
                        </select>
                    </div>
                    <div  class="form-action-buttons">
                        <input type="submit" value="Guardar">
                    </div>
                </form>
            </td>
           
        </tr>
        <tr>
            <td>
                <table class="list" id="employeeList">
                    <thead>
                        <tr>
                            <th>Tipo ID</th>
                            <th>Id</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Catégoria</th>
                            <th>Edad</th>
                            <th>Cargo</th>
                            <th colspan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </td>
        </tr>
    </table>
    <script src="./script.js"></script>
</body>
</html>