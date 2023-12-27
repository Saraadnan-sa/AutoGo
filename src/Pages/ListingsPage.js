import React from 'react'
import CarListings from '../component/CarListings'
import Navbar from '../component/Navbar'

const ListingsPage = () => {
  return (
    <>
      <Navbar />
      <h2 className='text-center my-3' style={{textShadow: '4px 4px 6px #333333'}}>Available Cars</h2>
      <CarListings />
    </>
  )
}

export default ListingsPage;