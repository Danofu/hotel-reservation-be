import { AppDataSource } from "./data-source"

AppDataSource.initialize()
  .then(async () => {
    console.log(`Connection initialized with database postgres`);
  })
  .catch((error) => console.log(error));
