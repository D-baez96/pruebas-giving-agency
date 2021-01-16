var selectedRow = null
const API_BACKEND = 'https://pruebagiving.herokuapp.com'

function onFormSubmit() {
    //if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        
    //}
}

function readFormData() {
    var formData = {};

    formData["tipo_id"] = document.getElementById("tipo_id").value
    formData["id"] = document.getElementById("id").value
    formData["nombre"] = document.getElementById("nombre").value
    formData["apellido"] = document.getElementById("apellido").value
    formData["cat"] = document.getElementById("cat").value
    formData["edad"] = document.getElementById("edad").value
    formData["cargo"] = document.getElementById("cargo").value

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tipo_id;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.id;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nombre;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.apellido;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cat;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.edad;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.cargo;

    

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this, ${data.id})">Eliminar</a>`;
}

function resetForm() {
    document.getElementById("tipo_id").value = null;
    document.getElementById("id").value = null;
    document.getElementById("nombre").value = null;
    document.getElementById("apellido").value = null;
    document.getElementById("cat").value = null;
    document.getElementById("edad").value = null;
    document.getElementById("cargo").value = null;
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("tipo_id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("id").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nombre").value = selectedRow.cells[2].innerHTML;
    document.getElementById("apellido").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cat").value = selectedRow.cells[4].innerHTML;
    document.getElementById("edad").value = selectedRow.cells[5].innerHTML;
    document.getElementById("cargo").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {

    postData(`${API_BACKEND}/update`, formData)
        .then(data => {
            console.log(data, selectedRow);
            selectedRow.cells[0].innerHTML = formData.tipo_id;
            selectedRow.cells[1].innerHTML = formData.id;
            selectedRow.cells[2].innerHTML = formData.nombre;
            selectedRow.cells[3].innerHTML = formData.apellido;
            selectedRow.cells[4].innerHTML = formData.cat;
            selectedRow.cells[5].innerHTML = formData.edad;
            selectedRow.cells[6].innerHTML = formData.cargo;
            
            resetForm();
        })
}

function onDelete(td, id) {
    if (confirm('Estas seguro de eliminar estos datos ?')) {
        row = td.parentElement.parentElement;
        
        
        postData(`${API_BACKEND}/delete`, {id: id})
            .then(data => {
                console.log(data);
                document.getElementById("employeeList").deleteRow(row.rowIndex);
            });
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("nombreCompletoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombreCompletoValidationError").classList.contains("hide"))
            document.getElementById("nombreCompletoValidationError").classList.add("hide");
    }
    return isValid;
}


async function getData(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}

async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

getData(`${API_BACKEND}/get`).then(data => {
    data.forEach(item => {
        insertNewRecord(item)
    });
});