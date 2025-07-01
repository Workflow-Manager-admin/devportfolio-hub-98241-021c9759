//
// Controller for handling project-related API endpoints
//
const projectsService = require('../services/projects');

// PUBLIC_INTERFACE
/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get portfolio projects
 *     description: Returns a list of sample portfolio projects (in-memory, demo data) for the portfolio site.
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: List of portfolio projects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */
exports.getProjects = (req, res, next) => {
  try {
    const projects = projectsService.getAllProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
};
