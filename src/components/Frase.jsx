import React, { useState } from 'react'


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const Frase = ({personaje}) => {



  return (

    <div className='container row'>
      
        <div className='col-12 col-md-6 col-lg-6 card '>
          <img  className='w-100 cardImg' alt="" src={personaje.image}/>
        <h1 className='text-center'> </h1>
        </div>
        <div className='col-12 col-md-6 col-lg-6 card '>
          <h2 className='text-center'>Quote</h2>
          <br />
          <h3 className='align-items-center d-flex'>{personaje.quote}</h3>
        </div>
    </div>
  )
}
