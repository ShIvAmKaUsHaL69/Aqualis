import React, { Suspense } from 'react'
import Blogcard from '../../components/Blogcard'
import Inputfield from '../../components/inputfield'
import SearchForm from '../../components/Search'
import pool from '../../lib/Db';
import Link from 'next/link';


export default async function Blogsection({search}) {

  if(!search) {
    search = ''
  }
  const [rows] = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC');

  const filteredBlogs = rows.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.category.toLowerCase().includes(search.toLowerCase()) ||
    blog.shortdesc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className='h-[40vh] bg-[url(/singleblogbg.jpg)] bg-cover' style={{backgroundPosition: '0% 30%'}}>

      </div>
      <div className='max-w-[1280px] mx-auto w-full mt-10 gap-3 px-3'>
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between w-full'>
            <h2 className='text-4xl font-bold'>{`${search ? `Showing result for ${search}` : 'All Blogs'}`}</h2>
            <SearchForm />
        </div>
        <div className='my-10 flex md:flex-row flex-col gap-8 md:justify-between w-full'>
          <Suspense fallback={<p className='text-black'>Loading</p>}>
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
                    <Blogcard
                      title={blog.title}
                      shortdesc={blog.shortdesc}
                      image={blog.image_url}
                      time={new Date(blog.created_at).toLocaleDateString()}
                      category={blog.category}
                    />
                    </Link>
                  ))
                ) : (
                  <p>No blogs found.</p>
                )}
          </Suspense>
        </div>
      </div>
    </div>
  )
}
