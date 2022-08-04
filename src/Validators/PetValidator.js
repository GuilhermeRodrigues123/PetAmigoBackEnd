const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().alphanum().min(1).max(15).required(),
            especie: Joi.string().max(10).required(),
            idade: Joi.number().positive().max(200).required(),
            porte: Joi.string().max(10).required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({

            authorization: Joi.string().required()
        })
        .unknown(),
    }),

    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            pet_id: Joi.string().required(),
        })
    }),

    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            pet_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().alphanum().max(15).optional(),
            especie: Joi.string().max(10).optional(),
            idade: Joi.number().positive().max(200).optional(),
            porte: Joi.string().max(10).optional(),
        })
            .min(1),
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            pet_id: Joi.string().required(),
        }),
    }),
};