'use strict';

/**
 * forklift service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forklift.forklift');
