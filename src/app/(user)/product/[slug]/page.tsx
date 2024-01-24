import Container from '@/components/Container'
import Onsale from '@/components/Onsale'
import { client, urlFor } from '@/lib/sanityClient'
import { groq } from 'next-sanity'
import { ProductProps } from '../../../../../type'
import Image from 'next/image'
import ProductInfo from '@/components/ProductInfo'
import { PortableText } from '@portabletext/react'
import { RichText } from '@/components/RichText'

interface Props {
  params: {
    slug: string
  }
}

export const generateStaticParams = async () => {
  const query = groq`*[_type == "product"] { slug }`
  const slugs: any = await client.fetch(query)
  const slugRoutes = slugs.map((slug: any) => slug?.slug?.current)
  return slugRoutes?.map((slug: string) => ({
    slug
  }))
}

const specialOffersQuery = groq`*[_type == 'product' && position == 'Special Offers']{
  ...
 } | order(_createdAt asc)`;

const ProductPage = async ({ params: { slug } }: Props) => {
  
  const query = groq`*[_type == "product" && slug.current == $slug][0] {
    ...
  }`

  const product: ProductProps = await client.fetch(query, { slug })
  const specialOffersProduct = await client.fetch(specialOffersQuery);
  
  
  return (
    <Container className='my-10'>
      <div className='grid grid-cols-1 items-center md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4'>
        <div>
          <Onsale products={specialOffersProduct} />
        </div>
        <div className='h-full xl:col-span-2'>
          <Image
            src={urlFor(product?.image).url()}
            alt={product?.title}
            width={500}
            height={500}
            className='w-full h-full object-contain'
          />
        </div>
        <div className='w-full md:col-span-2 xl:col-span-3 xl:p-14'>
          <ProductInfo product={product} />
        </div>
      </div>
      <PortableText
        value={product?.body}
        components={RichText}
      />
    </Container>
  )

}

export default ProductPage