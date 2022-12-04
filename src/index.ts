import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./persistence/data-source"
import { Routes } from "./routes"
import HttpStatusCode from './utils/http.status.code'
import 'dotenv/config';
import logger from './utils/custom.es.logging'

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            let statusCode = HttpStatusCode.toUserResponseDto(route.action);
            if (result instanceof Promise) {
                result.then(result => {
                    if (result !== null && result !== undefined) {
                        return res.status(statusCode).json(result)
                    }
                    else {
                        return undefined;
                    }
                });

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    });

    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });

}).catch(error => console.log(error))
