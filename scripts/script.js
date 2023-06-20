var row = 1;

function addStudent() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var mobile = document.getElementById("mobile").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    if(!name || !age || !mobile || !city || !state) {
        alert("Please fill all fields.");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = mobile;
    cell4.innerHTML = city;
    cell5.innerHTML = state;

    row++;
}