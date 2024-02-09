import Image from 'next/image'

import tShirt01 from '@/assets/camisetas/1.png'
import tShirt02 from '@/assets/camisetas/2.png'
import tShirt03 from '@/assets/camisetas/3.png'
import tShirt04 from '@/assets/camisetas/4.png'
import { HomeContainer, Product, ProductFooter } from '@/styles/pages/home'

export default function Index() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tShirt01} alt="" width={520} height={480} />

        <ProductFooter>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </ProductFooter>
      </Product>

      <Product>
        <Image src={tShirt02} alt="" width={520} height={480} />

        <ProductFooter>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </ProductFooter>
      </Product>
    </HomeContainer>
  )
}
