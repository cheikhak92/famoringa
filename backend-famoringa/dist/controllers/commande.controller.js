"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CommandeController = class CommandeController {
    constructor(commandeRepository) {
        this.commandeRepository = commandeRepository;
    }
    async create(commande) {
        return this.commandeRepository.create(commande);
    }
    async count(where) {
        return this.commandeRepository.count(where);
    }
    async find(filter) {
        return this.commandeRepository.find(filter);
    }
    async updateAll(commande, where) {
        return this.commandeRepository.updateAll(commande, where);
    }
    async findById(id, filter) {
        return this.commandeRepository.findById(id, filter);
    }
    async updateById(id, commande) {
        await this.commandeRepository.updateById(id, commande);
    }
    async replaceById(id, commande) {
        await this.commandeRepository.replaceById(id, commande);
    }
    async deleteById(id) {
        await this.commandeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/commandes'),
    (0, rest_1.response)(200, {
        description: 'Commande model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Commande) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Commande, {
                    title: 'NewCommande',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommandeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/commandes/count'),
    (0, rest_1.response)(200, {
        description: 'Commande model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Commande)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommandeController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/commandes'),
    (0, rest_1.response)(200, {
        description: 'Array of Commande model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Commande, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Commande)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommandeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/commandes'),
    (0, rest_1.response)(200, {
        description: 'Commande PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Commande, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Commande)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Commande, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommandeController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/commandes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Commande model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Commande, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Commande, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommandeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/commandes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Commande PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Commande, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Commande]),
    tslib_1.__metadata("design:returntype", Promise)
], CommandeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/commandes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Commande PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Commande]),
    tslib_1.__metadata("design:returntype", Promise)
], CommandeController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/commandes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Commande DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CommandeController.prototype, "deleteById", null);
CommandeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CommandeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CommandeRepository])
], CommandeController);
exports.CommandeController = CommandeController;
//# sourceMappingURL=commande.controller.js.map