//
// Service for resume API (sample data structure)
//

const { resume } = require('../data/sample-data');

// PUBLIC_INTERFACE
exports.getResume = () => resume;
