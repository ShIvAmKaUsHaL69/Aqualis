import React from 'react'

export default async function page({params}) {
    const id = (await params).id
  return (
    <div>{id}</div>
  )
}
