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
