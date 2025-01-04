import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import { DataSource } from 'typeorm';

//import { CourseEntity } from '../../modules/course/adapters/entities/course.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_RW',
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      console.log({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT') ? Number(config.get('DB_PORT')) : 3306,
        username: config.get('DB_USER'),
        password: config.get('DB_PASS'),
        synchronize: config.get('DB_SYNC') === 'true',
        logging: config.get('DB_LOGG') === 'true',
        database: config.get('DB_NAME'),
        entities: [path.join(__dirname, '../../', '/**/*.entity{.ts,.js}')],
        poolSize: config.get('DB_POOL_SIZE')
          ? Number(config.get('DB_POOL_SIZE'))
          : 10,
      });

      const instance = new DataSource({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT') ? Number(config.get('DB_PORT')) : 3306,
        username: config.get('DB_USER'),
        password: config.get('DB_PASS'),
        synchronize: config.get('DB_SYNC') === 'true',
        logging: config.get('DB_LOGG') === 'true',
        database: config.get('DB_NAME'),
        entities: [path.join(__dirname, '../../', '/**/*.entity{.ts,.js}')],
        poolSize: config.get('DB_POOL_SIZE')
          ? Number(config.get('DB_POOL_SIZE'))
          : 10,
      });
      return instance.initialize();
    },
  },
];
