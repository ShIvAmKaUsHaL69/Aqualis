import React from 'react'
import Homemainblogcard from '../../components/Homemainblogcard'
import Homeblogcard from '../../components/Homeblogcard'
import pool, { getCachedBlogs } from '../../lib/Db';
import Link from 'next/link';

export default async function Blogsectionhome() {
  const rows = await getCachedBlogs();
  return (
    <div className='py-16' id='blog'>
    <div className='lg:px-[8%] mx-auto w-full px-4'>
      <p className='text-4xl font-bold text-[#05363B]'>Blogs</p>
      <div className='flex mt-10 flex-col lg:flex-row gap-7'>
            <div className='lg:w-1/2 w-full h-full'>
            <Link href={`/blogs/${rows[0].id}`} passHref><Homemainblogcard image={rows[0].image_url} title={rows[0].title} description={rows[0].shortdesc}/></Link>
            </div>
            <div className='lg:w-1/2 w-full gap-10 lg:gap-0 flex lg:flex-col flex-col md:flex-row justify-between'>
                <Link href={`/blogs/${rows[2].id}`} passHref><Homeblogcard title={rows[2].title} imge={rows[2].image_url} description={rows[2].shortdesc}/></Link>
                
                <Link href={`/blogs/${rows[1].id}`} passHref><Homeblogcard title={rows[1].title} imge={rows[1].image_url} description={rows[1].shortdesc}/></Link>
            </div>
      </div>
    </div>
  </div>
  )
}
