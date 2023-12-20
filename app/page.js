'use client'
import BannerSlider from '@/components/Slider/BannerSlider'
import EduCard from '@/components/cards/EduCard'
import { useAuth } from '../context/authContext'
import BannerData from '@/utils/BannerData'
import Link from 'next/link'
import { BsJournalBookmark, BsShop } from 'react-icons/bs'
import ProductCard1 from '@/components/cards/ProductCard1'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '@/components/Loader'

export default function Home() {
  const { isLoggedIn, user } = useAuth()
  // const [isLoading, setIsLoading] = useState(false)
  // const [marketPlace, setMarketPlace] = useState([])

  // useEffect(() => {
  //   setIsLoading(true)
  //   const fetchMarketplace = async () => {
  //     try {
  //       const response = await axios.get('https://woolee-backend-riosumit.vercel.app/api/market');
  //       setMarketPlace(response.data.data.stores)
  //       setIsLoading(false)
  //     } catch (error) {
  //       console.error('Error fetching Marketplace:', error);
  //       setIsLoading(false)
  //     }
  //   };

  //   fetchMarketplace();
  // }, []);

  return (
    <div className='font-poppins'>
      <div className='absolute top-0 left-0 min-h-[70vh] w-full bg-zinc-800 z-0'></div>
      {/* {isLoading && <Loader />} */}
      <div className='pt-24 relative flex flex-col'>
        {isLoggedIn && (<div className='font-extrabold text-2xl px-4 uppercase text-zinc-600 leading-tight'>Welcome Back! <span className='text-white'>{user?.name.split(' ')[0]}</span></div>)}
        <div className='flex flex-col gap-4'>
          <div className='font-extrabold text-6xl p-4 uppercase text-zinc-600 w-[600px] leading-tight'>let's make <span className='text-white'>wool</span> the trend</div>
          <div><BannerSlider data={BannerData} /></div>
        </div>
      </div>

      <div className='pb-0 p-10 relative'>
        <img src="/img/bg1.png" alt="" className='absolute top-0 left-0 w-60 z-0' />
        <img src="/img/bg1.png" alt="" className='absolute bottom-0 right-0 w-60 z-0' />
        {!isLoggedIn && (
          <div className='relative flex gap-10 p-10'>
            <div className='w-[30%]'>
              <img src="/img/bg.webp" alt="" className='w-full' />
            </div>
            <div className='flex justify-center flex-col w-[70%]'>
              <div className='font-extrabold text-4xl uppercase text-zinc-500 w-[520px] leading-tight'>come and let's serve the country <span className='text-zinc-900'>register as</span></div>
              <Link href='/producer-register' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/farmer.png" alt="" className='w-8 h-8' /> Producers</div>
                <div className='text-zinc-900 pl-14 text-xs'>Wool producers are vital to the textile industry because they raise sheep, shear them, and then gather their fleece.</div>
              </Link>
              <Link href='/producer-register' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/shearer.png" alt="" className='w-8 h-8' /> Shearer</div>
                <div className='text-zinc-900 pl-14 text-xs'>Wool Shearers are vital to the textile industry because they shear the wool from, and then gather their fleece.</div>
              </Link>
              <Link href='/register' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/collector.png" alt="" className='w-8 h-8' /> Collector(Registered By government)</div>
                <div className='text-zinc-900 pl-14 text-xs'>Wool collector collects the sheared wool and grade them to nearest grading centers then make a batches out of them of similar kind.</div>
              </Link>
              <Link href='/processor-register' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/processor.png" alt="" className='w-8 h-8' /> Processors</div>
                <div className='text-zinc-900 pl-14 text-xs'>Wool processors are essential intermediaries in the textile supply chain, transforming raw wool from producers into refined and market-ready materials.</div>
              </Link>
              <Link href='/register' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/buyer.png" alt="" className='w-8 h-8' /> Buyers(Normal User)</div>
                <div className='text-zinc-900 pl-14 text-xs'>Wool purchasers establish ties with producers and closely monitor market trends to enable the seamless flow of raw materials in the textile supply chain.</div>
              </Link>
            </div>
          </div>
        )}
        {(isLoggedIn && user.role === 'producer') && (
          <div className='relative flex gap-10 p-10'>
            <div className='w-[30%]'>
              <img src="/img/bgp.jpg" alt="" className='w-full' />
            </div>
            <div className='flex justify-center flex-col w-[70%]'>
              <div className='font-extrabold text-4xl uppercase text-zinc-500 w-[520px] leading-tight'>You can request Shearing <span className='text-zinc-900'>from nearest shearer</span></div>
              <Link href='/requestshearing' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase text-xl'><img src="/img/shearer.png" alt="" className='w-10 h-10' /> Shearer</div>
                <div className='text-zinc-900 pl-14'>Wool Shearers are vital to the textile industry because they shear the wool from, and then gather their fleece.</div>
              </Link>
            </div>
          </div>
        )}
        {(isLoggedIn && user.role === 'shearer') && (
          <div className='relative flex gap-10 p-10'>
            <div className='w-[30%]'>
              <img src="/img/bgp.jpg" alt="" className='w-full' />
            </div>
            <div className='flex justify-center flex-col w-[70%]'>
              <div className='font-extrabold text-4xl uppercase text-zinc-500 w-[520px] leading-tight'>You will get direct <span className='text-zinc-900'>Shearing request</span></div>
              <Link href='/requestedshearing' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase text-xl'><img src="/img/shearer.png" alt="" className='w-10 h-10' /> Shearer</div>
                <div className='text-zinc-900 pl-14'>Wool Shearers are vital to the textile industry because they shear the wool from, and then gather their fleece.</div>
              </Link>
            </div>
          </div>
        )}
        {(isLoggedIn && user.role === 'collector') && (
          <div className='relative flex gap-10 p-10'>
            <div className='w-[30%]'>
              <img src="/img/bgf.jpg" alt="" className='w-full' />
            </div>
            <div className='flex justify-center flex-col w-[70%]'>
              <div className='font-extrabold text-4xl uppercase text-zinc-500 w-[520px] leading-tight'>Create your batch and <span className='text-zinc-900'>let it rome the marketplace</span></div>

              <Link href='/shop' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/f1.png" alt="" className='w-8 h-8' /> List Products</div>
                <div className='text-zinc-900 pl-14 text-xs'>Empower your business by showcasing your products effortlessly.</div>
              </Link>
              <Link href='/shop' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/f2.png" alt="" className='w-8 h-8' /> View Inventories</div>
                <div className='text-zinc-900 pl-14 text-xs'>Streamline your operations with a centralized inventory hub.</div>
              </Link>
              <Link href='/shop' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/f3.png" alt="" className='w-8 h-8' /> Get the Best Price</div>
                <div className='text-zinc-900 pl-14 text-xs'>Unlock unbeatable value with us – discover a platform where you can consistently secure the best prices.</div>
              </Link>
            </div>
          </div>
        )}
        {(isLoggedIn && user.role === 'processor') && (
          <div className='relative flex gap-10 p-10'>
            <div className='w-[30%]'>
              <img src="/img/bgf.jpg" alt="" className='w-full' />
            </div>
            <div className='flex justify-center flex-col w-[70%]'>
              <div className='font-extrabold text-4xl uppercase text-zinc-500 w-[520px] leading-tight'>Create your own shop and <span className='text-zinc-900'>start your journey</span></div>

              <Link href='/shop' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/f1.png" alt="" className='w-8 h-8' /> List Products</div>
                <div className='text-zinc-900 pl-14 text-xs'>Empower your business by showcasing your products effortlessly.</div>
              </Link>
              <Link href='/shop' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/f2.png" alt="" className='w-8 h-8' /> View Inventories</div>
                <div className='text-zinc-900 pl-14 text-xs'>Streamline your operations with a centralized inventory hub.</div>
              </Link>
              <Link href='/shop' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/f3.png" alt="" className='w-8 h-8' /> Get the Best Price</div>
                <div className='text-zinc-900 pl-14 text-xs'>Unlock unbeatable value with us – discover a platform where you can consistently secure the best prices.</div>
              </Link>
            </div>
          </div>
        )}
        {isLoggedIn && user.role === 'user' && (
          <div className='relative flex gap-10 p-10'>
            <div className='w-[30%]'>
              <img src="/img/bg.webp" alt="" className='w-full' />
            </div>
            <div className='flex justify-center flex-col w-[70%]'>
              <div className='font-extrabold text-4xl uppercase text-zinc-500 w-[520px] leading-tight'>come and let's serve the country <span className='text-zinc-900'>register as</span></div>

              <Link href='/producer-register' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/farmer.png" alt="" className='w-8 h-8' /> Producers</div>
                <div className='text-zinc-900 pl-14 text-xs'>Wool producers are vital to the textile industry because they raise sheep.</div>
              </Link>
              <Link href='/producer-register' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/shearer.png" alt="" className='w-8 h-8' /> Shearer</div>
                <div className='text-zinc-900 pl-14 text-xs'>Wool Shearers are vital to the textile industry because they shear the wool from, and then gather their fleece.</div>
              </Link>
              <Link href='/register' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/collector.png" alt="" className='w-8 h-8' /> Collector(Registered By government)</div>
                <div className='text-zinc-900 pl-14 text-xs'>Wool collector collects the sheared wool and grade them to nearest grading centers then make a batches out of them of similar kind.</div>
              </Link>
              <Link href='/processor-register' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/processor.png" alt="" className='w-8 h-8' /> Processors</div>
                <div className='text-zinc-900 pl-14 text-xs'>Wool processors are essential intermediaries in the textile supply chain, transforming raw wool from producers into refined and market-ready materials.</div>
              </Link>
              <Link href='/register' className='p-4 cursor-pointer flex flex-col hover:bg-zinc-100'>
                <div className='flex items-center gap-4 text-zinc-900 font-bold uppercase'><img src="/img/buyer.png" alt="" className='w-8 h-8' /> Buyers(Normal User)</div>
                <div className='text-zinc-900 pl-14 text-xs'>Wool purchasers establish ties with producers and closely monitor market trends to enable the seamless flow of raw materials in the textile supply chain.</div>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className='p-10'>
        <div className='font-extrabold text-3xl uppercase text-zinc-900 flex items center gap-4'><BsShop /> Explore the marketplace</div>
        <div className='flex gap-8 overflow-x-auto py-8 scrollbar'>
          {/* {marketPlace?.map((product) => (
            <ProductCard1 key={product.id} product={product} />
          ))} */}
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
