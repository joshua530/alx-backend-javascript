interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const [student1, student2] = [
    {
        firstName: "Gon",
        lastName: "Freecs",
        location: "New-York",
        age: 12,
    },
    {
        firstName: "Suzan",
        age: 30,
        lastName: "Storm",
        location: "Amsterdam"
    }
]

const studentsList : Array<Student> = [student1, student2];

const table : HTMLTableElement = document.createElement("table");
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const tbody : HTMLTableSectionElement = document.createElement("tbody");
const thead : HTMLTableSectionElement = document.createElement("thead");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const secondCellHead: HTMLTableCellElement = rowHead.insertCell(1);
const firstCellHead : HTMLTableCellElement = rowHead.insertCell(0);

firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
table.append(thead);


studentsList.forEach(student => {
    const row : HTMLTableRowElement = tbody.insertRow(0);
    const secondCell : HTMLTableCellElement = row.insertCell(1);
    const firstCell : HTMLTableCellElement = row.insertCell(0);

    firstCell.innerHTML = student.firstName;
    secondCell.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
