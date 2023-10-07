'use strict';

/**
 * our-program service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-program.our-program');
