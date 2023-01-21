import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

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
@lifeCycleObserver('datasource')
export class FammoringaDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'fammoringaDb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.fammoringaDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
