import React  from 'react'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCachedBlogById } from '../../../../../lib/Db';

export default async function page({params}) {
    const id = (await params).id
    const rows = await getCachedBlogById(id);
    if (!rows) 
      notFound(); // Redirects to 404 page
    
    const blog = rows;
    const title = blog.title
    const url = `https://yourwebsite.com/blogs/${id}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };
  return (
        <div>
          <div className=' bg-[url(/singleblogbg.jpg)] bg-cover min-h-[40vh] flex items-end' style={{backgroundPosition: '0% 30%'}} >
          </div>
            <div className='max-w-[1400px] mx-auto w-full px-3 mt-10'>
              <img src={blog.image_url} alt={blog.title} className='rounded-lg w-full'/>
              <div className='mt-10 flex justify-between'>
              <p className=' text-[#00000099] flex gap-3'><img src='/calendar.svg' alt='calendar-icon' className='w-5 h-5 '/> {new Date(blog.created_at).toLocaleDateString()}</p>
              <div className='bg-[#05363B] text-white rounded-full px-2 py-1'>
                {blog.category}
              </div>
              </div>
              <h1 className='text-5xl text-black my-5 font-bold'>{blog.title}</h1>
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
              <div className="flex gap-3  my-4">
                <Link
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <img src="/twitter.svg" alt="Twitter" className="w-8 h-8" />
                </Link>
                <Link
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <img src="/facebook.svg" alt="Facebook" className="w-8 h-8" />
                </Link>
                <Link
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                </Link>
                <Link
                  href={shareLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
                </Link>
              </div>
            </div>
        
        
          {/* <p>{blog.title}</p>
          <p>{blog.content}</p>
          <p>{blog.category}</p>
          <img src={blog.image_url} alt={blog.title}/>
          <p>{new Date(blog.created_at).toLocaleDateString()}</p>
          <p>Admin</p> */}
          </div>
  )
}

export async function generateMetadata({ params }) {
  const id = (await params).id;
  const blog = await getCachedBlogById(id);

  if (!blog) {
    return {
      title: 'Blog Not Found | Acqalis Marine',
      description: 'This blog does not exist.',
    };
  }

  return {
    title: `${blog.title} | Acqalis Marine`,
    description: `${blog.shortdesc} | Acqalis Marine`,
  };
}
