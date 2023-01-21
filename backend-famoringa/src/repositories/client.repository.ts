import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FammoringaDbDataSource} from '../datasources';
import {Client, ClientRelations} from '../models';

export class ClientRepository extends DefaultCrudRepository<
  Client,
  typeof Client.prototype.id,
  ClientRelations
> {
  constructor(
    @inject('datasources.fammoringaDb') dataSource: FammoringaDbDataSource,
  ) {
    super(Client, dataSource);
  }
}
