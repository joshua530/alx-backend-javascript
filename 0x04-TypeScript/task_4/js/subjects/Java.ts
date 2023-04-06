namespace Subjects{

    export interface Teacher{
        experienceTeachingJava?: number
    }

    export class Java extends Subject{
        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingJava > 0 ? `Available Teacher: ${this.teacher.firstName}`: 'No available teacher';
        }
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }
    }
}
