import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Commande } from '../models';
import { CommandeRepository } from '../repositories';
export declare class CommandeController {
    commandeRepository: CommandeRepository;
    constructor(commandeRepository: CommandeRepository);
    create(commande: Omit<Commande, 'id'>): Promise<Commande>;
    count(where?: Where<Commande>): Promise<Count>;
    find(filter?: Filter<Commande>): Promise<Commande[]>;
    updateAll(commande: Commande, where?: Where<Commande>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Commande>): Promise<Commande>;
    updateById(id: string, commande: Commande): Promise<void>;
    replaceById(id: string, commande: Commande): Promise<void>;
    deleteById(id: string): Promise<void>;
}
