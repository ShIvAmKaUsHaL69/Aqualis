import React, { Suspense } from 'react'
import pool from '../../../../../lib/Db';
import { notFound } from 'next/navigation';

export default async function page({params}) {
    const id = (await params).id
    const rows = await pool.query('SELECT * FROM blogs WHERE id = ?', id);
    if (rows[0].length === 0) {
      notFound(); // Redirects to 404 page
  }
    const blog = rows[0][0];
  return (
      <Suspense fallback={<p className="text-black">Loading...</p>}>
          <p>{blog.title}</p>
          <p>{blog.content}</p>
          <p>{blog.category}</p>
          <img src={blog.image_url} alt={blog.title}/>
          <p>{new Date(blog.created_at).toLocaleDateString()}</p>
          <p>Admin</p>
        </Suspense>
  )
}

export async function generateMetadata({ params }) {
  const id = (await params).id;
  const rows = await pool.query('SELECT * FROM blogs WHERE id = ?', [id]);

  if (rows[0].length === 0) {
      return {
          title: 'Blog Not Found | Acqalis Marine',
          description: 'This blog does not exist.',
      };
  }

  const blog = rows[0][0];

  return {
      title: `${blog.title} | Acqalis Marine`,
      description: `${blog.shortdesc} | Acqalis Marine`,
  };
}
