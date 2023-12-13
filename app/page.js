import BannerSlider from '@/components/Slider/BannerSlider'
import EduCard from '@/components/cards/EduCard'
import ProductCard from '@/components/cards/ProductCard'
import { BsJournalBookmark, BsShop } from 'react-icons/bs'

export default function Home() {
  return (
    <div className='font-poppins'>
      <div className='absolute top-0 left-0 min-h-[70vh] w-full bg-zinc-800 z-0'></div>

      <div className='pt-24 relative flex flex-col gap-4'>
        <div className='font-extrabold text-6xl p-4 uppercase text-zinc-600 w-[600px] leading-tight'>let's make <span className='text-white'>wool</span> the trend</div>
        <div><BannerSlider /></div>
      </div>

      <div className='pb-0 p-10 relative'>
        <img src="/img/bg1.png" alt="" className='absolute top-0 left-0 w-60 z-0' />
        <img src="/img/bg1.png" alt="" className='absolute bottom-0 right-0 w-60 z-0' />
        <div className='relative flex gap-10 p-10'>
          <div className='w-[30%]'>
            <img src="/img/bg.webp" alt="" className='w-full' />
          </div>
          <div className='flex justify-center flex-col w-[70%]'>
            <div className='font-extrabold text-4xl uppercase text-zinc-500 w-[520px] leading-tight'>come and let's serve the country <span className='text-zinc-900'>register as</span></div>

            <div className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
              <div className='flex items-center gap-4 text-zinc-900 font-bold text-xl uppercase'><img src="/img/farmer.png" alt="" className='w-10 h-10' /> Producers</div>
              <div className='text-zinc-900 leading-3 pl-14'>producers are the farmers who produces wools...</div>
            </div>
            <div className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
              <div className='flex items-center gap-4 text-zinc-900 font-bold text-xl uppercase'><img src="/img/processor.png" alt="" className='w-10 h-10' /> Processors</div>
              <div className='text-zinc-900 leading-3 pl-14'>producers are the farmers who produces wools...</div>
            </div>
            <div className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
              <div className='flex items-center gap-4 text-zinc-900 font-bold text-xl uppercase'><img src="/img/buyer.png" alt="" className='w-10 h-10' /> Buyers</div>
              <div className='text-zinc-900 leading-3 pl-14'>producers are the farmers who produces wools...</div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-10'>
        <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'><BsShop /> Explore the marketplace</div>
        <div className='flex gap-8 overflow-x-auto py-8 scrollbar'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className='p-10 bg-zinc-100'>
        <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'><BsJournalBookmark /> Learn something New</div>
        <div className='flex gap-8 overflow-x-auto py-8 scrollbar'>
          <EduCard />
          <EduCard />
          <EduCard />
          <EduCard />
          <EduCard />
        </div>
      </div>

      <div className='pb-0 p-10 relative'>
        <img src="/img/bg2.png" alt="" className='absolute top-0 left-0 w-80 z-0' />
        <img src="/img/bg2.png" alt="" className='absolute bottom-0 right-0 w-60 z-0' />
        <div className='relative flex gap-10 p-10'>
          <div className='flex justify-center flex-col w-[70%]'>
            <div className='font-extrabold text-4xl uppercase text-zinc-500 w-[520px] leading-tight'>get the certified and quality wool, <span className='text-zinc-900'>can also get our certifications</span></div>

            <div className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
              <div className='flex items-center gap-4 text-zinc-900 font-bold text-xl uppercase'><img src="/img/c1.webp" alt="" className='w-10 h-10' /> RWS Certfication</div>
              <div className='text-zinc-900 pl-14'>The Responsible Wool Standard (RWS) is a voluntary global certification that ensures wool comes from farms that manage their land responsibly and treat sheep well.</div>
            </div>
            <div className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
              <div className='flex items-center gap-4 text-zinc-900 font-bold text-xl uppercase'><img src="/img/c2.jpeg" alt="" className='w-10 h-10' /> Wooleefied</div>
              <div className='text-zinc-900 pl-14'>It ensures that the wool used in the products has been sourced, processed, and manufactured in compliance with specific standards and regulations. </div>
            </div>
            <div className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
              <div className='flex items-center gap-4 text-zinc-900 font-bold text-xl uppercase'><img src="/img/c3.png" alt="" className='w-10 h-10' /> Woolmark</div>
              <div className='text-zinc-900 pl-14'>Tests and provides assurance of the quality of wool apparel, wool yarn and fabric, wool care product and wool processing technology.</div>
            </div>
          </div>
          <div className='w-[30%] flex flex-col gap-4'>
            <img src="/img/img1.webp" alt="" className='w-full' />
            <img src="/img/img2.webp" alt="" className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}
