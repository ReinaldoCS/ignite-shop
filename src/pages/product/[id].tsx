import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import Stripe from 'stripe'

import { stripe } from '@/libs/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string | 0 | null
    description: string | null
  }
}

interface ProductsParams extends ParsedUrlQuery {
  id: string
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    // Aplicar load skeleton
    return <p>loading...</p>
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={520} height={480} />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

// ------ NEXT JS
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_PYo1EwSpXGJj7T' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  ProductProps,
  ProductsParams
> = async ({ params }) => {
  const productId = params?.id as string

  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = response.default_price as Stripe.Price

  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    price:
      price.unit_amount &&
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: price.currency,
      }).format(price.unit_amount / 100),
    description: response.description,
  }

  return {
    props: { product },
  }
}
