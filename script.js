var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombreCompleto"] = document.getElementById("nombreCompleto").value;
    formData["correo"] = document.getElementById("correo").value;
    formData["telefono"] = document.getElementById("telefono").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombreCompleto;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.correo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.telefono;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Eliminar</a>`;
}

function resetForm() {
    document.getElementById("nombreCompleto").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombreCompleto").value = selectedRow.cells[0].innerHTML;
    document.getElementById("correo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("telefono").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombreCompleto;
    selectedRow.cells[1].innerHTML = formData.correo;
    selectedRow.cells[2].innerHTML = formData.telefono;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Estas seguro de eliminar estos datos ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombreCompleto").value == "") {
        isValid = false;
        document.getElementById("nombreCompletoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombreCompletoValidationError").classList.contains("hide"))
            document.getElementById("nombreCompletoValidationError").classList.add("hide");
    }
    return isValid;
}