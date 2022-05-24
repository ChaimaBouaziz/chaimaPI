import express from 'express';
const router = express.Router();
import stripe from 'stripe';
const Stripe = stripe('sk_test_51L2hU0Ie3Yop76mLBHfLA3f8Nqi6qMCIf3P4DXwmmXW1z0QvJJaFEDyse2xaRAIIdSvJgFa5SaUpUROhNeYmCGUm00sOfpPmDN');
router.post('/', async (req, res) => { console.log(req.body)
 let status, error;
 const { token, amount } = req.body;
 try {
 await Stripe.charges.create({
 source: token.id,
 amount,
 currency: 'usd',
 });
 status = 'success';
 } catch (error) {
 console.log(error);
 status = 'Failure';
 }
 res.json({ error, status });
 });
export default router; 
