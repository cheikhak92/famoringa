"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FammoringaDbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'fammoringaDb',
    connector: 'mongodb',
    url: 'mongodb+srv://sntHelpDesk:snthelpdesk@helpdeskcluster.orzdv.mongodb.net/test',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let FammoringaDbDataSource = class FammoringaDbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
FammoringaDbDataSource.dataSourceName = 'fammoringaDb';
FammoringaDbDataSource.defaultConfig = config;
FammoringaDbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.fammoringaDb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], FammoringaDbDataSource);
exports.FammoringaDbDataSource = FammoringaDbDataSource;
//# sourceMappingURL=fammoringa-db.datasource.js.map