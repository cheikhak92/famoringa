"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produit = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Produit = class Produit extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Produit.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Produit.prototype, "nom", void 0);
Produit = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Produit);
exports.Produit = Produit;
//# sourceMappingURL=produit.model.js.map