import express from 'express';
import { authenticate } from './../auth/verifyToken.js';
import { getCheckoutSession } from '../Controllers/bookingController.js';

const router = express.Router();

// Route to handle the creation of a Stripe Checkout session
router.post('/checkout-session/:doctorId', authenticate, getCheckoutSession);

export default router;
