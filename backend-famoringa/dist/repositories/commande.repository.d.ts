import { DefaultCrudRepository } from '@loopback/repository';
import { FammoringaDbDataSource } from '../datasources';
import { Commande, CommandeRelations } from '../models';
export declare class CommandeRepository extends DefaultCrudRepository<Commande, typeof Commande.prototype.id, CommandeRelations> {
    constructor(dataSource: FammoringaDbDataSource);
}
