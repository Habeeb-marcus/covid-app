const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const travel = document.getElementById("travel");
const gender = document.querySelector("#gender");
const submit = document.querySelector(".submit");
const table = document.getElementById('patientId')
const form = document.querySelector('.form')

console.log(table);
var selectedRow = null
const handleSubmit = (e) => {
  e.preventDefault();
  var formData = readFormData();
  if(selectedRow === null ) {
      insertNewRecord(formData);
  } else {
    updateRecord(formData)
  }
//  resetForm()
form.reset()
};

gender.addEventListener("change", (e) => {
  let desc = e.target.selectedOptions[0].value;
  console.log(desc);
  return desc; 
});  
console.log(travel.value);

  travel.addEventListener("click", () => {
    if (travel.checked == true) {
      return (travel.value = "Yes");
    } else {
      return (travel.value = "No");
    }
  });

  // read the form record inputs
function readFormData() {
  var formData = {};
  formData["firstName"] = firstName.value;
  formData["lastName"] = lastName.value;
  formData["email"] = email.value;
  formData["gender"] = gender.value;
  formData["travel"] = travel.value;
  return formData;
}

// create a function that reads current input of the form

function insertNewRecord(data) {
  let table = document.querySelector(".list").getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  (cell1 = newRow.insertCell(0)),
    (cell1.innerHTML = `${data.firstName} ${data.lastName}`);
  (cell2 = newRow.insertCell(1)), (cell2.innerHTML = data.email);
  (cell3 = newRow.insertCell(2)), (cell3.innerHTML = data.gender);
  (cell4 = newRow.insertCell(3)), (cell4.innerHTML = data.travel);
    (cell5 = newRow.insertCell(4)), (cell5.innerHTML = `<button onclick='edit(this)'>Edit</button>`);
    (cell6 = newRow.insertCell(5)), (cell6.innerHTML = `<button onclick='onDelete(this)'>Delete</button>`);

  
} 

console.log(selectedRow);

// Edit the data

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstName").value =
    selectedRow.cells[0].innerHTML.split(" ")[0];
  document.getElementById("lastName").value =
    selectedRow.cells[0].innerHTML.split(" ")[1];
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
  document.getElementById("travel").value = selectedRow.cells[3].innerHTML;

}





// check or uncheck the checkbox based on travel value

function isChecked(){
 if(travel.value == 'No') {
       travel.removeAttribute("checked");
    travel.checked
 } else {
      travel.setAttribute("checked", "checked");
 }
}

// edit content and change button
function edit(td) {
 onEdit(td);
 isChecked();
 (document.getElementById('submit').innerHTML = "Update");
}


function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = `${formData.firstName} ${formData.lastName}`;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.gender;
  selectedRow.cells[3].innerHTML = formData.travel;
  document.getElementById("submit").innerHTML = "Submit";
    form.reset();
}



// Delete data

function onDelete(td) {
  if(confirm('Do you want to this record?')){
    row = td.parentElement.parentElement;
    table.deleteRow(row.rowIndex);
  }
  form.reset();
}



submit.addEventListener("click", handleSubmit);
