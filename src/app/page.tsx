import CategorySec from '@/components/blog/category-sec';
import BannerSlider from '@/components/home/banner-slider'
import Tabs from '@/components/home/tabs'
import CategoryBox from '@/components/products/categ-box';
import { TabsData } from '@/const/tabs';
import { ProductsData } from '@/const/products';

export default function Home() {
  return (
    <main>
      <section className=''>
        <BannerSlider />
      </section>
      <section className='py-16'>
        <div className='container mx-auto px-3'>
          {TabsData?.slice(1, 2).map((item, idx) => {
            return (<CategorySec key={idx} data={item} />
            )
          })}
        </div>
      </section>
      <section className='py-16 bg-[#e2ebe5]'>
        <div className='container mx-auto px-3'>
          <h2 className='md:text-[2rem] md:leading-8 text-2xl font-bold text-black mb-6'>
            TRUE WEST STORIES
          </h2>
          <div>
            <Tabs />
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className='container mx-auto px-3 grid md:grid-cols-3 grid-cols-1 gap-8'>
          {ProductsData?.map((item, idx) => {
            return (<CategoryBox key={idx} data={item} />
            )
          })}
        </div>
      </section>
    </main>
  );
}
