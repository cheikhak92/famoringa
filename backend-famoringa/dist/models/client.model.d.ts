import { Entity } from '@loopback/repository';
export declare class Client extends Entity {
    id?: string;
    nom: string;
    prenom: string;
    mail: string;
    [prop: string]: any;
    constructor(data?: Partial<Client>);
}
export interface ClientRelations {
}
export declare type ClientWithRelations = Client & ClientRelations;
