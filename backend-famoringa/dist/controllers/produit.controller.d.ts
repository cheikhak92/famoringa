import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Produit } from '../models';
import { ProduitRepository } from '../repositories';
export declare class ProduitController {
    produitRepository: ProduitRepository;
    constructor(produitRepository: ProduitRepository);
    create(produit: Omit<Produit, 'id'>): Promise<Produit>;
    count(where?: Where<Produit>): Promise<Count>;
    find(filter?: Filter<Produit>): Promise<Produit[]>;
    updateAll(produit: Produit, where?: Where<Produit>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Produit>): Promise<Produit>;
    updateById(id: string, produit: Produit): Promise<void>;
    replaceById(id: string, produit: Produit): Promise<void>;
    deleteById(id: string): Promise<void>;
}
