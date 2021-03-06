namespace App.Interfaces {

    export interface IUser {
        id: number;
        name: string;
        cpf: string;
        rg: string;
        issuer: string;
        employeeId: string;
        password: string;
        birthDate: Date;
        creationDate: Date;
        isDeleted: boolean;

        role: IRole;
        department: IDepartment;
    }

}