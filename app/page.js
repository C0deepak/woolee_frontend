import BannerSlider from '@/components/Slider/BannerSlider'
import EduCard from '@/components/cards/EduCard'
import ProductCard from '@/components/cards/ProductCard'
import { BsJournalBookmark, BsShop } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <div className='absolute top-0 left-0 min-h-[70vh] w-full bg-zinc-800 z-0'></div>

      <div className='pt-24 relative flex flex-col gap-4'>
        <div className='font-extrabold text-6xl p-4 uppercase text-zinc-600 w-[600px] leading-tight'>let's make <span className='text-white'>wool</span> the trend</div>
        <div><BannerSlider /></div>
      </div>

      <div className='py-10 px-4'>
        <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'><BsShop /> Explore the marketplace</div>
        <div className='flex gap-8 overflow-x-auto py-8 scrollbar'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className='py-10 px-4 bg-zinc-100'>
        <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'><BsJournalBookmark /> Learn something New</div>
        <div className='flex gap-8 overflow-x-auto py-8 scrollbar'>
          <EduCard />
          <EduCard />
          <EduCard />
          <EduCard />
          <EduCard />
        </div>
      </div>
    </div>
  )
}
