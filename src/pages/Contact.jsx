import React from 'react'

const Contact = () => {

  const handleOnsubmit = (formData) => {
     const formInputData = Object.fromEntries(formData.entries());
     console.log(formInputData);
     
  }
  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact us</h2>
      <div className='contact-wrapper container'>
        <form action={handleOnsubmit}>
          <input
            type='text'
            className='form-control'
            placeholder='Enter username'
            autoComplete='off'
            name='username'
            required
          /> 
          <input
            type='email'
            className='form-control'
            placeholder='Enter email'
            autoComplete='false'
            name='email'
            required
          /> 
          <textarea
            type='text'
            rows={10}
            className='form-control'
            placeholder='Enter username'
            autoComplete='off'
            name='username'
            required
          /> 
          <button type='submit' value='send'>Send</button>
        </form>
      </div>
    </section>
  )
} 

export default Contact