//
// Controller for handling project-related API endpoints
//
const projectsService = require('../services/projects');

// PUBLIC_INTERFACE
exports.getProjects = (req, res, next) => {
  /**
   * @swagger
   * /api/projects:
   *   get:
   *     summary: Get portfolio projects
   *     description: Returns a list of sample portfolio projects
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
  try {
    const projects = projectsService.getAllProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
};
