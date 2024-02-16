import { NextApiRequest, NextApiResponse } from 'next'

import { env } from '@/env'
import { stripe } from '@/libs/stripe'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { priceId } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Missing priceId.' })
  }

  const successUrl = `${env.NEXT_URL}/success`
  const cancelUrl = `${env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    cancel_url: cancelUrl,
    success_url: successUrl,
  })
  return res.status(201).json({ checkoutUrl: checkoutSession.url })
}
