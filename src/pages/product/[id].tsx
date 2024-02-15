import { useRouter } from 'next/router'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 100,00</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eius maiores voluptatem cumque eveniet cupiditate nobis natus debitis
          doloribus ex ratione dolorum voluptatum sint eaque nihil, enim non est
          minima.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
