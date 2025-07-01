//
// Centralized middleware exports for error handling and more
//

/**
 * Handler for validation errors (e.g., malformed request payload)
 * Should be used by controllers or routes that require strict validation.
 */
// PUBLIC_INTERFACE
function validationErrorHandler(err, req, res, next) {
  if (err && err.type === 'validation') {
    return res.status(400).json({
      status: 'error',
      message: err.message || 'Validation error',
      details: err.details || undefined,
    });
  }
  next(err);
}

/**
 * 404 Not Found middleware, for requests to unknown routes.
 */
// PUBLIC_INTERFACE
function notFoundHandler(req, res, next) {
  res.status(404).json({
    status: 'error',
    message: `Not found: ${req.method} ${req.originalUrl}`,
  });
}

/**
 * Final catch-all error middleware for internal/unexpected errors, formats JSON response.
 */
// PUBLIC_INTERFACE
function errorHandler(err, req, res, next) {
  // Default to 500 if status not attached anywhere else
  const status = err.status && Number.isInteger(err.status) ? err.status : 500;
  if (status === 500) {
    // Only log unexpected or server errors
    // eslint-disable-next-line no-console
    console.error('Internal Server Error:', err.stack || err);
  }
  res.status(status).json({
    status: 'error',
    message: status === 500 ? 'Internal Server Error' : err.message,
    details: status !== 500 && err.details ? err.details : undefined,
  });
}

module.exports = {
  validationErrorHandler,
  notFoundHandler,
  errorHandler,
};
