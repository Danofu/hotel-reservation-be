import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: ["./entity/*.ts"],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
  .then(async () => {
    console.log(`Connection initialized with database ${process.env.DB}`);
  })
  .catch((error) => console.log(error));
