import Banner from '@/components/Banner'
import NewArrival from '@/components/NewArrival';
import { client } from '@/lib/sanityClient';
import { groq } from 'next-sanity'

export const revalidate = 10;

const bannerQuery = groq`
  *[_type == "banner"] {
    image,
    _id
  } | order(_createdAt asc)
`;

const newArrivalQuery = groq`
  *[_type == "product" && position == "New Arrivals"] {
    ...
  } | order(_createdAt asc)
`;

const HomePage = async () => {

  const banners = await client.fetch(bannerQuery);
  const newArrivalProducts = await client.fetch(newArrivalQuery);

  return (
    <main className='text-sm overflow-hidden min-h-screen'>
      <Banner banners={banners} />
      <NewArrival products={newArrivalProducts} />
    </main>
  )
}

export default HomePage