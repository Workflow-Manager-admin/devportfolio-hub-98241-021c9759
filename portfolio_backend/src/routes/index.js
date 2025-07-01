const express = require('express');
const healthController = require('../controllers/health');
const projectsController = require('../controllers/projects');
const profileController = require('../controllers/profile');
const resumeController = require('../controllers/resume');
const contactController = require('../controllers/contact');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Health
 *     description: Health check
 *   - name: Projects
 *     description: Portfolio projects
 *   - name: Profile
 *     description: Developer profile information
 *   - name: Resume
 *     description: Resume and CV details
 *   - name: Contact
 *     description: Contact form submission
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health endpoint
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service health check passed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Service is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 environment:
 *                   type: string
 *                   example: development
 */
router.get('/', healthController.check.bind(healthController));

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         technologies:
 *           type: array
 *           items:
 *             type: string
 *         githubUrl:
 *           type: string
 *         liveUrl:
 *           type: string
 *     Profile:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         title:
 *           type: string
 *         bio:
 *           type: string
 *         location:
 *           type: string
 *         email:
 *           type: string
 *         social:
 *           type: object
 *           properties:
 *             github: { type: string }
 *             linkedin: { type: string }
 *             twitter: { type: string }
 *     Resume:
 *       type: object
 *       properties:
 *         summary:
 *           type: string
 *         experience:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               company: { type: string }
 *               position: { type: string }
 *               startYear: { type: integer }
 *               endYear: { type: integer }
 *               description: { type: string }
 *         education:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               school: { type: string }
 *               degree: { type: string }
 *               year: { type: integer }
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *     ContactFormInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - message
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         message:
 *           type: string
 */

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get portfolio projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: List of portfolio projects.
 */
router.get('/api/projects', projectsController.getProjects);

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get developer profile
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Developer profile data
 */
router.get('/api/profile', profileController.getProfile);

/**
 * @swagger
 * /api/resume:
 *   get:
 *     summary: Get developer resume
 *     tags: [Resume]
 *     responses:
 *       200:
 *         description: Resume/CV data
 */
router.get('/api/resume', resumeController.getResume);

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit contact form
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactFormInput'
 *     responses:
 *       200:
 *         description: Contact message sent successfully.
 *       400:
 *         description: Invalid data
 *       500:
 *         description: Server error
 */
router.post('/api/contact', contactController.submitContactForm);

module.exports = router;
