import React from 'react'
import loading from'./Flowing_gradient.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{height: '30px', marginTop: '30px'}} />
      </div>
    )
}

export default Spinner