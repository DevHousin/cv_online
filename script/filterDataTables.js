const tableDynamic = document.querySelector("#tableDynamic");
const tableDynamic2 = document.querySelector("#tableDynamic2");

let arrayTables = ["2023", "2022", "2021"];
const selectedTableData = {
  spanish: dataTable,
  english: dataTableEnglish,
};

function createDivWithText(className, text) {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = text;
  return div;
}

function createTableElement(dataTable, numberTable) {
  const tableDiv = document.createElement("div");
  tableDiv.className = "d-flex border";

  const headerDiv = createDivWithText(
    "col text-center year",
    Object.keys(dataTable)[numberTable],
  );
  const titleDescriptionDiv =
    currentLanguage == "english"
      ? createDivWithText("col-50 bg-grayGray bold", "Description")
      : createDivWithText("col-50 bg-grayGray bold", "Descripción");
  const titleInstitutionDiv =
    currentLanguage == "english"
      ? createDivWithText("col-50 bg-grayGray bold", "Institution")
      : createDivWithText("col-50 bg-grayGray bold", "Institución");

  tableDiv.appendChild(headerDiv);
  tableDiv.appendChild(titleDescriptionDiv);
  tableDiv.appendChild(titleInstitutionDiv);

  const tableData = Object.values(dataTable)[numberTable][0];

  for (let i = 0; i < tableData.description.length; i++) {
    const rowDescriptionDiv = createDivWithText(
      "col-50 border-bottom p-1",
      tableData.description[i],
    );
    const rowInstitutionDiv = createDivWithText(
      "col-50 border-bottom border-start p-1",
      tableData.institution[i],
    );

    tableDiv.appendChild(rowDescriptionDiv);
    tableDiv.appendChild(rowInstitutionDiv);
  }

  return tableDiv;
}

function updateArrayTables(table) {
  if (table.checked && !arrayTables.includes(table.value)) {
    arrayTables.push(table.value);
  } else if (arrayTables.includes(table.value)) {
    arrayTables.splice(arrayTables.indexOf(table.value), 1);
  }
  arrayTables.sort().reverse();
}

function createTables(tableDynamic) {
  while (tableDynamic.firstChild) {
    tableDynamic.removeChild(tableDynamic.firstChild);
  }

  const selectedLanguage = select.value;
  const templateFunction = (index) => {
    if (
      selectedTableData[selectedLanguage] &&
      Object.keys(selectedTableData[selectedLanguage])[index]
    ) {
      const tableElement = createTableElement(
        selectedTableData[selectedLanguage],
        index,
      );
      tableDynamic.appendChild(tableElement);
    }
  };

  for (let i = 0; i < arrayTables.length; i++) {
    const tableName = arrayTables[i];

    if (Object.keys(selectedTableData[selectedLanguage]).includes(tableName)) {
      const tableIndex = Object.keys(
        selectedTableData[selectedLanguage],
      ).indexOf(tableName);
      templateFunction(tableIndex);
    } else if (tableName === "0previous") {
      for (let j = 3; j >= 0; j--) {
        templateFunction(j);
      }
    }
  }
}

function setupTableListeners(checkboxes, tableDynamic) {
  checkboxes.forEach((table) => {
    table.addEventListener("click", () => {
      updateArrayTables(table);
      createTables(tableDynamic);
    });
  });
}

setupTableListeners(
  document.querySelectorAll("[name='yearRow']"),
  tableDynamic,
);
setupTableListeners(
  document.querySelectorAll("[name='yearRow2']"),
  tableDynamic2,
);

createTables(tableDynamic);
