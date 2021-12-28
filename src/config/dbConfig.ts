import { createConnection } from "typeorm";
import { User } from "../entity/user";

export  const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "testdb",
    synchronize: true,
    entities: [User],
    migrations: [
        "migration",
     ],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber"
     }
  }).then(()=>{
      console.log('database connected')
  }).catch((err)=>{
      console.log(err);
  })
