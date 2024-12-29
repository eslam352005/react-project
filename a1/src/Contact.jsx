import React from 'react'

export default function Contact() {
  return <>
  
  <div className="contact  position-relative">

<h2 className='text-center'>CONTACT SECTION</h2>
<i class="fa-solid fa-grip-lines  fs-3 left"></i>
    <i class="fa-solid fa-star  fs-3 star"></i>
    <i class="fa-solid fa-grip-lines  fs-3 right"></i>

<div className="container mt-5">

<div>
  <form className='mx-auto w-50 '>
    <div className="my-5">
     
      <input type="text" className="form-control" placeholder='userName' />
      
    </div>
    <div className="my-5">
     
      <input type="text" className="form-control" placeholder='userAge'  />
    </div>
    <div className="my-5">
     
      <input type="text" className="form-control" placeholder='userEmail' />
    </div>
    <div className="my-5">
     
      <input type="text" className="form-control" placeholder='userPassword' />
    </div>
   
    <button type='button' className='text-white'>send Message</button>
  </form>
</div>



</div>


  </div>
  
  
  
  
  
  </>
}
