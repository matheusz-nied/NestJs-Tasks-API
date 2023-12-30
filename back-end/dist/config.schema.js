"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configValidationSchema = void 0;
const Joi = require("@hapi/joi");
exports.configValidationSchema = Joi.object({
    STAGE: Joi.string().required,
    DATABASE_HOST: Joi.string().required,
    DATABASE_PORT: Joi.number().default(5432).required,
    DATABASE_USERNAME: Joi.string().required,
    DATABASE_PASSWORD: Joi.number().required,
    DATABASE_NAME: Joi.string().required,
});
//# sourceMappingURL=config.schema.js.map