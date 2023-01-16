import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from 'dotenv';

dotenv.config();

/**
 * AppDataSource
 */

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: 5432,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    synchronize: false,
    logging: false,
    entities: ["src/entity/*.{js,ts}"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
});

AppDataSource.initialize()
  .then(async () => {
    console.log(`Connection initialized with database ${process.env.DB}`);
  })
  .catch((error) => console.log(error));
