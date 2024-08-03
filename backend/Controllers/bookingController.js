import Stripe from 'stripe';
import Doctor from '../models/DoctorSchema.js';// Adjust the path according to your project structure
import User from "../models/UserSchema.js"
import Booking from "../models/BookingSchema.js" // Adjust the path according to your project structure

export const getCheckoutSession = async (req, res) => {
  try {
    // Get currently booked doctor and user details
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);

    // console.log(user);
    console.log(doctor);
    // Initialize Stripe with your secret key
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// console.log(stripe);
    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: 'http://localhost:5173/checkout-success',
      cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
      customer_email: user.email,
      client_reference_id: req.params.doctorId,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: doctor.ticketprice * 100, // Stripe expects the amount in the smallest currency unit (e.g., cents)
            product_data: {
              name: doctor.name,
            },
          },
          quantity: 1,
        },
      ],
    });

    // Create and save a new booking
    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketprice,
      session: session.id,
    });
    await booking.save();

    // Respond with success
    res.status(200).json({ success: true, message: 'Successfully paid', session });

  } catch (err) {
    console.error('Error creating checkout session:', err);
    res.status(500).json({ success: false, message: 'Error creating checkout session' });
  }
};
