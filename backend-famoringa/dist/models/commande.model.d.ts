import { Entity } from '@loopback/repository';
export declare class Commande extends Entity {
    id?: string;
    article: string;
    quantite: number;
    prixU: number;
    prixT: number;
    [prop: string]: any;
    constructor(data?: Partial<Commande>);
}
export interface CommandeRelations {
}
export declare type CommandeWithRelations = Commande & CommandeRelations;
