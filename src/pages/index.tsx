import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/libs/stripe'
import { HomeContainer, Product, ProductFooter } from '@/styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number | null
    description: string | null
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: 'snap',
    slides: {
      perView: 'auto',
      spacing: 16 * 3, // 3rem
    },
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product className="keen-slider__slide" key={product.id}>
          <Image src={product.imageUrl} alt="" width={520} height={480} />

          <ProductFooter>
            <strong>{product.name}</strong>
            <span>${product.price}</span>
          </ProductFooter>
        </Product>
      ))}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount && price.unit_amount / 100,
      description: product.description,
    }
  })

  return {
    props: {
      products,
    },
  }
}
