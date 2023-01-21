import { DefaultCrudRepository } from '@loopback/repository';
import { FammoringaDbDataSource } from '../datasources';
import { Client, ClientRelations } from '../models';
export declare class ClientRepository extends DefaultCrudRepository<Client, typeof Client.prototype.id, ClientRelations> {
    constructor(dataSource: FammoringaDbDataSource);
}
