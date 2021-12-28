"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entity/user");
exports.connection = (0, typeorm_1.createConnection)({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "testdb",
    synchronize: true,
    entities: [user_1.User],
    migrations: [
        "migration",
    ],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber"
    }
}).then(() => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});
