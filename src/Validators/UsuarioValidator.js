const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().alphanum().min(1).max(40).required(),
            email: Joi.string().email().required(),
            senha: Joi.string().min(8).max(20).required(),
            telefone: Joi.string().min(10).max(11).required(),
            endereco: Joi.string().max(50).required(),
            cpf: Joi.string().min(11).max(11).required(),
        })
    }),

    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        })
    }),

    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().alphanum().min(1).max(40).optional(),
            email: Joi.string().email().optional(),
            senha: Joi.string().min(8).max(20).optional(),
            telefone: Joi.string().min(10).max(11).optional(),
            endereco: Joi.string().max(50).optional(),
            cpf: Joi.string().min(11).max(11).optional(),
        })
        .min(1),
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        })
    })
}