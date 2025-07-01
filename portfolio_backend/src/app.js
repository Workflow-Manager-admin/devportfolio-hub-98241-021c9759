const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');
const {
  validationErrorHandler,
  notFoundHandler,
  errorHandler,
} = require('./middleware');

// Initialize express app
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/docs', swaggerUi.serve, (req, res, next) => {
  const dynamicSpec = {
    ...swaggerSpec,
    // servers: [
    //   {
    //     url: `${req.protocol}://${req.get('host')}`,
    //   },
    // ],
  };
  swaggerUi.setup(dynamicSpec)(req, res, next);
});

// Parse JSON request body
app.use(express.json());

// Mount routes
app.use('/', routes);

// Validation error handler, in case any controller or library forwards validation errors
app.use(validationErrorHandler);

// 404 handler (for all unhandled routes)
app.use(notFoundHandler);

// Catch-all error handler
app.use(errorHandler);

module.exports = app;
