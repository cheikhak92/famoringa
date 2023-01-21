import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Client } from '../models';
import { ClientRepository } from '../repositories';
export declare class ClientController {
    clientRepository: ClientRepository;
    constructor(clientRepository: ClientRepository);
    create(client: Omit<Client, 'id'>): Promise<Client>;
    count(where?: Where<Client>): Promise<Count>;
    find(filter?: Filter<Client>): Promise<Client[]>;
    updateAll(client: Client, where?: Where<Client>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Client>): Promise<Client>;
    updateById(id: string, client: Client): Promise<void>;
    replaceById(id: string, client: Client): Promise<void>;
    deleteById(id: string): Promise<void>;
}
