import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Commande} from '../models';
import {CommandeRepository} from '../repositories';

export class CommandeController {
  constructor(
    @repository(CommandeRepository)
    public commandeRepository : CommandeRepository,
  ) {}

  @post('/commandes')
  @response(200, {
    description: 'Commande model instance',
    content: {'application/json': {schema: getModelSchemaRef(Commande)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commande, {
            title: 'NewCommande',
            exclude: ['id'],
          }),
        },
      },
    })
    commande: Omit<Commande, 'id'>,
  ): Promise<Commande> {
    return this.commandeRepository.create(commande);
  }

  @get('/commandes/count')
  @response(200, {
    description: 'Commande model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Commande) where?: Where<Commande>,
  ): Promise<Count> {
    return this.commandeRepository.count(where);
  }

  @get('/commandes')
  @response(200, {
    description: 'Array of Commande model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Commande, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Commande) filter?: Filter<Commande>,
  ): Promise<Commande[]> {
    return this.commandeRepository.find(filter);
  }

  @patch('/commandes')
  @response(200, {
    description: 'Commande PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commande, {partial: true}),
        },
      },
    })
    commande: Commande,
    @param.where(Commande) where?: Where<Commande>,
  ): Promise<Count> {
    return this.commandeRepository.updateAll(commande, where);
  }

  @get('/commandes/{id}')
  @response(200, {
    description: 'Commande model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Commande, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Commande, {exclude: 'where'}) filter?: FilterExcludingWhere<Commande>
  ): Promise<Commande> {
    return this.commandeRepository.findById(id, filter);
  }

  @patch('/commandes/{id}')
  @response(204, {
    description: 'Commande PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commande, {partial: true}),
        },
      },
    })
    commande: Commande,
  ): Promise<void> {
    await this.commandeRepository.updateById(id, commande);
  }

  @put('/commandes/{id}')
  @response(204, {
    description: 'Commande PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() commande: Commande,
  ): Promise<void> {
    await this.commandeRepository.replaceById(id, commande);
  }

  @del('/commandes/{id}')
  @response(204, {
    description: 'Commande DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.commandeRepository.deleteById(id);
  }
}
