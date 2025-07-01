//
// Service for profile API (serves sample data)
//

const { profile } = require('../data/sample-data');

// PUBLIC_INTERFACE
exports.getProfile = () => profile;
