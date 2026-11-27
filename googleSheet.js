/*
Features Phase 1.
1. User will be able to edit values in the cell.
2. Toolbar section: It will have standard tools using which user can style the cell's values.
3. Address Bar: User will be able to see the address of the currently selected cell.
4. Formula calculation: User will be able to enter arithmatic formula and the result will be calculated automatically.
5. Dependency tracking.

Features Phase 2.
1. There would an AI chatbot. It would give answers related to the Sheet only.
2. The chatbot would be a pop up and user can drag it anywhere in the UI.
3. Multielection of the cells and selected cells would be highlighted.


Data Str. and Model:
1. 2-Dimensional array.
2. There woulld be an Object for each cell.
{
    value: '',
    formula: '', 
    children:'',
    parents:''
}
*/

let rows = 1000;
let cols = 26;
let sheetDB = [];

function initDB() {
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        value: "",
        formula: "",
        children: [],
        parents: [],
      });
    }
    sheetDB.push(row);
  }
}

initDB();

let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let cellsContainer = document.querySelector(".cells");

function generateHeaders() {
  for (let i = 0; i < cols; i++) {
    let cell = document.createElement("div");
    cell.textContent = String.fromCharCode(65 + i);
    topRow.appendChild(cell);
    cell.classList.add("cell");
  }
  for (let i = 0; i < rows; i++) {
    let cell = document.createElement("div");
    cell.textContent = i + 1;
    leftCol.appendChild(cell);
    cell.classList.add("cell");
  }
}

generateHeaders();
let selectedCell = null;
function generateCells() {
  for (let i = 0; i < rows; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      cell.contentEditable = true;
      cell.classList.add("cell");
      cell.setAttribute("rid", i);
      cell.setAttribute("cid", j);
      cell.addEventListener("click", function (e) {
        selectedCell = e.target;
        let addressBar = document.querySelector("#address");
        let address = String.fromCharCode(65 + j) + (i + 1);
        addressBar.value = address;
      });
      rowDiv.appendChild(cell);
    }
    cellsContainer.appendChild(rowDiv);
  }
}

generateCells();

let boldBtn = document.querySelector("#bold");
let italicBtn = document.querySelector("#italic");
let underlineBtn = document.querySelector("#underline");
let clearBtn = document.querySelector("#clear");
let formulaInput = document.querySelector("#formula");
boldBtn.addEventListener("click", function () {
  if (!selectedCell) return;
  selectedCell.style.fontWeight =
    selectedCell.style.fontWeight === "bold" ? "normal" : "bold";
});

italicBtn.addEventListener("click", function () {
  if (!selectedCell) return;
  selectedCell.style.fontStyle =
    selectedCell.style.fontStyle === "italic" ? "normal" : "italic";
});

underlineBtn.addEventListener("click", function () {
  if (!selectedCell) return;
  selectedCell.style.textDecoration =
    selectedCell.style.textDecoration === "underline" ? "none" : "underline";
});

clearBtn.addEventListener("click", function () {
  formulaInput.value = "";
});

cellsContainer.addEventListener(
  "blur",
  function (e) {
    let cell = e.target;
    let rid = cell.getAttribute("rid");
    let cid = cell.getAttribute("cid");
    let value = cell.textContent;
    sheetDB[rid][cid].value = value;
  },
  true,
);

// A1 + B1
// ["A1, "+", B1];
// ["5", "+", "6"]
// "5 + 6"
function evaluateFormula(formula) {
  if (!formula) return;
  let tokens = formula.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    if (/^[A-Z][0-9]+$/.test(tokens[i])) {
      let { rid, cid } = getRIDCID(tokens[i]);
      let value = sheetDB[rid][cid].value;
      tokens[i] = value;
    }
  }
  let expression = tokens.join(" ");
  console.log(expression);
  try {
    return eval(expression);
  } catch (e) {
    return "Error";
  }
}

formulaInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let formula = formulaInput.value;
    let address = document.querySelector("#address").value;
    if (!address) return;
    let value = evaluateFormula(formula);
    let { rid, cid } = getRIDCID(address);
    updateUI(rid, cid, value);
  }
});

function updateUI(rid, cid, value) {
  console.log(selectedCell);
  let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
  if (cell) cell.textContent = value;
  sheetDB[rid][cid] = value;
}
// A38438438
function getRIDCID(address) {
  let rid = Number(address.slice(1)) - 1;
  let cid = address.charCodeAt(0) - 65;
  return { rid, cid };
}
