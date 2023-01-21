import { Entity } from '@loopback/repository';
export declare class Produit extends Entity {
    id?: string;
    nom: string;
    [prop: string]: any;
    constructor(data?: Partial<Produit>);
}
export interface ProduitRelations {
}
export declare type ProduitWithRelations = Produit & ProduitRelations;
