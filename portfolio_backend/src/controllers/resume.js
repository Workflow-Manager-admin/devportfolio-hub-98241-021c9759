//
// Controller for resume API
//
const resumeService = require('../services/resume');

// PUBLIC_INTERFACE
/**
 * @swagger
 * /api/resume:
 *   get:
 *     summary: Get developer resume
 *     description: Returns developer resume/CV information (demo/sample data for the portfolio).
 *     tags: [Resume]
 *     responses:
 *       200:
 *         description: Resume/CV data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resume'
 */
exports.getResume = (req, res, next) => {
  try {
    const resume = resumeService.getResume();
    res.json(resume);
  } catch (err) {
    next(err);
  }
};
