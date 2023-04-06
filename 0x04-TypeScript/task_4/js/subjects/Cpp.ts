namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingC > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
        getRequirements(): string {
            return `Here is the list of requirements for Cpp`;
        }
    }
}
