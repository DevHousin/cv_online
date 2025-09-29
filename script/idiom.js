let currentLanguage = "english"; // Globally scoped for other scripts

const select = document.querySelector("#select");
const spanish = document.querySelector("#spanish");
const english = document.querySelector("#english");

select.addEventListener("change", () => {
  resetArrayTables();
  changeIdiom();
  resetCheckboxes();
});

function changeIdiom() {
  currentLanguage = select.value;
  const isEnglishSelected = select.value === "english";

  if (isEnglishSelected) {
    spanish.classList.add("d-none");
    english.classList.remove("d-none");
    createTables(tableDynamic2);
  } else {
    spanish.classList.remove("d-none");
    english.classList.add("d-none");
    createTables(tableDynamic);
  }
}

function resetArrayTables() {
  arrayTables = [];
  updateArrayTables(arrayTables);
}

function resetCheckboxes() {
  document
    .querySelectorAll("[name='yearRow']")
    .forEach((check) => (check.checked = false));
  document
    .querySelectorAll("[name='yearRow2']")
    .forEach((check) => (check.checked = false));
}
