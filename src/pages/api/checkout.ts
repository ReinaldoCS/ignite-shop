import { NextApiRequest, NextApiResponse } from 'next'

import { env } from '@/env'
import { stripe } from '@/libs/stripe'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const priceId = 'price_1OjgObHbTRtg74QN6xNwc4U3'

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
