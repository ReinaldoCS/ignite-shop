import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import tShirt01 from '@/assets/camisetas/1.png'
import tShirt02 from '@/assets/camisetas/2.png'
import tShirt03 from '@/assets/camisetas/3.png'
import tShirt04 from '@/assets/camisetas/4.png'
import { HomeContainer, Product, ProductFooter } from '@/styles/pages/home'

export default function Index() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: 'snap',
    slides: {
      perView: 'auto',
      spacing: 16 * 3, // 3rem
    },
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tShirt01} alt="" width={520} height={480} />

        <ProductFooter>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </ProductFooter>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tShirt02} alt="" width={520} height={480} />

        <ProductFooter>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </ProductFooter>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tShirt03} alt="" width={520} height={480} />

        <ProductFooter>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </ProductFooter>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tShirt04} alt="" width={520} height={480} />

        <ProductFooter>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </ProductFooter>
      </Product>
    </HomeContainer>
  )
}
