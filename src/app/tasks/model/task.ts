export class Task {
    titre!: string;
    description!:string;
    etat!:ETAT;
    date!:Date;

    constructor(titre:string, description:string, etat:ETAT) {
        this.titre = titre;
        this.description = description;
        this.etat = etat;
        this.date=new Date();
    }
}

export enum ETAT {
    EN_COURS = 'En cours',
    A_FAIRE = 'A faire',
    TERMINEE = 'Terminée'
}