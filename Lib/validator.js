const { celebrate, Joi, errors } = require('celebrate');

class routeValidator {
  static saveKey() {
    return celebrate({
      body: Joi.object().keys({
        json: Joi.object().required(),
      }),
    });
  }
  static fetchKey() {
    return celebrate({
      params: Joi.object().keys({
        key: Joi.string().required(),
      }),
      query: Joi.object().keys({
        timestamp: Joi.number(),
      }),
    });
  }
  static validationError() {
    return errors();
  }
}

module.exports = routeValidator;
