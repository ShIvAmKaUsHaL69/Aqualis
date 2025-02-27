import React, { Suspense } from 'react'
import pool from '../../../../../lib/Db';

export default async function page({params}) {
    const id = (await params).id
    const rows = await pool.query('SELECT * FROM blogs WHERE id = ?', id);
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
