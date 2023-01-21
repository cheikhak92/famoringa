import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FammoringaDbDataSource} from '../datasources';
import {Commande, CommandeRelations} from '../models';

export class CommandeRepository extends DefaultCrudRepository<
  Commande,
  typeof Commande.prototype.id,
  CommandeRelations
> {
  constructor(
    @inject('datasources.fammoringaDb') dataSource: FammoringaDbDataSource,
  ) {
    super(Commande, dataSource);
  }
}
