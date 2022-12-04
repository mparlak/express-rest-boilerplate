import "reflect-metadata"
import { DataSource } from "typeorm"
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { User } from "./entities/user"
import { Post } from "./entities/post"
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PG_HOST,
    port:  Number(process.env.PG_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [User, Post],
    migrations: [],
    subscribers: [],
    namingStrategy: new SnakeNamingStrategy(),
})
