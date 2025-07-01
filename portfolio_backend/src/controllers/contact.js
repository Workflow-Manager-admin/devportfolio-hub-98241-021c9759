//
// Controller for contact API
//
const contactService = require('../services/contact');

// PUBLIC_INTERFACE
exports.submitContactForm = async (req, res, next) => {
  /**
   * @swagger
   * /api/contact:
   *   post:
   *     summary: Submit contact form
   *     description: Sends a message from the contact form to the developer (simulates submission).
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/ContactFormInput'
   *     tags: [Contact]
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
   *         description: Invalid data
   *       500:
   *         description: Server error
   */
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
