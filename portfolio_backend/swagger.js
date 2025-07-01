const swaggerJSDoc = require('swagger-jsdoc');

/**
 * Central options for Swagger JSDoc.
 * - Sets OpenAPI root info.
 * - Loads JSDoc comments from both routes and controllers for API endpoint documentation.
 */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Personal Portfolio API',
      version: '1.0.0',
      description: 'Backend API for the personal developer portfolio. Exposes endpoints for sample projects, profile, resume/CV, and contact form.',
      contact: {
        name: 'API Support',
        url: 'https://portfolio.example.com/contact',
        email: 'jane.doe@example.com'
      }
    }
    // Note: Server URL gets dynamically set in src/app.js, not here.
  },
  apis: [
    './src/routes/*.js',
    './src/controllers/*.js'
  ], // Auto-load JSDoc from routes and controller files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
