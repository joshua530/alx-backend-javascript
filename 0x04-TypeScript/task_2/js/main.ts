interface DirectorInterface {
    workFromHome(): string
    workDirectorTasks(): string
    getCoffeeBreak(): string
}

interface TeacherInterface {
    workFromHome(): string
    workTeacherTasks(): string
    getCoffeeBreak(): string
}

export class Director implements DirectorInterface {

    getCoffeeBreak = (): string => "Getting a coffee break";
    workFromHome = (): string => "Working from home";
    workDirectorTasks = (): string => "Getting to director tasks";

}

export class Teacher implements TeacherInterface {
    getCoffeeBreak = (): string => "Cannot have a break";
    workTeacherTasks = (): string => "Getting to work";
    workFromHome = (): string => "Cannot work from home";
}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks() !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let res = undefined;
    (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
}

type Subjects = "Math" | "History";

// @ts-ignore
// @ts-ignore
export function teachClass(todayClass: Subjects): string | boolean {
    return (todayClass === "Math") ? "Teaching Math" : (todayClass === "History") ? "Teaching History" : `${undefined}`
}
