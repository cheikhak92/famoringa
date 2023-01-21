import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FammoringaDbDataSource} from '../datasources';
import {Produit, ProduitRelations} from '../models';

export class ProduitRepository extends DefaultCrudRepository<
  Produit,
  typeof Produit.prototype.id,
  ProduitRelations
> {
  constructor(
    @inject('datasources.fammoringaDb') dataSource: FammoringaDbDataSource,
  ) {
    super(Produit, dataSource);
  }
}
