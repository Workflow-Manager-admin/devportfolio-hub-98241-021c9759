//
// Service for project API (exposes sample data)
//

const { projects } = require('../data/sample-data');

// PUBLIC_INTERFACE
exports.getAllProjects = () => projects;
