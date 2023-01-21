import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Commande extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  article: string;

  @property({
    type: 'number',
    required: true,
  })
  quantite: number;

  @property({
    type: 'number',
    required: true,
  })
  prixU: number;

  @property({
    type: 'number',
    required: true,
  })
  prixT: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Commande>) {
    super(data);
  }
}

export interface CommandeRelations {
  // describe navigational properties here
}

export type CommandeWithRelations = Commande & CommandeRelations;
