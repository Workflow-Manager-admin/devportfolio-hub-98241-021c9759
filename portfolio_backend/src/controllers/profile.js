//
// Controller for profile API
//
const profileService = require('../services/profile');

// PUBLIC_INTERFACE
/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get developer profile
 *     description: Fetches metadata and social links about the developer for the portfolio site.
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Developer profile data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 */
exports.getProfile = (req, res, next) => {
  try {
    const profile = profileService.getProfile();
    res.json(profile);
  } catch (err) {
    next(err);
  }
};
