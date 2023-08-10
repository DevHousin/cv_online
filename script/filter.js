const checkboxes = document.querySelectorAll("[name='yearRow']")
const table2019 = document.querySelector("#table2019")

// table2019.classList.add("d-none")

// Qué elementos interfieren?

// Checkboxes

// Tables

// ArrayTables

let arrayTables = []

checkboxes.forEach(table => 
  table.addEventListener("click", function(){
    addValueToArrayTables(table)
  })
)

function addValueToArrayTables(table){
  if(table.checked && !arrayTables.includes(table.value)){
    arrayTables.push(table.value)
  }else if(arrayTables.includes(table.value)){
    arrayTables.splice(arrayTables.indexOf(table.value),1)
  }
}