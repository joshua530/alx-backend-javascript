/// <reference path="./crud.d.ts" />
import {RowID, RowElement} from "./interface";
import * as CRUD from "./crud";

const row : RowElement = {
    firstName: "Guillaume", lastName: "Salva"
}

// @ts-ignore
const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement ={
    lastName: "Salva", firstName: "Guillaume", age: 23
};
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);
