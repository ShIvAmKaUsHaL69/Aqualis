import React from 'react'
import Blogsection from '../../../../sections/blogs/Blogsection'

export default async function page({searchParams}) {
  const search = (await searchParams).search
  return (
    <div>
        <Blogsection search={search}/>
    </div>
  )
}

export const metadata = {
  title: "Blogs | Acqalis Marine",
  description: "Blogs page of Acqalis Marine",
};
