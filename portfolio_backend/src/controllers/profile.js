//
// Controller for profile API
//
const profileService = require('../services/profile');

// PUBLIC_INTERFACE
exports.getProfile = (req, res, next) => {
  /**
   * @swagger
   * /api/profile:
   *   get:
   *     summary: Get developer profile
   *     description: Returns developer profile information
   *     tags: [Profile]
   *     responses:
   *       200:
   *         description: Developer profile data
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Profile'
   */
  try {
    const profile = profileService.getProfile();
    res.json(profile);
  } catch (err) {
    next(err);
  }
};
