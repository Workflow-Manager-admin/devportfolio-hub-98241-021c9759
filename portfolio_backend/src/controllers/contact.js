//
// Controller for contact API
//
const contactService = require('../services/contact');

// PUBLIC_INTERFACE
/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit contact form
 *     description: Sends a message from the client contact form to the developer. (Submission is demo only; no actual email is sent.)
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Your message has been received.
 *       400:
 *         description: Invalid data. All fields are required: name, email, message.
 *       500:
 *         description: Server error (unexpected).
 */
exports.submitContactForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ status: 'error', message: 'All fields are required.' });
    }
    await contactService.submitContact({ name, email, message });
    res.json({ status: 'success', message: 'Your message has been received.' });
  } catch (err) {
    next(err);
  }
};
