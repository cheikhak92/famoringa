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
import {Produit} from '../models';
import {ProduitRepository} from '../repositories';

export class ProduitController {
  constructor(
    @repository(ProduitRepository)
    public produitRepository : ProduitRepository,
  ) {}

  @post('/produits')
  @response(200, {
    description: 'Produit model instance',
    content: {'application/json': {schema: getModelSchemaRef(Produit)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produit, {
            title: 'NewProduit',
            exclude: ['id'],
          }),
        },
      },
    })
    produit: Omit<Produit, 'id'>,
  ): Promise<Produit> {
    return this.produitRepository.create(produit);
  }

  @get('/produits/count')
  @response(200, {
    description: 'Produit model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Produit) where?: Where<Produit>,
  ): Promise<Count> {
    return this.produitRepository.count(where);
  }

  @get('/produits')
  @response(200, {
    description: 'Array of Produit model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Produit, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Produit) filter?: Filter<Produit>,
  ): Promise<Produit[]> {
    return this.produitRepository.find(filter);
  }

  @patch('/produits')
  @response(200, {
    description: 'Produit PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produit, {partial: true}),
        },
      },
    })
    produit: Produit,
    @param.where(Produit) where?: Where<Produit>,
  ): Promise<Count> {
    return this.produitRepository.updateAll(produit, where);
  }

  @get('/produits/{id}')
  @response(200, {
    description: 'Produit model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Produit, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Produit, {exclude: 'where'}) filter?: FilterExcludingWhere<Produit>
  ): Promise<Produit> {
    return this.produitRepository.findById(id, filter);
  }

  @patch('/produits/{id}')
  @response(204, {
    description: 'Produit PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produit, {partial: true}),
        },
      },
    })
    produit: Produit,
  ): Promise<void> {
    await this.produitRepository.updateById(id, produit);
  }

  @put('/produits/{id}')
  @response(204, {
    description: 'Produit PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() produit: Produit,
  ): Promise<void> {
    await this.produitRepository.replaceById(id, produit);
  }

  @del('/produits/{id}')
  @response(204, {
    description: 'Produit DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.produitRepository.deleteById(id);
  }
}
