import mail from '../assets/mail.png';
import location from'../assets/location.png';
import phone from'../assets/phone.png';
import React, { useState } from 'react';
export const Contact = ()=>{
  
  const[button,setButton] = useState('Submit Now')
  const [result, setResult] = React.useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "30038190-c708-4dd0-a6dd-533a2978c4ff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert('Message sent successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <>
        <div id='contact' className='flex justify-center flex-col'>
        <h1 className='only-heading heading mt-20 ml-5 mr-5'>Get in touch</h1>
        </div>
        <section className='mt-10 sm:ml-20 sm:mr-20 mb-20 ml-5 mr-5 '>
            
            <div className='flex sm:flex-row flex-col  justify-center gap-10'>
                <div className='flex flex-col gap-5 md:w-[40%] w-full'>
                  <p className='text-3xl text-cyan-400'>Let's talk</p>
                  <p className='text-xl text-yellow-400'>Excited to connect? Let’s talk and build something amazing!</p>
                   <div className='flex flex-row gap-5 items-center'><img  width={30}src={phone} alt="" /><p>+91 6374215923</p></div>
                   <div className='flex flex-row gap-5 items-center'><img width={30} src={mail} alt="" /><p>rubin262002@gmail.com</p></div>
                   <div className='flex flex-row gap-5 items-center'><img width={30} src={location} alt="" /><p>Chennai</p></div>
                </div>
                <form name="contact" method="POST" data-netlify="true" onSubmit={onSubmit} className='flex flex-col gap-5 md:w-[50%] w-full flex-start justify-center'>
  <input type="hidden" name="form-name" value="contact" />

  <p className='sm:text-xl texl-lg '>Your Name</p>
  <input type="text" name="name" placeholder='Enter Your Name' className='border-contact text-black' required />

  <p className='sm:text-xl texl-lg'>Your Email Address</p>
  <input type="email" name="email" placeholder='Your Mail' className='border-contact text-black' required />

  <p className='sm:text-xl texl-lg '>Write Your Message Here</p>
  <textarea name="message" placeholder='Enter Your Message' className='border-2 py-3 pl-3 sm:pb-32 pb-24 text-xl text-black bg-gray-300 rounded-sm' required />

  <div className='flex lg:justify-start items-center justify-center'>
    <button type="submit" className='button'>{button}</button>
  </div>
</form>

            </div>
        </section>
        </>
    )
}