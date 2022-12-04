import 'dotenv/config';
const winston = require('winston');
const ecsFormat = require('@elastic/ecs-winston-format')

const logger = winston.createLogger({
    format: ecsFormat(),
    transports: [
        new winston.transports.Console({
            level: 'info',
            json: true
        })
    ]
});

export default logger;