'use strict';

/**
 * forklift router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::forklift.forklift');
