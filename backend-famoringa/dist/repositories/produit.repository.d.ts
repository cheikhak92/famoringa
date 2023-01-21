import { DefaultCrudRepository } from '@loopback/repository';
import { FammoringaDbDataSource } from '../datasources';
import { Produit, ProduitRelations } from '../models';
export declare class ProduitRepository extends DefaultCrudRepository<Produit, typeof Produit.prototype.id, ProduitRelations> {
    constructor(dataSource: FammoringaDbDataSource);
}
